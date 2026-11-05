import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070707] border-t border-[#1F1F1F] text-neutral-400 font-sans">
      {/* Top Banner / Dojo Commitment */}
      <div className="border-b border-[#1A1A1A] py-10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-b from-red-600 to-black border border-red-500/50 flex items-center justify-center shrink-0 overflow-hidden shadow-lg shadow-red-950/40">
                <img
                  src="/logos/primary-emblem-64.png"
                  alt="Prakastic Academy Crest"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h4 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-white">
                  ONE FREE TRIAL CLASS FOR ALL NEW ENROLMENTS
                </h4>
                <p className="text-xs text-neutral-400">Step onto the mat in Thindal and experience disciplined martial arts.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919629446869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#171717] hover:bg-[#202020] border border-[#2B2B2B] hover:border-red-500/40 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp Direct
              </a>
              <a
                href="tel:+919629446869"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F04444] hover:bg-[#DC2626] text-xs font-semibold uppercase tracking-wider text-white transition-colors shadow-lg shadow-red-950/40"
              >
                <Phone className="w-4 h-4" />
                Call +91 96294 46869
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-b from-[#F04444] via-[#7F1D1D] to-[#121212] border border-red-500/50 shadow-[0_0_25px_rgba(240,68,68,0.3)] shrink-0 overflow-hidden">
                <img
                  src="/logos/primary-emblem-192.png"
                  alt="Prakastic's Kickboxing Kyokushin Academy Official Emblem"
                  className="w-full h-full object-contain"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase leading-none">
                  PRAKASTIC'S
                </p>
                <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#F04444] font-sans font-bold mt-1">
                  KICKBOXING &amp; KYOKUSHIN ACADEMY
                </p>
                <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded-sm bg-[#1A1A1A] border border-[#2E2E2E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04444]" />
                  <span className="text-[9px] tracking-[0.15em] uppercase text-neutral-300 font-mono font-semibold">
                    CHAMPION 2026 • DEFENCE LAND
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              Premier martial arts training center located at Thindal, Erode, Tamil Nadu. Committed to teaching the authentic full-contact Kyokushin karate discipline, power kickboxing, and practical self-defence.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/pr_akastic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#141414] border border-[#242424] hover:border-[#E1306C] flex items-center justify-center text-neutral-400 hover:text-[#E1306C] transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919629446869"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#141414] border border-[#242424] hover:border-[#25D366] flex items-center justify-center text-neutral-400 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+919629446869"
                className="w-9 h-9 rounded-sm bg-[#141414] border border-[#242424] hover:border-red-500 flex items-center justify-center text-neutral-400 hover:text-[#F04444] transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-display text-base uppercase tracking-wider text-white border-b border-[#242424] pb-2">
              QUICK NAVIGATION
            </h5>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-[#F04444] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F04444] transition-colors">
                  About The Academy
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#F04444] transition-colors">
                  Training Batches
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#F04444] transition-colors">
                  Why Kyokushin
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F04444] transition-colors">
                  Training Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F04444] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display text-base uppercase tracking-wider text-white border-b border-[#242424] pb-2">
              PROGRAMS
            </h5>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#programs" className="block group">
                  <span className="font-semibold text-neutral-300 group-hover:text-[#F04444] transition-colors uppercase">
                    ADULT'S BATCH
                  </span>
                  <p className="text-[11px] text-neutral-500 font-sans">Kickboxing & Combat Conditioning</p>
                </a>
              </li>
              <li>
                <a href="#programs" className="block group">
                  <span className="font-semibold text-neutral-300 group-hover:text-[#F04444] transition-colors uppercase">
                    KID'S BATCH
                  </span>
                  <p className="text-[11px] text-neutral-500 font-sans">Discipline, Fitness & Martial Arts</p>
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block px-2 py-1 bg-red-950/40 border border-red-500/30 text-[#F04444] text-[10px] font-semibold uppercase tracking-wider">
                  Free Trial Included
                </span>
              </li>
            </ul>
          </div>

          {/* Location & Contacts Column */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display text-base uppercase tracking-wider text-white border-b border-[#242424] pb-2">
              HEADQUARTERS
            </h5>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F04444] shrink-0 mt-0.5" />
                <span>THINDAL, ERODE, TAMIL NADU</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#F04444] shrink-0 mt-0.5" />
                <a href="tel:+919629446869" className="hover:text-white transition-colors">
                  +91 96294 46869
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/pr_akastic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @pr_akastic
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="mt-16 pt-8 border-t border-[#171717] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {currentYear} Prakastic's Kickboxing Kyokushin Academy. All rights reserved. Thindal, Erode, Tamil Nadu.
          </p>
          <div className="flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F04444]" />
            <span>Dedicated to authentic martial arts excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
