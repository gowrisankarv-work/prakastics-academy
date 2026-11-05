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
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=2000&q=85"
          alt="Kickboxing and Kyokushin Karate Training"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 scale-105 transform animate-in fade-in duration-1000"
          loading="eager"
        />
        {/* Multi-layered Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-[#0B0B0B]" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
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
      </div>
    </section>
  );
};
