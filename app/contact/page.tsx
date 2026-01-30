"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRef, useState, Suspense, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUpRight,
  User,
  Wrench,
  MessageSquare,
  Settings,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Snowfall from "react-snowfall";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
  FieldContent,
} from "@/components/ui/field";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Schema validation with Zod
const bookingSchema = z.object({
  name: z.string().min(2, "Name or Business name is required"),
  service: z.string().min(1, "Please select a service"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  description: z
    .string()
    .min(
      10,
      "Please provide more details about the problem (min 10 characters)",
    ),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const contactMethods = [
  {
    title: "Direct Call",
    value: "+91 96263 52168",
    href: "tel:+919626352168",
    icon: Phone,
    color: "bg-blue-500",
    description: "Speak with our expert technicians instantly.",
  },
  {
    title: "WhatsApp Support",
    value: "+91 96263 52168",
    href: "https://wa.me/919626352168",
    icon: MessageCircle,
    color: "bg-green-500",
    description: "Fastest way to get quotes and book services.",
  },
  {
    title: "Email Us",
    value: "vignesh962635@gmail.com",
    href: "mailto:vignesh962635@gmail.com",
    icon: Mail,
    color: "bg-purple-500",
    description: "For business inquiries and documentation.",
  },
];

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ContactContent />
    </Suspense>
  );
}

function ContactContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  useEffect(() => {
    if (searchParams.get("action") === "book" && nameInputRef.current) {
      nameInputRef.current.focus();
      nameInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [searchParams]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".contact-hero > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
        .from(
          ".info-card",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          ".booking-form-card",
          {
            x: 50,
            opacity: 0,
            duration: 1,
          },
          "-=1",
        );
    },
    { scope: containerRef },
  );

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Booking Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Service booked successfully! We will call you shortly.");
    reset();
  };

  return (
    <main ref={containerRef} className="bg-background relative overflow-hidden">
      {/* Snowfall Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Snowfall
          color="#ffffff"
          snowflakeCount={80}
          radius={[0.5, 2.5]}
          speed={[0.5, 1.5]}
          style={{ opacity: 0.6 }}
        />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-4 md:pt-40 md:pb-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact info */}
          <div className="space-y-12">
            <div className="contact-hero space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Available Now
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                Get in{" "}
                <span className="text-blue-600 dark:text-blue-400">touch</span>{" "}
                with us
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
                Professional appliance repair services across{" "}
                <span className="text-foreground font-bold underline decoration-blue-500/30">
                  Thiruvarur
                </span>
                . We're here to solve your technical problems within hours.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-slate-500 font-medium">
                      Thiruvarur, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Service Hours</h4>
                    <p className="text-slate-500 font-medium">
                      Mon - Sun: 9:00 AM - 9:00 PM
                    </p>
                    <p className="text-xs text-blue-500 font-black mt-1 uppercase tracking-wider">
                      Emergency repairs available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods Icons */}
            <div className="flex items-center gap-6 pt-4">
              <TooltipProvider>
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <Tooltip key={method.title}>
                      <TooltipTrigger asChild>
                        <a
                          href={method.href}
                          target={
                            method.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300",
                            "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl",
                            "hover:scale-110 hover:-translate-y-1 hover:border-blue-500/50 group",
                          )}
                        >
                          <div
                            className={cn(
                              "p-3 rounded-xl text-white shadow-lg transition-transform duration-300",
                              method.color,
                              "group-hover:scale-105",
                            )}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        className="p-3 bg-slate-900 border-slate-800 text-white"
                      >
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                            {method.title}
                          </p>
                          <p className="font-bold">{method.value}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="booking-form-card relative">
            {isSuccess ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-12 text-center space-y-8 shadow-2xl shadow-slate-200/50 dark:shadow-none min-h-[600px] flex flex-col justify-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black tracking-tight">
                    Booking Received!
                  </h2>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    Thank you for choosing Winter Max. Our technician will
                    contact you shortly to confirm your schedule.
                  </p>
                </div>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="w-full btn-winter h-16 text-xl font-black rounded-2xl"
                >
                  Book Another Service
                </Button>
              </div>
            ) : (
              <div
                id="booking-form"
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className="mb-10 space-y-2">
                  <div className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs">
                    <Settings className="w-4 h-4 animate-spin-slow" />
                    Fast Scheduling
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter">
                    Book your <span className="text-blue-600">service</span>
                  </h2>
                  <p className="text-slate-500 font-medium">
                    Fill in the details below and we'll be there in no time.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <FieldGroup>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <Field orientation="vertical">
                        <FieldLabel className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-slate-400">
                          <User className="w-4 h-4 text-blue-500" />
                          Name / Business
                        </FieldLabel>
                        <FieldContent>
                          <Input
                            {...register("name")}
                            ref={(e) => {
                              register("name").ref(e);
                              nameInputRef.current = e;
                            }}
                            placeholder="Full Name"
                            className="h-14 bg-black border-slate-800 focus:ring-blue-500 rounded-xl font-medium text-white placeholder:text-white/70"
                          />
                          <FieldError errors={[errors.name]} />
                        </FieldContent>
                      </Field>

                      {/* Mobile Field */}
                      <Field orientation="vertical">
                        <FieldLabel className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-slate-400">
                          <Phone className="w-4 h-4 text-blue-500" />
                          Mobile Number
                        </FieldLabel>
                        <FieldContent>
                          <Input
                            {...register("mobile")}
                            placeholder="Mobile Number"
                            type="tel"
                            className="h-14 bg-black border-slate-800 focus:ring-blue-500 rounded-xl font-medium text-white placeholder:text-white/70"
                          />
                          <FieldError errors={[errors.mobile]} />
                        </FieldContent>
                      </Field>
                    </div>

                    {/* Service Selection */}
                    <Field orientation="vertical">
                      <FieldLabel className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-slate-400">
                        <Wrench className="w-4 h-4 text-blue-500" />
                        Type of Service
                      </FieldLabel>
                      <FieldContent>
                        <select
                          {...register("service")}
                          className="flex h-14 w-full rounded-xl border border-slate-800 bg-black px-3 py-2 font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 appearance-none cursor-pointer text-white"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a service...
                          </option>
                          <option value="ac-repair">
                            A/C Repair & Service
                          </option>
                          <option value="ac-install">A/C Installation</option>
                          <option value="washing-machine">
                            Washing Machine Repair
                          </option>
                          <option value="refrigerator">
                            Refrigerator Repair
                          </option>
                          <option value="general">
                            Commercial AMC / Support
                          </option>
                        </select>
                        <FieldError errors={[errors.service]} />
                      </FieldContent>
                    </Field>

                    {/* Description field */}
                    <Field orientation="vertical">
                      <FieldLabel className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-slate-400">
                        <MessageSquare className="w-4 h-4 text-blue-500" />
                        Problem Details
                      </FieldLabel>
                      <FieldContent>
                        <Textarea
                          {...register("description")}
                          placeholder="Briefly describe the issue you're facing..."
                          className="min-h-[120px] bg-black border-slate-800 focus:ring-blue-500 rounded-xl p-4 resize-none font-medium text-white placeholder:text-white/70"
                        />
                        <FieldError errors={[errors.description]} />
                      </FieldContent>
                    </Field>
                  </FieldGroup>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 text-sm font-black uppercase tracking-widest rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/20 group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <span className="flex items-center gap-3">
                        Confirm Booking
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
