import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/companyInfo';

export default function FloatingActions() {
  return (
    <>
      {/* 1. Left Side: Direct Phone Call Button */}
      <div className="fixed bottom-6 left-5 z-40 pointer-events-auto">
        <a
          href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
          aria-label="Direct Phone Call"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(2,132,199,0.45)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
        >
          <Phone className="w-6 h-6 text-white" />
          <span className="sr-only">Call Now</span>
        </a>
      </div>

      {/* 2. Right Side: Direct WhatsApp Message Button with Official WhatsApp Icon */}
      <div className="fixed bottom-6 right-5 z-40 pointer-events-auto">
        <a
          href={COMPANY_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(16,185,129,0.45)] hover:shadow-[0_12px_28px_rgba(16,185,129,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
        >
          <WhatsAppIcon className="w-7 h-7 text-white fill-current" />
          <span className="sr-only">WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
}
