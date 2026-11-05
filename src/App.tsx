import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Programs } from '@/components/Programs';
import { WhyKyokushin } from '@/components/WhyKyokushin';
import { Gallery } from '@/components/Gallery';
import { FreeTrialCTA } from '@/components/FreeTrialCTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { EnquiryModal } from '@/components/EnquiryModal';
import { MessageCircle, ArrowUp } from 'lucide-react';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("Adult's Batch");
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (program?: string) => {
    if (program) setSelectedProgram(program);
    setModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#F04444] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        {/* Section 2: Hero */}
        <Hero onOpenBooking={() => handleOpenBooking("Adult's Batch")} />

        {/* Section 3: About The Academy */}
        <About />

        {/* Section 4: Training Programs (Adult & Kids) */}
        <Programs onSelectProgram={handleOpenBooking} />

        {/* Section 5: Why Choose Kyokushin */}
        <WhyKyokushin />

        {/* Section 6: Training Gallery */}
        <Gallery />

        {/* Section 7: Free Trial High-Impact CTA */}
        <FreeTrialCTA onOpenBooking={() => handleOpenBooking("Adult's Batch")} />

        {/* Section 8: Contact & Enquiry Form */}
        <Contact initialProgram={selectedProgram} />
      </main>

      {/* Section 9: Footer */}
      <Footer />

      {/* Modal Dialog */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProgram={selectedProgram}
      />

      {/* Floating Action Button (FAB) - Quick WhatsApp Access */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#171717] border border-[#2B2B2B] text-neutral-300 hover:text-white hover:border-red-500 flex items-center justify-center transition-all shadow-lg active:scale-95 focus-visible:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href="https://wa.me/919629446869?text=Hello%20Prakastic's%20Academy!%20I%20would%20like%20to%20enquire%20about%20Kickboxing%20%26%20Kyokushin%20training%20at%20Thindal."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          aria-label="Chat directly on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="hidden sm:inline font-sans font-bold">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default App;
