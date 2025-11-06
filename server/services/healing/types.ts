/**
 * Core types and interfaces for the healing system
 */

import type { FeedCatalog } from '@shared/schema';

/**
 * Result of a healing attempt
 */
export interface HealingResult {
  success: boolean;
  tactic?: string;
  newUrl?: string;
  fallbackUsed: boolean;
  duration: number;
  error?: string;
  diagnosticSummary?: any;
}

/**
 * Result of a diagnostic check
 */
export interface DiagnosticResult {
  type: string;
  passed: boolean;
  details: Record<string, any>;
  recommendedTactics?: string[];
}

/**
 * Result of a recovery tactic
 */
export interface RecoveryResult {
  success: boolean;
  newUrl?: string;
  fallbackUsed?: boolean;
  error?: string;
  data?: any;
}

/**
 * Context for healing operations
 */
export interface HealingContext {
  feed: FeedCatalog;
  errorType?: string;
  lastError?: string;
  previousAttempts?: number;
  timeoutMs?: number;
}

/**
 * Priority for recovery tactics
 */
export enum TacticPriority {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

/**
 * Tactic metadata for prioritization
 */
export interface TacticMeta {
  name: string;
  priority: TacticPriority;
  estimatedTimeMs: number;
  successRate?: number;
}