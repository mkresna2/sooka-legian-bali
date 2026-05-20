"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#entrance", label: "Entrance" },
  { href: "#green-passage", label: "Green Passage" },
  { href: "#lobby", label: "Lobby & Gym" },
  { href: "#pool", label: "Pool & Bar" },
  { href: "#banyan", label: "Banyan Tree" },
  { href: "#philosophy", label: "Philosophy" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-xl shadow-[0_1px_0_rgba(44,44,44,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* Video background — only visible when NOT scrolled (transparent header) */}
        {!scrolled && (
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/sooka-header-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-ink/40" />
          </div>
        )}

        <div className="section-shell relative flex h-20 items-center justify-between gap-4">
          <a
            href="#top"
            className={`font-heading text-2xl tracking-[0.28em] transition-colors duration-500 ${
              scrolled ? "text-charcoal" : "text-cream"
            }`}
            aria-label="Sooka home"
          >
            SOOKA
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-[0.28em] transition-colors duration-500 hover:text-accent-green ${
                  scrolled ? "text-charcoal/75" : "text-cream/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+62361777777"
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] transition-colors duration-500 hover:text-accent-green ${
                scrolled ? "text-charcoal/70" : "text-cream/70"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href="#newsletter"
              className={`rounded-full px-5 py-3 text-xs uppercase tracking-[0.28em] transition-all duration-500 ${
                scrolled
                  ? "bg-ink text-cream hover:bg-accent-green"
                  : "border border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/60"
              }`}
            >
              Check Availability
            </a>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 lg:hidden ${
              scrolled
                ? "border border-charcoal/15 text-charcoal"
                : "border border-cream/30 text-cream"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-20 left-0 right-0 z-30 border-b border-charcoal/10 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="section-shell py-6">
              <div className="flex flex-col gap-5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm uppercase tracking-[0.28em] text-charcoal"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-4 border-t border-charcoal/10 pt-5">
                  <a
                    href="tel:+62361777777"
                    className="text-sm uppercase tracking-[0.28em] text-charcoal/75"
                    onClick={() => setMenuOpen(false)}
                  >
                    Call
                  </a>
                  <a
                    href="#newsletter"
                    className="rounded-full bg-ink px-5 py-3 text-center text-xs uppercase tracking-[0.28em] text-cream"
                    onClick={() => setMenuOpen(false)}
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
