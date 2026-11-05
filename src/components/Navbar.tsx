import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface NavbarProps {
  onOpenBooking: (program?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'programs', 'benefits', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-b from-[#F04444] via-[#7F1D1D] to-[#121212] border border-red-500/50 group-hover:border-red-400 group-hover:shadow-[0_0_20px_rgba(240,68,68,0.5)] transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0">
              <img
                src="/logos/primary-emblem-64.png"
                alt="Prakastic's Kickboxing Kyokushin Academy Official Emblem"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#F04444] transition-colors leading-none">
                PRAKASTIC'S
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-neutral-400 font-sans font-medium mt-0.5">
                KICKBOXING &amp; KYOKUSHIN ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-200 relative py-1 focus-visible:outline-none focus-visible:text-[#F04444] ${
                    isActive
                      ? 'text-[#F04444]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F04444] rounded-full shadow-[0_0_8px_#F04444]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919629446869"
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white tracking-wider uppercase py-2 px-3 rounded-sm border border-transparent hover:border-[#262626] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F04444]" />
              <span>+91 96294 46869</span>
            </a>
            <MagneticButton
              size="sm"
              variant="primary"
              onClick={() => onOpenBooking()}
            >
              BOOK FREE TRIAL
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-b border-[#262626] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-sm text-sm uppercase tracking-wider font-semibold transition-colors ${
                    isActive
                      ? 'bg-red-950/30 text-[#F04444] border-l-2 border-[#F04444]'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#262626] space-y-3">
            <a
              href="tel:+919629446869"
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 px-3 py-2 rounded-sm bg-[#171717] border border-[#2B2B2B]"
            >
              <Phone className="w-4 h-4 text-[#F04444]" />
              <span>+91 96294 46869 (Thindal, Erode)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#F04444] text-white text-xs font-display font-bold uppercase tracking-widest rounded-sm hover:bg-[#DC2626] shadow-lg shadow-red-950/40 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              BOOK FREE TRIAL CLASS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
