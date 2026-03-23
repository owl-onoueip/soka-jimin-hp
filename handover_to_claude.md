# Technical Handover for Claude Code

This project is the official website for **"草加自民・無所属の会議員団" (Soka Liberal Democratic/Independent Member Group)**.

## Project Details
- **Base Directory**: `soka-jimin-hp/`
- **Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React.
- **Goal**: Mobile-first website for election support with strong CTA (LINE/Join).

## Key Files & Structure
- `src/app/`: App router pages (`page.tsx`, `members/`, `support/`).
- `src/components/`:
  - `MemberCarousel.tsx`: Auto-scrolling, infinite-loop member list with touch support.
  - `FixedCTA.tsx`: Floating buttons for Support/LINE at the bottom of the screen.
- `src/data/members.ts`: Data for the 7 members.
- `public/`: Assets (images, background WebP images).

## Development Commands
- `npm run dev`: Start dev server.
- `npm run build`: Build for production.
- `npm run export`: Static export to `out/` (for Cloudflare Pages).

## Critical Implementation Rules (See AI_RULES.md)
1. **Design Protection**: Do not modify existing CSS/styles in `globals.css` or layout without explicit approval.
2. **Encapsulation**: Create new classes for new styles instead of overwriting existing ones.
3. **Interactive Sync**: Use `isProgrammatic...Ref` (useRef) to prevent user interaction (swipe/click) from conflicting with auto-scrolling logic (e.g., in Carousel).
4. **Language**: Maintain Japanese text in HTML and comments.

## Current Progress & Tasks
- [x] Initial build of Top, Member, and Support pages.
- [x] Responsive layout with Fixed CTA.
- [x] Background optimization (WebP) and animations.
- [ ] News detail page (`/news/[id]`).
- [ ] Policy page (`/policy`).
- [ ] Form backend integration.

Please read `AI_RULES.md` and `AI_CO-CREATION_GUIDE.md` in the root and `soka-jimin-hp/` before proceeding with any technical tasks.
