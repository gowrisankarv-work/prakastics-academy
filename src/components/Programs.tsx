import React from 'react';
import { Users, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const programs = [
    {
      id: 'adults',
      name: "ADULT'S BATCH",
      badge: 'STRENGTH & CONDITIONING',
      description:
        'Develop explosive full-body strength, improve cardiovascular conditioning, learn practical kickboxing and Kyokushin fighting techniques, and forge genuine self-confidence.',
      image: '/images/programs/adults/adult-karate-training.jpg',
      highlights: [
        'Full-contact Kyokushin techniques & defensive footwork',
        'High-intensity kickboxing pad work & heavy bag drills',
        'Endurance conditioning and functional core strength',
        'Practical street self-defence & situational control',
        'Beginner-friendly progression to advanced sparring',
      ],
      idealFor: 'College students, working professionals & fitness enthusiasts (Age 15+)',
    },
    {
      id: 'kids',
      name: "KID'S BATCH",
      badge: 'DISCIPLINE & CHARACTER',
      description:
        'Help children develop lifelong discipline, agile physical fitness, motor coordination, healthy self-confidence, and fundamental martial arts skills in a safe environment.',
      image: '/images/programs/kids/kids-karate-training.jpg',
      highlights: [
        'Respect, focus, and traditional dojo etiquette',
        'Agility, balance, flexibility, and motor coordination',
        'Anti-bullying awareness & non-violent resolution',
        'Fun, energetic conditioning & age-appropriate drills',
        'Confidence building through structured belt grading',
      ],
      idealFor: 'Boys & girls building focus, fitness, and discipline (Age 5 - 14)',
    },
  ];

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SPECIALIZED TRAINING"
          title="TRAIN WITH PURPOSE."
          subtitle="Focused training tracks tailored for both adults striving for peak fitness & combat skills, and kids developing foundational discipline and character."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group rounded-sm bg-[#141414] border border-[#242424] hover:border-red-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_0_30px_rgba(240,68,68,0.15)]"
            >
              {/* Top Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero/kyokushin-hero.jpg';
                  }}
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-sm bg-[#F04444] text-white text-[11px] font-display uppercase tracking-widest font-bold shadow-md">
                    {program.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-wide text-white group-hover:text-[#F04444] transition-colors">
                      {program.name}
                    </h3>
                    <div className="w-8 h-8 rounded-sm bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#F04444]">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Key Training Focus:
                    </p>
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#F04444] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-200">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions & Trial Note */}
                <div className="pt-6 border-t border-[#242424] space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F04444]" />
                      1 Free Trial Included
                    </span>
                    <span className="text-neutral-500 font-mono">Location: Thindal, Erode</span>
                  </div>

                  <MagneticButton
                    variant="primary"
                    size="md"
                    className="w-full justify-between"
                    onClick={() => onSelectProgram(program.name)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    ENQUIRE NOW FOR {program.name}
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
