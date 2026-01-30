"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Scale,
  Clock,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Snowfall from "react-snowfall";

export default function TermsOfService() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".terms-content > *", {
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
        <div className="terms-content space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Scale className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Legal Agreement
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-slate-500 font-medium">
              Last updated: January 30, 2026
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                1. Service Agreement
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                By booking a service with Winter Max, you agree to provide
                accurate information regarding your appliance and location. Our
                technicians will perform diagnostics and repairs based on
                industry standards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600" />
                2. Scheduling & Cancellations
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                While we strive for same-day service, specific timings depend on
                technician availability. You may cancel or reschedule your
                booking by calling us at least 2 hours before the scheduled
                appointment.
              </p>
            </section>

            <section className="space-y-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                3. Payments & Warranty
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  <strong>No Upfront Payment:</strong> We do not charge anything
                  during the online booking process. Payment is only collected
                  after the service is performed.
                </p>
                <p>
                  <strong>Service Warranty:</strong> Most repairs include a
                  limited-time warranty on labor and parts replaced. The
                  specific duration will be mentioned on your service invoice.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black">
                4. Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Winter Max is not responsible for pre-existing damage or issues
                arising from unauthorized third-party repairs performed prior to
                our visit.
              </p>
            </section>
          </div>

          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 font-medium">
              Have questions about our terms?
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
