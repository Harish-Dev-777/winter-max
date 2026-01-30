"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  AirVent,
  WashingMachine,
  Refrigerator,
  Settings2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "A/C Services",
    slug: "ac-services",
    description:
      "Professional cleaning, gas refilling, and seasonal maintenance for peak performance.",
    icon: AirVent,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Washing Machine",
    slug: "washing-machine",
    description:
      "Expert restoration of all major brands, ensuring your washing cycles stay perfect.",
    icon: WashingMachine,
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Refrigerator Pro",
    slug: "refrigerator-pro",
    description:
      "Cooling restoration and parts replacement for all smart and standard refrigerators.",
    icon: Refrigerator,
    color: "from-cyan-500 to-blue-400",
  },
];

const ServicesOverview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        rotateX: -15,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-400/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-400/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] border border-blue-500/20">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-glow px-4">
            Premiums{" "}
            <span className="text-blue-600 dark:text-blue-400">solutions</span>{" "}
            we offer
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg lg:text-xl font-medium px-4">
            Expert care for your essential appliances. We focus on delivering
            high-quality repair and maintenance for ACs, Refrigerators, and
            Washing Machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group"
            >
              <Card className="h-full relative border border-slate-200/60 dark:border-slate-700/60 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-500 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="relative h-full flex flex-col">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-transparent to-cyan-50/0 dark:from-blue-950/0 dark:to-cyan-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <CardHeader className="p-10 pb-6 relative z-10">
                    {/* Icon container with refined shadow */}
                    <div className="relative inline-flex mb-8">
                      <div
                        className={cn(
                          "w-20 h-20 rounded-2xl bg-linear-to-br flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105",
                          service.color,
                        )}
                      >
                        <service.icon
                          className="w-10 h-10 text-white"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Decorative ring */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 -z-10 scale-150",
                          service.color,
                        )}
                      />
                    </div>

                    <CardTitle className="text-2xl font-black mb-4 tracking-tight text-slate-900 dark:text-white leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-10 pb-10 flex-1 flex flex-col relative z-10">
                    <CardDescription className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium mb-8 flex-1">
                      {service.description}
                    </CardDescription>

                    {/* Premium CTA */}
                    <Link href={`/services/${service.slug}`} className="block">
                      <div className="relative overflow-hidden rounded-xl bg-slate-900 dark:bg-white px-6 py-4 text-center group/btn transition-all duration-300 hover:shadow-xl">
                        <div className="relative z-10 flex items-center justify-center gap-2 text-white dark:text-slate-900 font-bold">
                          <span>Learn More</span>
                          <svg
                            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>

                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      </div>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
