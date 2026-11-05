import React from 'react';
import { Target, HeartPulse, Shield, Brain } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-5 h-5 text-[#F04444]" />,
      title: 'Martial Arts Fundamentals',
      desc: 'Master the traditional precision of Kyokushin strikes, stances, footwork, and kickboxing combinations.',
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-[#F04444]" />,
      title: 'Physical Conditioning',
      desc: 'Build explosive functional power, high stamina, agility, and overall body strength.',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#F04444]" />,
      title: 'Practical Self-Defence',
      desc: 'Gain real-world defense skills and situational awareness to protect yourself and your loved ones.',
    },
    {
      icon: <Brain className="w-5 h-5 text-[#F04444]" />,
      title: 'Mental Discipline & Consistency',
      desc: 'Cultivate focus, resilience, respect, and unwavering dedication both inside and outside the dojo.',
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      'https://images.unsplash.com/photo-1678804481496-eb44c1259dbb?auto=format&fit=crop&w=1000&q=85';
  };

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR PHILOSOPHY"
          title="MORE THAN FIGHTING. IT'S A WAY OF LIFE."
          subtitle="At Prakastic's Kickboxing Kyokushin Academy in Thindal, we believe true martial arts training transforms the body and strengthens the mind through disciplined practice."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Authentic Martial Arts Photo (Fitted & Responsive) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] rounded-sm overflow-hidden border border-[#262626] bg-[#141414] shadow-2xl group flex flex-col justify-between">
              {/* Background Image: Male Kyokushin Karate Practitioner */}
              <img
                src="https://images.unsplash.com/photo-1678804481496-eb44c1259dbb?auto=format&fit=crop&w=1000&q=85"
                alt="Prakastic Kickboxing & Kyokushin Karate Male Practitioner in Gi"
                onError={handleImageError}
                className="absolute inset-0 w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Vignette Overlays for Depth & Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-black/40 pointer-events-none" />
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />

              {/* Top Corner Pill */}
              <div className="relative z-10 p-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-black/75 backdrop-blur-md border border-red-500/40 text-[#F04444] text-[11px] font-display uppercase tracking-widest font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04444] animate-pulse" />
                  AUTHENTIC KYOKUSHIN SPIRIT
                </span>
              </div>

              {/* Bottom Dojo Location & Info Badge */}
              <div className="relative z-10 p-5 sm:p-6">
                <div className="p-4 rounded-sm bg-[#121212]/95 backdrop-blur-md border border-[#2B2B2B] shadow-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-lg uppercase tracking-wider text-white">
                      PRAKASTIC'S DOJO
                    </p>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#F04444] px-2 py-0.5 rounded-sm bg-red-950/40 border border-red-500/30">
                      THINDAL
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    Full-contact Kyokushin Karate & Kickboxing conditioning under disciplined coaching.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & 4 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-4 text-neutral-300 font-sans leading-relaxed text-base sm:text-lg">
              <p>
                Training at <strong className="text-white font-semibold">Prakastic's Kickboxing Kyokushin Academy</strong> goes beyond raw combat techniques. It is an immersive journey to develop mental resilience, self-control, and physical endurance.
              </p>
              <p>
                Whether you are stepping into a martial arts dojo for the very first time or refining your combat conditioning, our training programs provide structured, purposeful guidance tailored to your goals.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-sm bg-[#141414] border border-[#242424] hover:border-red-500/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-sm bg-[#1A1A1A] flex items-center justify-center border border-[#2B2B2B] group-hover:border-[#F04444]/40 transition-colors shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="font-display text-base uppercase tracking-wide text-white group-hover:text-[#F04444] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Academy Motto / Quote */}
            <div className="p-4 sm:p-5 rounded-sm border-l-2 border-[#F04444] bg-[#141414]/80">
              <p className="text-sm italic text-neutral-300 font-sans">
                "The ultimate aim of the art of karate lies not in victory or defeat, but in the perfection of the characters of its participants."
              </p>
              <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono mt-1">
                — Sosai Masutatsu Oyama, Founder of Kyokushin Karate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
