import React from 'react';
import { Flame, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface FreeTrialCTAProps {
  onOpenBooking: () => void;
}

export const FreeTrialCTA: React.FC<FreeTrialCTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/919629446869?text=${encodeURIComponent(
    "Hello Prakastic's Academy! I would like to claim my ONE FREE TRIAL CLASS for Kickboxing & Kyokushin Karate at Thindal, Erode."
  )}`;

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-[#0B0B0B]">
      {/* High-Impact Red-and-Black Background Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm bg-gradient-to-br from-[#1F0A0A] via-[#141414] to-[#0D0D0D] border-2 border-red-500/40 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_0_50px_rgba(240,68,68,0.2)]">
          {/* Decorative Glowing Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-800/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
          <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Offer Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#F04444] text-white text-xs font-display font-bold uppercase tracking-[0.2em] shadow-lg shadow-red-950/50">
              <Flame className="w-4 h-4 fill-white" />
              <span>LIMITED INTAKE • ONE FREE TRIAL CLASS</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-wider text-white leading-tight">
              YOUR JOURNEY STARTS WITH ONE STEP.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-xl text-neutral-200 font-sans leading-relaxed max-w-2xl mx-auto font-normal">
              "Experience the training. Discover your strength. Join your first class with our{' '}
              <strong className="text-white font-semibold underline decoration-[#F04444] decoration-2 underline-offset-4">
                FREE TRIAL SESSION
              </strong>."
            </p>

            {/* Feature Checkpoints */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm text-neutral-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F04444]" />
                Zero prior martial arts experience needed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F04444]" />
                Personalized introductory instruction
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F04444]" />
                Adults & Kids welcome
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={onOpenBooking}
                icon={<Sparkles className="w-5 h-5" />}
                className="w-full sm:w-auto text-base"
              >
                CLAIM YOUR FREE TRIAL CLASS
              </MagneticButton>

              <MagneticButton
                size="lg"
                variant="secondary"
                asAnchor
                href={whatsappUrl}
                icon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
                className="w-full sm:w-auto text-base hover:border-[#25D366]/60 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                CHAT ON WHATSAPP
              </MagneticButton>
            </div>

            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono pt-2">
              Instant reply • Call/WhatsApp: +91 96294 46869
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
