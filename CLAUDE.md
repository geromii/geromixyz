# Geromi.xyz - Personal Website

## Project Overview
Personal website for Jeremy Russell (internet name: Geromi) with blog posts, projects showcase, weekly journal, and about section.

## Tech Stack
- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui
- **Content**: MDX with Contentlayer2
- **Design**: Minimal, Notion-style aesthetic

## Project Structure
```
src/
├── app/
│   ├── page.tsx         # Homepage
│   ├── layout.tsx       # Root layout
│   ├── globals.css      # Global styles
│   └── [sections]/      # Blog, Projects, Journal, About pages (TBD)
├── components/
│   ├── navigation.tsx   # Mobile-friendly nav component
│   └── ui/              # shadcn/ui components
└── lib/
    └── utils.ts         # Utility functions

content/
├── posts/               # Blog posts (MDX)
├── projects/            # Project descriptions (MDX)
└── journal/             # Weekly journal entries (MDX)
```

## Key Features
- Mobile-responsive navigation with hamburger menu
- Clean, minimal design inspired by Notion
- MDX support for all content types
- Card-based layout for sections
- Light/dark mode support (built-in)

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Content Structure

### Blog Posts (content/posts/)
```mdx
---
title: "Post Title"
date: 2024-01-01
description: "Optional description"
---

Post content in MDX format...
```

### Projects (content/projects/)
```mdx
---
title: "Project Name"
description: "Project description"
date: 2024-01-01
url: "https://project-url.com" # Optional
repository: "https://github.com/..." # Optional
---

Project details in MDX format...
```

### Journal Entries (content/journal/)
```mdx
---
title: "Week X Journal"
date: 2024-01-01
week: "Week 1, 2024"
---

Weekly reflections...
```

## TODO
- [ ] Create individual section pages (/blog, /projects, /journal, /about)
- [ ] Add sample content for testing
- [ ] Implement search functionality (using Fuse.js or FlexSearch)
- [ ] Add RSS feed for blog posts
- [ ] Optimize for SEO
- [ ] Add social links
- [ ] Custom 404 page

## Design Decisions
- **Personal sidebar layout**: Fixed sidebar navigation with profile photo on desktop
- **Mobile-first**: Hamburger menu with full-screen overlay on mobile (z-index 60)
- **Subtle animations**: Gradient text animation, hover transitions, transform effects
- **Green/purple color scheme**: Primary (green), secondary (purple), accent (blue) with gradients
- **Personal touch**: Profile photo (baby_jeremy.jpg) prominently displayed
- **Non-template feel**: Moved away from card-based layout to more personal blog-style

## Current Layout Structure
```
Desktop: Sidebar (320px) + Main Content
- Sidebar: Logo, profile photo (128x128), navigation, footer
- Main: Welcome section with personal intro + content grid

Mobile: Header + Overlay Menu
- Header: Logo + hamburger (z-50)
- Overlay: Full-screen menu with photo + nav (z-60, pt-20 for header clearance)
```

## Color System
- Primary: Green (#6487... in oklch)
- Secondary: Purple (#6746... in oklch) 
- Accent: Blue (#8269... in oklch)
- All colors work in both light/dark modes
- Gradient animations on name/logo text

## Typography
- Sans: Plus Jakarta Sans (body text)
- Serif: Source Serif 4 (unused currently)
- Mono: JetBrains Mono (code/technical content)

## Technical Notes
- Using Contentlayer2 (community fork) as original Contentlayer is not actively maintained
- Tailwind CSS v4 is in use (latest version with new syntax)
- shadcn/ui components are configured with default Neutral theme
- Profile image: `/public/baby_jeremy.jpg` (Next.js Image component with optimization)
- Mobile menu z-index hierarchy: Header (z-50) < Overlay (z-60)
- Fixed dynamic className issue by using explicit class strings instead of template literals
- Grid background pattern using CSS linear-gradient for subtle texture

## Recent Changes (Latest Session)
- Completely redesigned from template-style cards to personal sidebar layout
- Added profile photo integration with proper responsive sizing
- Implemented full-screen mobile menu with proper stacking order
- Updated color scheme to green/purple/blue with gradient animations
- Removed Navigation component in favor of integrated layout
- Fixed mobile menu positioning issues with z-index and padding adjustments

## Known Issues Fixed
- Mobile menu overlay positioning behind header → Fixed with z-index 60 and pt-20
- Dynamic Tailwind classes not working → Fixed with explicit className strings
- Template-like appearance → Redesigned to personal blog aesthetic