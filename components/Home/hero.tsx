"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Snowfall from "react-snowfall";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
      })
        .from(
          subtextRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image & Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/assets/hero-bg.jpeg')`,
        }}
      />

      {/* Dynamic Overlays for Snow Visibility */}
      <div className="absolute inset-0 z-1 bg-white/20 dark:bg-slate-900/30 backdrop-brightness-95 dark:backdrop-brightness-75" />
      <div className="absolute inset-0 z-2 hero-gradient" />

      {/* Snowfall Effect - Visible in both modes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Snowfall
          color="#ffffff"
          snowflakeCount={200}
          radius={[0.5, 3.0]}
          speed={[0.5, 2.0]}
          wind={[-0.5, 2.0]}
        />
      </div>

      <div className="relative z-20 w-full container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-glow leading-[1.2]"
          >
            Reliable <br />
            <span className="text-blue-600 dark:text-blue-400 drop-shadow-xl">
              A/C & Home
            </span>{" "}
            <br />
            Appliance Repair
          </h1>

          <p
            ref={subtextRef}
            className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Professional servicing, installation, and maintenance for homes &
            businesses. Keep your space{" "}
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              perfectly chilled
            </span>{" "}
            all year round.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="btn-winter w-full sm:w-auto text-base group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Now
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/services"
              className="btn-winter-outline w-full sm:w-auto text-base"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background via-background/50 to-transparent z-10" />
    </section>
  );
};

export default Hero;
