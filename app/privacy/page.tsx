"use client";

import { useRef } from "react";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, Bell } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Snowfall from "react-snowfall";

export default function PrivacyPolicy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".policy-content > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-background relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 px-6"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Snowfall
          color="#ffffff"
          snowflakeCount={40}
          style={{ opacity: 0.2 }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="policy-content space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Privacy First
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-slate-500 font-medium">
              Last updated: January 30, 2026
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                1. Information We Collect
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                When you book a service with Winter Max, we collect basic
                information necessary to fulfill your request:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Name or Business name</li>
                <li>Mobile number</li>
                <li>Service location/address (provided during confirmation)</li>
                <li>Details about the appliance issue</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                2. How We Use Your Data
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We use your information solely for:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Scheduling and performing appliance repairs.</li>
                <li>Contacting you regarding your service status.</li>
                <li>Improving our customer service experience.</li>
              </ul>
            </section>

            <section className="space-y-4 border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 rounded-r-xl">
              <h2 className="text-2xl font-black">3. Data Security</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties. Your data is
                strictly used by our authorized technicians to reach your
                location and perform the repair.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Bell className="w-6 h-6 text-blue-600" />
                4. Your Choices
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                You can always choose not to provide certain information, though
                it may prevent us from providing repair services. You can
                contact us at any time to request the removal of your data from
                our records.
              </p>
            </section>
          </div>

          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 font-medium">
              Questions about our privacy policy?
            </p>
            <Link
              href="/contact"
              className="btn-winter px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
