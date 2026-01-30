"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const animationSpeed = useRef(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      if (!scrollRef.current) return;

      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const scrollWidth = firstChild.offsetWidth;

      // Base animation speed - faster on mobile
      const baseDuration = isMobile ? 15 : 30;

      tweenRef.current = gsap.to(scrollRef.current, {
        x: `-=${scrollWidth}`,
        duration: baseDuration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % scrollWidth),
        },
      });
    },
    { scope: scrollRef, dependencies: [isMobile] },
  );

  // Advanced scroll-based directional animation
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;

      // Calculate scroll velocity (speed)
      scrollVelocity.current = Math.abs(deltaY);

      // Determine scroll direction
      const scrollingDown = deltaY > 0;

      if (tweenRef.current && scrollRef.current) {
        // Speed multiplier based on scroll velocity
        // Mobile: 2-8x faster, Desktop: 1.5-5x faster
        const maxMultiplier = isMobile ? 8 : 5;
        const minMultiplier = isMobile ? 2 : 1.5;
        const velocityFactor = Math.min(
          scrollVelocity.current / 10,
          maxMultiplier,
        );
        const speedMultiplier = Math.max(minMultiplier, velocityFactor);

        // Change animation direction based on scroll
        if (scrollingDown) {
          // Scrolling down -> brands move right to left (reverse)
          tweenRef.current.timeScale(speedMultiplier);
        } else {
          // Scrolling up -> brands move left to right (forward)
          tweenRef.current.timeScale(-speedMultiplier);
        }

        animationSpeed.current = speedMultiplier;
      }

      lastScrollY.current = currentScrollY;

      // Reset to normal speed after scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (tweenRef.current) {
          gsap.to(tweenRef.current, {
            timeScale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-8 text-center">
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
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
          <div className="flex items-center gap-8 md:gap-12 lg:gap-20 pr-8 md:pr-12 lg:pr-20">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-16 md:h-16 lg:h-20 w-auto object-contain max-w-[140px] md:max-w-[160px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 md:gap-12 lg:gap-20 pr-8 md:pr-12 lg:pr-20">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-duplicate-${index}`}
                className="flex-shrink-0 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-16 md:h-16 lg:h-20 w-auto object-contain max-w-[140px] md:max-w-[160px]"
                  loading="lazy"
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
