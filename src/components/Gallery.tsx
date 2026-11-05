import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  span: string; // Tailwind grid span
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Power & Precision Pad Drills',
      category: 'Kickboxing Training',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 2,
      title: 'Traditional Kyokushin Kata & Form',
      category: 'Karate Technique',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 3,
      title: 'Heavy Bag Conditioning',
      category: 'Striking Endurance',
      image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 4,
      title: 'Controlled Sparring Sessions',
      category: 'Combat Readiness',
      image: 'https://images.unsplash.com/photo-1509563457123-ab5432813449?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 5,
      title: 'Functional Combat Fitness',
      category: 'Athletic Conditioning',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 6,
      title: 'Dojo Discipline & Camaraderie',
      category: 'Group Training',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      span: 'md:col-span-2 md:row-span-1',
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TRAINING ENVIRONMENT"
          title="THE SPIRIT OF TRAINING."
          subtitle="A glimpse into the energy, technique, and dedication that defines each session at Prakastic's Academy."
        />

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[240px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative overflow-hidden rounded-sm border border-[#242424] hover:border-red-500/50 bg-[#171717] cursor-pointer transition-all duration-300 shadow-xl ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Glow & Information */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2.5 py-0.5 mb-2 rounded-sm bg-red-950/80 border border-red-500/40 text-[#F04444] text-[10px] font-semibold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-white group-hover:text-[#F04444] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0B0B]/80 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on imagery */}
        <p className="text-center text-xs text-neutral-400 mt-8 tracking-wide font-sans">
          Photographic representation of the physical rigor, Kyokushin techniques, and conditioning taught at the academy.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141414] border border-[#2B2B2B] rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#F04444] hover:bg-black transition-colors focus-visible:outline-none"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-cover"
            />

            <div className="p-6 bg-[#141414] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#242424]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#F04444] font-semibold">
                  {selectedImage.category}
                </span>
                <h4 className="font-display text-2xl uppercase text-white">
                  {selectedImage.title}
                </h4>
              </div>
              <p className="text-xs text-neutral-400">Prakastic's Kickboxing Kyokushin Academy • Thindal</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
