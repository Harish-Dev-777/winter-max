"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#020617] pt-20 pb-10 px-6 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/">
            <h2 className="text-2xl font-black tracking-tighter text-blue-600 dark:text-blue-400">
              WINTER<span className="text-foreground dark:text-white">MAX</span>
            </h2>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Professional servicing, installation, and maintenance for all your
            home appliances. Trusted by thousands across Thiruvarur.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919626352168"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-black uppercase tracking-widest text-foreground">
            Services
          </h4>
          <ul className="space-y-4">
            {["A/C Repair", "Refrigerator Repair", "Washing Machine"].map(
              (link) => (
                <li key={link}>
                  <Link
                    href="/services"
                    className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-black uppercase tracking-widest text-foreground">
            Company
          </h4>
          <ul className="space-y-4">
            {[
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-lg font-black uppercase tracking-widest text-foreground">
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-slate-500 dark:text-slate-400 font-medium">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                Thiruvarur, <br />
                Tamil Nadu, India
              </span>
            </li>
            <li className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href="tel:+919626352168">+91 96263 52168</a>
            </li>
            <li className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:vignesh962635@gmail.com">
                vignesh962635@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-slate-400 dark:text-slate-500 font-bold text-sm tracking-widest uppercase">
          © 2026 WINTER MAX. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
