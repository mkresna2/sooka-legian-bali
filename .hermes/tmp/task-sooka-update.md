# Sooka Website — Major Update: Use All PDF Images & Exact Wording

## Overview
Replace ALL Unsplash placeholder images with real architectural renders extracted from the PDF presentation. Every section must use multiple images from the PDF (as carousels/galleries) to showcase all concept renders. Use EXACT wording from the PDF for all section text.

## Working Directory
`/home/ade/sooka-legian-bali`

## Images Location
All images are in `/public/images/` — reference them as `/images/filename.jpeg` in code (Next.js serves from `/public/`).

## CRITICAL: Remove Unsplash Domain
In `next.config.ts`, REMOVE the `images.unsplash.com` remote pattern since we no longer use external images. Add `{ protocol: "https", hostname: "**" }` or just keep the local images setup.

Since all images are now LOCAL in `/public/images/`, use regular `<img>` tags OR Next.js `<Image>` with proper width/height props (not `fill` for non-hero images). For hero sections that use `fill`, that still works with local images from `/public/`.

## Section-by-Section Image Assignments

### 1. HERO SECTION (full-bleed background)
**Image:** `/images/page4_img1.jpeg` — SOOKA entrance render with bougainvillea, brick wall, daytime golden hour. This is THE hero image.
**Wording from PDF:**
- Eyebrow: "A Tropical Eco-Luxury Sanctuary"
- H1: "SOOKA – LEGIAN, BALI"
- Tagline: "Where Architecture Dissolves Into Nature"
- Keep the existing address, directions link, and intro card

### 2. EXPERIENCE CAROUSEL (amenities icons)
Keep the existing amenity icons carousel but update the items to match the PDF's 5 concepts:
- Entrance Experience (icon: DoorOpen or similar)
- Green Passage (icon: Leaf)
- Lobby, Lounge & Gym (icon: Landmark or Sofa)
- Pool & Sunken Bar (icon: Martini or Waves)
- The Iconic Banyan Tree (icon: TreePine or TreePalm)

### 3. ENTRANCE EXPERIENCE Section (NEW — multi-image gallery)
**Concept:** "Where Nature Leads" becomes "Entrance Experience" — use EXACT PDF wording.
**Text from PDF:**
- Eyebrow: "Entrance Experience"
- Title: "Where Nature Leads"
- Body: "The entrance is designed as a calm transition from the vibrant atmosphere of Legian into a warm and intimate resort experience. A massive brick wall frames the drop-off area, creating an earthy, timeless, and grounded character, softened by touches of bougainvillea that bring a vibrant tropical feel. Natural pebble stone pathways enhance the sense of barefoot luxury — relaxed, tactile, and deeply connected to Bali's coastal ambiance."

**Images (create an image carousel/gallery for this section):**
- `/images/page4_img1.jpeg` — Main entrance render, SOOKA sign, daytime (also hero, but repeat here is fine)
- `/images/page5_img2.jpeg` — SOOKA entrance at blue hour/twilight
- `/images/page6_img2.jpeg` — Drop-off with Balinese shrine, stone structures
- `/images/page7_img2.jpeg` — Stone feature wall + wooden louvers, twilight
- `/images/page3_img4.jpeg` — Bougainvillea on brick wall (detail shot)

Make this a 2-column layout: LEFT = text content, RIGHT = image carousel that auto-rotates or has prev/next buttons. Use Embla Carousel for the image carousel. Each image should fill the carousel viewport with rounded corners.

### 4. THE GREEN PASSAGE Section (multi-image gallery)
**Text from PDF:**
- Eyebrow: "The Green Passage"
- Title: "Before reaching the reception, nature welcomes you first"
- Body: "Before reaching the reception area, guests are welcomed through an indoor garden inspired by a greenhouse concept. This transitional space introduces a softer and more refreshing atmosphere, celebrating Bali not only as a coastal destination, but also as an island rich with lush tropical landscapes. Natural light, greenery, and layered vegetation create a calm sensory experience that reconnects guests with Bali's living nature."

**Images (carousel):**
- `/images/page9_img1.jpeg` — Main Green Passage render, vaulted roof, indoor garden, skylight
- `/images/page10_img1.jpeg` — Green Passage Option 1, top render
- `/images/page11_img1.jpeg` — Green Passage Option 2
- `/images/page1_img1.jpeg` — Circular oculus with indoor forest (concept mood)
- `/images/page1_img4.jpeg` — Indoor reflecting pool, grotto-style (concept mood)
- `/images/page8_img3.jpeg` — Indoor atrium/courtyard, top-down view

Layout: Same 2-column approach but with image on LEFT and text on RIGHT (alternating pattern). Carousel on the image side.

### 5. LOBBY, LOUNGE & GYM Section (multi-image gallery)
**Text from PDF:**
- Eyebrow: "Lobby, Lounge & Gym"
- Title: "The Social Heart of Sooka"
- Body: "The lobby and lounge embrace an eco-luxury concept that blends tropical warmth with contemporary elegance. Natural materials, lush greenery, and earthy tones create a relaxed yet refined atmosphere inspired by Bali's coastal lifestyle. A technology-integrated waterfall acts as a dynamic partition between the lobby lounge and the pool area, creating a sensory transition through the sound, movement, and reflection of water. Above, the mezzanine gym overlooks the space, bringing a subtle sense of energy and active lifestyle into the resort experience."

**Images (carousel):**
- `/images/page13_img3.jpeg` — Main render: communal table, sculptural wood wall, Joglo roof
- `/images/page14_img1.jpeg` — Lobby with mezzanine gym, biophilic design
- `/images/page15_img1.jpeg` — Lobby/Lounge/Gym Option 1, top render
- `/images/page16_img1.jpeg` — Lobby/Lounge/Gym Option 2

Layout: Text LEFT, carousel RIGHT (same as Entrance section).

### 6. POOL & SUNKEN BAR Section (full-bleed hero + gallery strip)
**Text from PDF:**
- Eyebrow: "Pool & Sunken Bar"
- Title: "A Lush Tropical Oasis"
- Body: "The pool area and sunken bar are designed as a lush tropical oasis, surrounded by carefully curated trees and landscaped gardens that create privacy, shade, and a strong connection to nature. The atmosphere balances relaxation and social energy, offering a seamless blend of resort leisure, tropical greenery, and understated eco-luxury by the beach."

**Primary hero image (full-bleed):** `/images/page20_img1.jpeg` — Poolside bar at night, dramatic blue-hour lighting

**Below the hero text, add a horizontal scrollable image strip with:**
- `/images/page18_img3.jpeg` — Pool with ornamental grasses, pendant lights
- `/images/page19_img1.jpeg` — Pool gazebo with white curtains
- `/images/page18_img6.jpeg` — Swim-up bar with woman
- `/images/page18_img5.jpeg` — Pool with tree, yellow lanterns
- `/images/page21_img3.jpeg` — Tree island in pool at night

### 7. THE ICONIC BANYAN TREE Section (full-bleed hero + gallery)
**Text from PDF:**
- Eyebrow: "Anchor: The Iconic Banyan Tree"
- Title: "The Iconic Banyan Tree"
- Body: "Designed as a tranquil focal point at the end of the pool deck. A mature banyan tree becomes a living landmark, creating shade, atmosphere, and a strong connection to Bali's natural and spiritual character. Surrounded by tropical landscaping and integrated seating, the space offers a calm retreat within the resort's eco-luxury experience."

**Primary hero image (full-bleed):** `/images/page22_img1.jpeg` — Courtyard with tree, brick wall, stone planter

**Below the hero text, add a horizontal scrollable image strip:**
- `/images/page23_img1.jpeg` — Same courtyard at night with crescent moon
- `/images/page21_img3.jpeg` — Tree island in pool at night
- `/images/page21_img5.jpeg` — Stone wall with dramatic lighting

### 8. ROOM TYPES Section
Keep the existing room cards but update images to use concept renders from the PDF where possible. Since there are no specific room renders in the PDF, keep the Unsplash-style approach but use ANY remaining PDF images that could represent rooms:
- `/images/page18_img2.jpeg` — Could work for a room detail
- `/images/page19_img2.jpeg` — Section of the pool area
- Otherwise, use the best available PDF images. If none work for rooms, remove the room cards section entirely and replace with a simpler "Stay" teaser that links to #newsletter.

### 9. SUSTAINABLE PHILOSOPHY Section
Keep the existing text but update it to be more aligned with the eco-luxury concept. Use image `/images/page1_img1.jpeg` (circular oculus with indoor forest) or `/images/page8_img3.jpeg` (indoor atrium) as a background accent.

### 10. NEWSLETTER & FOOTER
Keep as-is but update footer year to 2025.

## Image Carousel Component
Create a new component `src/components/image-carousel.tsx` that:
- Uses Embla Carousel (already installed)
- Accepts an array of image paths and optional alt texts
- Shows one image at a time with fade transition
- Has dot indicators at the bottom
- Auto-plays every 4 seconds
- Responsive: fills its container
- All images have rounded corners (`rounded-[2rem]`)
- Uses Framer Motion for fade animations between slides

## Implementation Requirements
1. ALL images must use local paths from `/public/images/` — NO external URLs
2. Update `next.config.ts` to remove `images.unsplash.com` remote pattern since we no longer need it
3. For `<Image>` components using `fill` prop, keep using `fill` (it works with local images)
4. For carousel images, use `<Image fill>` inside a container with `relative` and `aspect-[4/5]` or similar
5. Use EXACT wording from the PDF as specified above
6. Every section must have a multi-image carousel to showcase all PDF renders
7. Maintain the existing design system (colors, fonts, animations, Reveal component)
8. The page should still build with `npm run build` with zero errors
9. Mobile-responsive: carousels should be full-width on mobile, contained on desktop

## File Changes Expected
- `src/app/page.tsx` — Complete rewrite with new sections and local images
- `src/components/image-carousel.tsx` — NEW component for image carousels
- `src/components/experience-carousel.tsx` — Update amenities to match PDF concepts
- `src/components/site-header.tsx` — Update nav links to match new section IDs
- `next.config.ts` — Remove unsplash remote pattern, no longer needed
- `tailwind.config.ts` — No changes needed
- `src/app/globals.css` — Any new utility classes if needed

## Build Verification
After all changes, run `npm run build` and ensure it succeeds with zero errors.
