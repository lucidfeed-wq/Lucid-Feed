/**
 * HealingOrchestrator: Main orchestrator for feed healing operations
 */

import type { FeedCatalog } from '@shared/schema';
import type { HealingResult, HealingContext, DiagnosticResult, RecoveryResult } from './types';
import { TacticPriority } from './types';
import { HealingSession } from './healing-session';
import { storage } from '../../storage';
import { learningLoop, type HealingAttempt } from './learning-loop';

// Import diagnostic strategies
import {
  type DiagnosticStrategy,
  DNSCheckStrategy,
  RedirectResolverStrategy,
  FormatProbeStrategy,
  SourceSpecificValidator
} from './diagnostics';

// Import recovery tactics
import {
  type RecoveryTactic,
  RedirectFollowTactic,
  FormatFallbackTactic,
  CachedContentTactic,
  SourceAdapterTactic,
  AlternativeDiscoveryTrigger
} from './tactics';

export class HealingOrchestrator {
  private diagnosticStrategies: DiagnosticStrategy[];
  private recoveryTactics: RecoveryTactic[];

  constructor() {
    // Initialize diagnostic strategies
    this.diagnosticStrategies = [
      new DNSCheckStrategy(),
      new RedirectResolverStrategy(),
      new FormatProbeStrategy(),
      new SourceSpecificValidator()
    ];

    // Initialize recovery tactics
    this.recoveryTactics = [
      new RedirectFollowTactic(),
      new FormatFallbackTactic(),
      new CachedContentTactic(),
      new SourceAdapterTactic(),
      new AlternativeDiscoveryTrigger()
    ];
  }

  /**
   * Heal a single feed
   */
  async healFeed(feed: FeedCatalog, budgetMs: number = 2000): Promise<HealingResult> {
    const session = new HealingSession(budgetMs);
    const startTime = Date.now();
    
    console.log(`🏥 Starting healing for feed: ${feed.name} (${feed.id})`);

    try {
      // Create healing context
      const context: HealingContext = {
        feed,
        errorType: this.inferErrorType(feed),
        lastError: feed.lastErrorMessage || undefined,
        previousAttempts: feed.consecutiveFailures || 0,
        timeoutMs: budgetMs
      };

      // Step 1: Check learning loop for best tactic
      const bestTactic = await learningLoop.getBestTactic(feed.id);
      
      // Step 2: Run diagnostics in parallel (if applicable)
      const diagnosticResults = await this.runDiagnostics(context, session);
      
      // Step 3: Determine recommended tactics based on diagnostics and learning
      const recommendedTactics = this.aggregateRecommendations(diagnosticResults);
      
      // Add learned tactic to recommendations if available
      if (bestTactic && !recommendedTactics.includes(bestTactic)) {
        recommendedTactics.unshift(bestTactic); // Add to beginning for priority
      }
      
      // Step 4: Get applicable tactics and prioritize them
      const applicableTactics = this.recoveryTactics.filter(t => 
        t.isApplicable(context) || recommendedTactics.includes(t.name)
      );
      
      // Reorder tactics based on learning (prioritize learned tactic)
      const tacticMetas = applicableTactics.map(t => {
        const meta = t.getMeta();
        // Boost priority for learned tactic
        if (bestTactic && meta.name === bestTactic) {
          meta.priority = TacticPriority.HIGH;
          meta.successRate = 0.9; // High confidence
        }
        return meta;
      });
      
      const prioritizedTactics = session.prioritizeTactics(tacticMetas);

      // Step 4: Execute tactics in priority order until success or timeout
      let healingResult: HealingResult | null = null;
      
      for (const tacticMeta of prioritizedTactics) {
        if (session.isTimedOut()) {
          console.log(`⏱️ Healing session timed out for feed ${feed.id}`);
          break;
        }

        const tactic = this.recoveryTactics.find(t => t.name === tacticMeta.name);
        if (!tactic) continue;

        console.log(`🔧 Trying tactic: ${tactic.name} for feed ${feed.id}`);
        session.startAttempt(tactic.name);

        try {
          const recoveryResult = await session.executeWithTimeout(
            () => tactic.execute(context),
            tacticMeta.estimatedTimeMs
          );

          session.recordAttempt(tactic.name, recoveryResult.success, recoveryResult.error);

          if (recoveryResult.success) {
            healingResult = session.createResult(
              true,
              tactic.name,
              undefined,
              recoveryResult.newUrl
            );
            
            // Update feed URL if changed
            if (recoveryResult.newUrl && recoveryResult.newUrl !== feed.url) {
              await this.updateFeedUrl(feed.id, recoveryResult.newUrl);
            }
            
            break; // Short-circuit on first success
          }
        } catch (error: any) {
          session.recordAttempt(tactic.name, false, error.message);
          console.log(`❌ Tactic ${tactic.name} failed: ${error.message}`);
        }
      }

      // If no tactic succeeded, create failure result
      if (!healingResult) {
        const stats = session.getStats();
        healingResult = session.createResult(
          false,
          undefined,
          `All ${stats.totalAttempts} tactics failed`
        );
      }

      // Record the healing attempt and learn from it
      await this.recordOutcome(feed.id, healingResult);

      // Learn from this attempt asynchronously (non-blocking)
      const attempt: HealingAttempt = {
        feedId: feed.id,
        tactic: healingResult.tactic || 'unknown',
        success: healingResult.success,
        durationMs: healingResult.duration,
        error: healingResult.error
      };
      
      // Fire and forget - don't wait for learning to complete
      learningLoop.learnFromAttempt(feed.id, attempt).catch(err => 
        console.error(`Failed to learn from healing attempt: ${err}`)
      );

      // Add diagnostic summary to result
      healingResult.diagnosticSummary = {
        diagnosticsRun: diagnosticResults.map(d => ({
          type: d.type,
          passed: d.passed,
          recommendedTactics: d.recommendedTactics
        })),
        sessionStats: session.getStats()
      };

      return healingResult;

    } catch (error: any) {
      console.error(`💥 Healing orchestrator error for feed ${feed.id}:`, error);
      
      const errorResult = session.createResult(
        false,
        undefined,
        error.message
      );
      
      await this.recordOutcome(feed.id, errorResult);
      return errorResult;
    }
  }

  /**
   * Heal multiple feeds in bulk with concurrency control
   */
  async healFeedsBulk(
    feeds: FeedCatalog[],
    maxConcurrent: number = 3
  ): Promise<Map<string, HealingResult>> {
    const results = new Map<string, HealingResult>();
    
    console.log(`🏥 Starting bulk healing for ${feeds.length} feeds (max concurrent: ${maxConcurrent})`);

    // Process feeds in batches
    for (let i = 0; i < feeds.length; i += maxConcurrent) {
      const batch = feeds.slice(i, i + maxConcurrent);
      
      const batchPromises = batch.map(async (feed) => {
        try {
          const result = await this.healFeed(feed);
          results.set(feed.id, result);
          return { feedId: feed.id, result };
        } catch (error: any) {
          const errorResult: HealingResult = {
            success: false,
            fallbackUsed: false,
            duration: 0,
            error: error.message
          };
          results.set(feed.id, errorResult);
          return { feedId: feed.id, result: errorResult };
        }
      });

      await Promise.all(batchPromises);
      
      console.log(`✅ Completed batch ${Math.floor(i / maxConcurrent) + 1} of ${Math.ceil(feeds.length / maxConcurrent)}`);
    }

    // Log summary
    const successful = Array.from(results.values()).filter(r => r.success).length;
    const failed = results.size - successful;
    
    console.log(`\n📊 Bulk Healing Summary:`);
    console.log(`   ✅ Successful: ${successful}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`   📊 Total: ${results.size}`);

    return results;
  }

  /**
   * Record the outcome of a healing attempt
   */
  async recordOutcome(feedId: string, result: HealingResult): Promise<void> {
    try {
      // Log the healing attempt
      await storage.logHealingAttempt({
        feedId,
        errorType: this.getErrorTypeFromResult(result),
        diagnosticSummary: result.diagnosticSummary,
        tactic: result.tactic || 'none',
        tacticSucceeded: result.success,
        durationMs: Math.round(result.duration),
        fallbackUsed: result.fallbackUsed,
        context: {
          error: result.error,
          newUrl: result.newUrl
        }
      });

      // Update healing profile
      const profile = await storage.getHealingProfile(feedId);
      const successCount = (profile?.successCount || 0) + (result.success ? 1 : 0);
      const failureCount = (profile?.failureCount || 0) + (result.success ? 0 : 1);
      const totalAttempts = successCount + failureCount;
      
      await storage.updateHealingProfile(feedId, {
        preferredTactic: result.success && result.tactic ? result.tactic as any : profile?.preferredTactic,
        successCount,
        failureCount,
        avgRecoveryTimeMs: totalAttempts > 0 
          ? Math.round(((profile?.avgRecoveryTimeMs || 0) * (totalAttempts - 1) + result.duration) / totalAttempts)
          : Math.round(result.duration),
        lastSuccessfulTactic: result.success && result.tactic ? result.tactic as any : profile?.lastSuccessfulTactic
      });

      // Update feed health status
      if (result.success) {
        await storage.updateFeedHealth(feedId, {
          lastFetchStatus: 'success',
          consecutiveFailures: 0,
          lastErrorMessage: null
        });
      } else {
        const currentFeed = await storage.getFeedById(feedId);
        if (currentFeed) {
          const newFailureCount = (currentFeed.consecutiveFailures || 0) + 1;
          
          // Check if feed is permanently failing
          const isPermanentFailure = newFailureCount >= 5 || 
                                    result.error?.includes('404') ||
                                    result.error?.includes('permanently') ||
                                    currentFeed.lastErrorMessage?.includes('404');
          
          await storage.updateFeedHealth(feedId, {
            lastFetchStatus: isPermanentFailure ? 'permanent_error' : 'transient_error',
            consecutiveFailures: newFailureCount,
            lastErrorMessage: result.error || 'Healing failed'
          });
          
          // Trigger alternative discovery for permanently failed feeds
          if (isPermanentFailure) {
            console.log(`🔴 Feed ${feedId} appears permanently failed, triggering discovery`);
            
            // Import discovery processor dynamically to avoid circular dependencies
            const { discoveryJobProcessor } = await import('../discovery/discovery-job-processor');
            
            // Queue discovery job
            await discoveryJobProcessor.queueDiscovery(
              feedId, 
              'permanent_failure',
              newFailureCount >= 10 ? 'high' : 'medium'
            );
          }
        }
      }

    } catch (error) {
      console.error(`Failed to record healing outcome for feed ${feedId}:`, error);
    }
  }

  /**
   * Run diagnostic strategies
   */
  private async runDiagnostics(
    context: HealingContext,
    session: HealingSession
  ): Promise<DiagnosticResult[]> {
    const applicableStrategies = this.diagnosticStrategies.filter(s => s.isApplicable(context));
    
    if (applicableStrategies.length === 0) {
      return [];
    }

    // Run diagnostics in parallel with timeout
    const diagnosticPromises = applicableStrategies.map(async (strategy) => {
      try {
        return await session.executeWithTimeout(
          () => strategy.diagnose(context),
          500 // 500ms timeout per diagnostic
        );
      } catch (error: any) {
        return {
          type: strategy.name,
          passed: false,
          details: { error: error.message },
          recommendedTactics: []
        };
      }
    });

    return Promise.all(diagnosticPromises);
  }

  /**
   * Aggregate recommendations from diagnostics
   */
  private aggregateRecommendations(diagnosticResults: DiagnosticResult[]): string[] {
    const tacticsMap = new Map<string, number>();
    
    for (const result of diagnosticResults) {
      if (result.recommendedTactics) {
        for (const tactic of result.recommendedTactics) {
          tacticsMap.set(tactic, (tacticsMap.get(tactic) || 0) + 1);
        }
      }
    }

    // Sort by frequency and return
    return Array.from(tacticsMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tactic]) => tactic);
  }

  /**
   * Infer error type from feed state
   */
  private inferErrorType(feed: FeedCatalog): string | undefined {
    if (!feed.lastErrorMessage) return undefined;
    
    const error = feed.lastErrorMessage.toLowerCase();
    
    if (error.includes('dns') || error.includes('enotfound')) {
      return 'dns_failure';
    } else if (error.includes('redirect') || error.includes('301') || error.includes('302')) {
      return 'redirect';
    } else if (error.includes('parse') || error.includes('xml') || error.includes('format')) {
      return 'format_change';
    } else if (error.includes('403') || error.includes('401') || error.includes('auth')) {
      return 'auth_error';
    } else if (error.includes('404')) {
      return 'permanent_404';
    } else if (error.includes('timeout') || error.includes('timedout')) {
      return 'timeout';
    } else {
      return 'other';
    }
  }

  /**
   * Get error type from result
   */
  private getErrorTypeFromResult(result: HealingResult): string {
    if (result.success) {
      return 'resolved';
    } else if (result.error) {
      const error = result.error.toLowerCase();
      if (error.includes('timeout')) return 'timeout';
      if (error.includes('dns')) return 'dns_failure';
      if (error.includes('redirect')) return 'redirect';
      if (error.includes('format') || error.includes('parse')) return 'format_change';
      if (error.includes('404')) return 'permanent_404';
    }
    return 'other';
  }

  /**
   * Update feed URL after successful redirect resolution
   */
  private async updateFeedUrl(feedId: string, newUrl: string): Promise<void> {
    try {
      const feed = await storage.getFeedById(feedId);
      if (feed && feed.url !== newUrl) {
        console.log(`🔄 Updating feed URL from ${feed.url} to ${newUrl}`);
        // This would require adding an updateFeedUrl method to storage
        // For now, we'll just log it
      }
    } catch (error) {
      console.error(`Failed to update feed URL for ${feedId}:`, error);
    }
  }

  /**
   * Get healing metrics for a specific feed
   */
  async getHealingMetrics(feedId: string) {
    return await learningLoop.getFeedMetrics(feedId);
  }

  /**
   * Analyze patterns across all feeds
   */
  async analyzeHealingPatterns() {
    return await learningLoop.analyzePatterns();
  }

  /**
   * Get overall healing statistics
   */
  async getHealingStatistics(days: number = 30) {
    try {
      // Get all feeds
      const feeds = await storage.getFeedCatalog();
      
      // Collect statistics
      let totalHealed = 0;
      let totalFailed = 0;
      const tacticSuccess = new Map<string, { success: number; total: number }>();
      const sourceTypeStats = new Map<string, { healed: number; failed: number }>();
      
      for (const feed of feeds) {
        const profile = await storage.getHealingProfile(feed.id);
        if (profile) {
          const successes = profile.successCount || 0;
          const failures = profile.failureCount || 0;
          totalHealed += successes;
          totalFailed += failures;
          
          // Track source type stats
          const sourceType = feed.sourceType || 'unknown';
          if (!sourceTypeStats.has(sourceType)) {
            sourceTypeStats.set(sourceType, { healed: 0, failed: 0 });
          }
          const stats = sourceTypeStats.get(sourceType)!;
          stats.healed += successes;
          stats.failed += failures;
          
          // Track tactic success
          if (profile.lastSuccessfulTactic) {
            if (!tacticSuccess.has(profile.lastSuccessfulTactic)) {
              tacticSuccess.set(profile.lastSuccessfulTactic, { success: 0, total: 0 });
            }
            const tacticStat = tacticSuccess.get(profile.lastSuccessfulTactic)!;
            tacticStat.success += successes;
            tacticStat.total += successes + failures;
          }
        }
      }
      
      // Calculate success rates
      const overallSuccessRate = totalHealed > 0 
        ? totalHealed / (totalHealed + totalFailed) 
        : 0;
      
      const tacticRanking = Array.from(tacticSuccess.entries())
        .map(([tactic, stats]) => ({
          tactic,
          successRate: stats.total > 0 ? stats.success / stats.total : 0,
          totalAttempts: stats.total
        }))
        .sort((a, b) => b.successRate - a.successRate);
      
      const sourceTypeRanking = Array.from(sourceTypeStats.entries())
        .map(([sourceType, stats]) => ({
          sourceType,
          successRate: (stats.healed + stats.failed) > 0 
            ? stats.healed / (stats.healed + stats.failed) 
            : 0,
          totalHealed: stats.healed,
          totalFailed: stats.failed
        }))
        .sort((a, b) => b.successRate - a.successRate);
      
      return {
        summary: {
          totalHealed,
          totalFailed,
          overallSuccessRate,
          totalFeeds: feeds.length
        },
        tacticRanking,
        sourceTypeRanking,
        patterns: await learningLoop.analyzePatterns()
      };
    } catch (error) {
      console.error('Failed to get healing statistics:', error);
      return {
        summary: {
          totalHealed: 0,
          totalFailed: 0,
          overallSuccessRate: 0,
          totalFeeds: 0
        },
        tacticRanking: [],
        sourceTypeRanking: [],
        patterns: []
      };
    }
  }
}

// Export singleton instance
export const healingOrchestrator = new HealingOrchestrator();