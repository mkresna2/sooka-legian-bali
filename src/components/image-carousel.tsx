"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  autoPlayInterval?: number;
}

export function ImageCarousel({
  images,
  autoPlayInterval = 4000,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [emblaApi, autoPlayInterval]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-[2rem]">
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === selectedIndex
                ? "w-6 bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
