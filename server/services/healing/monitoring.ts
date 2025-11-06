/**
 * Healing Monitor: Comprehensive monitoring and observability for feed healing system
 */

import { storage } from '../../storage';
import type { FeedHealthAttempt, FeedHealingProfile, FeedCatalog } from '@shared/schema';

export interface HealingMetrics {
  totalAttempts: number;
  successfulAttempts: number;
  failedAttempts: number;
  averageHealingTime: number; // in seconds
  successRateByTactic: Record<string, number>;
  mostSuccessfulTactics: string[];
  feedsCurrentlyHealing: number;
  feedsHealed: number;
  feedsFailed: number;
}

export interface HealingDashboard {
  metrics: HealingMetrics;
  recentAttempts: FeedHealthAttempt[];
  activeFeedsUnderHealing: FeedCatalog[];
  criticalFeeds: FeedCatalog[]; // Feeds that have failed multiple times
  successTrends: {
    date: string;
    successRate: number;
    attemptCount: number;
  }[];
}

export interface HealingHealthReport {
  timestamp: Date;
  overallHealth: 'healthy' | 'degraded' | 'critical';
  metrics: HealingMetrics;
  recommendations: string[];
  failurePatterns: {
    pattern: string;
    frequency: number;
    affectedFeeds: string[];
    suggestedAction: string;
  }[];
  topPerformingTactics: {
    tactic: string;
    successRate: number;
    avgRecoveryTime: number;
  }[];
  criticalIssues: string[];
}

export class HealingMonitor {
  /**
   * Track a healing attempt and log metrics
   */
  async trackHealingAttempt(
    feedId: string,
    result: {
      success: boolean;
      tactic: string;
      duration: number; // in milliseconds
      error?: string;
      metadata?: Record<string, any>;
    }
  ): Promise<void> {
    try {
      // Log the healing attempt
      await storage.logHealingAttempt({
        feedId,
        attemptedAt: new Date(),
        tactic: result.tactic,
        success: result.success,
        errorMessage: result.error || null,
        responseTime: result.duration,
        metadata: result.metadata || {},
      });

      // Update healing profile with outcome
      await storage.recordHealingOutcome(feedId, result.success, result.tactic);

      // Log to console for observability
      const feed = await storage.getFeedById(feedId);
      const feedName = feed?.name || 'Unknown Feed';
      
      if (result.success) {
        console.log(`✅ Healing succeeded for ${feedName} (${feedId}) using ${result.tactic} in ${result.duration}ms`);
      } else {
        console.error(`❌ Healing failed for ${feedName} (${feedId}) using ${result.tactic}: ${result.error}`);
      }

      // Check if we need to alert on low success rates
      await this.checkAndAlertOnLowSuccessRate();
    } catch (error) {
      console.error('Failed to track healing attempt:', error);
    }
  }

  /**
   * Get real-time healing dashboard data
   */
  async getHealingDashboard(): Promise<HealingDashboard> {
    try {
      // Get recent healing attempts (last 100)
      const recentAttempts = await this.getRecentAttempts(100);
      
      // Calculate metrics
      const metrics = await this.calculateMetrics(recentAttempts);
      
      // Get feeds currently being healed
      const activeFeedsUnderHealing = await storage.getFeedsByHealingStatus('healing');
      
      // Get critical feeds (failed multiple times)
      const criticalFeeds = await this.getCriticalFeeds();
      
      // Calculate success trends (last 7 days)
      const successTrends = await this.calculateSuccessTrends(7);

      return {
        metrics,
        recentAttempts: recentAttempts.slice(0, 20), // Show only last 20 in dashboard
        activeFeedsUnderHealing,
        criticalFeeds,
        successTrends,
      };
    } catch (error) {
      console.error('Failed to generate healing dashboard:', error);
      throw error;
    }
  }

  /**
   * Calculate healing success rate for a time range
   */
  async getHealingSuccessRate(timeRange: { hours?: number; days?: number }): Promise<number> {
    try {
      const since = new Date();
      if (timeRange.hours) {
        since.setHours(since.getHours() - timeRange.hours);
      } else if (timeRange.days) {
        since.setDate(since.getDate() - timeRange.days);
      }

      // Get all attempts since the specified time
      const attempts = await this.getAttemptsSince(since);
      
      if (attempts.length === 0) {
        return 0;
      }

      const successfulAttempts = attempts.filter(a => a.success).length;
      return (successfulAttempts / attempts.length) * 100;
    } catch (error) {
      console.error('Failed to calculate healing success rate:', error);
      return 0;
    }
  }

  /**
   * Identify common failure patterns
   */
  async getFailurePatterns(): Promise<HealingHealthReport['failurePatterns']> {
    try {
      const recentAttempts = await this.getRecentAttempts(500);
      const failedAttempts = recentAttempts.filter(a => !a.success);

      const patterns: Map<string, {
        frequency: number;
        affectedFeeds: Set<string>;
        errors: string[];
      }> = new Map();

      // Analyze failure patterns
      for (const attempt of failedAttempts) {
        const error = attempt.errorMessage || 'Unknown error';
        
        // Categorize errors
        let pattern: string;
        let suggestedAction: string;
        
        if (error.includes('timeout') || error.includes('ETIMEDOUT')) {
          pattern = 'Timeout Errors';
          suggestedAction = 'Increase timeout duration or check network connectivity';
        } else if (error.includes('404') || error.includes('not found')) {
          pattern = 'Resource Not Found';
          suggestedAction = 'Feed URL may have changed, consider discovery service';
        } else if (error.includes('403') || error.includes('forbidden')) {
          pattern = 'Access Forbidden';
          suggestedAction = 'Feed may require authentication or has blocked access';
        } else if (error.includes('SSL') || error.includes('certificate')) {
          pattern = 'SSL/Certificate Issues';
          suggestedAction = 'SSL certificate may be expired or invalid';
        } else if (error.includes('parse') || error.includes('XML') || error.includes('JSON')) {
          pattern = 'Parsing Errors';
          suggestedAction = 'Feed format may have changed, update parsing logic';
        } else if (error.includes('rate') || error.includes('429')) {
          pattern = 'Rate Limiting';
          suggestedAction = 'Implement backoff strategy or reduce fetch frequency';
        } else {
          pattern = 'Other Errors';
          suggestedAction = 'Review logs for specific error details';
        }

        if (!patterns.has(pattern)) {
          patterns.set(pattern, {
            frequency: 0,
            affectedFeeds: new Set(),
            errors: [],
          });
        }

        const patternData = patterns.get(pattern)!;
        patternData.frequency++;
        patternData.affectedFeeds.add(attempt.feedId);
        patternData.errors.push(error);
      }

      // Convert to result format
      return Array.from(patterns.entries()).map(([pattern, data]) => ({
        pattern,
        frequency: data.frequency,
        affectedFeeds: Array.from(data.affectedFeeds),
        suggestedAction: this.getSuggestedAction(pattern),
      })).sort((a, b) => b.frequency - a.frequency);
    } catch (error) {
      console.error('Failed to identify failure patterns:', error);
      return [];
    }
  }

  /**
   * Generate comprehensive health report
   */
  async generateHealthReport(): Promise<HealingHealthReport> {
    try {
      const recentAttempts = await this.getRecentAttempts(1000);
      const metrics = await this.calculateMetrics(recentAttempts);
      const failurePatterns = await this.getFailurePatterns();
      
      // Calculate overall health status
      const successRate = metrics.totalAttempts > 0 
        ? (metrics.successfulAttempts / metrics.totalAttempts) * 100 
        : 0;
      
      let overallHealth: 'healthy' | 'degraded' | 'critical';
      if (successRate >= 80) {
        overallHealth = 'healthy';
      } else if (successRate >= 50) {
        overallHealth = 'degraded';
      } else {
        overallHealth = 'critical';
      }

      // Generate recommendations
      const recommendations = this.generateRecommendations(metrics, failurePatterns);

      // Get top performing tactics
      const topPerformingTactics = await this.getTopPerformingTactics();

      // Identify critical issues
      const criticalIssues = this.identifyCriticalIssues(metrics, failurePatterns);

      return {
        timestamp: new Date(),
        overallHealth,
        metrics,
        recommendations,
        failurePatterns,
        topPerformingTactics,
        criticalIssues,
      };
    } catch (error) {
      console.error('Failed to generate health report:', error);
      throw error;
    }
  }

  /**
   * Get healing history for a specific feed
   */
  async getFeedHealingHistory(feedId: string, limit: number = 50): Promise<{
    feed: FeedCatalog | undefined;
    healingProfile: FeedHealingProfile | undefined;
    recentAttempts: FeedHealthAttempt[];
    successRate: number;
    averageRecoveryTime: number;
    mostSuccessfulTactic: string | null;
  }> {
    try {
      const feed = await storage.getFeedById(feedId);
      const healingProfile = await storage.getHealingProfile(feedId);
      const recentAttempts = await storage.getRecentHealingAttempts(feedId, limit);

      // Calculate feed-specific metrics
      const successfulAttempts = recentAttempts.filter(a => a.success);
      const successRate = recentAttempts.length > 0
        ? (successfulAttempts.length / recentAttempts.length) * 100
        : 0;

      const averageRecoveryTime = successfulAttempts.length > 0
        ? successfulAttempts.reduce((sum, a) => sum + (a.responseTime || 0), 0) / successfulAttempts.length
        : 0;

      // Find most successful tactic
      const tacticSuccess: Record<string, { success: number; total: number }> = {};
      for (const attempt of recentAttempts) {
        if (!tacticSuccess[attempt.tactic]) {
          tacticSuccess[attempt.tactic] = { success: 0, total: 0 };
        }
        tacticSuccess[attempt.tactic].total++;
        if (attempt.success) {
          tacticSuccess[attempt.tactic].success++;
        }
      }

      let mostSuccessfulTactic: string | null = null;
      let highestSuccessRate = 0;
      for (const [tactic, stats] of Object.entries(tacticSuccess)) {
        const rate = stats.success / stats.total;
        if (rate > highestSuccessRate) {
          highestSuccessRate = rate;
          mostSuccessfulTactic = tactic;
        }
      }

      return {
        feed,
        healingProfile,
        recentAttempts,
        successRate,
        averageRecoveryTime,
        mostSuccessfulTactic,
      };
    } catch (error) {
      console.error(`Failed to get healing history for feed ${feedId}:`, error);
      throw error;
    }
  }

  // Private helper methods

  private async getRecentAttempts(limit: number): Promise<FeedHealthAttempt[]> {
    // Since we don't have a method to get all recent attempts across all feeds,
    // we'll need to get them per feed and combine
    // This is a simplified version - in production, you'd want a more efficient query
    const feeds = await storage.getFeedCatalog();
    const allAttempts: FeedHealthAttempt[] = [];

    for (const feed of feeds.slice(0, 50)) { // Limit to 50 feeds for performance
      const attempts = await storage.getRecentHealingAttempts(feed.id, 10);
      allAttempts.push(...attempts);
    }

    // Sort by attemptedAt descending and limit
    return allAttempts
      .sort((a, b) => b.attemptedAt.getTime() - a.attemptedAt.getTime())
      .slice(0, limit);
  }

  private async getAttemptsSince(since: Date): Promise<FeedHealthAttempt[]> {
    const attempts = await this.getRecentAttempts(1000);
    return attempts.filter(a => a.attemptedAt >= since);
  }

  private async calculateMetrics(attempts: FeedHealthAttempt[]): Promise<HealingMetrics> {
    const successfulAttempts = attempts.filter(a => a.success);
    const failedAttempts = attempts.filter(a => !a.success);

    // Calculate success rate by tactic
    const tacticStats: Record<string, { success: number; total: number }> = {};
    let totalResponseTime = 0;
    let responseTimeCount = 0;

    for (const attempt of attempts) {
      if (!tacticStats[attempt.tactic]) {
        tacticStats[attempt.tactic] = { success: 0, total: 0 };
      }
      tacticStats[attempt.tactic].total++;
      if (attempt.success) {
        tacticStats[attempt.tactic].success++;
      }
      if (attempt.responseTime) {
        totalResponseTime += attempt.responseTime;
        responseTimeCount++;
      }
    }

    const successRateByTactic: Record<string, number> = {};
    for (const [tactic, stats] of Object.entries(tacticStats)) {
      successRateByTactic[tactic] = (stats.success / stats.total) * 100;
    }

    // Find most successful tactics
    const mostSuccessfulTactics = Object.entries(successRateByTactic)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([tactic]) => tactic);

    // Get currently healing feeds
    const healingFeeds = await storage.getFeedsByHealingStatus('healing');
    const healedFeeds = await storage.getFeedsByHealingStatus('healed');
    const failedFeeds = await storage.getFeedsByHealingStatus('failed');

    return {
      totalAttempts: attempts.length,
      successfulAttempts: successfulAttempts.length,
      failedAttempts: failedAttempts.length,
      averageHealingTime: responseTimeCount > 0 ? totalResponseTime / responseTimeCount / 1000 : 0, // Convert to seconds
      successRateByTactic,
      mostSuccessfulTactics,
      feedsCurrentlyHealing: healingFeeds.length,
      feedsHealed: healedFeeds.length,
      feedsFailed: failedFeeds.length,
    };
  }

  private async getCriticalFeeds(): Promise<FeedCatalog[]> {
    const feeds = await storage.getFeedCatalog();
    const criticalFeeds: FeedCatalog[] = [];

    for (const feed of feeds) {
      if (feed.consecutiveFailures >= 5 || feed.lastFetchStatus === 'permanent_error') {
        criticalFeeds.push(feed);
      }
    }

    return criticalFeeds.slice(0, 10); // Return top 10 critical feeds
  }

  private async calculateSuccessTrends(days: number): Promise<HealingDashboard['successTrends']> {
    const trends: HealingDashboard['successTrends'] = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);

      const attempts = await this.getAttemptsSince(date);
      const dayAttempts = attempts.filter(a => a.attemptedAt < nextDate);
      
      const successRate = dayAttempts.length > 0
        ? (dayAttempts.filter(a => a.success).length / dayAttempts.length) * 100
        : 0;

      trends.push({
        date: date.toISOString().split('T')[0],
        successRate,
        attemptCount: dayAttempts.length,
      });
    }

    return trends;
  }

  private getSuggestedAction(pattern: string): string {
    const actions: Record<string, string> = {
      'Timeout Errors': 'Increase timeout duration or check network connectivity',
      'Resource Not Found': 'Feed URL may have changed, consider discovery service',
      'Access Forbidden': 'Feed may require authentication or has blocked access',
      'SSL/Certificate Issues': 'SSL certificate may be expired or invalid',
      'Parsing Errors': 'Feed format may have changed, update parsing logic',
      'Rate Limiting': 'Implement backoff strategy or reduce fetch frequency',
      'Other Errors': 'Review logs for specific error details',
    };
    return actions[pattern] || 'Review logs for specific error details';
  }

  private generateRecommendations(metrics: HealingMetrics, failurePatterns: HealingHealthReport['failurePatterns']): string[] {
    const recommendations: string[] = [];

    // Check overall success rate
    const overallSuccessRate = metrics.totalAttempts > 0
      ? (metrics.successfulAttempts / metrics.totalAttempts) * 100
      : 0;

    if (overallSuccessRate < 50) {
      recommendations.push('Critical: Overall healing success rate is below 50%. Immediate investigation required.');
    } else if (overallSuccessRate < 80) {
      recommendations.push('Warning: Healing success rate is below optimal levels. Review failure patterns.');
    }

    // Check for dominant failure patterns
    const topFailurePattern = failurePatterns[0];
    if (topFailurePattern && topFailurePattern.frequency > 10) {
      recommendations.push(`Address "${topFailurePattern.pattern}" affecting ${topFailurePattern.affectedFeeds.length} feeds.`);
    }

    // Check healing time
    if (metrics.averageHealingTime > 30) {
      recommendations.push('Average healing time exceeds 30 seconds. Consider optimizing healing tactics.');
    }

    // Check for underperforming tactics
    for (const [tactic, rate] of Object.entries(metrics.successRateByTactic)) {
      if (rate < 30) {
        recommendations.push(`Tactic "${tactic}" has a success rate below 30%. Consider removing or improving it.`);
      }
    }

    // Suggest using most successful tactics
    if (metrics.mostSuccessfulTactics.length > 0) {
      recommendations.push(`Prioritize using these successful tactics: ${metrics.mostSuccessfulTactics.join(', ')}`);
    }

    return recommendations;
  }

  private async getTopPerformingTactics(): Promise<HealingHealthReport['topPerformingTactics']> {
    const attempts = await this.getRecentAttempts(500);
    const tacticStats: Record<string, {
      successCount: number;
      totalCount: number;
      totalRecoveryTime: number;
    }> = {};

    for (const attempt of attempts) {
      if (!tacticStats[attempt.tactic]) {
        tacticStats[attempt.tactic] = {
          successCount: 0,
          totalCount: 0,
          totalRecoveryTime: 0,
        };
      }
      
      tacticStats[attempt.tactic].totalCount++;
      if (attempt.success) {
        tacticStats[attempt.tactic].successCount++;
        if (attempt.responseTime) {
          tacticStats[attempt.tactic].totalRecoveryTime += attempt.responseTime;
        }
      }
    }

    const tactics = Object.entries(tacticStats)
      .map(([tactic, stats]) => ({
        tactic,
        successRate: (stats.successCount / stats.totalCount) * 100,
        avgRecoveryTime: stats.successCount > 0 
          ? stats.totalRecoveryTime / stats.successCount / 1000 // Convert to seconds
          : 0,
      }))
      .sort((a, b) => b.successRate - a.successRate)
      .slice(0, 5);

    return tactics;
  }

  private identifyCriticalIssues(metrics: HealingMetrics, failurePatterns: HealingHealthReport['failurePatterns']): string[] {
    const issues: string[] = [];

    // Check if too many feeds are failing
    if (metrics.feedsFailed > 10) {
      issues.push(`${metrics.feedsFailed} feeds have permanently failed. Manual intervention required.`);
    }

    // Check if success rate is critically low
    const overallSuccessRate = metrics.totalAttempts > 0
      ? (metrics.successfulAttempts / metrics.totalAttempts) * 100
      : 0;

    if (overallSuccessRate < 30) {
      issues.push('Critical: Healing success rate is below 30%. System may be experiencing major issues.');
    }

    // Check for widespread failures
    const totalAffectedFeeds = new Set(
      failurePatterns.flatMap(p => p.affectedFeeds)
    ).size;

    if (totalAffectedFeeds > 20) {
      issues.push(`${totalAffectedFeeds} feeds are experiencing healing failures. Possible systemic issue.`);
    }

    // Check for specific critical patterns
    for (const pattern of failurePatterns) {
      if (pattern.pattern === 'Access Forbidden' && pattern.frequency > 5) {
        issues.push('Multiple feeds experiencing access issues. May need to update authentication or user agent.');
      }
      if (pattern.pattern === 'Rate Limiting' && pattern.frequency > 3) {
        issues.push('Rate limiting detected. Reduce fetch frequency or implement better backoff strategy.');
      }
    }

    return issues;
  }

  private async checkAndAlertOnLowSuccessRate(): Promise<void> {
    try {
      // Check success rate for last hour
      const successRate = await this.getHealingSuccessRate({ hours: 1 });
      
      if (successRate < 30) {
        console.error('🚨 ALERT: Healing success rate is critically low (<30%) in the last hour');
      } else if (successRate < 50) {
        console.warn('⚠️ WARNING: Healing success rate is below 50% in the last hour');
      }
    } catch (error) {
      console.error('Failed to check healing success rate:', error);
    }
  }
}

// Export singleton instance
export const healingMonitor = new HealingMonitor();