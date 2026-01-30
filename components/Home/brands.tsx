"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const brands = [
  { name: "Daikin", src: "/assets/daikin.png" },
  { name: "LG", src: "/assets/Lg.png" },
  { name: "Whirlpool", src: "/assets/Whirlpool.png" },
  { name: "Voltas", src: "/assets/Voltas.png" },
  { name: "Mitsubishi", src: "/assets/Mitsubishi.png" },
  { name: "Carrier", src: "/assets/Carrier.png" },
  { name: "Bluestar", src: "/assets/Bluestar.png" },
];

const BrandsWorkedWith = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!scrollRef.current) return;

      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const scrollWidth = firstChild.offsetWidth;

      tweenRef.current = gsap.to(scrollRef.current, {
        x: `-=${scrollWidth}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % scrollWidth),
        },
      });
    },
    { scope: scrollRef },
  );

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
          Our Trusted Partners
        </span>
      </div>

      <div
        className="flex whitespace-nowrap w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={scrollRef} className="flex">
          {/* First set */}
          <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain max-w-[120px] md:max-w-none"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-duplicate-${index}`}
                className="flex-shrink-0 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain max-w-[120px] md:max-w-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsWorkedWith;
