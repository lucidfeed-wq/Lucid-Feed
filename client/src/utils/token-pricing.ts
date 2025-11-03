/**
 * Client-side token pricing utility
 * Mirrors server-side pricing for display purposes
 */

/**
 * Calculate cost from total tokens (rough estimate)
 * Assumes typical 3:1 input:output ratio for GPT-4o-mini
 */
export function estimateCostFromTokens(totalTokens: number): number {
  // OpenAI GPT-4o-mini pricing:
  // Input: $0.150 per 1M tokens
  // Output: $0.600 per 1M tokens
  
  // Rough estimate: 75% input, 25% output
  const inputTokens = totalTokens * 0.75;
  const outputTokens = totalTokens * 0.25;
  
  const inputCost = (inputTokens / 1_000_000) * 0.150;
  const outputCost = (outputTokens / 1_000_000) * 0.600;
  
  return inputCost + outputCost;
}

/**
 * Format cost as currency
 */
export function formatCost(cost: number): string {
  if (cost < 0.01) {
    // Show in cents for very small amounts
    return `${(cost * 100).toFixed(2)}¢`;
  }
  return `$${cost.toFixed(4)}`;
}

/**
 * Format tokens with cost
 */
export function formatTokensWithCost(tokens: number): string {
  const cost = estimateCostFromTokens(tokens);
  return `${tokens.toLocaleString()} (${formatCost(cost)})`;
}
