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

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR PHILOSOPHY"
          title="MORE THAN FIGHTING. IT'S A WAY OF LIFE."
          subtitle="At Prakastic's Kickboxing Kyokushin Academy in Thindal, we believe true martial arts training transforms the body and strengthens the mind through disciplined practice."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Framing & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border border-[#262626] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
                alt="Disciplined Martial Arts and Kickboxing Practice"
                className="w-full h-[450px] sm:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
              
              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#141414]/90 backdrop-blur-md border border-[#2B2B2B]">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F04444] animate-ping" />
                  <p className="font-display text-sm uppercase tracking-widest text-white">
                    Kyokushin Karate & Kickboxing • Thindal Dojo
                  </p>
                </div>
              </div>
            </div>

            {/* Background Decorative Accent Frame */}
            <div className="absolute -inset-2 rounded-sm border border-red-500/20 translate-x-3 translate-y-3 -z-0 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Editorial Text & 4 Core Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-neutral-300 font-sans leading-relaxed text-base sm:text-lg">
              <p>
                Training at <strong className="text-white font-semibold">Prakastic's Kickboxing Kyokushin Academy</strong> goes beyond raw combat techniques. It is an immersive journey to develop mental resilience, self-control, and physical endurance.
              </p>
              <p>
                Whether you are stepping into a martial arts dojo for the very first time or refining your combat conditioning, our training programs provide structured, purposeful guidance tailored to your goals.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-sm bg-[#141414] border border-[#242424] hover:border-red-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-sm bg-[#1A1A1A] flex items-center justify-center border border-[#2B2B2B] group-hover:border-[#F04444]/40 transition-colors">
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
              ))}
            </div>

            {/* Academy Motto / Quote */}
            <div className="p-4 rounded-sm border-l-2 border-[#F04444] bg-[#141414]/60">
              <p className="text-sm italic text-neutral-300 font-sans">
                "The ultimate aim of the art of karate lies not in victory or defeat, but in the perfection of the characters of its participants."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
