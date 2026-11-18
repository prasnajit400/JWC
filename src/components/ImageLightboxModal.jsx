import React, { useEffect } from 'react';
import { X, Maximize2, Phone, Download } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/companyInfo';

export default function ImageLightboxModal({ isOpen, imageSrc, title, subtitle, category, onClose, onInquire }) {
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  const handleWhatsApp = () => {
    const text = `*IMAGE INQUIRY - JENA WELDING COMPANY*%0A%0A` +
      `*Item:* ${encodeURIComponent(title || 'Custom Metalwork')}%0A` +
      (category ? `*Category:* ${encodeURIComponent(category)}%0A` : '') +
      `%0AHello Prashanjit Jena, I saw this design on your website and would like a price quotation and fabrication timeline.`;
    window.open(`https://wa.me/91${COMPANY_INFO.phones.primaryRaw}?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-950 border-b border-slate-800 text-white shrink-0">
          <div className="flex items-center gap-3 truncate">
            {category && (
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-orange-600/30 text-orange-400 border border-orange-500/40 text-[10px] font-mono uppercase font-semibold">
                {category}
              </span>
            )}
            <h3 className="font-heading font-bold text-sm sm:text-base text-white truncate">
              {title || 'Jena Welding Company Project'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Preview"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image Container */}
        <div className="relative flex-1 bg-black/60 flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px]">
          <img
            src={imageSrc}
            alt={title || 'Full size view'}
            className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Bottom Action Footer */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-300 font-mono hidden sm:block">
            {subtitle ? <span>{subtitle}</span> : <span>JENA WELDING COMPANY • SAKHIGOPAL, PURI</span>}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Inquire This on WhatsApp</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xs:inline">Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
