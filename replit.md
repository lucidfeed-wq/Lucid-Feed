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
- **Content Ingestion**: RSS feeds from over 130 sources (journals, Reddit, Substack, YouTube) are ingested.
- **Deduplication**: Cross-source deduplication is achieved using SHA-256 hashing after URL canonicalization.
- **Topic Tagging**: Content is automatically tagged with over 30 functional medicine topics using regex-based matching.
- **Ranking Algorithm**: Items are ranked based on a weighted score considering quality (40%), recency (30%), and engagement (30%).
- **AI-Powered Summaries**: OpenAI integration (GPT-4o-mini) generates detailed individual item summaries (5-7 insights, 150-200 words, 50-75 word clinical takeaways) and category-level meta-summaries for digest sections (75-100 word overview, 5 key themes, 75-100 word clinical implications).
- **Database**: PostgreSQL is used for persistence, managed with Drizzle ORM.
- **Authentication**: User authentication is implemented via Replit Auth (OpenID Connect) with session management.
- **Personalization**: Users can select preferred topics and bookmark items.
- **Digest Generation**: Weekly digests are automatically generated, comprising research highlights, community trends, and expert commentary sections.
- **Export Capabilities**: Digests can be exported in JSON, Markdown, and RSS formats.
- **Automated Scheduling**: Daily ingestion and weekly digest generation are managed by `node-cron`.

### Feature Specifications
- **RSS Feed Ingestion**: Supports ingestion from journals, Reddit, Substack, and YouTube, with expanded source lists.
- **Deduplication**: SHA-256 hashing with URL canonicalization.
- **Automated Topic Tagging**: 30+ functional medicine topics.
- **Ranking Algorithm**: Quality, recency, and engagement-based.
- **Digest Generation**: Weekly, with 3 sections.
- **AI Summary Generation**: Individual item summaries (insights, clinical takeaways) and category-level summaries (overview, key themes, clinical implications).
- **PostgreSQL Persistence**: Stores items, summaries, digests, users, sessions, user preferences, and saved items.
- **User Authentication**: Replit Auth (Google/GitHub/email).
- **Personalized Topic Preferences**: Users select favorite topics.
- **Saved Items**: Users can bookmark and view saved content.
- **Export Options**: JSON, Markdown, RSS.
- **Automated Scheduling**: Daily ingestion, weekly digest generation.
- **Complete Frontend UI**: Material Design + Linear-inspired.
- **Client-side Filtering**: Topic and source type filtering.
- **Digest Archive**: View historical digests.

### System Design Choices
- **Backend Architecture**: Structured with `core/` modules for business logic, `services/` for specific operations (ingest, digest, exports), `sources/` for content fetching, and `infrastructure/` for database, authentication, and scheduling.
- **Frontend Architecture**: Organized into `pages/` for views, `components/` for reusable UI elements, and `hooks/` for state management.
- **Data Model**: Clearly defined schemas for `Item`, `Digest`, `User`, `Summary`, `UserPreference`, and `SavedItem` using Drizzle ORM.
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