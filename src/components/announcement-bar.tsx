"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Now reserving stays for the 2025 festive season in Legian.",
  "Members receive early access to opening offers and private experiences.",
  "Eco-luxury suites, banyan views, and barefoot rituals by the sea.",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-charcoal/10 bg-sand/40 px-4 py-3 text-center text-[0.68rem] uppercase tracking-[0.32em] text-charcoal/80">
      <AnimatePresence mode="wait">
        <motion.p
          key={messages[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
