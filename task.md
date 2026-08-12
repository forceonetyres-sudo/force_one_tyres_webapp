# Tasks: Force One Tyres - Premium Showcase Website

## Objective
Build a high-performance, SEO-optimized promotional web application for "Force One Tyres", located in Dubai. The design language should mimic top-tier brands (like Pirelli or Michelin) with a premium, sleek aesthetic, but it must be built entirely as a lightweight, static-generated Next.js (App Router) site. The primary conversion goal is driving users to a WhatsApp chat.

## Technical & Design Guidelines
- **Framework**: Next.js (App Router) using React server components for SEO.
- **Styling**: Tailwind CSS. 
- **Aesthetic**: Premium, high-contrast (consider a dark mode or deep charcoal primary theme with striking accents). Keep the UI clean and content-focused. Avoid heavy animations; use simple, CSS-based fade-ins to maintain instant load times.
- **Assets**: Use semantic `<Image />` tags with placeholders pointing to `/public/assets/` (e.g., `logo.png`, `hero-car.jpg`, `ev-tyre.jpg`).

## Content & Section Architecture

1. **Global Metadata & SEO**:
   - Title: Force One Tyres | Premium EV & Standard Tyres in Dubai
   - Description: Expert tyre fitting, alignment, and balancing in Ras Al Khor. Explore our premium range of EV and non-EV tyres.

2. **Hero Section (The "Premium Brand" Feel)**:
   - Full-width hero section with a dark, sleek background placeholder for a premium car.
   - Bold, modern typography emphasizing performance and safety.
   - Dual CTAs: "Explore Tyres" (scrolls to products) and "Contact via WhatsApp" (triggers chat).

3. **"Shop by Category" Grid (Mimicking brand sites)**:
   - Instead of a heavy e-commerce filter, create a sleek 4-block visual grid.
   - Categories: **EV Tyres**, **Standard & Sedan**, **SUV & 4x4**, **Performance/Sports**.
   - Hover effects on these cards should feel premium (subtle scale or border glow).

4. **EV vs. Standard Highlight Block**:
   - A side-by-side informational section explaining why EV tyres differ from standard tyres (noise reduction, heavier load rating, rolling resistance). This adds immense SEO value and positions the brand as knowledgeable experts.

5. **Services Section**:
   - Icon-based grid displaying operational services: 
     - Professional Tyre Fitting
     - 3D Wheel Alignment
     - Computerized Wheel Balancing
     - Puncture Repair & Inspection

6. **Location & Footer**:
   - Embed the actual business details:
     - Address: RAS AL KHOR - IND Area 2 - Dubai - United Arab Emirates
     - Hours: Monday - Sunday, 8:00 AM - 7:30 PM
   - Add a placeholder for a Google Maps iframe embed.

7. **The Conversion Engine (Sticky Contact)**:
   - Implement a floating WhatsApp Action Button (FAB) locked to the bottom-right.
   - Link: `https://wa.me/971545141499`
   - Design: Standard WhatsApp green, utilizing a messaging icon, with a subtle pulse effect to draw the eye.

## Implementation Steps for Agent
1. Scaffold the Next.js application with Tailwind CSS.
2. Build reusable UI components (Buttons, Service Cards, Category Cards).
3. Construct the single-page scroll architecture combining the Hero, Categories, Tech Highlights, and Services.
4. Integrate the hardcoded business details into the footer and implement the sticky WhatsApp button.
5. Ensure 100% responsive design (mobile-first approach).