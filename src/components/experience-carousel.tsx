"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Amenity = {
  icon: LucideIcon;
  label: string;
};

type ExperienceCarouselProps = {
  amenities: Amenity[];
};

export function ExperienceCarousel({
  amenities,
}: ExperienceCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="kicker">Experiences</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-balance text-charcoal sm:text-4xl lg:text-5xl">
            A resort shaped by ritual, movement, and tropical ease.
          </h2>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            aria-label="Scroll experiences left"
            onClick={() => emblaApi?.scrollPrev()}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 hover:border-accent-green hover:text-accent-green"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll experiences right"
            onClick={() => emblaApi?.scrollNext()}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 hover:border-accent-green hover:text-accent-green"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="min-w-0 flex-[0_0_78%] pl-0 pr-4 sm:flex-[0_0_45%] lg:flex-[0_0_23%]"
            >
              <div className="flex h-full min-h-[210px] flex-col justify-between rounded-[2rem] border border-charcoal/10 bg-white/55 p-8 shadow-soft">
                <Icon className="h-8 w-8 text-accent-green" aria-hidden="true" />
                <p className="max-w-[10rem] text-xl leading-snug text-charcoal">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
