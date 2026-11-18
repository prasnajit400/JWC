import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_CATEGORIES } from '../data/servicesData';

export default function QuoteModal({ isOpen, onClose, initialService = null, initialCategory = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    serviceName: '',
    location: '',
    dimensions: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        category: initialCategory || SERVICES_CATEGORIES[0]?.name || '',
        serviceName: initialService || '',
        location: '',
        dimensions: '',
        details: ''
      });
    }
  }, [isOpen, initialService, initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your Name and Contact Phone Number');
      return;
    }

    setSubmitting(true);
    
    const msg = `*NEW INQUIRY - JENA WELDING COMPANY*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone Number:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Department:* ${encodeURIComponent(formData.category)}%0A` +
      (formData.serviceName ? `*Product/Item:* ${encodeURIComponent(formData.serviceName)}%0A` : '') +
      `*Location:* ${encodeURIComponent(formData.location || 'Not Specified')}%0A` +
      (formData.dimensions ? `*Dimensions:* ${encodeURIComponent(formData.dimensions)}%0A` : '') +
      `*Work Details:* ${encodeURIComponent(formData.details || 'Requesting custom quotation & blueprint')}%0A%0A` +
      `_Sent to Prashanjit Jena via Official Website_`;

    const waUrl = `https://wa.me/91${COMPANY_INFO.phones.primaryRaw}?text=${msg}`;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn font-sans">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-2xl text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-orange-100 text-orange-800 text-xs font-mono uppercase font-bold">
                <Flame className="w-3.5 h-3.5 text-orange-600" />
                <span>FREE SITE QUOTE & BLUEPRINT</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Request Custom Fabrication Quote
              </h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Connect with <strong>Prashanjit Jena</strong> for honest steel recommendations, verified metal gauges, and fast execution.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Mohapatra"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9337657584"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                    Service Department
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 transition-all font-sans"
                  >
                    {SERVICES_CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.name} className="bg-white text-slate-900">
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                    Site Location (City / Town)
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Puri / Bhubaneswar / Sakhigopal"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                    Specific Item / Design
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    value={formData.serviceName}
                    onChange={handleChange}
                    placeholder="e.g. Slat Gate, Balcony Railing, Food Stall"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                    Dimensions / Size (Optional)
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="e.g. 14 ft × 7 ft or 80 Rft"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                  Work Details / Specific Custom Requirements
                </label>
                <textarea
                  name="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Describe your design preference, material grade (Heavy MS / Jindal SS 304 / Aluminium), or expected delivery date..."
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all resize-none"
                />
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Official UDYAM Verified Workshop (<strong className="text-slate-900 font-mono">{COMPANY_INFO.udyam}</strong>). 100% Certified Heavy Steel.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all disabled:opacity-50 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send WhatsApp Inquiry</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Now</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Inquiry Dispatched Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your project details have been forwarded to Prashanjit Jena on WhatsApp.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all font-mono"
              >
                Close
              </button>
              <a
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-700 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Prashanjit Jena</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
