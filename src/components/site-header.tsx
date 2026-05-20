"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#stay", label: "Stay" },
  { href: "#taste", label: "Taste" },
  { href: "#experience", label: "Experience" },
  { href: "#wellness", label: "Wellness" },
  { href: "#gather", label: "Gather" },
  { href: "#offers", label: "Offers" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/85 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <a
            href="#top"
            className="font-heading text-2xl tracking-[0.28em] text-charcoal"
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
                className="text-xs uppercase tracking-[0.28em] text-charcoal/75 hover:text-accent-green"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <button
              type="button"
              className="text-xs uppercase tracking-[0.28em] text-charcoal/70 hover:text-accent-green"
              aria-label="Language selector"
            >
              EN
            </button>
            <a
              href="#offers"
              className="text-xs uppercase tracking-[0.28em] text-charcoal/70 hover:text-accent-green"
            >
              Members
            </a>
            <a
              href="tel:+62361777777"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-charcoal/70 hover:text-accent-green"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href="#newsletter"
              className="rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-[0.28em] text-cream hover:bg-accent-green"
            >
              Check Availability
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal lg:hidden"
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
            className="sticky top-20 z-30 border-b border-charcoal/10 bg-cream lg:hidden"
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
