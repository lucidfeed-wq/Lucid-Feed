/**
 * OpenAI Token Pricing Utility
 * 
 * Converts token usage to dollar costs based on current OpenAI pricing
 * Pricing as of January 2025
 */

export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

export interface TokenCost {
  inputCost: number;
  outputCost: number;
  totalCost: number;
  totalTokens: number;
}

/**
 * OpenAI Pricing (per 1M tokens)
 * https://openai.com/api/pricing/
 */
const PRICING = {
  'gpt-4o-mini': {
    input: 0.150,  // $0.150 per 1M input tokens
    output: 0.600, // $0.600 per 1M output tokens
  },
  'text-embedding-3-small': {
    input: 0.020,  // $0.020 per 1M tokens
    output: 0,     // Embeddings have no output tokens
  },
} as const;

type Model = keyof typeof PRICING;

/**
 * Calculate cost for token usage
 */
export function calculateTokenCost(
  usage: TokenUsage,
  model: Model = 'gpt-4o-mini'
): TokenCost {
  const pricing = PRICING[model];
  
  // Cost = (tokens / 1,000,000) * price_per_million
  const inputCost = (usage.inputTokens / 1_000_000) * pricing.input;
  const outputCost = (usage.outputTokens / 1_000_000) * pricing.output;
  const totalCost = inputCost + outputCost;
  
  return {
    inputCost: Math.round(inputCost * 10000) / 10000, // Round to 4 decimals
    outputCost: Math.round(outputCost * 10000) / 10000,
    totalCost: Math.round(totalCost * 10000) / 10000,
    totalTokens: usage.totalTokens,
  };
}

/**
 * Format cost as currency
 */
export function formatCost(cost: number): string {
  if (cost < 0.01) {
    return `$${(cost * 100).toFixed(4)}¢`; // Show cents for very small amounts
  }
  return `$${cost.toFixed(4)}`;
}

/**
 * Calculate cost from total tokens (rough estimate)
 * Assumes typical 3:1 input:output ratio
 */
export function estimateCostFromTotal(
  totalTokens: number,
  model: Model = 'gpt-4o-mini'
): number {
  // Rough estimate: 75% input, 25% output
  const inputTokens = Math.round(totalTokens * 0.75);
  const outputTokens = Math.round(totalTokens * 0.25);
  
  const cost = calculateTokenCost({ inputTokens, outputTokens, totalTokens }, model);
  return cost.totalCost;
}

/**
 * Get pricing info for display
 */
export function getPricingInfo(model: Model = 'gpt-4o-mini') {
  const pricing = PRICING[model];
  return {
    model,
    inputPer1M: pricing.input,
    outputPer1M: pricing.output,
    inputPer1K: pricing.input / 1000,
    outputPer1K: pricing.output / 1000,
  };
}
