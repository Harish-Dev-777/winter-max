"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  AirVent,
  WashingMachine,
  Refrigerator,
  CheckCircle2,
  Clock,
  Shield,
  Wrench,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const servicesData: Record<
  string,
  {
    title: string;
    icon: any;
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    features: string[];
    services: { name: string; description: string }[];
    whyChoose: string[];
    pricing: { title: string; description: string }[];
  }
> = {
  "ac-services": {
    title: "A/C Services",
    icon: AirVent,
    hero: {
      title: "Professional A/C Services in Thiruvarur",
      subtitle: "Expert Installation, Repair & Maintenance",
      description:
        "Keep your space cool and comfortable with our comprehensive air conditioning services. From installation to emergency repairs, we ensure your A/C runs at peak performance year-round.",
    },
    features: [
      "Complete A/C installation for homes and offices",
      "Gas refilling with high-quality refrigerants",
      "Deep chemical cleaning and sanitization",
      "Preventive maintenance and AMC plans",
      "Emergency repair services available 24/7",
      "Expert troubleshooting and diagnostics",
    ],
    services: [
      {
        name: "Installation & Commissioning",
        description:
          "Professional installation of all types of air conditioners including split, window, and central A/C systems with proper commissioning.",
      },
      {
        name: "Gas Refilling",
        description:
          "Complete gas leak detection and refilling services using genuine R32, R410A, and R22 refrigerants for optimal cooling performance.",
      },
      {
        name: "Deep Cleaning",
        description:
          "Chemical wash and foam cleaning of indoor and outdoor units, removing dust, bacteria, and improving air quality and efficiency.",
      },
      {
        name: "Annual Maintenance",
        description:
          "Comprehensive AMC packages with regular servicing, filter cleaning, and performance checks to extend your A/C's lifespan.",
      },
    ],
    whyChoose: [
      "4+ years of specialized experience in A/C servicing",
      "Certified technicians trained on all major brands",
      "Same-day service available in Thiruvarur",
      "Genuine spare parts and refrigerants only",
      "Transparent pricing with no hidden charges",
      "100% satisfaction guarantee on all services",
    ],
    pricing: [
      {
        title: "Basic Service",
        description:
          "Filter cleaning, gas check, general inspection - Starting from ₹399",
      },
      {
        title: "Deep Cleaning",
        description:
          "Chemical wash, coil cleaning, sanitization - Starting from ₹899",
      },
      {
        title: "Gas Refilling",
        description:
          "Complete leak check and gas refilling - Starting from ₹1,799",
      },
    ],
  },
  "washing-machine": {
    title: "Washing Machine Repair",
    icon: WashingMachine,
    hero: {
      title: "Washing Machine Repair Services in Thiruvarur",
      subtitle: "Expert Repair for All Major Brands",
      description:
        "Get your washing machine back to perfect working condition with our professional repair services. We handle all types of issues for both front-load and top-load machines.",
    },
    features: [
      "Repair for all major brands (LG, Samsung, Whirlpool, IFB, Bosch)",
      "Front-load and top-load expertise",
      "Drum replacement and motor repair",
      "PCB and control panel servicing",
      "Water inlet and drainage solutions",
      "Quick turnaround with genuine parts",
    ],
    services: [
      {
        name: "Motor & Belt Repair",
        description:
          "Expert diagnosis and repair of motor issues, belt replacements, and drive system problems for both top-load and front-load machines.",
      },
      {
        name: "Drum & Bearing Service",
        description:
          "Professional drum replacement, bearing repairs, and suspension system servicing to eliminate noise and vibration issues.",
      },
      {
        name: "Electronic Control Repair",
        description:
          "PCB repair, display panel replacement, and sensor calibration for fully automatic and semi-automatic washing machines.",
      },
      {
        name: "Water System Service",
        description:
          "Inlet valve replacement, drainage pump repair, and complete water flow system troubleshooting and restoration.",
      },
    ],
    whyChoose: [
      "Expertise in all washing machine brands and models",
      "On-site repair service at your doorstep",
      "Genuine spare parts with warranty",
      "Fixed pricing - no surprises",
      "Same-day service in most cases",
      "3,000+ successful repairs completed",
    ],
    pricing: [
      {
        title: "Diagnostic Visit",
        description:
          "Complete diagnosis and quote - ₹199 (adjusted in final bill)",
      },
      {
        title: "Minor Repairs",
        description: "Belt, filter, valve replacement - Starting from ₹499",
      },
      {
        title: "Major Repairs",
        description: "Motor, drum, PCB repairs - Starting from ₹1,299",
      },
    ],
  },
  "refrigerator-pro": {
    title: "Refrigerator Repair",
    icon: Refrigerator,
    hero: {
      title: "Refrigerator Repair Services in Thiruvarur",
      subtitle: "Professional Cooling Solutions",
      description:
        "Expert refrigerator repair and maintenance services for all brands. From cooling issues to compressor replacements, we restore your fridge to optimal performance.",
    },
    features: [
      "All brands: LG, Samsung, Whirlpool, Godrej, Haier",
      "Single door, double door, and side-by-side fridges",
      "Compressor repair and replacement",
      "Gas charging and leak detection",
      "Thermostat and control repairs",
      "Ice maker and water dispenser service",
    ],
    services: [
      {
        name: "Cooling System Repair",
        description:
          "Complete diagnosis and repair of cooling issues, gas leaks, compressor problems, and temperature control malfunctions.",
      },
      {
        name: "Compressor Service",
        description:
          "Professional compressor testing, repair, and replacement with genuine parts ensuring long-lasting cooling performance.",
      },
      {
        name: "Gas Charging",
        description:
          "Precise refrigerant gas charging with leak detection, vacuum testing, and pressure optimization for maximum efficiency.",
      },
      {
        name: "Component Replacement",
        description:
          "Thermostat, defrost timer, door seal, and other critical component repairs and replacements for all refrigerator models.",
      },
    ],
    whyChoose: [
      "Specialized in refrigerator electronics and cooling systems",
      "Advanced diagnostic equipment for accurate troubleshooting",
      "Emergency service available for critical failures",
      "Warranty on all repairs and parts",
      "Energy efficiency optimization",
      "Trusted by 3,000+ satisfied customers",
    ],
    pricing: [
      {
        title: "Basic Service",
        description: "Thermostat, seal, minor repairs - Starting from ₹599",
      },
      {
        title: "Gas Charging",
        description: "Leak detection and gas refilling - Starting from ₹1,499",
      },
      {
        title: "Compressor Work",
        description: "Compressor repair/replacement - Starting from ₹2,999",
      },
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-linear-to-br from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight">
                {service.hero.title}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {service.hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.hero.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?action=book"
              className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all"
            >
              Book Service Now
            </Link>
            <a
              href="tel:+919626352168"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {feature}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            Our Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.services.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:-translate-y-1 transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-black">{item.name}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whyChoose.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all"
              >
                <Shield className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
            Transparent Pricing
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            No hidden charges. Clear pricing that you can trust. Final costs may
            vary based on specific issues and parts required.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.pricing.map((price, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:-translate-y-1 transition-all"
              >
                <CardContent className="p-8 text-center">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-3">{price.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {price.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Book your service now and experience professional appliance care in
            Thiruvarur. Same-day service available!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact?action=book"
              className="inline-flex items-center justify-center px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-black text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all"
            >
              Book Service
            </Link>
            <a
              href="tel:+919626352168"
              className="inline-flex items-center justify-center px-10 py-5 bg-white dark:bg-slate-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-black text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
