"use client";

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  "4+ Years of Professional Freelancing",
  "3000+ Works Completed",
  "A/C, Refrigerator & Washing Machine Specialist",
  "On-Time & Reliable Service",
  "Safety & Quality Assured",
];

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(itemsRef.current, {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={contentRef} className="space-y-6">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">
            Trust & Quality
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Why Thousands of Clients <br />
            <span className="text-blue-600 dark:text-blue-400">
              Trust Winter Max
            </span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Professional freelancing since 2022. We don't just fix appliances;
            we bring back comfort to your homes with a track record of
            excellence.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                4+
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Years Exp
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                3000+
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Works Done
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:border-slate-700/50 group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-lg font-semibold text-slate-800 dark:text-slate-100 italic">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
