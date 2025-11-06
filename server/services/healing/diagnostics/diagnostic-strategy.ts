/**
 * DiagnosticStrategy interface for feed health diagnostics
 */

import type { HealingContext, DiagnosticResult } from '../types';

/**
 * Interface for diagnostic strategies
 */
export interface DiagnosticStrategy {
  /**
   * Name of the diagnostic strategy
   */
  name: string;

  /**
   * Perform diagnostic check
   */
  diagnose(context: HealingContext): Promise<DiagnosticResult>;

  /**
   * Check if this strategy is applicable to the context
   */
  isApplicable(context: HealingContext): boolean;
}