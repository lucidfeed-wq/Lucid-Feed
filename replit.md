# Lucid Feed

## Overview
Lucid Feed is a production-ready multi-tenant SaaS platform for personalized intelligent content curation. It helps users discover and subscribe to feeds across various sources like journals, podcasts, Reddit, Substack, and YouTube, providing AI-powered personalized digests. The platform aims to transform information overload into clarity through transparent quality scoring, smart conversational AI assistance, and flexible subscription tiers.

## User Preferences
I prefer clear, concise, and direct communication. When making changes, prioritize iterative development with clear explanations of each step. I value detailed explanations for complex technical decisions. For any significant architectural changes or new feature implementations, please ask for approval before proceeding. Do not make changes to the existing folder structure unless explicitly instructed.

## System Architecture

### UI/UX Decisions
The application features a modern React frontend with a Material Design aesthetic and Linear-inspired elements, including clean typography (Inter font), subtle elevation, and a three-level text hierarchy. The design targets a professional, clinical appearance. Brand logo (golden swirl design from brandkit-template-663) is consistently displayed in Header, Onboarding, and Pricing pages for brand recognition.

### Technical Implementations
The application is a full-stack TypeScript project using React for the frontend and Express for the backend.
- **Content Ingestion**: RSS feeds from curated sources (journals, Reddit, Substack, YouTube, Podcasts) are ingested, with full content extraction for all sources:
  - **Journals**: Full-text PDFs via Unpaywall API (when open access available) - stored in `pdfUrl` field and exposed through digest API
  - **YouTube**: Full video transcripts via youtube-transcript package
  - **Reddit**: Full post content from RSS (prioritizes `entry.content` over `entry.contentSnippet`)
  - **Substack**: Full article content from RSS (prioritizes `entry.content` over `entry.contentSnippet`)
  - **Podcasts**: Full episode descriptions/show notes from RSS (14 curated feeds including FoundMyFitness, Huberman Lab, Peter Attia)
- **Open Access PDF Access**: Journal articles with open access PDFs display a prominent "Read Full Text (PDF)" link in the ItemCard UI, providing users with direct access to full-text research papers (fetched from Unpaywall during enrichment, stored in items.pdfUrl, and passed through digestSectionItemSchema to frontend)
- **Deduplication**: Cross-source deduplication using SHA-256 hashing and URL canonicalization.
- **Topic Taxonomy**: Two-layer topic system with 10 major categories (Health & Wellness, Science & Nature, Technology & AI, Productivity & Self-Improvement, Finance & Business, Society & Culture, Environment & Sustainability, Creativity & Media, Education & Learning, Lifestyle & Travel) containing ~110 subtopics total with unique semantic values for flexible user personalization.
- **Ranking Algorithm**: Items are ranked based on quality (40%), recency (30%), and engagement (30%).
- **AI-Powered Summaries**: OpenAI (GPT-4o-mini) generates detailed individual item summaries (5-7 insights, 150-200 words, clinical takeaways) and category-level meta-summaries for digest sections.
- **Hybrid RAG Chat System**: Three-mode intelligent chat architecture with digest-aware context:
  - **RAG Mode** (similarity > 0.7): Answers strictly from digest sources with explicit citations, preventing hallucinations
  - **Hybrid Mode** (similarity 0.4-0.7): Combines weak digest sources with general knowledge, clearly attributing what comes from sources
  - **General Mode** (similarity < 0.4): Provides helpful general knowledge with clear disclaimers about lack of digest sources
  - **Digest Context Awareness**: System prompts explain what digests are and enable meta-queries like "summarize the digest" or "what's in this week's digest"
  - **Multi-Scope Search**: Filters content by current digest (free), all digests (premium), saved items (premium), or folders (pro)
  - **Scope-Aware Filtering**: generateDigestOverview respects selected scope to prevent content leakage across scopes
  - **Tier-Based Access**: Free (10 msgs/day, current digest), Premium (50 msgs/day, all digests + saved), Pro (unlimited, folders + history)
  - **ChatScopeSelector Component**: UI for switching search scopes with tier-gated feature access
  - **ConversationHistory Component**: Pro-only sidebar for loading/deleting saved conversations
  - **ChatSettings Page**: Privacy preferences with opt-in history learning (Pro only)
  - **Source Attribution**: All responses cite specific items with similarity scores to ensure transparency
- **Personalization**: Users can select topics, bookmark items, and receive personalized digests based on their subscribed feeds.
- **Digest Generation**: Weekly or daily personalized digests, with historical digests preserved through timestamp-based slugs.
- **Quality Scoring**: Transparent, multi-signal quality assessment combining citation metrics (30%), author credibility (25%), methodology quality (25%), community verification (10%), and recency (10%). Includes content quality filtering to exclude insufficient items.
- **Multi-Tenant SaaS**: Supports user-level feed subscriptions and personalized digests.
- **Subscription Tiers**: Free (weekly), Premium (daily), Pro (real-time + analytics).
- **Tier-Based Usage Limits**: Enforced limits for feed subscriptions (Free: 5, Premium: 20, Pro: unlimited), daily chat messages (Free: 10, Premium: 50, Pro: unlimited), and digest frequency (Free: weekly, Premium: daily, Pro: real-time). Usage tracked in `dailyUsage` table with automatic enforcement via middleware in routes. Frontend displays UpgradePrompt component when limits are exceeded.
- **Stripe Subscription Integration**: Complete payment processing with Stripe Checkout for subscription upgrades. Backend routes handle checkout session creation, subscription status, billing portal access, and webhook events (checkout.session.completed, customer.subscription.updated, customer.subscription.deleted). User subscription data stored in `userSubscriptions` table with tier, status, and Stripe customer/subscription IDs. Frontend pricing page displays tiered plans with real-time subscription status. UpgradePrompt redirects to /pricing for seamless upgrade flow.
- **Automated Scheduling**: Daily ingestion and digest generation managed by `node-cron`.
- **Feed Discovery**: Browsable directory with filters and user submission for admin approval.
- **Job Management**: Lightweight PostgreSQL job queue with retry logic and dead-letter queue.
- **Admin Features**: Job observability, token cost tracking, and bulk enrichment.

### Feature Specifications
- **RSS Feed Ingestion**: From journals, Reddit, Substack, YouTube, and podcasts (14 curated shows).
- **Deduplication**: SHA-256 hashing, URL canonicalization.
- **Enhanced Onboarding**: Users onboard by (1) selecting major categories, (2) choosing specific subtopics within each category, (3) selecting preferred source types, (4) browsing and subscribing to suggested feeds. Features **50 feed suggestions** (increased from 12) with **balanced distribution across source types** and **live/dynamic filtering** that updates in real-time as users change their topic/source selections. All preferences validated against enums before persisting.
- **On-Demand Digest Generation**: After onboarding, users get their first personalized digest **immediately** via `generatePersonalizedDigest()` function. This performs fresh RSS ingestion from subscribed feeds, **immediate content enrichment** (full content extraction + quality scoring), ranking, AI summarization, and digest creation - no waiting for midnight cron job. Generated digests use unique slug format: `personal-{userId}-{timestamp}`.
- **Ranking Algorithm**: Quality, recency, engagement-based.
- **Digest Generation**: Weekly/daily, with 3 sections.
- **AI Summary Generation**: Individual and category-level.
- **PostgreSQL Persistence**: Stores items, summaries, digests, users, sessions, preferences, job runs, etc.
- **User Authentication**: Replit Auth (OpenID Connect).
- **Admin Authorization**: Environment-based access control using `ADMIN_USER_IDS`.
- **Personalized Topic Preferences**: User-selectable topics.
- **Saved Items**: User bookmarking.
- **Community Feed Submissions**: Users submit feeds for review.
- **Feed Approval Workflow**: Admin review via `/admin` panel.
- **Export Options**: JSON, Markdown, RSS.
- **Automated Scheduling**: Daily ingestion, digest generation.
- **Complete Frontend UI**: Material Design + Linear-inspired.
- **Client-side Filtering**: Topic and source type filtering.
- **Digest Archive**: View historical digests.
- **Chat Persistence**: Conversation history stored.
- **Metrics**: Daily aggregated metrics tracking (rss_items_fetched, items_merged, summaries_created, token_spend_user).

### Future Enhancements
- **Recommendation System**: Track user topic/feed preferences and cross-correlate to provide personalized recommendations ("based on what you like, here are some recommendations"). Requires backend tracking of user interactions and preference patterns.
- **Feed Discovery Option 2 - Full ETL Pipeline** (Future Implementation):
  - **Current State (Option 1)**: 33+ curated feeds in catalog, manual seeding, basic search
  - **Option 2 Goals**: 50k+ feeds, automatic enrichment, semantic search
  - **Implementation Plan**:
    1. **Database Schema**: Add `feed_topics`, `feed_source_metadata`, `search_misses` tables
    2. **Bulk Data Ingestion**: Import from PodcastIndex bulk export (2M+ feeds), YouTube directory scrapes (10k+ channels), Reddit subreddit lists (5k+), Substack directory (10k+), academic journal RSS manifests (5k+)
    3. **ETL Pipeline**: Background job queue for processing bulk imports, deduplication by canonical URL, metadata extraction and normalization
    4. **Semantic Search**: Vector embeddings for feed descriptions using OpenAI, hybrid search combining lexical (Postgres full-text) + semantic (vector similarity)
    5. **Self-Improving Catalog**: Background jobs triggered by search misses, API calls to YouTube/Reddit/PodcastIndex for missing feeds, automatic quality scoring and approval workflow
    6. **Scheduled Refresh**: Daily jobs for active feeds, weekly for dormant feeds, automatic removal of dead feeds
    7. **Admin Tooling**: Feed quality review dashboard, coverage metrics by topic, bulk import/export tools
  - **Estimated Effort**: 4-6 hours development time
  - **Benefits**: Scales to 1000s of users, zero empty searches, continuously growing catalog

### System Design Choices
- **Backend Architecture**: Modules for business logic (`core/`), specific operations (`services/`), content fetching (`sources/`), and infrastructure (`infrastructure/`).
- **Frontend Architecture**: Organized into `pages/`, `components/`, and `hooks/`.
- **Data Model**: Clearly defined schemas for `Item`, `Digest`, `User`, `Summary`, etc., using Drizzle ORM.
- **API Endpoints**: Categorized by function (public, auth, user preferences, admin).

## External Dependencies
- **PostgreSQL**: Relational database.
- **Drizzle ORM**: TypeScript ORM.
- **Replit Auth**: OpenID Connect provider for authentication.
- **OpenAI API**: AI summarization, embeddings, RAG chat.
- **Express.js**: Backend web framework.
- **React**: Frontend UI library.
- **node-cron**: Task scheduling.
- **connect-pg-simple**: PostgreSQL session store.
- **Passport.js**: Authentication middleware.
- **Zod**: Schema validation.
- **Stripe**: Payment processing for subscriptions.
- **Resend**: Email API for cost alerts and notifications (requires RESEND_API_KEY).

### Email Alerts Setup
The application uses Resend for sending email alerts about cost spikes, daily summaries, and user cost caps. To enable email alerts:
1. Sign up for a Resend account at https://resend.com
2. Get your API key from the Resend dashboard
3. Add `RESEND_API_KEY` to your Replit Secrets
4. Add `ALERT_EMAILS` (comma-separated list of recipient emails) to your Replit Secrets

If Resend is not configured, the application will continue to work normally but email alerts will be skipped silently.