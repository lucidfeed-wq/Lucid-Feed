# Functional Medicine Intelligence Feed

## Overview
Production-ready web application that aggregates, deduplicates, ranks, and publishes weekly content digests from multiple sources in the functional medicine space. Built with modern full-stack JavaScript using React, Express, and TypeScript.

## Current State
**Status:** ✅ Production-Ready with PostgreSQL and Authentication

### Features Implemented
- ✅ RSS feed ingestion from 4 source types (journals, Reddit, Substack, YouTube)
- ✅ Cross-source deduplication using SHA-256 hashing with URL canonicalization
- ✅ Automated topic tagging for 30+ functional medicine topics
- ✅ Quality/recency/engagement-based ranking algorithm
- ✅ Weekly digest generation with 3 sections (research highlights, community trends, expert commentary)
- ✅ AI-powered summary generation using OpenAI (key insights + clinical takeaways)
- ✅ PostgreSQL database persistence (items, summaries, digests, users, sessions)
- ✅ User authentication via Replit Auth (Google/GitHub/email login)
- ✅ Export capabilities (JSON, Markdown, RSS)
- ✅ Automated scheduling (daily ingestion, weekly digest generation)
- ✅ Complete frontend UI with Material Design + Linear-inspired aesthetic
- ✅ Client-side topic filtering
- ✅ Digest archive view

## Recent Changes
**2025-11-02 (Session 2 - Authentication):**
- Implemented complete user authentication system using Replit Auth (OpenID Connect)
- Created users and sessions tables in PostgreSQL with proper indexes
- Added authentication middleware with token refresh and session management
- Integrated PostgreSQL session store using connect-pg-simple
- Created Header component with login/logout UI showing user avatar and profile dropdown
- Built useAuth hook for managing authentication state in frontend
- E2E tested full authentication flow: login, profile display, logout
- Note: Hardcoded HTTPS callbacks work perfectly in Replit hosted environment

**2025-11-02 (Session 1 - Database & AI):**
- Migrated from in-memory storage to PostgreSQL with Drizzle ORM
- Completed database migration: 140 items ingested, digest generation working
- Implemented AI-powered summary generation using Replit OpenAI integration
- Batch processing with rate limiting (10 concurrent, 1s delay between batches)
- Summaries display key insights, clinical takeaways, methodology, evidence levels
- Fixed critical cross-source deduplication bug with URL canonicalization
- Tested complete pipeline: ingestion → AI summaries → digest → export

## Project Architecture

### Backend (`server/`)
**Core Modules:**
- `core/topics.ts` - Regex-based tagging for 30+ functional medicine topics
- `core/dedupe.ts` - SHA-256 hashing with URL canonicalization for cross-source deduplication
- `core/ranking.ts` - Quality/recency/engagement scoring algorithm

**Services:**
- `services/ingest.ts` - RSS ingestion job with deduplication and merging logic
- `services/digest.ts` - Weekly digest composer with 7-day rolling window
- `services/exports.ts` - JSON, Markdown, and RSS export generators

**Sources:**
- `sources/journals.ts` - Fetches from Cell Metabolism, Nature Medicine, NEJM, Lancet
- `sources/reddit.ts` - Fetches from r/FunctionalMedicine, r/Biohacking, r/Longevity
- `sources/substack.ts` - Fetches from functional medicine Substack writers
- `sources/youtube.ts` - Fetches from health/wellness YouTube channels

**Infrastructure:**
- `storage.ts` - PostgreSQL storage layer (DbStorage) with Drizzle ORM for Items, Summaries, Digests, Users
- `db.ts` - Drizzle database connection and query client
- `routes.ts` - Express API routes for digest retrieval, admin jobs, exports, authentication
- `replitAuth.ts` - Replit Auth (OIDC) integration with Passport.js, session management, token refresh
- `scheduler.ts` - node-cron jobs for automated ingestion (daily midnight UTC) and digest generation (Monday 06:00 CST / 12:00 UTC)

### Frontend (`client/src/`)
**Pages:**
- `pages/Home.tsx` - Latest digest view with topic filtering
- `pages/Archive.tsx` - Grid view of historical digests
- `pages/DigestView.tsx` - Individual digest detail view

**Components:**
- `components/Header.tsx` - Navigation with export dropdown, login/logout UI, user avatar
- `components/DigestHeader.tsx` - Digest metadata and date range
- `components/DigestSection.tsx` - Section wrapper for research/community/expert
- `components/ItemCard.tsx` - Individual content item display
- `components/TopicFilter.tsx` - Filterable topic badge panel
- `components/SourceBadge.tsx` - Source type indicator (journal/reddit/substack/youtube)
- `components/MethodologyBadge.tsx` - Study methodology indicator
- `components/EvidenceBadge.tsx` - Evidence level indicator
- `components/TopicTag.tsx` - Individual topic badge

**Hooks:**
- `hooks/useAuth.ts` - Authentication state management using React Query

### Shared (`shared/`)
- `schema.ts` - Drizzle ORM schemas and TypeScript types for Items, Summaries, Digests, Users, Sessions

## API Endpoints

### Public Endpoints
- `GET /api/digest/latest` - Returns most recent digest
- `GET /api/digest/archive` - Returns list of all digests
- `GET /api/digest/:slug` - Returns specific digest by slug
- `GET /export/weekly.json` - Download latest digest as JSON
- `GET /export/weekly.md` - Download latest digest as Markdown
- `GET /rss/weekly.xml` - Subscribe to weekly digest RSS feed

### Authentication Endpoints
- `GET /api/login` - Initiates Replit Auth login flow (redirects to OIDC provider)
- `GET /api/callback` - OAuth callback handler (processes login, creates session)
- `GET /api/logout` - Logs out user and destroys session
- `GET /api/auth/user` - Returns current authenticated user (protected)

### Admin Endpoints
- `POST /admin/run/ingest` - Manually trigger RSS ingestion
- `POST /admin/run/digest` - Manually generate weekly digest

## Data Model

### Item
```typescript
{
  id: string;
  sourceType: "journal" | "reddit" | "substack" | "youtube";
  sourceId: string;
  url: string;
  title: string;
  authorOrChannel: string;
  publishedAt: string;
  ingestedAt: string;
  rawExcerpt: string;
  engagement: { comments: number; upvotes: number; views: number };
  topics: Topic[];
  isPreprint: boolean;
  journalName: string | null;
  hashDedupe: string; // SHA-256 hash for deduplication
}
```

### Digest
```typescript
{
  id: string;
  slug: string; // Format: "2025w-3"
  windowStart: string;
  windowEnd: string;
  generatedAt: string;
  sections: {
    researchHighlights: DigestSectionItem[];
    communityTrends: DigestSectionItem[];
    expertCommentary: DigestSectionItem[];
  };
}
```

## Deduplication Strategy
Cross-source deduplication uses URL canonicalization:
1. Extract DOI from URL/title if present (journals)
2. Normalize URL: lowercase, remove protocol/www/trailing-slash/query-params/fragments
3. Generate SHA-256 hash from `${canonicalId}|${normalizedTitle}`
4. When duplicate hash found from different source, merge engagement data

Example: An article shared on Reddit and Substack will be deduplicated and have combined engagement metrics.

## Topic Tagging
30+ functional medicine topics automatically tagged via regex matching:
- Metabolic health (metabolic, insulin_resistance, blood_sugar)
- Chronic conditions (chronic_fatigue, chronic_EBV, autoimmune, leaky_gut)
- Dietary approaches (carnivore, keto, fasting, intermittent_fasting)
- Therapies (IV_therapy, HRT, TRT, peptide_therapy, NAD_therapy)
- Conditions (mold_CIRS, PANS_PANDAS, SIBO, dysbiosis)
- Biohacking (biohacking, longevity, autophagy, mitochondrial_health)

## Ranking Algorithm
Items ranked using weighted score:
- **Quality Score** (40%): Evidence level, methodology type, source credibility
- **Recency Score** (30%): Exponential decay based on publish date
- **Engagement Score** (30%): Views, upvotes, comments normalized

## Automated Scheduling
- **Daily Ingestion**: Every day at midnight UTC
- **Weekly Digest**: Every Monday at 06:00 CST (12:00 UTC)

## Design Guidelines
Follows Material Design + Linear-inspired aesthetic:
- Clean typography with Inter font family
- Subtle elevation effects on interactive elements
- Three-level text hierarchy (primary/secondary/tertiary)
- Consistent spacing and component padding
- Professional clinical aesthetic suitable for medical practitioners

## Development
```bash
# Install dependencies
npm install

# Start development server (http://localhost:5000)
npm run dev

# Manually trigger ingestion
curl -X POST http://localhost:5000/admin/run/ingest

# Manually generate digest
curl -X POST http://localhost:5000/admin/run/digest
```

## Important Notes
- Uses in-memory storage (MemStorage) - data resets on server restart
- Real RSS feeds are fetched during ingestion (140+ items from live sources)
- For production, consider migrating to PostgreSQL for persistence
- Export URLs are static (`/export/weekly.*`) and always serve latest digest
- Frontend uses client-side filtering (React state) for topic selection

## Known Limitations
1. In-memory storage means data loss on restart - consider adding persistence layer
2. No authentication/authorization on admin endpoints - add auth before production deployment
3. No rate limiting on RSS feeds - may hit API limits with frequent ingestion
4. Cross-source merging requires exact URL match - may miss some duplicates with different URL formats
