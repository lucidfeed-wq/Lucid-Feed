# Lucid Feed

## Overview
Lucid Feed is a production-ready multi-tenant SaaS platform for personalized intelligent content curation. It helps users discover and subscribe to feeds across various sources like journals, podcasts, Reddit, Substack, and YouTube, providing AI-powered personalized digests. The platform aims to transform information overload into clarity through transparent quality scoring, smart conversational AI assistance, and flexible subscription tiers.

## User Preferences
I prefer clear, concise, and direct communication. When making changes, prioritize iterative development with clear explanations of each step. I value detailed explanations for complex technical decisions. For any significant architectural changes or new feature implementations, please ask for approval before proceeding. Do not make changes to the existing folder structure unless explicitly instructed.

## System Architecture

### UI/UX Decisions
The application features a modern React frontend with a Material Design aesthetic and Linear-inspired elements, including clean typography (Inter font), subtle elevation, and a three-level text hierarchy. The design targets a professional, clinical appearance.

### Technical Implementations
The application is a full-stack TypeScript project using React for the frontend and Express for the backend.
- **Content Ingestion**: RSS feeds from curated sources (journals, Reddit, Substack, YouTube) are ingested, with full content extraction for journal articles (Unpaywall), YouTube transcripts, and full posts for Reddit/Substack.
- **Deduplication**: Cross-source deduplication using SHA-256 hashing and URL canonicalization.
- **Topic Taxonomy**: Two-layer topic system with 10 major categories (Health & Wellness, Science & Nature, Technology & AI, Productivity & Self-Improvement, Finance & Business, Society & Culture, Environment & Sustainability, Creativity & Media, Education & Learning, Lifestyle & Travel) containing multiple subtopics each for flexible user personalization.
- **Ranking Algorithm**: Items are ranked based on quality (40%), recency (30%), and engagement (30%).
- **AI-Powered Summaries**: OpenAI (GPT-4o-mini) generates detailed individual item summaries (5-7 insights, 150-200 words, clinical takeaways) and category-level meta-summaries for digest sections.
- **RAG Chat Interface**: Semantic search with OpenAI embeddings (text-embedding-3-small) and GPT-4o-mini for contextual responses citing sources.
- **Personalization**: Users can select topics, bookmark items, and receive personalized digests based on their subscribed feeds.
- **Digest Generation**: Weekly or daily personalized digests, with historical digests preserved through timestamp-based slugs.
- **Quality Scoring**: Transparent, multi-signal quality assessment combining citation metrics (30%), author credibility (25%), methodology quality (25%), community verification (10%), and recency (10%). Includes content quality filtering to exclude insufficient items.
- **Multi-Tenant SaaS**: Supports user-level feed subscriptions and personalized digests.
- **Subscription Tiers**: Free (weekly), Premium (daily), Pro (real-time + analytics).
- **Automated Scheduling**: Daily ingestion and digest generation managed by `node-cron`.
- **Feed Discovery**: Browsable directory with filters and user submission for admin approval.
- **Job Management**: Lightweight PostgreSQL job queue with retry logic and dead-letter queue.
- **Admin Features**: Job observability, token cost tracking, and bulk enrichment.

### Feature Specifications
- **RSS Feed Ingestion**: From journals, Reddit, Substack, YouTube.
- **Deduplication**: SHA-256 hashing, URL canonicalization.
- **Two-Layer Topic Selection**: Users onboard by selecting major categories, then specific subtopics within each category.
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