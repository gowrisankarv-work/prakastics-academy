import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface ContactProps {
  initialProgram?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProgram }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [batch, setBatch] = useState(initialProgram || "Adult's Batch");
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Build properly encoded WhatsApp message
    const waText = `🥋 *NEW ENQUIRY - PRAKASTIC'S ACADEMY* 🥋
-----------------------------------
👤 *Name:* ${name.trim()}
📱 *Phone:* ${phone.trim()}
🥊 *Batch:* ${batch}
📝 *Message:* ${message.trim() || 'Requesting Free Trial Class details and training schedule.'}
📍 *Location Preference:* Thindal, Erode, Tamil Nadu
-----------------------------------
Sent via Academy Website`;

    const whatsappUrl = `https://wa.me/919629446869?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="READY TO START TRAINING?"
          subtitle="Take the first step toward strength, discipline, and self-defence. Contact us directly or submit your enquiry below to claim your Free Trial."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Academy Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-[#141414] border border-[#262626] space-y-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-b from-[#F04444] via-[#7F1D1D] to-[#121212] border border-red-500/50 shrink-0 overflow-hidden shadow-lg shadow-red-950/40">
                  <img
                    src="/logos/primary-emblem-64.png"
                    alt="Prakastic Academy Crest"
                    className="w-full h-full object-contain"
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#F04444] font-semibold">
                    DOJO LOCATION &amp; CONTACT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white mt-0.5">
                    PRAKASTIC'S KICKBOXING &amp; KYOKUSHIN ACADEMY
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#F04444] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">Location</p>
                    <p className="text-sm sm:text-base font-semibold text-white">THINDAL, ERODE, TAMIL NADU</p>
                    <p className="text-xs text-neutral-500 mt-0.5">Easily accessible hub for martial arts training</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#F04444] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">Direct Call</p>
                    <a
                      href="tel:+919629446869"
                      className="text-base sm:text-lg font-bold text-white hover:text-[#F04444] transition-colors"
                    >
                      +91 96294 46869
                    </a>
                    <p className="text-xs text-neutral-500">Available Mon - Sat for admissions</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">WhatsApp Official</p>
                    <a
                      href="https://wa.me/919629446869"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                    >
                      Chat with Academy Instructors
                    </a>
                    <p className="text-xs text-neutral-500">Fast replies for batch timings & free trial</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#E1306C] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">Instagram</p>
                    <a
                      href="https://www.instagram.com/pr_akastic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#E1306C] transition-colors"
                    >
                      @pr_akastic
                    </a>
                    <p className="text-xs text-neutral-500">Watch academy training drills & updates</p>
                  </div>
                </div>
              </div>

              {/* Special Trial Notice */}
              <div className="p-4 rounded-sm bg-red-950/20 border border-red-500/30 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#F04444] shrink-0" />
                <p className="text-xs text-neutral-200">
                  <strong className="text-white font-semibold">Special Offer:</strong> 1 Free Trial Class available for new students.
                </p>
              </div>
            </div>

            {/* Map Placeholder Card (Configurable) */}
            <div className="rounded-sm bg-[#141414] border border-[#262626] overflow-hidden shadow-xl">
              <div className="p-4 border-b border-[#262626] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F04444]" />
                  Thindal, Erode Map Area
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">Configurable Location</span>
              </div>
              <div className="relative w-full h-48 bg-[#171717]">
                <iframe
                  title="Academy Location Area - Thindal, Erode, Tamil Nadu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.883908865487!2d77.67484643171387!3d11.314949791484838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f014e71d34f%3A0x67dbdb3dbcf6be66!2sThindal%2C%20Erode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-75"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-sm bg-[#141414] border border-[#262626] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white mb-2">
                SEND ADMISSION ENQUIRY
              </h3>
              <p className="text-sm text-neutral-400 font-sans mb-8">
                Fill out the details below. Clicking submit will directly launch WhatsApp with your prefilled details to connect with the academy instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullname" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Full Name <span className="text-[#F04444]">*</span>
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3.5 rounded-sm bg-[#0B0B0B] border text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#2B2B2B] focus:border-[#F04444] focus:ring-1 focus:ring-[#F04444]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Mobile Number (WhatsApp Preferred) <span className="text-[#F04444]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm font-mono">
                      +91
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="98765 43210"
                      className={`w-full pl-14 pr-4 py-3.5 rounded-sm bg-[#0B0B0B] border text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-[#2B2B2B] focus:border-[#F04444] focus:ring-1 focus:ring-[#F04444]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Interested Batch */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Select Training Batch <span className="text-[#F04444]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setBatch("Adult's Batch")}
                      className={`p-4 rounded-sm border text-left transition-all cursor-pointer ${
                        batch === "Adult's Batch"
                          ? 'bg-red-950/30 border-[#F04444] text-white shadow-md'
                          : 'bg-[#0B0B0B] border-[#2B2B2B] text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display text-lg uppercase tracking-wide text-white">ADULT'S BATCH</span>
                        {batch === "Adult's Batch" && <CheckCircle className="w-4 h-4 text-[#F04444]" />}
                      </div>
                      <p className="text-xs text-neutral-400">Strength, Kickboxing & Combat Fitness (15+ yrs)</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBatch("Kid's Batch")}
                      className={`p-4 rounded-sm border text-left transition-all cursor-pointer ${
                        batch === "Kid's Batch"
                          ? 'bg-red-950/30 border-[#F04444] text-white shadow-md'
                          : 'bg-[#0B0B0B] border-[#2B2B2B] text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display text-lg uppercase tracking-wide text-white">KID'S BATCH</span>
                        {batch === "Kid's Batch" && <CheckCircle className="w-4 h-4 text-[#F04444]" />}
                      </div>
                      <p className="text-xs text-neutral-400">Discipline, Coordination & Martial Arts Basics (5-14 yrs)</p>
                    </button>
                  </div>
                </div>

                {/* Message / Questions */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Message or Specific Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your fitness level, preferred days, or trial date..."
                    className="w-full px-4 py-3 rounded-sm bg-[#0B0B0B] border border-[#2B2B2B] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#F04444] focus:ring-1 focus:ring-[#F04444] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <MagneticButton
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full text-base"
                  icon={<Send className="w-4 h-4" />}
                >
                  SEND ENQUIRY VIA WHATSAPP
                </MagneticButton>

                {submitted && (
                  <div className="p-3.5 rounded-sm bg-green-950/30 border border-green-500/40 text-green-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    <span>WhatsApp launched with your enquiry. An academy instructor will connect shortly!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
