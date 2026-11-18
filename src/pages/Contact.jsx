import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  ShieldCheck, 
  MessageSquare, 
  Flame, 
  Clock, 
  Send, 
  CheckCircle2, 
  Truck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_CATEGORIES } from '../data/servicesData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: SERVICES_CATEGORIES[0]?.name || 'All Types of Gate Fabrication',
    location: '',
    dimensions: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Contact Phone Number');
      return;
    }

    setSubmitting(true);

    const message = `*PROJECT INQUIRY VIA WEBSITE - JENA WELDING COMPANY*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone Number:* ${encodeURIComponent(formData.phone)}%0A` +
      (formData.email ? `*Email:* ${encodeURIComponent(formData.email)}%0A` : '') +
      `*Department:* ${encodeURIComponent(formData.category)}%0A` +
      `*Project Location:* ${encodeURIComponent(formData.location || 'Puri/Odisha/Pan-India')}%0A` +
      (formData.dimensions ? `*Dimensions/Size:* ${encodeURIComponent(formData.dimensions)}%0A` : '') +
      `*Work Details:* ${encodeURIComponent(formData.details || 'Requesting custom quotation & blueprint')}%0A%0A` +
      `_Sent to Prashanjit Jena via Official Website Portal_`;

    const waUrl = `https://wa.me/91${COMPANY_INFO.phones.primaryRaw}?text=${message}`;

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
    <div className="relative min-h-screen bg-white text-slate-800 pt-36 pb-24 font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            CONTACT HEADER
        ========================================================================= */}
        <div className="max-w-4xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-mono uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>DIRECT WORKSHOP CONSULTATION</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Contact & Request Quotation
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Connect directly with <strong>Prashanjit Jena</strong> and our master fabrication team at our Sakhigopal central workshop. We provide free on-site measurements across Puri and Odisha, and dispatch custom crated orders pan-India.
          </p>
        </div>

        {/* =========================================================================
            CONTACT INFORMATION CARDS (APS Style)
        ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* 1. Phone Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                CALL DIRECTLY
              </span>
              <a
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="text-lg font-heading font-extrabold text-slate-900 hover:text-orange-600 block transition-colors mt-1"
              >
                {COMPANY_INFO.phones.primary}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phones.secondaryRaw}`}
                className="text-sm font-mono text-slate-500 hover:text-slate-900 block transition-colors"
              >
                {COMPANY_INFO.phones.secondary}
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 font-normal">
              Direct connection to workshop supervisor.
            </p>
          </div>

          {/* 2. WhatsApp Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <WhatsAppIcon className="w-6 h-6 fill-current text-emerald-600" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                WHATSAPP BLUEPRINT CHAT
              </span>
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-heading font-extrabold text-emerald-600 hover:text-emerald-700 block transition-colors mt-1"
              >
                +91 9337657584
              </a>
              <span className="text-xs font-mono text-slate-500 block">
                Send site photos & sketches
              </span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 font-normal">
              Quick estimates & architectural consultations.
            </p>
          </div>

          {/* 3. Address Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                CENTRAL WORKSHOP
              </span>
              <div className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                {COMPANY_INFO.address.street}
              </div>
              <div className="text-xs text-slate-600 font-mono">
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
              </div>
            </div>
            <a
              href={COMPANY_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-orange-600 hover:underline pt-1 border-t border-slate-100 inline-flex items-center gap-1 font-mono font-bold"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* 4. Official UDYAM & Email */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                GOVT REGISTRATION & EMAIL
              </span>
              <div className="text-sm font-mono font-bold text-slate-900 mt-1">
                UDYAM: {COMPANY_INFO.udyam}
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs text-slate-600 hover:text-slate-900 font-mono block truncate"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-pink-600 hover:underline pt-1 border-t border-slate-100 inline-flex items-center gap-1 font-mono font-semibold"
            >
              <Instagram className="w-3 h-3" />
              <span>{COMPANY_INFO.instagram}</span>
            </a>
          </div>

        </div>

        {/* =========================================================================
            INQUIRY FORM & SITE LOCATION DETAILS
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-xl space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-mono text-orange-700 uppercase tracking-wider font-bold block">
                  PROJECT SPECIFICATION INQUIRY
                </span>
                <h2 className="text-2xl font-heading font-extrabold text-slate-900">
                  Send Your Project Details
                </h2>
                <p className="text-xs text-slate-600 font-normal">
                  Submit your custom metalwork requirements below. Our workshop calculates raw steel weight, finishes, and returns an exact blueprint quotation.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Subrat Mohanty"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9337657584"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                        Service Department
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 transition-all font-sans"
                      >
                        {SERVICES_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.name} className="bg-white text-slate-900">
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                        Project Site / Delivery City
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Puri, Bhubaneswar, Kolkata, etc."
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                        Approx Dimensions / Size
                      </label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        placeholder="e.g. 16 ft × 8 ft, or 120 Rft"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                      Detailed Work Requirements
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Specify material preferences (Heavy MS Steel, Jindal SS 304, Aluminium profile), custom design pattern, on-site measurement needs, or expected delivery timeline..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-heading font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Open WhatsApp Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Quote Request Formatted & Sent!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto font-normal">
                    Your project details have been formatted and dispatched. Prashanjit Jena will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Right Workshop & Logistics Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-card space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                  📍
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    Sakhigopal Central Workshop
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    Block Chaka, Puri, Odisha 752014
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono">Working Hours:</strong>
                    <span>Monday - Sunday: 8:00 AM – 9:00 PM</span>
                    <span className="block text-[11px] text-emerald-700 font-medium">Emergency On-Site Welder Available 24/7</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
                  <Truck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono">Pan-India Freight Logistics:</strong>
                    <span>All gates, food stalls & kiosks are flat-packed or crated with heavy timber bracing for scratch-free long haul dispatch across India.</span>
                  </div>
                </div>
              </div>

              <a
                href={COMPANY_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Open Sakhigopal Location in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Emergency Mobile Welder Strip */}
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 space-y-3">
              <div className="flex items-center gap-2 text-orange-800 font-mono text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 text-orange-600" />
                <span>URGENT ON-SITE REPAIR DESK</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900">
                Broken Hinge? Damaged Gate? Emergency Repair?
              </h4>
              <p className="text-xs text-slate-700 font-normal leading-relaxed">
                Our mobile welding squad is equipped with portable inverter welders and cutting torches. Rapid 2 to 4 hour response across Puri, Sakhigopal, Pipili, and Khordha district.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Dispatch: {COMPANY_INFO.phones.primary}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
