"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Dumbbell,
  Flower2,
  GlassWater,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPinned,
  Martini,
  MessagesSquare,
  Mountain,
  PawPrint,
  Sailboat,
  Trees,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { ExperienceCarousel } from "@/components/experience-carousel";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

const amenities = [
  { label: "Green Passage", icon: Leaf },
  { label: "Lobby & Lounge", icon: Landmark },
  { label: "Anatomy Gym", icon: Dumbbell },
  { label: "Pool & Sunken Bar", icon: Martini },
  { label: "Banyan Tree", icon: Trees },
  { label: "Eco-Luxury Design", icon: Flower2 },
  { label: "Beachfront", icon: Sailboat },
  { label: "Cultural Experiences", icon: HeartHandshake },
  { label: "Sustainable Cuisine", icon: UtensilsCrossed },
  { label: "Outdoor Pursuits", icon: Mountain },
  { label: "Pet Friendly", icon: PawPrint },
  { label: "Weddings & Events", icon: GlassWater },
];

const roomCards = [
  {
    name: "Garden Room",
    description: "A serene retreat surrounded by tropical greenery.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pool Access Room",
    description: "Step directly from your terrace into the pool.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Banyan Suite",
    description: "Elevated luxury with views of the iconic banyan tree.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Penthouse",
    description: "The pinnacle of Sooka's eco-luxury experience.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
];

const narrativeSections = [
  {
    id: "nature",
    eyebrow: "Arrival",
    title: "Where Nature Leads",
    body: "The entrance is designed as a calm transition from the vibrant atmosphere of Legian into a warm and intimate resort experience. A massive brick wall frames the drop-off area, creating an earthy, timeless, and grounded character, softened by touches of bougainvillea that bring a vibrant tropical feel. Natural pebble stone pathways enhance the sense of barefoot luxury - relaxed, tactile, and deeply connected to Bali's coastal ambiance.",
    link: "Explore the Entrance",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    alt: "A tropical arrival court with layered greenery and stone textures.",
  },
  {
    id: "taste",
    eyebrow: "Transition",
    title: "The Green Passage",
    body: "Before reaching the reception area, guests are welcomed through an indoor garden inspired by a greenhouse concept. This transitional space introduces a softer and more refreshing atmosphere, celebrating Bali not only as a coastal destination, but also as an island rich with lush tropical landscapes. Natural light, greenery, and layered vegetation create a calm sensory experience that reconnects guests with Bali's living nature.",
    link: "Explore",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80",
    alt: "A lush greenhouse-inspired passage filled with tropical planting.",
  },
  {
    id: "wellness",
    eyebrow: "Social Heart",
    title: "Lobby, Lounge & Gym",
    body: "The lobby and lounge embrace an eco-luxury concept that blends tropical warmth with contemporary elegance. Natural materials, lush greenery, and earthy tones create a relaxed yet refined atmosphere inspired by Bali's coastal lifestyle. A technology-integrated waterfall acts as a dynamic partition between the lobby lounge and the pool area, creating a sensory transition through the sound, movement, and reflection of water. Above, the mezzanine gym overlooks the space, bringing a subtle sense of energy and active lifestyle into the resort experience.",
    link: "Explore",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    alt: "An airy resort lobby with layered textures and warm tropical light.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <AnnouncementBar />
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
            alt="Sunset over a tropical Bali beach resort."
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>

        <div className="section-shell relative flex min-h-[calc(100vh-8rem)] items-end py-20 sm:py-28 lg:py-36">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
            <Reveal className="max-w-3xl text-cream">
              <p className="mb-5 text-xs uppercase tracking-[0.38em] text-cream/80">
                A Tropical Eco-Luxury Sanctuary
              </p>
              <h1 className="text-5xl leading-none tracking-[0.08em] text-balance sm:text-6xl lg:text-8xl">
                SOOKA - LEGIAN, BALI
              </h1>
              <div className="mt-8 space-y-3 text-sm uppercase tracking-[0.26em] text-cream/80">
                <p>Jalan Legian, Kuta, Bali</p>
                <a
                  href="https://maps.google.com/?q=Jalan+Legian+Kuta+Bali"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-cream/60 pb-1 hover:text-white"
                >
                  <MapPinned className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal
              delay={0.15}
              className="max-w-xl justify-self-end rounded-[2rem] border border-white/15 bg-white/8 p-7 text-sm leading-7 text-cream/90 backdrop-blur-md sm:p-8"
            >
              <p>
                Welcome to Sooka, a tropical eco-luxury sanctuary in the heart
                of Legian, Bali. Where architecture dissolves into nature, every
                space is designed to reconnect you with Bali&apos;s living
                landscape - from the iconic banyan tree to the sunken bar by
                the pool. Your journey to barefoot luxury starts here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell py-20 sm:py-24 lg:py-28">
        <Reveal>
          <ExperienceCarousel amenities={amenities} />
        </Reveal>
      </section>

      {narrativeSections.map((section, index) => (
        <section
          key={section.title}
          id={section.id}
          className="section-shell py-16 sm:py-20 lg:py-24"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal
              className={index % 2 === 1 ? "lg:order-2" : ""}
              y={60}
            >
              <motion.div
                initial={{ scale: 1.06, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-soft"
              >
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </Reveal>

            <Reveal
              className={index % 2 === 1 ? "lg:order-1" : ""}
              delay={0.1}
            >
              <p className="kicker">{section.eyebrow}</p>
              <h2 className="mt-4 max-w-xl text-4xl text-balance text-charcoal sm:text-5xl">
                {section.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-charcoal/78 sm:text-lg">
                {section.body}
              </p>
              <a href="#stay" className="editorial-link mt-8">
                {section.link}
              </a>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative min-h-[540px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80"
              alt="A tropical swimming pool with lush greenery and lounge spaces."
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-cream sm:p-10 lg:max-w-2xl lg:p-14">
              <p className="kicker !text-cream/70">Leisure</p>
              <h2 className="mt-4 text-4xl text-balance sm:text-5xl">
                Pool &amp; Sunken Bar
              </h2>
              <p className="mt-5 text-sm leading-7 text-cream/85 sm:text-base">
                The pool area and sunken bar are designed as a lush tropical
                oasis, surrounded by carefully curated trees and landscaped
                gardens that create privacy, shade, and a strong connection to
                nature. The atmosphere balances relaxation and social energy,
                offering a seamless blend of resort leisure, tropical greenery,
                and understated eco-luxury by the beach.
              </p>
              <a href="#gather" className="mt-8 inline-block editorial-link !text-cream">
                Explore
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="gather"
        className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-36"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1800&q=80"
            alt="A dramatic banyan tree canopy in a serene tropical setting."
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/30" />
        </div>

        <Reveal className="section-shell relative text-cream">
          <p className="kicker !text-cream/70">Living Landmark</p>
          <h2 className="mt-4 max-w-2xl text-4xl text-balance sm:text-5xl lg:text-6xl">
            The Iconic Banyan Tree
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-cream/84 sm:text-lg">
            Designed as a tranquil focal point at the end of the pool deck. A
            mature banyan tree becomes a living landmark, creating shade,
            atmosphere, and a strong connection to Bali&apos;s natural and
            spiritual character. Surrounded by tropical landscaping and
            integrated seating, the space offers a calm retreat within the
            resort&apos;s eco-luxury experience.
          </p>
          <a href="#stay" className="mt-8 inline-block editorial-link !text-cream">
            Explore
          </a>
        </Reveal>
      </section>

      <section id="stay" className="section-shell py-20 sm:py-24 lg:py-28">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">Stay</p>
            <h2 className="mt-3 text-4xl text-balance text-charcoal sm:text-5xl">
              Rooms designed for quiet immersion.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-charcoal/72">
            Tropical textures, generous terraces, and restorative privacy define
            every accommodation at Sooka.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {roomCards.map((room, index) => (
            <Reveal key={room.name} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white/60 shadow-soft">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-2xl text-charcoal">{room.name}</h3>
                  <p className="text-sm leading-7 text-charcoal/72">
                    {room.description}
                  </p>
                  <a
                    href="#newsletter"
                    className="inline-flex rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-[0.28em] text-cream hover:bg-accent-green"
                  >
                    Book Now
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="offers" className="border-y border-charcoal/10 bg-sand/35 py-20 sm:py-24">
        <Reveal className="section-shell max-w-4xl">
          <p className="kicker">Philosophy</p>
          <h2 className="mt-4 text-4xl text-balance text-charcoal sm:text-5xl">
            Rooted in Nature
          </h2>
          <p className="mt-6 text-base leading-8 text-charcoal/80 sm:text-lg">
            At Sooka, sustainability is not an afterthought - it&apos;s the
            foundation. From locally sourced materials and traditional Balinese
            craftsmanship to zero-waste dining and native landscaping, every
            decision is guided by a deep respect for the island and its
            communities. We believe luxury and responsibility can coexist
            beautifully.
          </p>
        </Reveal>
      </section>

      <section id="newsletter" className="section-shell py-20 sm:py-24 lg:py-28">
        <Reveal className="grid gap-10 rounded-[2.5rem] bg-accent-green px-6 py-10 text-cream sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-cream/70">
              Stay Connected
            </p>
            <h2 className="mt-4 text-4xl text-balance sm:text-5xl">
              Join our list for opening news, curated offers, and island
              rituals.
            </h2>
          </div>
          <form className="flex flex-col gap-4 sm:flex-row" action="#">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="h-14 flex-1 rounded-full border border-white/25 bg-white/10 px-6 text-sm text-cream placeholder:text-cream/60 focus:border-white/60 focus:outline-none"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-cream px-8 text-xs uppercase tracking-[0.28em] text-charcoal hover:bg-white"
            >
              Subscribe
            </button>
          </form>
        </Reveal>
      </section>

      <footer className="bg-ink py-16 text-cream">
        <div className="section-shell grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="font-heading text-3xl tracking-[0.3em]">SOOKA</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-cream/72">
              A Tropical Eco-Luxury Sanctuary
            </p>
            <div className="mt-6 space-y-2 text-sm text-cream/72">
              <p>Jalan Legian, Kuta, Bali</p>
              <a href="tel:+62361777777" className="block hover:text-white">
                +62 361 777 777
              </a>
              <a
                href="mailto:stay@sookalegianbali.com"
                className="block hover:text-white"
              >
                stay@sookalegianbali.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cream/55">
              Explore
            </p>
            <div className="mt-5 space-y-3 text-sm text-cream/72">
              <a href="#stay" className="block hover:text-white">
                Stay
              </a>
              <a href="#taste" className="block hover:text-white">
                Taste
              </a>
              <a href="#experience" className="block hover:text-white">
                Experience
              </a>
              <a href="#wellness" className="block hover:text-white">
                Wellness
              </a>
              <a href="#gather" className="block hover:text-white">
                Gather
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cream/55">
              Sooka
            </p>
            <div className="mt-5 space-y-3 text-sm text-cream/72">
              <a href="#top" className="block hover:text-white">
                Our Story
              </a>
              <a href="#offers" className="block hover:text-white">
                Sustainability
              </a>
              <a href="#newsletter" className="block hover:text-white">
                Careers
              </a>
              <a href="#newsletter" className="block hover:text-white">
                Press
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cream/55">
              Follow
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/75 hover:border-white hover:text-white"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/75 hover:border-white hover:text-white"
              >
                <MessagesSquare className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/75 hover:border-white hover:text-white"
              >
                <X className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="section-shell flex flex-col gap-4 pt-6 text-xs uppercase tracking-[0.24em] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <a href="#top" className="hover:text-white">
              Terms
            </a>
            <a href="#top" className="hover:text-white">
              Privacy
            </a>
            <a href="#top" className="hover:text-white">
              Accessibility
            </a>
          </div>
          <p>&copy; 2025 Sooka Legian Bali</p>
        </div>
      </footer>
    </main>
  );
}
