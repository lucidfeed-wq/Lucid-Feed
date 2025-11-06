/**
 * HealingSession class to track attempts and maintain time budget
 */

import type { HealingResult, RecoveryResult, TacticMeta } from './types';

export interface SessionStats {
  totalAttempts: number;
  successfulAttempts: number;
  failedAttempts: number;
  timeSpent: number;
  timeRemaining: number;
  attemptsLog: Array<{
    tactic: string;
    startTime: number;
    endTime: number;
    success: boolean;
    error?: string;
  }>;
}

export class HealingSession {
  private startTime: number;
  private budgetMs: number;
  private attempts: SessionStats['attemptsLog'] = [];
  private currentTactic?: string;

  constructor(budgetMs: number = 2000) {
    this.startTime = Date.now();
    this.budgetMs = budgetMs;
  }

  /**
   * Get remaining time in milliseconds
   */
  getRemainingTime(): number {
    const elapsed = Date.now() - this.startTime;
    return Math.max(0, this.budgetMs - elapsed);
  }

  /**
   * Check if session has exceeded time budget
   */
  isTimedOut(): boolean {
    return this.getRemainingTime() <= 0;
  }

  /**
   * Record a tactic attempt
   */
  recordAttempt(tactic: string, success: boolean, error?: string): void {
    const endTime = Date.now();
    const startTime = this.currentTactic === tactic ? 
      (this.attempts[this.attempts.length - 1]?.endTime || this.startTime) : 
      this.startTime;
    
    this.attempts.push({
      tactic,
      startTime,
      endTime,
      success,
      error
    });
    
    this.currentTactic = undefined;
  }

  /**
   * Start tracking a tactic attempt
   */
  startAttempt(tactic: string): void {
    this.currentTactic = tactic;
  }

  /**
   * Execute a function with timeout
   */
  async executeWithTimeout<T>(
    fn: () => Promise<T>,
    timeoutMs?: number
  ): Promise<T> {
    const timeout = timeoutMs || this.getRemainingTime();
    
    if (timeout <= 0) {
      throw new Error('Session timeout exceeded');
    }

    return Promise.race([
      fn(),
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(`Operation timed out after ${timeout}ms`)), timeout)
      )
    ]);
  }

  /**
   * Get session statistics
   */
  getStats(): SessionStats {
    const elapsed = Date.now() - this.startTime;
    const successful = this.attempts.filter(a => a.success).length;
    const failed = this.attempts.filter(a => !a.success).length;

    return {
      totalAttempts: this.attempts.length,
      successfulAttempts: successful,
      failedAttempts: failed,
      timeSpent: elapsed,
      timeRemaining: this.getRemainingTime(),
      attemptsLog: this.attempts
    };
  }

  /**
   * Prioritize tactics based on time budget and estimated duration
   */
  prioritizeTactics(tactics: TacticMeta[]): TacticMeta[] {
    const remainingTime = this.getRemainingTime();
    
    // Filter out tactics that would exceed budget
    const feasible = tactics.filter(t => t.estimatedTimeMs <= remainingTime);
    
    // Sort by priority and then by estimated time (cheapest first)
    return feasible.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return a.estimatedTimeMs - b.estimatedTimeMs;
    });
  }

  /**
   * Create a healing result from session data
   */
  createResult(success: boolean, tactic?: string, error?: string, newUrl?: string): HealingResult {
    const stats = this.getStats();
    
    return {
      success,
      tactic,
      newUrl,
      fallbackUsed: stats.totalAttempts > 1,
      duration: stats.timeSpent,
      error
    };
  }
}