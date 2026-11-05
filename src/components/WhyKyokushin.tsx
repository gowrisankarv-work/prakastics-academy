import React from 'react';
import {
  Swords,
  Dumbbell,
  Zap,
  Activity,
  BrainCircuit,
  Trophy,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const WhyKyokushin: React.FC = () => {
  const features = [
    {
      icon: <Swords className="w-6 h-6 text-[#F04444]" />,
      number: '01',
      title: 'LEARN TO FIGHT',
      description:
        'Develop practical fighting combinations and real-world self-defence fundamentals under disciplined, structured supervision.',
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#F04444]" />,
      number: '02',
      title: 'BUILD STRENGTH',
      description:
        'Improve physical fitness, muscular endurance, core stability, and overall athletic full-body conditioning.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#F04444]" />,
      number: '03',
      title: 'DEVELOP POWER',
      description:
        'Build explosive kinetic speed, balanced biomechanics, coordination, and controlled striking power.',
    },
    {
      icon: <Activity className="w-6 h-6 text-[#F04444]" />,
      number: '04',
      title: 'IMPROVE STAMINA',
      description:
        'Dramatically improve cardiovascular health, aerobic and anaerobic endurance, agility, and recovery time.',
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-[#F04444]" />,
      number: '05',
      title: 'MENTAL DISCIPLINE',
      description:
        'Cultivate consistency, high situational focus, emotional balance, respect, and unwavering determination.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#F04444]" />,
      number: '06',
      title: 'SELF-CONFIDENCE',
      description:
        'Overcome personal limits, shed hesitation, and become confident in your own strength through regular training.',
    },
  ];

  return (
    <section id="benefits" className="py-20 sm:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WHY TRAIN HERE"
          title="BUILD YOUR STRONGER SELF."
          subtitle="Every training session at Prakastic's Academy is engineered to forge mental toughness, physical power, and lifelong confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative p-7 sm:p-8 rounded-sm bg-[#141414] border border-[#242424] hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_25px_rgba(240,68,68,0.12)] hover:-translate-y-1"
            >
              {/* Top Row: Icon + Number Index */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-red-500/50 flex items-center justify-center transition-colors shadow-inner">
                    {item.icon}
                  </div>
                  <span className="font-display text-2xl font-bold text-neutral-600 group-hover:text-red-500/50 transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white mb-3 group-hover:text-[#F04444] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-[#1F1F1F] flex items-center justify-between text-xs text-neutral-500">
                <span className="uppercase tracking-widest text-[10px]">Kyokushin Way</span>
                <div className="w-8 h-0.5 bg-neutral-800 group-hover:bg-[#F04444] transition-all duration-300 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
