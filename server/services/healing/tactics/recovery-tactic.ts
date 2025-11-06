/**
 * RecoveryTactic interface for feed recovery strategies
 */

import type { HealingContext, RecoveryResult, TacticMeta } from '../types';

/**
 * Interface for recovery tactics
 */
export interface RecoveryTactic {
  /**
   * Name of the recovery tactic
   */
  name: string;

  /**
   * Get metadata about this tactic for prioritization
   */
  getMeta(): TacticMeta;

  /**
   * Execute the recovery tactic
   */
  execute(context: HealingContext): Promise<RecoveryResult>;

  /**
   * Check if this tactic is applicable to the context
   */
  isApplicable(context: HealingContext): boolean;
}