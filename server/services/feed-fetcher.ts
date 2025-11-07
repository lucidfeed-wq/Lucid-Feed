import Parser from "rss-parser";
import type { InsertItem, FeedCatalog, Topic } from "@shared/schema";
import { topics } from "@shared/schema";
import { tagTopics } from "../core/topics";
import { generateHashDedupe, extractDOI } from "../core/dedupe";
import { storage } from "../storage";
import { FeedHealthNotifier } from "./notifications/feed-health-notifier";

const parser = new Parser({
  customFields: {
    item: [['dc:identifier', 'doi']],
  },
  timeout: 30000, // 30 second timeout
});

const BATCH_SIZE = 10; // Process feeds in batches to avoid overload
const MAX_RETRIES = 3;
const RETRY_DELAYS = [2000, 4000, 8000]; // 2s, 4s, 8s in milliseconds

// Create a Set of valid topics for fast lookup and validation
const validTopicsSet = new Set<string>(topics);

// Error types for categorization
enum ErrorType {
  PERMANENT = 'permanent_error',
  TRANSIENT = 'transient_error'
}

// Detailed error info for tracking
interface FeedError {
  name: string;
  url: string;
  error: string;
  type: ErrorType;
  feedId?: string;
  consecutiveFailures?: number;
  wasDeactivated?: boolean;
}

/**
 * Validate feed URL before attempting fetch
 * @param url - The URL to validate
 * @returns true if valid, false otherwise
 */
function validateFeedURL(url: string): { valid: boolean; error?: string } {
  try {
    const parsedUrl = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return {
        valid: false,
        error: `Invalid protocol: ${parsedUrl.protocol}. Only http and https are allowed.`
      };
    }
    
    // Basic hostname validation
    if (!parsedUrl.hostname || parsedUrl.hostname.length < 3) {
      return {
        valid: false,
        error: 'Invalid hostname'
      };
    }
    
    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: `Invalid URL format: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}

/**
 * Determine if an error is transient (can be retried) or permanent
 * @param error - The error to categorize
 * @returns ErrorType.TRANSIENT or ErrorType.PERMANENT
 */
function categorizeError(error: any): ErrorType {
  const errorMsg = error?.message || String(error);
  const errorCode = error?.code;
  const statusCode = error?.response?.status || error?.statusCode;
  
  // Transient errors that should be retried
  const transientConditions = [
    // Network errors
    errorCode === 'ECONNRESET',
    errorCode === 'ETIMEDOUT',
    errorCode === 'ENOTFOUND',
    errorCode === 'ECONNREFUSED',
    errorCode === 'ENETUNREACH',
    
    // HTTP status codes that are transient
    statusCode === 429, // Rate limit
    statusCode === 503, // Service unavailable
    statusCode === 502, // Bad gateway
    statusCode === 504, // Gateway timeout
    statusCode === 408, // Request timeout
    
    // Timeout messages
    errorMsg.toLowerCase().includes('timeout'),
    errorMsg.toLowerCase().includes('timed out'),
    
    // Connection issues
    errorMsg.toLowerCase().includes('socket hang up'),
    errorMsg.toLowerCase().includes('network'),
  ];
  
  // Permanent errors that should NOT be retried
  const permanentConditions = [
    statusCode === 404, // Not found
    statusCode === 401, // Unauthorized
    statusCode === 403, // Forbidden
    statusCode === 410, // Gone
    errorMsg.toLowerCase().includes('invalid url'),
    errorMsg.toLowerCase().includes('parse error'),
    errorMsg.toLowerCase().includes('invalid xml'),
    errorMsg.toLowerCase().includes('invalid feed'),
  ];
  
  if (permanentConditions.some(c => c)) {
    return ErrorType.PERMANENT;
  }
  
  if (transientConditions.some(c => c)) {
    return ErrorType.TRANSIENT;
  }
  
  // Default to transient for unknown errors (conservative approach)
  return ErrorType.TRANSIENT;
}

/**
 * Retry a function with exponential backoff
 * @param fn - The async function to retry
 * @param retries - Number of retries remaining
 * @param delays - Array of delay durations in ms
 * @param attemptNum - Current attempt number (for logging)
 * @returns The result of the function
 */
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  retries: number,
  delays: number[],
  attemptNum: number = 1
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    const errorType = categorizeError(error);
    
    // Don't retry permanent errors
    if (errorType === ErrorType.PERMANENT) {
      throw error;
    }
    
    // Don't retry if no retries left
    if (retries === 0) {
      throw error;
    }
    
    // Calculate delay for this retry
    const delayIndex = attemptNum - 1;
    const delay = delays[Math.min(delayIndex, delays.length - 1)];
    
    console.log(`  Retrying in ${delay/1000}s (attempt ${attemptNum + 1}/${MAX_RETRIES + 1})...`);
    
    // Wait before retrying
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Retry with one less retry
    return retryWithBackoff(fn, retries - 1, delays, attemptNum + 1);
  }
}

/**
 * Generic feed fetcher that processes feeds from the catalog.
 * Fetches items from RSS feeds and normalizes them to InsertItem format.
 * 
 * @param feeds - Array of FeedCatalog entries to fetch from
 * @returns Array of normalized InsertItem objects
 */
export async function fetchFeedItems(feeds: FeedCatalog[]): Promise<InsertItem[]> {
  const allItems: InsertItem[] = [];
  const totalFeeds = feeds.length;
  const failedFeeds: FeedError[] = [];
  const healthySummary: { feedId: string; name: string; status: string }[] = [];

  // Process feeds in batches to avoid overwhelming the system
  for (let i = 0; i < feeds.length; i += BATCH_SIZE) {
    const batch = feeds.slice(i, i + BATCH_SIZE);
    
    // Fetch feeds in parallel within each batch
    const batchResults = await Promise.all(
      batch.map(async (feed) => {
        const feedIndex = i + batch.indexOf(feed) + 1;
        console.log(`Processing feed ${feedIndex} of ${totalFeeds}: ${feed.name}`);
        
        try {
          const items = await fetchSingleFeed(feed);
          
          // Success: update feed health
          await storage.updateFeedHealth(feed.id, {
            lastFetchStatus: 'success',
            consecutiveFailures: 0,
            lastErrorMessage: null,
          });
          
          healthySummary.push({
            feedId: feed.id,
            name: feed.name,
            status: 'healthy',
          });
          
          console.log(`✓ Successfully fetched ${items.length} items from ${feed.name}`);
          return items;
        } catch (error: any) {
          const errorMsg = error?.message || String(error);
          const errorType = categorizeError(error);
          
          // Get current feed health to calculate consecutive failures
          const currentFeed = await storage.getFeedById(feed.id);
          const currentFailures = currentFeed?.consecutiveFailures || 0;
          const newFailures = currentFailures + 1;
          
          // Update feed health with error
          await storage.updateFeedHealth(feed.id, {
            lastFetchStatus: errorType,
            consecutiveFailures: newFailures,
            lastErrorMessage: errorMsg.substring(0, 500), // Limit error message length
          });
          
          failedFeeds.push({ 
            name: feed.name, 
            url: feed.url, 
            error: errorMsg,
            type: errorType,
            feedId: feed.id,
            consecutiveFailures: newFailures,
          });
          
          // Auto-deactivate feed after 5 consecutive failures
          const FAILURE_THRESHOLD = 5;
          if (newFailures >= FAILURE_THRESHOLD && currentFeed?.isActive) {
            console.log(`🚨 Auto-deactivating feed "${feed.name}" after ${newFailures} consecutive failures`);
            await storage.deactivateFeed(feed.id);
            
            // Track for email alert
            failedFeeds[failedFeeds.length - 1].wasDeactivated = true;
          }
          
          // Mark as unhealthy if too many consecutive failures
          const healthStatus = newFailures >= FAILURE_THRESHOLD ? 'unhealthy (deactivated)' : 'degraded';
          healthySummary.push({
            feedId: feed.id,
            name: feed.name,
            status: `${healthStatus} (${newFailures} failures)`,
          });
          
          return []; // Continue on error
        }
      })
    );
    
    // Flatten batch results into allItems
    for (const items of batchResults) {
      allItems.push(...items);
    }
  }

  console.log(`\nTotal items fetched from ${totalFeeds} feeds: ${allItems.length}`);
  
  // Feed health summary
  console.log('\n📊 Feed Health Summary:');
  const healthy = healthySummary.filter(f => f.status === 'healthy').length;
  const degraded = healthySummary.filter(f => f.status.includes('degraded')).length;
  const unhealthy = healthySummary.filter(f => f.status.includes('unhealthy')).length;
  
  console.log(`  ✓ Healthy: ${healthy}`);
  if (degraded > 0) console.log(`  ⚠ Degraded: ${degraded}`);
  if (unhealthy > 0) console.log(`  ✗ Unhealthy: ${unhealthy}`);
  
  // Summary of failed feeds
  if (failedFeeds.length > 0) {
    console.log(`\n⚠️  ${failedFeeds.length} feed(s) failed:`);
    
    // Group by error type
    const permanentErrors = failedFeeds.filter(f => f.type === ErrorType.PERMANENT);
    const transientErrors = failedFeeds.filter(f => f.type === ErrorType.TRANSIENT);
    const deactivatedFeeds = failedFeeds.filter(f => f.wasDeactivated);
    
    if (permanentErrors.length > 0) {
      console.log('\n  Permanent errors (not retried):');
      permanentErrors.forEach(f => {
        console.log(`    - ${f.name}: ${f.error}`);
      });
    }
    
    if (transientErrors.length > 0) {
      console.log('\n  Transient errors (retried but failed):');
      transientErrors.forEach(f => {
        console.log(`    - ${f.name}: ${f.error}`);
      });
    }
    
    // Send notifications for deactivated feeds
    if (deactivatedFeeds.length > 0) {
      console.log(`\n🚨 ${deactivatedFeeds.length} feed(s) were auto-deactivated`);
      
      const notifier = new FeedHealthNotifier();
      for (const failedFeed of deactivatedFeeds) {
        if (failedFeed.feedId) {
          const feed = feeds.find(f => f.id === failedFeed.feedId);
          if (feed) {
            // Get subscribers and notify them
            const subscribers = await storage.getSubscribersByFeed(feed.id);
            for (const sub of subscribers) {
              await notifier.notifyFeedRemoval(
                sub.userId, 
                feed, 
                "This source has been discontinued after multiple failed attempts to connect.",
                false
              );
            }
          }
        }
      }
      
      // Also send admin alert email
      try {
        const { sendFeedHealthAlert } = await import('../lib/resend');
        await sendFeedHealthAlert(deactivatedFeeds);
        console.log('✉️  Admin feed health alert email sent');
      } catch (error) {
        console.error('Failed to send feed health alert email:', error);
        // Don't fail the whole job if email fails
      }
    }
  }
  
  return allItems;
}

/**
 * Fetch and normalize items from a single feed with retry logic and timeout handling.
 */
async function fetchSingleFeed(feed: FeedCatalog): Promise<InsertItem[]> {
  const items: InsertItem[] = [];

  // Validate URL before attempting fetch
  const validation = validateFeedURL(feed.url);
  if (!validation.valid) {
    throw new Error(`URL validation failed: ${validation.error}`);
  }

  // Quick HEAD request to check if feed exists (5 second timeout) - Skip 404s early
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const headResponse = await fetch(feed.url, { 
      method: 'HEAD',
      signal: controller.signal
    }).catch((err: any) => ({ ok: false, status: err.name === 'AbortError' ? 408 : 500 } as any));
    
    clearTimeout(timeoutId);
    
    if ((headResponse as any).status === 404) {
      console.log(`⚠️ Feed "${feed.name}" returned 404, marking as inactive and skipping`);
      
      // Mark feed as permanently failed in database
      await storage.updateFeedHealth(feed.id, {
        lastFetchStatus: 'permanent_error',
        lastErrorMessage: '404 Not Found',
        consecutiveFailures: (feed.consecutiveFailures || 0) + 1,
      });
      
      // Deactivate feed immediately for 404s
      await storage.deactivateFeed(feed.id);
      
      // Throw 404 error so caller knows it's permanent
      const error: any = new Error('404 Not Found');
      error.statusCode = 404;
      throw error;
    }
  } catch (error: any) {
    // If it's a 404, rethrow it
    if (error.statusCode === 404 || error.message === '404 Not Found') {
      throw error;
    }
    // For other HEAD request errors, continue to full fetch (might still work)
    console.log(`⚠️ HEAD request failed for "${feed.name}", continuing to full fetch...`);
  }

  try {
    // Wrap the RSS parser call with retry logic and timeout
    const rssFeed = await retryWithBackoff(
      async () => {
        try {
          return await parser.parseURL(feed.url);
        } catch (error: any) {
          // Enhance error message for better debugging
          const enhancedError = new Error(
            `Failed to fetch RSS feed: ${error?.message || String(error)}`
          );
          
          // Preserve status code and error code if available
          if (error?.response?.status) {
            (enhancedError as any).statusCode = error.response.status;
          }
          if (error?.code) {
            (enhancedError as any).code = error.code;
          }
          
          throw enhancedError;
        }
      },
      MAX_RETRIES,
      RETRY_DELAYS
    );

    // Limit items per feed to avoid overload (take most recent 10)
    for (const entry of rssFeed.items.slice(0, 10)) {
      try {
        const item = normalizeFeedEntry(entry, feed);
        items.push(item);
      } catch (error: any) {
        // Skip malformed entries silently to avoid log spam
        continue;
      }
    }
  } catch (error: any) {
    // Re-throw with clean error message (categorization happens in caller)
    throw error;
  }

  return items;
}

/**
 * Normalize a single RSS entry to InsertItem format.
 */
function normalizeFeedEntry(entry: any, feed: FeedCatalog): InsertItem {
  const title = entry.title || "Untitled";
  const url = entry.link || "";
  const publishedAt = entry.pubDate ? new Date(entry.pubDate).toISOString() : new Date().toISOString();
  const rawExcerpt = entry.contentSnippet || entry.content || entry.summary || "";
  
  // Extract DOI if available
  const doi = extractDOI(entry.link || "") || extractDOI(rawExcerpt) || null;
  
  // Tag topics: combine feed's predefined topics with auto-detected topics
  const searchText = `${title} ${rawExcerpt}`;
  const autoDetectedTopics = tagTopics(searchText);
  
  // Validate feed topics - only include valid Topic enum values
  const validatedFeedTopics = (feed.topics || [])
    .filter((topic): topic is Topic => {
      if (typeof topic === 'string' && validTopicsSet.has(topic)) {
        return true;
      }
      // Log invalid topics from feed catalog for debugging
      if (topic) {
        console.warn(`Feed "${feed.name}" has invalid topic "${topic}" - filtering out`);
      }
      return false;
    });
  
  // Merge topics, preferring feed's validated topics, then auto-detected
  const combinedTopics = Array.from(new Set([...validatedFeedTopics, ...autoDetectedTopics])).slice(0, 5) as Topic[];
  
  const hashDedupe = generateHashDedupe(url, title);

  // Extract author/channel name
  let authorOrChannel = entry.creator || entry.author || feed.name;
  if (typeof authorOrChannel === 'object' && authorOrChannel.name) {
    authorOrChannel = authorOrChannel.name;
  }

  // Build base item
  const item: InsertItem = {
    sourceType: feed.sourceType as any,
    sourceId: doi || url,
    doi,
    url,
    title,
    authorOrChannel,
    publishedAt,
    ingestedAt: new Date().toISOString(),
    rawExcerpt: rawExcerpt.substring(0, 500),
    engagement: {
      comments: 0,
      upvotes: 0,
      views: 0,
    },
    topics: combinedTopics,
    isPreprint: title.toLowerCase().includes("preprint") || rawExcerpt.toLowerCase().includes("preprint"),
    journalName: feed.sourceType === 'journal' ? feed.name : null,
    hashDedupe,
  };

  return item;
}
