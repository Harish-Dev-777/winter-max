"use client";

import { useRef } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Snowfall from "react-snowfall";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTAStrip = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="py-20 px-6">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto rounded-[2rem] bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 p-8 md:p-16 text-center relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/5"
      >
        {/* Clear interior snow */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Snowfall
            color="#fff"
            snowflakeCount={100}
            radius={[0.5, 2.0]}
            speed={[0.5, 2.0]}
          />
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
            Need Immediate Service? <br />
            <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.4)] text-2xl md:text-4xl block mt-2">
              Our Experts Are Ready.
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
            Don't let a broken appliance ruin your day. Book a professional
            technician in less than 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?action=book"
              className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-white/10"
            >
              Book Now
            </Link>
            <a
              href="tel:+919626352168"
              className="px-10 py-4 bg-blue-600/20 text-white border-2 border-white/30 backdrop-blur-md rounded-full font-bold text-base hover:bg-blue-600/30 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
