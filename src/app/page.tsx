"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  DoorOpen,
  Leaf,
  Landmark,
  Waves,
  TreePine,
  MapPinned,
} from "lucide-react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { ExperienceCarousel } from "@/components/experience-carousel";
import { ImageCarousel } from "@/components/image-carousel";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

const amenities = [
  { label: "Entrance Experience", icon: DoorOpen },
  { label: "Green Passage", icon: Leaf },
  { label: "Lobby, Lounge & Gym", icon: Landmark },
  { label: "Pool & Sunken Bar", icon: Waves },
  { label: "The Iconic Banyan Tree", icon: TreePine },
];

const entranceImages = [
  { src: "/images/page4_img1.jpeg", alt: "SOOKA entrance with bougainvillea and brick wall at golden hour." },
  { src: "/images/page5_img2.jpeg", alt: "SOOKA entrance at blue hour with warm interior glow." },
  { src: "/images/page6_img2.jpeg", alt: "Hotel drop-off area with Balinese shrine and stone structures." },
  { src: "/images/page7_img2.jpeg", alt: "Stone feature wall and wooden louvers at twilight." },
  { src: "/images/page3_img4.jpeg", alt: "Bougainvillea cascading over a textured brick wall." },
];

const greenPassageImages = [
  { src: "/images/page9_img1.jpeg", alt: "Green Passage — vaulted roof with indoor garden and skylight." },
  { src: "/images/page10_img1.jpeg", alt: "Green Passage Option 1 — lush indoor tropical corridor." },
  { src: "/images/page11_img1.jpeg", alt: "Green Passage Option 2 — semi-outdoor garden passage." },
  { src: "/images/page1_img1.jpeg", alt: "Concept — circular oculus flooding an indoor forest with light." },
  { src: "/images/page1_img4.jpeg", alt: "Concept — indoor reflecting pool surrounded by tropical grotto." },
  { src: "/images/page8_img3.jpeg", alt: "Indoor atrium courtyard viewed from above." },
];

const lobbyImages = [
  { src: "/images/page13_img3.jpeg", alt: "Lobby communal table with sculptural wood wall and Joglo roof." },
  { src: "/images/page14_img1.jpeg", alt: "Lobby with mezzanine gym overlooking biophilic lounge." },
  { src: "/images/page15_img1.jpeg", alt: "Lobby, Lounge & Gym Option 1 — warm tropical interior." },
  { src: "/images/page16_img1.jpeg", alt: "Lobby, Lounge & Gym Option 2 — contemporary eco-luxury." },
];

const poolGalleryImages = [
  { src: "/images/page18_img3.jpeg", alt: "Pool with ornamental grasses and pendant globe lights." },
  { src: "/images/page19_img1.jpeg", alt: "Pool gazebo with white curtains and thatched roof." },
  { src: "/images/page18_img6.jpeg", alt: "Swim-up bar with turquoise pool water." },
  { src: "/images/page18_img5.jpeg", alt: "Pool with mature tree and yellow hanging lanterns." },
  { src: "/images/page21_img3.jpeg", alt: "Tree island in pool illuminated at night." },
];

const banyanGalleryImages = [
  { src: "/images/page23_img1.jpeg", alt: "Banyan tree courtyard at night with crescent moon." },
  { src: "/images/page21_img3.jpeg", alt: "Tree island reflecting in a tranquil pool at night." },
  { src: "/images/page21_img5.jpeg", alt: "Dramatic stone wall with uplighting and textured foliage." },
];

export default function Home() {
  return (
    <main id="top">
      <AnnouncementBar />
      <SiteHeader />

      {/* ── HERO VIDEO ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/page4_img1.jpeg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/sooka-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-hero-fade" />
        </div>

        <div className="section-shell relative flex min-h-[calc(100vh-8rem)] items-end py-20 sm:py-28 lg:py-36">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
            <Reveal className="max-w-3xl text-cream">
              <p className="mb-5 text-xs uppercase tracking-[0.38em] text-cream/80">
                A Tropical Eco-Luxury Sanctuary
              </p>
              <h1 className="text-5xl leading-none tracking-[0.08em] text-balance sm:text-6xl lg:text-8xl">
                SOOKA – LEGIAN, BALI
              </h1>
              <p className="mt-4 text-lg uppercase tracking-[0.22em] text-cream/75">
                Where Architecture Dissolves Into Nature
              </p>
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
                landscape — from the iconic banyan tree to the sunken bar by
                the pool. Your journey to barefoot luxury starts here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE CAROUSEL ── */}
      <section id="experience" className="section-shell py-20 sm:py-24 lg:py-28">
        <Reveal>
          <ExperienceCarousel amenities={amenities} />
        </Reveal>
      </section>

      {/* ── ENTRANCE EXPERIENCE ── */}
      <section id="entrance" className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="kicker">Entrance Experience</p>
            <h2 className="mt-4 max-w-xl text-4xl text-balance text-charcoal sm:text-5xl">
              Where Nature Leads
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-charcoal/78 sm:text-lg">
              The entrance is designed as a calm transition from the vibrant
              atmosphere of Legian into a warm and intimate resort experience. A
              massive brick wall frames the drop-off area, creating an earthy,
              timeless, and grounded character, softened by touches of
              bougainvillea that bring a vibrant tropical feel. Natural pebble
              stone pathways enhance the sense of barefoot luxury — relaxed,
              tactile, and deeply connected to Bali&apos;s coastal ambiance.
            </p>
            <a href="#green-passage" className="editorial-link mt-8">
              Explore the Entrance
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <ImageCarousel images={entranceImages} />
          </Reveal>
        </div>
      </section>

      {/* ── THE GREEN PASSAGE ── */}
      <section id="green-passage" className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="lg:order-2">
            <p className="kicker">The Green Passage</p>
            <h2 className="mt-4 max-w-xl text-4xl text-balance text-charcoal sm:text-5xl">
              Before reaching the reception, nature welcomes you first
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-charcoal/78 sm:text-lg">
              Before reaching the reception area, guests are welcomed through an
              indoor garden inspired by a greenhouse concept. This transitional
              space introduces a softer and more refreshing atmosphere,
              celebrating Bali not only as a coastal destination, but also as an
              island rich with lush tropical landscapes. Natural light,
              greenery, and layered vegetation create a calm sensory experience
              that reconnects guests with Bali&apos;s living nature.
            </p>
            <a href="#lobby" className="editorial-link mt-8">
              Explore
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:order-1">
            <ImageCarousel images={greenPassageImages} />
          </Reveal>
        </div>
      </section>

      {/* ── LOBBY, LOUNGE & GYM ── */}
      <section id="lobby" className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="kicker">Lobby, Lounge &amp; Gym</p>
            <h2 className="mt-4 max-w-xl text-4xl text-balance text-charcoal sm:text-5xl">
              The Social Heart of Sooka
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-charcoal/78 sm:text-lg">
              The lobby and lounge embrace an eco-luxury concept that blends
              tropical warmth with contemporary elegance. Natural materials, lush
              greenery, and earthy tones create a relaxed yet refined atmosphere
              inspired by Bali&apos;s coastal lifestyle. A
              technology-integrated waterfall acts as a dynamic partition between
              the lobby lounge and the pool area, creating a sensory transition
              through the sound, movement, and reflection of water. Above, the
              mezzanine gym overlooks the space, bringing a subtle sense of
              energy and active lifestyle into the resort experience.
            </p>
            <a href="#pool" className="editorial-link mt-8">
              Explore
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <ImageCarousel images={lobbyImages} />
          </Reveal>
        </div>
      </section>

      {/* ── POOL & SUNKEN BAR ── */}
      <section id="pool" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-36">
        <div className="absolute inset-0">
          <Image
            src="/images/page20_img1.jpeg"
            alt="Poolside bar at night — a lush tropical oasis."
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />
        </div>

        <Reveal className="section-shell relative text-cream">
          <p className="kicker !text-cream/70">Pool &amp; Sunken Bar</p>
          <h2 className="mt-4 max-w-2xl text-4xl text-balance sm:text-5xl lg:text-6xl">
            A Lush Tropical Oasis
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-cream/84 sm:text-lg">
            The pool area and sunken bar are designed as a lush tropical oasis,
            surrounded by carefully curated trees and landscaped gardens that
            create privacy, shade, and a strong connection to nature. The
            atmosphere balances relaxation and social energy, offering a seamless
            blend of resort leisure, tropical greenery, and understated
            eco-luxury by the beach.
          </p>
          <a href="#banyan" className="mt-8 inline-block editorial-link !text-cream">
            Explore
          </a>
        </Reveal>

        {/* Gallery strip */}
        <div className="section-shell relative mt-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {poolGalleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-[1.5rem] sm:min-w-[340px]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE ICONIC BANYAN TREE ── */}
      <section id="banyan" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-36">
        <div className="absolute inset-0">
          <Image
            src="/images/page22_img1.jpeg"
            alt="The iconic banyan tree — a living landmark at the end of the pool deck."
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/30" />
        </div>

        <Reveal className="section-shell relative text-cream">
          <p className="kicker !text-cream/70">Anchor: The Iconic Banyan Tree</p>
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
          <a href="#philosophy" className="mt-8 inline-block editorial-link !text-cream">
            Explore
          </a>
        </Reveal>

        {/* Gallery strip */}
        <div className="section-shell relative mt-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {banyanGalleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-[1.5rem] sm:min-w-[340px]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABLE PHILOSOPHY ── */}
      <section id="philosophy" className="relative isolate overflow-hidden border-y border-charcoal/10 py-20 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/page1_img1.jpeg"
            alt="Circular oculus flooding an indoor forest with natural light."
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <Reveal className="section-shell relative max-w-4xl">
          <p className="kicker">Philosophy</p>
          <h2 className="mt-4 text-4xl text-balance text-charcoal sm:text-5xl">
            Rooted in Nature
          </h2>
          <p className="mt-6 text-base leading-8 text-charcoal/80 sm:text-lg">
            At Sooka, sustainability is not an afterthought — it&apos;s the
            foundation. From locally sourced materials and traditional Balinese
            craftsmanship to zero-waste dining and native landscaping, every
            decision is guided by a deep respect for the island and its
            communities. We believe luxury and responsibility can coexist
            beautifully.
          </p>
        </Reveal>
      </section>

      {/* ── NEWSLETTER ── */}
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

      {/* ── FOOTER ── */}
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
              <a href="#entrance" className="block hover:text-white">
                Entrance Experience
              </a>
              <a href="#green-passage" className="block hover:text-white">
                Green Passage
              </a>
              <a href="#lobby" className="block hover:text-white">
                Lobby, Lounge &amp; Gym
              </a>
              <a href="#pool" className="block hover:text-white">
                Pool &amp; Sunken Bar
              </a>
              <a href="#banyan" className="block hover:text-white">
                The Iconic Banyan Tree
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
              <a href="#philosophy" className="block hover:text-white">
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
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/75 hover:border-white hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/75 hover:border-white hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="section-shell flex flex-col gap-4 pt-6 text-xs uppercase tracking-[0.24em] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <a href="#top" className="hover:text-white">Terms</a>
            <a href="#top" className="hover:text-white">Privacy</a>
            <a href="#top" className="hover:text-white">Accessibility</a>
          </div>
          <p>&copy; 2025 Sooka Legian Bali</p>
        </div>
      </footer>
    </main>
  );
}
