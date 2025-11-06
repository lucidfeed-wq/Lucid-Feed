/**
 * LearningLoop: Adaptive learning system for optimizing healing tactics
 */

import { storage } from '../../storage';
import type { FeedCatalog, FeedHealingProfile } from '@shared/schema';
import type { HealingResult } from './types';

export interface HealingAttempt {
  feedId: string;
  tactic: string;
  success: boolean;
  durationMs: number;
  error?: string;
  timestamp?: string;
}

export interface TacticStatistics {
  tactic: string;
  successRate: number;
  avgDurationMs: number;
  totalAttempts: number;
  lastSuccess?: string;
  confidence: number;
}

export interface PatternAnalysis {
  sourceType: string;
  preferredTactics: string[];
  successRate: number;
  sampleSize: number;
}

export class LearningLoop {
  private static readonly DECAY_THRESHOLD_DAYS = 30;
  private static readonly MIN_CONFIDENCE = 0.1;
  private static readonly CONFIDENCE_DECAY_RATE = 0.05;
  private static readonly MIN_SAMPLES_FOR_PATTERN = 5;

  /**
   * Learn from a healing attempt and update the profile
   */
  async learnFromAttempt(feedId: string, attempt: HealingAttempt): Promise<void> {
    console.log(`📚 Learning from attempt for feed ${feedId}: ${attempt.tactic} (${attempt.success ? 'success' : 'failure'})`);

    try {
      // Get current healing profile
      const profile = await storage.getHealingProfile(feedId);
      
      // Update tactic statistics
      await this.updateTacticStats(feedId, attempt.tactic, attempt.success, attempt.durationMs);
      
      // If successful, consider promoting this tactic
      if (attempt.success) {
        await this.considerTacticPromotion(feedId, attempt.tactic, profile);
      }
      
      // Trigger async pattern analysis (non-blocking)
      this.analyzePatterns().catch(err => 
        console.error('Pattern analysis failed:', err)
      );
      
    } catch (error) {
      console.error(`Failed to learn from attempt for feed ${feedId}:`, error);
    }
  }

  /**
   * Get the best tactic for a feed based on historical success rates
   */
  async getBestTactic(feedId: string): Promise<string | undefined> {
    try {
      const profile = await storage.getHealingProfile(feedId);
      
      if (!profile) {
        // No history, check for patterns from similar feeds
        const feed = await storage.getFeedById(feedId);
        if (feed) {
          return await this.getPatternBasedTactic(feed.sourceType);
        }
        return undefined;
      }

      // Apply decay to old tactics
      const decayedProfile = await this.applyDecay(feedId, profile);
      
      // Return preferred tactic if it has sufficient confidence
      if (decayedProfile.preferredTactic && this.hasConfidence(decayedProfile)) {
        console.log(`🎯 Using preferred tactic for feed ${feedId}: ${decayedProfile.preferredTactic}`);
        return decayedProfile.preferredTactic;
      }

      // Fall back to pattern-based recommendation
      const feed = await storage.getFeedById(feedId);
      if (feed) {
        const patternTactic = await this.getPatternBasedTactic(feed.sourceType);
        if (patternTactic) {
          console.log(`🔮 Using pattern-based tactic for feed ${feedId}: ${patternTactic}`);
          return patternTactic;
        }
      }

      return undefined;
    } catch (error) {
      console.error(`Failed to get best tactic for feed ${feedId}:`, error);
      return undefined;
    }
  }

  /**
   * Update tactic statistics for a feed
   */
  async updateTacticStats(
    feedId: string,
    tactic: string,
    success: boolean,
    durationMs: number
  ): Promise<void> {
    try {
      const profile = await storage.getHealingProfile(feedId);
      
      // Calculate new statistics
      const currentSuccessCount = profile?.successCount || 0;
      const currentFailureCount = profile?.failureCount || 0;
      const totalAttempts = currentSuccessCount + currentFailureCount + 1;
      
      const newSuccessCount = currentSuccessCount + (success ? 1 : 0);
      const newFailureCount = currentFailureCount + (success ? 0 : 1);
      
      // Update average recovery time
      const avgRecoveryTime = profile?.avgRecoveryTimeMs || 0;
      const newAvgRecoveryTime = Math.round(
        (avgRecoveryTime * (totalAttempts - 1) + durationMs) / totalAttempts
      );

      // Update healing profile
      await storage.updateHealingProfile(feedId, {
        successCount: newSuccessCount,
        failureCount: newFailureCount,
        avgRecoveryTimeMs: newAvgRecoveryTime,
        lastSuccessfulTactic: success ? tactic as any : profile?.lastSuccessfulTactic,
        lastUpdated: new Date()
      });

      console.log(`📊 Updated stats for feed ${feedId}: ${tactic} (success: ${newSuccessCount}, failure: ${newFailureCount})`);
      
    } catch (error) {
      console.error(`Failed to update tactic stats for feed ${feedId}:`, error);
    }
  }

  /**
   * Promote a successful tactic to be the preferred one
   */
  async promoteSuccessfulTactic(feedId: string, tactic: string): Promise<void> {
    try {
      console.log(`🎖️ Promoting tactic ${tactic} for feed ${feedId}`);
      
      await storage.updateHealingProfile(feedId, {
        preferredTactic: tactic as any,
        lastSuccessfulTactic: tactic as any,
        lastUpdated: new Date()
      });

      // Update the feed catalog with the new preferred tactic
      const feed = await storage.getFeedById(feedId);
      if (feed) {
        await storage.updateFeedHealth(feedId, {
          lastFetchStatus: 'success',
          consecutiveFailures: 0
        });
      }
      
    } catch (error) {
      console.error(`Failed to promote tactic for feed ${feedId}:`, error);
    }
  }

  /**
   * Analyze patterns across similar feed types
   */
  async analyzePatterns(): Promise<PatternAnalysis[]> {
    const patterns: PatternAnalysis[] = [];
    
    try {
      console.log('🔍 Analyzing healing patterns across feed types...');
      
      // Get all feeds grouped by source type
      const feeds = await storage.getFeedCatalog();
      const feedsByType = new Map<string, FeedCatalog[]>();
      
      for (const feed of feeds) {
        const sourceType = feed.sourceType || 'unknown';
        if (!feedsByType.has(sourceType)) {
          feedsByType.set(sourceType, []);
        }
        feedsByType.get(sourceType)!.push(feed);
      }

      // Analyze each source type
      for (const [sourceType, feedList] of feedsByType) {
        if (feedList.length < this.MIN_SAMPLES_FOR_PATTERN) {
          continue; // Not enough data
        }

        const tacticStats = new Map<string, { success: number; total: number }>();
        
        // Collect statistics for this source type
        for (const feed of feedList) {
          const profile = await storage.getHealingProfile(feed.id);
          if (profile?.lastSuccessfulTactic) {
            const tactic = profile.lastSuccessfulTactic;
            if (!tacticStats.has(tactic)) {
              tacticStats.set(tactic, { success: 0, total: 0 });
            }
            const stats = tacticStats.get(tactic)!;
            stats.success += profile.successCount || 0;
            stats.total += (profile.successCount || 0) + (profile.failureCount || 0);
          }
        }

        // Find the best tactics for this source type
        const sortedTactics = Array.from(tacticStats.entries())
          .filter(([_, stats]) => stats.total > 0)
          .map(([tactic, stats]) => ({
            tactic,
            successRate: stats.success / stats.total
          }))
          .sort((a, b) => b.successRate - a.successRate);

        if (sortedTactics.length > 0) {
          const topTactics = sortedTactics.slice(0, 3).map(t => t.tactic);
          const avgSuccessRate = sortedTactics.reduce((sum, t) => sum + t.successRate, 0) / sortedTactics.length;
          
          const pattern: PatternAnalysis = {
            sourceType,
            preferredTactics: topTactics,
            successRate: avgSuccessRate,
            sampleSize: feedList.length
          };
          
          patterns.push(pattern);
          
          console.log(`📈 Pattern for ${sourceType}: ${topTactics.join(', ')} (${(avgSuccessRate * 100).toFixed(1)}% success rate)`);
        }
      }

      // Store patterns for future use (could be cached in memory or stored in DB)
      this.cachePatterns(patterns);
      
      return patterns;
      
    } catch (error) {
      console.error('Failed to analyze patterns:', error);
      return patterns;
    }
  }

  /**
   * Get metrics for a specific feed
   */
  async getFeedMetrics(feedId: string): Promise<TacticStatistics[]> {
    const metrics: TacticStatistics[] = [];
    
    try {
      const attempts = await storage.getRecentHealingAttempts(feedId, 100);
      const profile = await storage.getHealingProfile(feedId);
      
      // Group by tactic
      const tacticGroups = new Map<string, HealingAttempt[]>();
      
      for (const attempt of attempts) {
        const tactic = attempt.tactic || 'unknown';
        if (!tacticGroups.has(tactic)) {
          tacticGroups.set(tactic, []);
        }
        tacticGroups.get(tactic)!.push({
          feedId,
          tactic,
          success: attempt.tacticSucceeded,
          durationMs: attempt.durationMs,
          error: attempt.context?.error,
          timestamp: attempt.timestamp.toISOString()
        });
      }

      // Calculate statistics for each tactic
      for (const [tactic, attempts] of tacticGroups) {
        const successful = attempts.filter(a => a.success).length;
        const totalDuration = attempts.reduce((sum, a) => sum + a.durationMs, 0);
        const lastSuccess = attempts
          .filter(a => a.success)
          .sort((a, b) => (b.timestamp || '').localeCompare(a.timestamp || ''))
          [0]?.timestamp;

        const stat: TacticStatistics = {
          tactic,
          successRate: attempts.length > 0 ? successful / attempts.length : 0,
          avgDurationMs: attempts.length > 0 ? Math.round(totalDuration / attempts.length) : 0,
          totalAttempts: attempts.length,
          lastSuccess,
          confidence: this.calculateConfidence(attempts, lastSuccess)
        };

        metrics.push(stat);
      }

      // Sort by success rate
      metrics.sort((a, b) => b.successRate - a.successRate);
      
      return metrics;
      
    } catch (error) {
      console.error(`Failed to get metrics for feed ${feedId}:`, error);
      return metrics;
    }
  }

  /**
   * Consider promoting a tactic based on recent performance
   */
  private async considerTacticPromotion(
    feedId: string,
    tactic: string,
    currentProfile: FeedHealingProfile | undefined
  ): Promise<void> {
    // Get recent attempts for this tactic
    const recentAttempts = await storage.getRecentHealingAttempts(feedId, 10);
    const tacticAttempts = recentAttempts.filter(a => a.tactic === tactic);
    
    if (tacticAttempts.length < 3) {
      return; // Not enough data
    }

    const successRate = tacticAttempts.filter(a => a.tacticSucceeded).length / tacticAttempts.length;
    
    // Promote if success rate is > 70% over last 3+ attempts
    if (successRate > 0.7) {
      await this.promoteSuccessfulTactic(feedId, tactic);
    }
  }

  /**
   * Apply decay to old tactics
   */
  private async applyDecay(feedId: string, profile: FeedHealingProfile): Promise<FeedHealingProfile> {
    if (!profile.lastUpdated) {
      return profile;
    }

    const now = new Date();
    const lastUpdate = new Date(profile.lastUpdated);
    const daysSinceUpdate = Math.floor((now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysSinceUpdate > this.DECAY_THRESHOLD_DAYS) {
      const decayFactor = Math.max(
        this.MIN_CONFIDENCE,
        1 - (this.CONFIDENCE_DECAY_RATE * (daysSinceUpdate - this.DECAY_THRESHOLD_DAYS))
      );
      
      console.log(`⏳ Applying decay factor ${decayFactor.toFixed(2)} to feed ${feedId} (${daysSinceUpdate} days old)`);
      
      // Force re-evaluation by clearing preferred tactic if confidence too low
      if (decayFactor < 0.5) {
        await storage.updateHealingProfile(feedId, {
          preferredTactic: undefined,
          lastUpdated: now
        });
        return { ...profile, preferredTactic: undefined };
      }
    }
    
    return profile;
  }

  /**
   * Check if profile has sufficient confidence
   */
  private hasConfidence(profile: FeedHealingProfile): boolean {
    const totalAttempts = (profile.successCount || 0) + (profile.failureCount || 0);
    if (totalAttempts < 3) {
      return false; // Not enough data
    }

    const successRate = (profile.successCount || 0) / totalAttempts;
    return successRate > 0.5; // At least 50% success rate
  }

  /**
   * Get pattern-based tactic recommendation for a source type
   */
  private async getPatternBasedTactic(sourceType?: string): Promise<string | undefined> {
    if (!sourceType) return undefined;

    // Check cached patterns
    const patterns = this.getCachedPatterns();
    const pattern = patterns.find(p => p.sourceType === sourceType);
    
    if (pattern && pattern.preferredTactics.length > 0) {
      return pattern.preferredTactics[0];
    }

    return undefined;
  }

  /**
   * Calculate confidence score for a tactic
   */
  private calculateConfidence(attempts: HealingAttempt[], lastSuccess?: string): number {
    if (attempts.length === 0) return 0;

    const successRate = attempts.filter(a => a.success).length / attempts.length;
    const recencyBonus = lastSuccess ? this.getRecencyBonus(lastSuccess) : 0;
    const sampleSizeBonus = Math.min(attempts.length / 10, 1); // Max bonus at 10 attempts
    
    return Math.min(1, successRate * 0.5 + recencyBonus * 0.3 + sampleSizeBonus * 0.2);
  }

  /**
   * Get recency bonus based on last success time
   */
  private getRecencyBonus(lastSuccess: string): number {
    const daysSince = Math.floor((Date.now() - new Date(lastSuccess).getTime()) / (1000 * 60 * 60 * 24));
    if (daysSince <= 7) return 1;
    if (daysSince <= 14) return 0.8;
    if (daysSince <= 30) return 0.5;
    return 0.2;
  }

  // Pattern caching (in-memory for now, could be Redis/DB later)
  private static patternCache: PatternAnalysis[] = [];
  private static patternCacheTimestamp = 0;
  private static readonly PATTERN_CACHE_TTL = 60 * 60 * 1000; // 1 hour

  private cachePatterns(patterns: PatternAnalysis[]): void {
    LearningLoop.patternCache = patterns;
    LearningLoop.patternCacheTimestamp = Date.now();
  }

  private getCachedPatterns(): PatternAnalysis[] {
    const now = Date.now();
    if (now - LearningLoop.patternCacheTimestamp > LearningLoop.PATTERN_CACHE_TTL) {
      // Cache expired, trigger async refresh
      this.analyzePatterns().catch(err => 
        console.error('Failed to refresh pattern cache:', err)
      );
    }
    return LearningLoop.patternCache;
  }
}

// Export singleton instance
export const learningLoop = new LearningLoop();