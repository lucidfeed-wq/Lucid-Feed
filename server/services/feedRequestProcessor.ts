import { storage } from "../storage";
import { sendFeedRequestNotification } from "../lib/resend";
import { discoverFeeds } from "./feed-discovery/discovery-service";

export async function processFeedRequests() {
  console.log("[Feed Request Processor] Starting to process pending feed requests...");
  
  try {
    const pendingRequests = await storage.getPendingFeedRequests();
    console.log(`[Feed Request Processor] Found ${pendingRequests.length} pending requests`);
    
    for (const request of pendingRequests) {
      try {
        console.log(`[Feed Request Processor] Processing request ${request.id}: "${request.searchQuery}"`);
        
        // Get all approved feeds from catalog
        const catalogFeeds = await storage.getFeedCatalog({});
        
        // Search the catalog for feeds matching the query
        const feeds = await discoverFeeds(request.searchQuery, undefined, catalogFeeds);
        
        if (feeds.length > 0) {
          // Found feeds matching the request
          console.log(`[Feed Request Processor] Found ${feeds.length} feeds for request ${request.id}`);
          
          // Send email notification first
          try {
            await sendFeedRequestNotification(
              request.email,
              request.searchQuery,
              feeds
            );
            
            // Only mark as found and add notification timestamp after successful email
            await storage.updateFeedRequest(request.id, {
              status: 'found',
              foundFeeds: feeds.map((f: any) => f.id),
              processedAt: new Date(),
              notifiedAt: new Date(),
            });
            
            console.log(`[Feed Request Processor] Sent notification to ${request.email} for request ${request.id}`);
          } catch (emailError) {
            console.error(`[Feed Request Processor] Failed to send email for request ${request.id}:`, emailError);
            console.log(`[Feed Request Processor] Request ${request.id} will be retried on next run`);
          }
        } else {
          // No feeds found yet, keep status as pending
          console.log(`[Feed Request Processor] No feeds found yet for request ${request.id}`);
        }
      } catch (error) {
        console.error(`[Feed Request Processor] Error processing request ${request.id}:`, error);
      }
    }
    
    console.log("[Feed Request Processor] Completed processing feed requests");
  } catch (error) {
    console.error("[Feed Request Processor] Failed to process feed requests:", error);
    throw error;
  }
}
