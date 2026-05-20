# Task: Build Sooka – Legian Bali Hotel Website

## Project
Create a complete Next.js 14+ (App Router) single-property luxury hotel website for "Sooka – Legian, Bali". This is a greenfield project.

## Repository
`/home/ade/sooka-legian-bali` — already git-initialized.

## Design Reference
Mimic the design style of https://www.1hotels.com/hanalei-bay:
- Long-scroll single-page homepage with editorial luxury feel
- Generous whitespace, full-bleed imagery, minimal UI chrome
- Warm cream background (#F5F0E8), not pure white
- Scroll-driven narrative sections with fade-in animations
- Serif headings (Playfair Display), sans-serif body (Inter)

## Brand & Content
- **Hotel Name:** Sooka – Legian, Bali
- **Tagline:** A Tropical Eco-Luxury Sanctuary Where Architecture Dissolves Into Nature
- **Color Palette:**
  - Primary BG: #F5F0E8 (warm cream)
  - Text: #2C2C2C (dark charcoal)
  - Accent green: #2D5A3D
  - Terracotta: #B87333
  - Sand: #D4C5A9
- **Typography:** Playfair Display (headings serif) + Inter (body sans-serif) via Google Fonts

## Homepage Sections (in scroll order)
1. **Announcement Bar** — Rotating messages at top
2. **Sticky Navigation** — Logo "SOOKA" (left), menu: STAY / TASTE / EXPERIENCE / WELLNESS / GATHER / OFFERS (center), Language + Members + Call + "CHECK AVAILABILITY" CTA button (right). Mobile hamburger menu.
3. **Hero Section** — Full-bleed image/video background with overlay text:
   - H1: "SOOKA – LEGIAN, BALI"
   - Subtitle: "A TROPICAL ECO-LUXURY SANCTUARY"
   - Address: "JALAN LEGIAN, KUTA, BALI"
   - "GET DIRECTIONS" link
   - Welcome paragraph: "Welcome to Sooka, a tropical eco-luxury sanctuary in the heart of Legian, Bali. Where architecture dissolves into nature, every space is designed to reconnect you with Bali's living landscape — from the iconic banyan tree to the sunken bar by the pool. Your journey to barefoot luxury starts here."
4. **Experience Carousel** — Horizontal icon slider with 12 amenities: Green Passage, Lobby & Lounge, Anatomy Gym, Pool & Sunken Bar, Banyan Tree, Eco-Luxury Design, Beachfront, Cultural Experiences, Sustainable Cuisine, Outdoor Pursuits, Pet Friendly, Weddings & Events. Use Lucide React icons.
5. **"Where Nature Leads"** — Z-pattern: large image left, text right.
   - Heading: "Where Nature Leads"
   - Body: "The entrance is designed as a calm transition from the vibrant atmosphere of Legian into a warm and intimate resort experience. A massive brick wall frames the drop-off area, creating an earthy, timeless, and grounded character, softened by touches of bougainvillea that bring a vibrant tropical feel. Natural pebble stone pathways enhance the sense of barefoot luxury — relaxed, tactile, and deeply connected to Bali's coastal ambiance."
   - "EXPLORE THE ENTRANCE" link
6. **The Green Passage** — Reversed Z-pattern: text left, image right.
   - Heading: "The Green Passage"
   - Body: "Before reaching the reception area, guests are welcomed through an indoor garden inspired by a greenhouse concept. This transitional space introduces a softer and more refreshing atmosphere, celebrating Bali not only as a coastal destination, but also as an island rich with lush tropical landscapes. Natural light, greenery, and layered vegetation create a calm sensory experience that reconnects guests with Bali's living nature."
   - "EXPLORE" link
7. **Lobby, Lounge & Gym** — Z-pattern: image left, text right.
   - Heading: "Lobby, Lounge & Gym"
   - Body: "The lobby and lounge embrace an eco-luxury concept that blends tropical warmth with contemporary elegance. Natural materials, lush greenery, and earthy tones create a relaxed yet refined atmosphere inspired by Bali's coastal lifestyle. A technology-integrated waterfall acts as a dynamic partition between the lobby lounge and the pool area, creating a sensory transition through the sound, movement, and reflection of water. Above, the mezzanine gym overlooks the space, bringing a subtle sense of energy and active lifestyle into the resort experience."
   - "EXPLORE" link
8. **Pool & Sunken Bar** — Full-width image with text overlay or reversed Z-pattern.
   - Heading: "Pool & Sunken Bar"
   - Body: "The pool area and sunken bar are designed as a lush tropical oasis, surrounded by carefully curated trees and landscaped gardens that create privacy, shade, and a strong connection to nature. The atmosphere balances relaxation and social energy, offering a seamless blend of resort leisure, tropical greenery, and understated eco-luxury by the beach."
   - "EXPLORE" link
9. **The Iconic Banyan Tree** — Cinematic full-bleed section:
   - Heading: "The Iconic Banyan Tree"
   - Body: "Designed as a tranquil focal point at the end of the pool deck. A mature banyan tree becomes a living landmark, creating shade, atmosphere, and a strong connection to Bali's natural and spiritual character. Surrounded by tropical landscaping and integrated seating, the space offers a calm retreat within the resort's eco-luxury experience."
   - "EXPLORE" link
10. **Stay / Room Types** — Grid of 4 room cards (placeholder):
    - "Garden Room" — "A serene retreat surrounded by tropical greenery."
    - "Pool Access Room" — "Step directly from your terrace into the pool."
    - "Banyan Suite" — "Elevated luxury with views of the iconic banyan tree."
    - "Penthouse" — "The pinnacle of Sooka's eco-luxury experience."
    Each card: image + name + description + "BOOK NOW" button
11. **Sustainable Philosophy** — Editorial text section:
    - Heading: "Rooted in Nature"
    - Body: "At Sooka, sustainability is not an afterthought — it's the foundation. From locally sourced materials and traditional Balinese craftsmanship to zero-waste dining and native landscaping, every decision is guided by a deep respect for the island and its communities. We believe luxury and responsibility can coexist beautifully."
12. **Newsletter Signup** — "Stay Connected" heading + email input + "SUBSCRIBE" button
13. **Footer** — Multi-column:
    - Col 1: SOOKA logo + "A Tropical Eco-Luxury Sanctuary" + address + phone + email
    - Col 2: Explore — Stay, Taste, Experience, Wellness, Gather
    - Col 3: Sooka — Our Story, Sustainability, Careers, Press
    - Col 4: Social icons (Instagram, Facebook, X)
    - Bottom bar: Terms, Privacy, Accessibility, © 2025 Sooka Legian Bali

## Technical Requirements
- Next.js 14+ with App Router (src/app directory structure)
- Tailwind CSS v3 with custom design tokens in tailwind.config.ts
- Framer Motion for scroll-triggered animations (fade-in, parallax on images)
- Embla Carousel for the experience icon carousel
- Lucide React for icons
- Google Fonts: Playfair Display + Inter via next/font
- Responsive: mobile-first, hamburger menu on mobile
- Use Next.js Image component with placeholder images (unsplash URLs for tropical/bali/luxury hotel images — pick 10-15 beautiful relevant photos)
- Dark footer, cream body background
- "CHECK AVAILABILITY" button is prominent (dark bg, white text)
- "EXPLORE" links are minimal text links (no heavy buttons)
- Smooth scroll behavior
- Accessibility: proper heading hierarchy, alt text, aria labels

## Setup Steps
1. `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`
2. Install: `npm install framer-motion embla-carousel-react lucide-react`
3. Configure tailwind.config.ts with custom colors, fonts
4. Build all components and the homepage

## DO NOT
- Do not create sub-pages (Stay, Taste, etc.) — only the homepage for now
- Do not add a booking engine integration — "CHECK AVAILABILITY" is just a button with no backend
- Do not add analytics or CMS
- Do not add i18n/multi-language yet
- Do not touch files outside `/home/ade/sooka-legian-bali`

## Verification
After building, run: `npm run build` to verify no errors. Fix any build issues before finishing.
Provide a short summary of all files created/modified.
