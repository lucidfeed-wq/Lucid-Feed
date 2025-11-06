# Lucid Feed

## Overview
Lucid Feed is a multi-tenant SaaS platform for personalized intelligent content curation. It aims to transform information overload into clarity by enabling users to discover and subscribe to feeds across various sources (journals, podcasts, Reddit, Substack, YouTube), providing AI-powered personalized digests, transparent quality scoring, and smart conversational AI assistance. The platform offers flexible subscription tiers and has the ambition to scale to a vast number of users with a continuously growing content catalog.

## User Preferences
I prefer clear, concise, and direct communication. When making changes, prioritize iterative development with clear explanations of each step. I value detailed explanations for complex technical decisions. For any significant architectural changes or new feature implementations, please ask for approval before proceeding. Do not make changes to the existing folder structure unless explicitly instructed.

## System Architecture

### UI/UX Decisions
The application features a modern React frontend with a Material Design aesthetic and Linear-inspired elements, utilizing Inter font, subtle elevation, and a three-level text hierarchy for a professional, clinical appearance. The brand logo is consistently displayed for recognition.

### Technical Implementations
Lucid Feed is a full-stack TypeScript project with React for the frontend and Express for the backend.
- **Email Configuration**: Supports personal Resend accounts (RESEND_USER_API_KEY, RESEND_USER_FROM) with priority over internal credentials. Public health endpoint at `/health/email` displays email configuration status (from address, API key source, domain hint) without authentication.
- **Content Ingestion**: Extracts full content from RSS feeds across journals (PDFs via Unpaywall), YouTube (transcripts), Reddit, Substack, and Podcasts.
- **Deduplication**: Uses SHA-256 hashing and URL canonicalization for cross-source deduplication.
- **Topic Taxonomy**: A two-layer system with 10 major categories and ~110 subtopics for flexible user personalization.
- **Ranking Algorithm**: Items are ranked based on quality (40%), recency (30%), and engagement (30%).
- **AI-Powered Summaries**: OpenAI (GPT-4o-mini) generates detailed individual item summaries and category-level meta-summaries for digests.
- **Hybrid RAG Chat System**: An intelligent chat architecture with digest-aware context, supporting RAG (similarity > 0.7), Hybrid (0.4-0.7), and General (< 0.4) modes with explicit citations and disclaimers. Features multi-scope search (current digest, all digests, saved items, folders) and tier-based access.
- **Personalization**: Users receive personalized digests based on selected topics, bookmarked items, and subscribed feeds. Two-dimensional filtering architecture: (1) Feed subscriptions define trusted sources, (2) Topic preferences (favoriteTopics) filter ingested content. Per-category topic filtering with intelligent fallbacks ensures all digest sections remain populated even when topic matches are sparse in specific categories (journals/YouTube/community).
- **Digest Generation**: Weekly or daily personalized digests, with historical archives.
- **Quality Scoring**: Transparent, multi-signal assessment based on citation metrics, author credibility, methodology quality, community verification, and recency, including content quality filtering.
- **Multi-Tenant SaaS**: Supports user-level feed subscriptions and personalized digests.
- **Subscription Tiers**: Free, Premium, and Pro tiers with enforced usage limits for feed subscriptions, chat messages, and digest frequency. Integrated with Stripe for payment processing.
- **Automated Scheduling**: `node-cron` manages daily ingestion, digest generation, and nightly topic validation cleanup.
- **Feed Discovery**: A browsable directory with filters and user submission for admin approval.
- **Job Management**: Lightweight PostgreSQL job queue with retry logic and dead-letter queue.
- **Admin Features**: Job observability, token cost tracking, bulk enrichment, and test account management.
- **Automated Database Seeding**: Idempotently seeds 500 curated feeds from `feed-catalog.json` on app startup if the catalog is empty.
- **Enhanced Onboarding**: Users onboard by selecting categories, subtopics, source types, and subscribing to 50 dynamically filtered feed suggestions. An initial personalized digest is generated immediately.
- **User-Driven Feed Requests**: Users can request feeds, which are processed daily, and notifications are sent when matches are found.
- **Real-Time Self-Healing Feed System**: Advanced feed recovery system that automatically detects and fixes failing feeds in real-time during digest generation. Features include:
  - **Healing Orchestrator**: Diagnoses and repairs feeds within 2-second SLA using multiple strategies (DNS checks, redirect following, format detection)
  - **Smart Recovery Tactics**: Prioritized tactics including redirect resolution, format fallback, cached content, and source-specific adapters
  - **Learning Loop**: Machine learning system that optimizes healing tactics based on success rates and patterns across similar feed types
  - **Alternative Discovery**: Background service with 5 strategies to automatically find replacement feeds when originals fail permanently
  - **User Notifications**: Simple, non-technical notifications about feed issues with daily digest emails and in-app banner
  - **Graceful Fallback**: Always delivers content using cached data when healing fails
  - **Comprehensive Monitoring**: Admin dashboards with healing metrics, success rates, failure patterns, and per-feed history

### System Design Choices
- **Backend Architecture**: Modular design separating business logic, services, content fetching, and infrastructure.
- **Frontend Architecture**: Organized into `pages/`, `components/`, and `hooks/`.
- **Data Model**: Clearly defined schemas for core entities using Drizzle ORM.
- **API Endpoints**: Categorized by function (public, auth, user preferences, admin).

## External Dependencies
- **PostgreSQL**: Relational database.
- **Drizzle ORM**: TypeScript ORM for database interaction.
- **Replit Auth**: OpenID Connect for user authentication.
- **OpenAI API**: For AI summarization, embeddings, and the RAG chat system.
- **Express.js**: Backend web framework.
- **React**: Frontend UI library.
- **node-cron**: For scheduling automated tasks.
- **connect-pg-simple**: PostgreSQL session store.
- **Passport.js**: Authentication middleware.
- **Zod**: Schema validation.
- **Stripe**: Payment processing for subscriptions.
- **Resend**: Email API for alerts and notifications.
- **Google reCAPTCHA v2**: For bot protection during onboarding.
- **Unpaywall API**: To access open-access journal PDFs.
- **youtube-transcript**: For extracting YouTube video transcripts.