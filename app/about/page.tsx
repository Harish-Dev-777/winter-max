"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Snowfall from "react-snowfall";
import {
  Phone,
  MapPin,
  Clock,
  Award,
  Users,
  Wrench,
  Shield,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  // Simple fade-in animations
  useGSAP(
    () => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: heroRef },
  );

  useGSAP(() => {
    // Stats counter animation
    if (statsRef.current) {
      gsap.from(statsRef.current.querySelectorAll(".stat-item"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      });
    }

    // Story section
    if (storyRef.current) {
      gsap.from(storyRef.current.querySelectorAll(".story-content"), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
        },
      });
    }

    // Values section
    if (valuesRef.current) {
      gsap.from(valuesRef.current.querySelectorAll(".value-card"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 75%",
        },
      });
    }
  });

  const stats = [
    { value: "4+", label: "Years Experience", icon: Clock },
    { value: "3,000+", label: "Happy Customers", icon: Users },
    { value: "4.9", label: "Average Rating", icon: Star },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We use only genuine parts and follow industry best practices for every repair.",
      icon: Award,
    },
    {
      title: "Customer Trust",
      description:
        "Transparent pricing with no hidden charges. Your satisfaction is our priority.",
      icon: Shield,
    },
    {
      title: "Expert Team",
      description:
        "Certified technicians trained on all major brands with years of hands-on experience.",
      icon: Users,
    },
    {
      title: "Fast Service",
      description:
        "Same-day service available in Thiruvarur. We value your time.",
      icon: Clock,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden pt-20"
      >
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        {/* Snowfall Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Snowfall
            color="#ffffff"
            snowflakeCount={100}
            radius={[0.5, 2.5]}
            speed={[0.5, 1.5]}
            wind={[-0.5, 1.5]}
            style={{ opacity: 0.6 }}
          />
        </div>

        <div className="hero-content max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20">
            <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              Thiruvarur, Tamil Nadu
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            About{" "}
            <span className="text-blue-600 dark:text-blue-400">Winter Max</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Your trusted partner for professional A/C, washing machine, and
            refrigerator repair services. We bring comfort back to your home.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?action=book"
              className="btn-winter-outline-enhanced w-full sm:w-auto"
            >
              Book a Service
            </Link>
            <a
              href="tel:+919626352168"
              className="btn-winter-outline-enhanced w-full sm:w-auto flex items-center justify-center gap-2 shadow-none! hover:shadow-none bg-none hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50">
        <div ref={statsRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-item text-center p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg"
                >
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div ref={storyRef} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image/Visual */}
            <div className="story-content relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-blue-600 via-blue-500 to-cyan-400 p-1">
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900 overflow-hidden relative">
                  <Image
                    src="/assets/about.png"
                    alt="Winter Max Service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 dark:text-white">
                      100%
                    </div>
                    <div className="text-sm text-slate-500">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="story-content space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] border border-blue-500/20">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                Keeping Homes{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Comfortable
                </span>{" "}
                Since 2022
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Winter Max was founded with a simple mission: to provide
                  reliable, honest, and professional appliance repair services
                  to the people of Thiruvarur.
                </p>
                <p>
                  What started as a small operation has grown into a trusted
                  name in home appliance services. Our team of certified
                  technicians has successfully completed over 3,000 works,
                  earning the trust of thousands of satisfied customers.
                </p>
                <p>
                  We specialize in A/C, washing machine, and refrigerator
                  repairs for all major brands including LG, Samsung, Whirlpool,
                  Daikin, Voltas, and more. Our commitment to using genuine
                  parts and transparent pricing has made us the go-to choice for
                  appliance repair in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-linear-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-blue-950/30">
        <div ref={valuesRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] border border-blue-500/20">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              What We{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Stand For
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Our core principles guide every service we provide
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-3">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Ready to Experience <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-400">
              Quality Service?
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Get in touch with us today for professional appliance repair
            services. Same-day service available in Thiruvarur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?action=book"
              className="btn-winter-outline-enhanced w-full sm:w-auto text-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919626352168"
              className="btn-winter-outline-enhanced w-full sm:w-auto text-lg flex items-center justify-center gap-2 shadow-none! hover:shadow-none bg-none hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
