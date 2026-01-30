"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ui/modeToggle";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isOpen) {
      // Open animation
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        visibility: "visible",
      });
      gsap.fromTo(
        linksRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );
      // Two-line to Cross animation
      gsap.to(line1Ref.current, {
        y: 4,
        rotate: 45,
        duration: 0.4,
        ease: "power3.inOut",
      });
      gsap.to(line2Ref.current, {
        y: -4,
        rotate: -45,
        duration: 0.4,
        ease: "power3.inOut",
      });
    } else {
      // Close animation
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { visibility: "hidden" });
        },
      });
      // Cross to Two-line animation
      gsap.to(line1Ref.current, {
        y: 0,
        rotate: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
      gsap.to(line2Ref.current, {
        y: 0,
        rotate: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "flex items-center justify-between px-6 py-4 fixed top-0 w-full z-[100] transition-all duration-500",
        isOpen
          ? "bg-white dark:bg-slate-950 py-3"
          : scrolled
            ? "bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent",
      )}
    >
      <div className="flex items-center gap-2 relative z-[110]">
        <Link href="/">
          <h2 className="text-xl md:text-2xl font-black tracking-tighter text-blue-600 dark:text-blue-400">
            WINTER<span className="text-foreground dark:text-white">MAX</span>
          </h2>
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-blue-600 transition-all duration-300 relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-8 md:gap-8 relative z-[110]">
        <ModeToggle />

        <Link
          href="/contact?action=book"
          className="hidden sm:inline-flex btn-winter text-xs px-8 py-3 uppercase tracking-tighter text-black dark:text-white"
        >
          Book Now
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-120"
          aria-label="Menu"
        >
          <div
            ref={line1Ref}
            className="w-8 h-0.5 bg-foreground rounded-full"
          />
          <div
            ref={line2Ref}
            className="w-8 h-0.5 bg-foreground rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 w-full h-screen bg-white/95 dark:bg-slate-950/98 backdrop-blur-3xl z-105 lg:hidden translate-x-full invisible opacity-0 flex flex-col items-center justify-center"
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}
              onClick={() => setIsOpen(false)}
              className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div
            ref={(el) => {
              if (el)
                linksRef.current[navLinks.length] =
                  el as unknown as HTMLAnchorElement;
            }}
            className="mt-4"
          >
            <Link
              href="/contact?action=book"
              onClick={() => setIsOpen(false)}
              className="btn-winter text-base px-10 py-4 uppercase tracking-widest font-black"
            >
              Book Now
            </Link>
          </div>
        </nav>

        {/* Decorative elements for mobile menu */}
        <div className="absolute bottom-10 text-center opacity-30 select-none pointer-events-none">
          <p className="text-sm font-bold tracking-[0.5em] uppercase">
            Winter Max 2026
          </p>
        </div>
      </div>
    </header>
  );
};

export default Nav;
