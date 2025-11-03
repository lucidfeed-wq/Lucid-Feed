# Functional Medicine Intelligence Feed

## Overview
This project is a production-ready web application designed to aggregate, deduplicate, rank, and publish weekly content digests from various sources in the functional medicine domain. Its primary purpose is to provide practitioners and enthusiasts with a streamlined feed of relevant and high-quality information. The application aims to solve the problem of information overload by intelligently curating content from journals, Reddit, Substack, and YouTube, offering AI-powered summaries, and enabling personalized user experiences. The long-term ambition is to become a leading intelligence platform for the functional medicine community, offering valuable insights and saving users significant time in content discovery.

## User Preferences
I prefer clear, concise, and direct communication. When making changes, prioritize iterative development with clear explanations of each step. I value detailed explanations for complex technical decisions. For any significant architectural changes or new feature implementations, please ask for approval before proceeding. Do not make changes to the existing folder structure unless explicitly instructed.

## System Architecture

### UI/UX Decisions
The application features a modern frontend built with React, adhering to a Material Design aesthetic combined with Linear-inspired elements. This includes clean typography using the Inter font family, subtle elevation effects, a three-level text hierarchy (primary/secondary/tertiary), and consistent spacing. The design aims for a professional clinical look suitable for medical practitioners.

### Technical Implementations
The application is a full-stack JavaScript project utilizing React for the frontend, Express for the backend API, and TypeScript for type safety across both.
- **Content Ingestion**: RSS feeds from 126 curated sources (journals, Reddit, Substack, YouTube) are ingested.
- **Deduplication**: Cross-source deduplication is achieved using SHA-256 hashing after URL canonicalization.
- **Topic Tagging**: Content is automatically tagged with over 30 functional medicine topics using regex-based matching.
- **Ranking Algorithm**: Items are ranked based on a weighted score considering quality (40%), recency (30%), and engagement (30%).
- **AI-Powered Summaries**: OpenAI integration (GPT-4o-mini) generates detailed individual item summaries (5-7 insights, 150-200 words, 50-75 word clinical takeaways) and category-level meta-summaries for digest sections (75-100 word overview, 5 key themes, 75-100 word clinical implications).
- **RAG Chat Interface**: Semantic search using OpenAI embeddings (text-embedding-3-small) enables users to query curated content with GPT-4o-mini generating contextual responses citing top 5 relevant sources.
- **Database**: PostgreSQL is used for persistence, managed with Drizzle ORM.
- **Authentication**: User authentication is implemented via Replit Auth (OpenID Connect) with session management.
- **Admin Authorization**: Environment-based admin access control (ADMIN_USER_IDS) protects feed approval queue and review endpoints.
- **Personalization**: Users can select preferred topics and bookmark items.
- **Digest Generation**: Weekly digests are automatically generated, comprising research highlights, community trends, and expert commentary sections.
- **Export Capabilities**: Digests can be exported in JSON, Markdown, and RSS formats.
- **Automated Scheduling**: Daily ingestion and weekly digest generation are managed by `node-cron`.
- **Feed Catalog**: Browsable feed directory with filters by source type (journal, reddit, substack, youtube) and category. Users can submit new feeds for admin approval.

#### Recent Enhancements (November 2025)
- **Job Observability System**: Added job_runs table tracking all automated jobs (ingest, digest) with metrics including items ingested, dedupe hits, token spend, execution time, and error messages. Admin dashboard displays real-time observability data with summary cards (total jobs, items ingested, dedupe rate, token spend) and recent job runs table.
- **DOI Tracking for Research Quality**: Items table now includes DOI field for journal articles. DOI parsing extracts Digital Object Identifiers from RSS feeds and content, enabling future cross-source reference matching and research quality verification.
- **UTM Attribution Tracking**: All outbound links in digest items include UTM parameters (utm_source=digest, utm_medium=web, utm_campaign=weekly_digest) for analytics tracking and referral attribution.
- **Evidence Quality Badges**: Digest items display methodology badges (RCT, Meta-Analysis, Cohort, Case Study, Review, Preprint) and evidence level badges (Level A, B, C) based on AI-generated summary analysis, providing at-a-glance research quality indicators for practitioners.
- **Digest Archive Preservation** (Nov 3, 2025): Modified digest generation to use timestamp-based slugs (format: 2025w-45-1730649000) instead of overwriting existing digests. All historical digests are now preserved in the archive.
- **Bulk Enrichment System** (Nov 3, 2025): Created `/admin/run/enrich-all` endpoint for background processing of all unenriched items. Admin UI includes "Enrich ALL Items" button that processes entire backlog in batches of 50 with 5-second rate limiting between batches.
- **Full Content Ingestion Pipeline**: Implemented comprehensive content enrichment system that fetches complete content instead of excerpts:
  - **Journal Articles**: Unpaywall API integration fetches open-access PDF URLs and extracts full text for comprehensive analysis
  - **YouTube Videos**: Complete video transcripts extracted for in-depth content analysis
  - **Reddit/Substack**: Full post content ingested (no longer limited to excerpts)
- **Transparent Multi-Signal Quality Scoring**: Built unbiased, transparent quality assessment system combining 5 weighted signals:
  - **Citation Metrics (30%)**: Citation count, influential citations, citation velocity (Crossref + Semantic Scholar)
  - **Author Credibility (25%)**: H-index and publication track record (Semantic Scholar)
  - **Methodology Quality (25%)**: Study design assessment with built-in bias detection (pharma/ag funding flags, conflict of interest detection)
  - **Community Verification (10%)**: Practitioner ratings and peer feedback system
  - **Recency (10%)**: Time-decay factor for scientific currency
- **Community Rating System**: User ratings table (userRatings) enables practitioners to rate content quality (1-5 stars) with optional comments. API endpoints support rating submission and aggregation. UI components display community ratings and individual contribution forms.
- **Enhanced AI Summaries**: Updated summary generation to analyze full content when available (10,000 char limit), providing comprehensive insights from complete papers, transcripts, and posts instead of excerpts.
- **Quality Transparency UI**: Built React components for displaying quality scores:
  - **QualityScoreCard**: Shows comprehensive breakdown of all 5 scoring components with progress bars and explanations
  - **CommunityRating**: Star-based rating widget with comment support
  - Both compact and expanded views available for different contexts

#### Quality Scoring System - Expected Behavior
- **Brand New Papers**: Papers published today (or very recently) will have quality scores around 40/100 because they:
  - Have 0 citations (citation metrics: 0 points)
  - Authors not yet in Semantic Scholar (author credibility: 0 points)
  - Still receive methodology quality (25 points), community verification (5 points), and recency (10 points)
- **Established Papers**: Older papers with citation history will have significantly higher scores (60-90/100) due to accumulated citation counts, influential citations, and author h-index metrics.
- **Citation API Status**: Both Crossref and Semantic Scholar APIs are working correctly - verified with test queries returning proper citation counts for established papers.
- **Enrichment Coverage**: As of Nov 3, 2025: 282 journal items total, 41 with DOIs (14.5%), all from today's ingestion. Historical papers would show more varied scores.

### Feature Specifications
- **RSS Feed Ingestion**: Supports ingestion from journals, Reddit, Substack, and YouTube, with expanded source lists.
- **Deduplication**: SHA-256 hashing with URL canonicalization.
- **Automated Topic Tagging**: 30+ functional medicine topics.
- **Ranking Algorithm**: Quality, recency, and engagement-based.
- **Digest Generation**: Weekly, with 3 sections.
- **AI Summary Generation**: Individual item summaries (insights, clinical takeaways) and category-level summaries (overview, key themes, clinical implications).
- **PostgreSQL Persistence**: Stores items, summaries, digests, users, sessions, user preferences, saved items, job runs, and related references.
- **User Authentication**: Replit Auth (Google/GitHub/email).
- **Admin Authorization**: Environment-based admin access control using ADMIN_USER_IDS (comma-separated list of user IDs). Protected routes include feed approval queue (/admin) and review endpoints.
- **Personalized Topic Preferences**: Users select favorite topics.
- **Saved Items**: Users can bookmark and view saved content.
- **Community Feed Submissions**: Authenticated users can submit new RSS feeds for review.
- **Feed Approval Workflow**: Admins review, approve, or reject user-submitted feeds through /admin panel.
- **Export Options**: JSON, Markdown, RSS.
- **Automated Scheduling**: Daily ingestion, weekly digest generation.
- **Complete Frontend UI**: Material Design + Linear-inspired.
- **Client-side Filtering**: Topic and source type filtering.
- **Digest Archive**: View historical digests.

### System Design Choices
- **Backend Architecture**: Structured with `core/` modules for business logic, `services/` for specific operations (ingest, digest, exports), `sources/` for content fetching, and `infrastructure/` for database, authentication, and scheduling.
- **Frontend Architecture**: Organized into `pages/` for views, `components/` for reusable UI elements, and `hooks/` for state management.
- **Data Model**: Clearly defined schemas for `Item`, `Digest`, `User`, `Summary`, `UserPreference`, `SavedItem`, `JobRun`, and `RelatedRef` using Drizzle ORM.
- **API Endpoints**: Categorized into public, authentication, user preferences, saved items, and admin endpoints.

## External Dependencies
- **PostgreSQL**: Relational database for all persistent data.
- **Drizzle ORM**: TypeScript ORM for interacting with PostgreSQL.
- **Replit Auth**: OpenID Connect provider for user authentication.
- **OpenAI API**: Used for AI-powered content summarization and meta-analysis.
- **Express.js**: Web application framework for the backend.
- **React**: Frontend JavaScript library for building user interfaces.
- **node-cron**: Library for scheduling automated tasks (ingestion, digest generation).
- **connect-pg-simple**: PostgreSQL session store for Express.
- **Passport.js**: Authentication middleware for Node.js.
- **Zod**: Schema declaration and validation library.