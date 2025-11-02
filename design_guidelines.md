# Design Guidelines: Functional Medicine Intelligence Feed

## Design Approach

**Selected Approach:** Design System - Material Design + Linear-inspired typography  
**Justification:** This is a utility-focused, information-dense research digest platform requiring credibility, readability, and efficient data presentation. Drawing from Material Design's structured data patterns and Linear's clean typography creates a professional, clinical aesthetic appropriate for medical professionals and researchers.

**Key References:**
- Material Design for card components and data display patterns
- Linear for typography hierarchy and spacing discipline
- PubMed/Nature for research content credibility cues

## Core Design Principles

1. **Information Clarity:** Every element serves content discovery and comprehension
2. **Professional Credibility:** Visual treatment reinforces research-grade quality
3. **Efficient Scanning:** Users should quickly identify relevant research and insights
4. **Persistent Context:** Source type, methodology, and evidence level always visible

---

## Typography

**Font Stack:**
- Primary: Inter (Google Fonts) - 400, 500, 600 weights
- Monospace: JetBrains Mono (Google Fonts) for DOIs, source IDs - 400 weight

**Hierarchy:**
- Page Titles: text-4xl (36px), font-semibold, tracking-tight
- Section Headers: text-2xl (24px), font-semibold
- Item Titles: text-lg (18px), font-medium, leading-snug
- Body Text: text-base (16px), font-normal, leading-relaxed
- Metadata: text-sm (14px), font-normal
- Labels/Badges: text-xs (12px), font-medium, uppercase tracking-wide

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16
- Micro spacing (badges, inline elements): 2
- Component internal padding: 4, 6
- Card padding: 6, 8
- Section spacing: 12, 16
- Page margins: 16

**Grid Structure:**
- Container: max-w-7xl mx-auto px-6 lg:px-8
- Main Content Area: Single column max-w-4xl for digest content
- Archive Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

**Responsive Breakpoints:**
- Mobile: base (full width stacking)
- Tablet: md: (two-column archive grid)
- Desktop: lg: (three-column archive grid, expanded metadata)

---

## Component Library

### 1. Navigation Header
**Structure:** Fixed top navigation with subtle border
- Logo/App Name (left): text-xl font-semibold
- Navigation Links (center): "Latest Digest" | "Archive" | "About"
- Action Area (right): Export dropdown menu
- Height: h-16
- Padding: px-6

### 2. Digest View (Main Content)

**Weekly Digest Header:**
- Date Range Display: text-3xl font-semibold mb-2
- Generated Timestamp: text-sm metadata style
- Digest Stats: Inline badges showing item counts per section
- Padding: pb-8 mb-12 with bottom border

**Section Structure (3 sections):**

Each section follows this pattern:
- Section Title: text-2xl font-semibold mb-6
- Section Description: text-sm mb-8 (1-2 sentence context)
- Item Grid: space-y-6 (stacked cards)

**Section Organization:**
1. **Research Highlights** - Journal articles and preprints
2. **Community Trends** - Reddit and Substack discussions
3. **Expert Commentary** - YouTube content with optional journal merges

### 3. Item Card Component

**Card Container:**
- Border: border with rounded-lg
- Padding: p-6
- Hover State: Subtle elevation change (shadow-sm to shadow-md transition)

**Card Header:**
- Source Badge + Methodology Badge (inline-flex gap-2)
- Publication Date (text-sm, right-aligned)
- Margin: mb-4

**Card Title:**
- text-lg font-medium mb-3
- Clickable link with subtle underline on hover
- max-w-prose for optimal reading width

**Card Content:**
- Key Insights: Leading section, text-base mb-4
- Clinical Takeaway: Distinct treatment (perhaps bordered-left with pl-4)
- Excerpt: text-sm, line-clamp-3 for truncation

**Card Footer:**
- Topic Tags: Horizontal scroll on mobile, flex-wrap on desktop
- Engagement Metrics: Small icons + numbers (comments, upvotes, views)
- Journal Name: text-xs, italicized if present
- Spacing: mt-4 pt-4 with top border

### 4. Badge System

**Source Type Badges:**
- Journal: Solid treatment
- Reddit: Outlined style  
- Substack: Outlined style
- YouTube: Outlined style
- Padding: px-2 py-1
- Border-radius: rounded-md

**Methodology Badges:**
- RCT, Cohort, Case, Review, Meta, Preprint, NA
- Consistent size: px-2 py-1
- Different visual weights based on evidence strength

**Evidence Level Badges:**
- A, B, C indicators
- Subtle differentiation in treatment
- Inline with methodology badge

**Topic Tags:**
- Rounded-full, px-3 py-1
- text-xs font-medium
- Clickable for filtering
- Max 5 visible per card with "+N more" overflow

### 5. Filtering Interface

**Topic Filter Panel:**
- Sticky sidebar on desktop (left side, w-64)
- Collapsible drawer on mobile
- Filter chips in vertical list
- Active state clearly differentiated
- Search input at top: px-4 py-2 rounded-lg

**HTMX Integration:**
- Instant filtering without page reload
- Loading state: Subtle opacity change on content area
- Active filter count badge on mobile toggle button

### 6. Archive Grid View

**Archive Card (Simplified Digest Preview):**
- Compact card: p-6
- Week Title: text-xl font-semibold
- Date Range: text-sm
- Item Count Summary: "24 research papers, 18 community posts, 8 videos"
- Visual Indicator: Small preview of top topics
- CTA: "View Digest" button at bottom

**Grid Layout:**
- Single column mobile
- 2 columns tablet (md:grid-cols-2)
- 3 columns desktop (lg:grid-cols-3)
- Gap: gap-6
- Padding: py-12

### 7. Export Menu Dropdown

**Trigger:** Button with icon + "Export" text
**Menu Items:**
- Download JSON
- Download Markdown  
- Subscribe to RSS
- Padding: py-2 px-4 per item
- Icons: Left-aligned with text
- Width: w-48

### 8. Empty States

**No Results:**
- Centered container: max-w-md mx-auto py-16
- Icon: Large, subtle
- Heading: text-xl mb-2
- Description: text-sm
- Action: "Clear Filters" or "View All" button

### 9. Loading States

**Skeleton Screens:**
- Card-shaped placeholders with animated shimmer
- Match exact dimensions of actual cards
- Preserve layout structure during load

---

## Page Layouts

### Home Page (Latest Digest)
1. Navigation Header
2. Digest Header with metadata
3. Three content sections (Research, Community, Expert)
4. Each section contains 5-10 item cards
5. Footer with export links

### Archive Page
1. Navigation Header
2. Page Title: "Digest Archive" - text-3xl mb-8
3. Grid of digest preview cards
4. Pagination if needed (bottom)

### Individual Digest Page (Permalink)
- Identical to home page structure
- Shareable URL
- Export options in header

---

## Interaction Patterns

**Card Interactions:**
- Entire card clickable to item source
- Title link opens in new tab (external indicator icon)
- Topic tags filter on click (HTMX)
- Engagement metrics non-interactive (informational)

**Filter Interactions:**
- Click topic tag anywhere → filters digest
- Multi-select allowed (union of topics)
- Clear all filters button always visible when active
- URL updates with filter state

**Export Interactions:**
- Dropdown menu on header
- Downloads trigger immediately (no modal)
- RSS link copies to clipboard with toast notification

---

## Spacing & Rhythm

**Vertical Rhythm:**
- Page padding: py-8
- Section spacing: mb-12 or mb-16
- Card spacing: space-y-6 in stacks
- Component internal: 4, 6, 8 units

**Horizontal Rhythm:**
- Page container: px-6 lg:px-8
- Card internal: px-6
- Inline elements: gap-2 or gap-4

---

## Special Considerations

**Clinical Credibility Indicators:**
- Evidence level badges prominently displayed
- Methodology always visible
- Source type immediately scannable
- Journal names for research items

**Information Density Balance:**
- Don't show full abstracts in cards
- Use line-clamp for excerpts
- Progressive disclosure: Click for full item
- Preserve critical metadata (date, source, methodology)

**Accessibility:**
- All badges have semantic meaning through icons + text
- Color not sole differentiator for badge types
- Keyboard navigation for all filters
- Focus states clearly visible

---

## Images

**No Hero Image Required** - This is a utility application focused on content delivery, not marketing. Visual treatment emphasizes clean typography and structured data presentation.

**Icon Usage:**
- Use Heroicons (CDN) throughout
- Source type icons in badges (newspaper, chat, video-camera, document-text)
- Methodology icons where appropriate
- Export menu icons (download, rss)
- Size: w-4 h-4 for inline, w-5 h-5 for standalone