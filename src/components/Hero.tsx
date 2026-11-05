import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Flame, ArrowRight, Award } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/kyokushin-hero.jpg"
          alt="Prakastic Kyokushin Karate and Kickboxing Training Arena"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-125 scale-105 transform animate-in fade-in duration-1000"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multi-layered Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-[#0B0B0B]" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 xl:gap-14">
          <div className="max-w-3xl">
            {/* Top Location & Academy Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#171717]/90 border border-red-500/30 text-white shadow-lg backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#F04444]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-200">
                  THINDAL, TAMIL NADU
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#171717]/90 border border-[#D4AF37]/50 text-white shadow-lg backdrop-blur-md">
                <img
                  src="/logos/primary-emblem-64.png"
                  alt="Official Crest"
                  className="w-4 h-4 object-contain"
                  width={16}
                  height={16}
                />
                <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#F3E5AB]">
                  CHAMPION 2026 • DEFENCE LAND
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-red-600/20 border border-red-500/40 text-[#F04444] text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-[#F04444]" />
                <span>SPECIAL OFFER: ONE FREE TRIAL CLASS</span>
              </div>
            </motion.div>

          {/* Main Cinematic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase tracking-tight text-white leading-[0.92] mb-6">
              <span className="block hover:text-[#F04444] transition-colors duration-300">DISCIPLINE.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                STRENGTH.
              </span>
              <span className="block text-[#F04444] text-glow">CONFIDENCE.</span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-neutral-300 font-sans font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10"
          >
            Discover the true power of <span className="text-white font-semibold">Kickboxing</span> and{' '}
            <span className="text-white font-semibold">Kyokushin Karate</span>. Build unshakeable physical strength,
            elevate cardiovascular stamina, and develop the mental fortitude to defend yourself.
          </motion.p>

          {/* Action Buttons & Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12"
          >
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={onOpenBooking}
              icon={<ArrowRight className="w-5 h-5" />}
              className="text-base"
            >
              BOOK YOUR FREE TRIAL
            </MagneticButton>

            <MagneticButton
              size="lg"
              variant="secondary"
              asAnchor
              href="#programs"
              className="text-base"
            >
              EXPLORE OUR TRAINING
            </MagneticButton>
          </motion.div>

          {/* Bottom Highlight Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#171717] border border-[#2B2B2B] flex items-center justify-center text-[#F04444]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400">Programs</p>
                <p className="font-display text-base font-bold text-white uppercase">Adults & Kids</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#171717] border border-[#2B2B2B] flex items-center justify-center text-[#F04444]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400">Martial Arts</p>
                <p className="font-display text-base font-bold text-white uppercase">Full Contact Kyokushin</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-red-950/40 border border-red-500/40 flex items-center justify-center text-[#F04444]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400">Special Offer</p>
                <p className="font-display text-base font-bold text-[#F04444] uppercase">1st Class Free</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Official Champion Emblem Badge on Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center justify-center shrink-0 self-center"
        >
          <div className="relative group p-2">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-red-600/30 via-red-500/10 to-yellow-500/20 blur-2xl group-hover:blur-3xl transition-all duration-700 pointer-events-none" />
            
            <div className="relative w-64 h-64 xl:w-80 xl:h-80 rounded-full p-2 bg-gradient-to-b from-[#D4AF37]/50 via-[#171717] to-[#0B0B0B] border-2 border-[#D4AF37]/60 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-sm flex items-center justify-center">
              <img
                src="/logos/primary-emblem.png"
                alt="Prakastic's Kickboxing Kyokushin Academy Official Logo - Champion 2026 Defence Land"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                width={320}
                height={320}
                loading="eager"
              />
            </div>

            {/* Bottom Credential Ribbon */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-[#121212]/95 border border-[#D4AF37]/70 shadow-2xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#F3E5AB]">
                CHAMPION 2026 • DEFENCE LAND
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};
