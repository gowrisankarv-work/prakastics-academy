import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProgram,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [batch, setBatch] = useState(defaultProgram || "Adult's Batch");
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    if (defaultProgram) {
      setBatch(defaultProgram);
    }
  }, [defaultProgram]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const waText = `🥋 *FREE TRIAL ENQUIRY - PRAKASTIC'S ACADEMY* 🥋
-----------------------------------
👤 *Name:* ${name.trim()}
📱 *Phone:* ${phone.trim()}
🥊 *Program:* ${batch}
📝 *Notes:* ${message.trim() || 'Requesting 1 Free Trial Class booking in Thindal.'}
📍 *Location:* Thindal, Tamil Nadu
-----------------------------------
Sent via Academy Website`;

    const whatsappUrl = `https://wa.me/919629446869?text=${encodeURIComponent(waText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-[#2B2B2B] rounded-sm p-6 sm:p-8 shadow-2xl shadow-red-950/40 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Glow Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F04444] to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-sm bg-[#1F1F1F] text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Brand Header */}
        <div className="mb-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-b from-[#F04444] via-[#7F1D1D] to-[#121212] border border-red-500/50 shadow-md shrink-0 overflow-hidden mt-0.5">
            <img
              src="/logos/primary-emblem-64.png"
              alt="Prakastic Academy Crest"
              className="w-full h-full object-contain"
              width={48}
              height={48}
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-1.5 rounded-sm bg-red-950/50 border border-red-500/30 text-[#F04444] text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>ONE FREE TRIAL CLASS</span>
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-white">
              BOOK YOUR FREE TRIAL
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              Prakastic's Kickboxing &amp; Kyokushin Academy • Thindal
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modal-name" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
              Full Name <span className="text-[#F04444]">*</span>
            </label>
            <input
              id="modal-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. S. Kumar"
              className={`w-full px-3.5 py-2.5 rounded-sm bg-[#0B0B0B] border text-white text-sm placeholder:text-neutral-600 focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-[#2B2B2B] focus:border-[#F04444]'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="modal-phone" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
              Phone Number <span className="text-[#F04444]">*</span>
            </label>
            <input
              id="modal-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 96294 46869"
              className={`w-full px-3.5 py-2.5 rounded-sm bg-[#0B0B0B] border text-white text-sm placeholder:text-neutral-600 focus:outline-none ${
                errors.phone ? 'border-red-500' : 'border-[#2B2B2B] focus:border-[#F04444]'
              }`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
              Select Batch
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setBatch("Adult's Batch")}
                className={`py-2 px-3 rounded-sm border text-xs font-semibold uppercase tracking-wider transition-all ${
                  batch === "Adult's Batch"
                    ? 'bg-red-950/40 border-[#F04444] text-white'
                    : 'bg-[#0B0B0B] border-[#2B2B2B] text-neutral-400 hover:text-white'
                }`}
              >
                Adult's Batch
              </button>
              <button
                type="button"
                onClick={() => setBatch("Kid's Batch")}
                className={`py-2 px-3 rounded-sm border text-xs font-semibold uppercase tracking-wider transition-all ${
                  batch === "Kid's Batch"
                    ? 'bg-red-950/40 border-[#F04444] text-white'
                    : 'bg-[#0B0B0B] border-[#2B2B2B] text-neutral-400 hover:text-white'
                }`}
              >
                Kid's Batch
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="modal-msg" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
              Preferred Day / Time (Optional)
            </label>
            <textarea
              id="modal-msg"
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Evening slots preferred..."
              className="w-full px-3.5 py-2 rounded-sm bg-[#0B0B0B] border border-[#2B2B2B] text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#F04444]"
            />
          </div>

          <div className="pt-2">
            <MagneticButton
              type="submit"
              size="md"
              variant="primary"
              className="w-full"
              icon={<Send className="w-4 h-4" />}
            >
              CONFIRM & SEND ON WHATSAPP
            </MagneticButton>
          </div>

          <p className="text-[11px] text-center text-neutral-500 pt-1">
            Directly sends your trial request to academy phone +91 96294 46869
          </p>
        </form>
      </div>
    </div>
  );
};
