import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, ShieldCheck, ArrowUpRight, Flame, Clock, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_CATEGORIES } from '../data/servicesData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="relative bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Founder Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img
                  src="./images/logo_web.png"
                  onError={(e) => { e.currentTarget.src = "./images/logo_transparent.png"; }}
                  alt="Jena Welding Company"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="block font-heading font-extrabold text-lg text-white tracking-tight">
                  JENA WELDING CO.
                </span>
                <span className="block text-[11px] font-mono text-slate-400 uppercase">
                  ESTABLISHED 1999 • SAKHIGOPAL
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              "{COMPANY_INFO.tagline}" — Founded by <strong>{COMPANY_INFO.founder}</strong> in 1999 at Block Chaka, Sakhigopal, Puri, Odisha. Engineering heavy-duty structural steelwork, architectural gates, stainless steel railings, and commercial food kiosks with nationwide dispatch.
            </p>

            {/* Official UDYAM Badge */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OFFICIAL UDYAM REGISTRATION</span>
              </div>
              <div className="text-white font-mono text-sm tracking-wider flex items-center justify-between">
                <span>{COMPANY_INFO.udyam}</span>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  Govt. Verified
                </span>
              </div>
            </div>

            {/* Instagram Social Pill */}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram: {COMPANY_INFO.instagram}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Col 2: Core Departments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Core Departments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services?category=${cat.id}`}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-orange-400">›</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="w-full text-left px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono flex items-center justify-between transition-colors"
              >
                <span>Request Custom Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Products & Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Project Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Quote</Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
              <strong className="text-white block font-mono">Pan-India Freight:</strong>
              <span>Dispatch to Kolkata, Hyderabad, Delhi & all states.</span>
            </div>
          </div>

          {/* Col 4: Contact & Workshop Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Central Workshop
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <a 
                href={COMPANY_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-orange-300 transition-colors group"
                title="Open exact location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <strong className="text-white block group-hover:text-orange-400">Workshop Location:</strong>
                  <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}</span>
                  <span className="block text-[11px] text-orange-400 font-mono mt-0.5">View on Google Maps →</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Call / WhatsApp:</strong>
                  <a href={`tel:${COMPANY_INFO.phones.primaryRaw}`} className="text-white font-mono hover:text-orange-400 block font-semibold">
                    Call: {COMPANY_INFO.phones.primary}
                  </a>
                  <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-mono hover:text-emerald-300 flex items-center gap-1.5 mt-0.5 font-semibold">
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Support Email:</strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-400 hover:text-white font-mono break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-mono">Mon – Sun (8 AM – 9 PM)</span>
                  <span className="block text-[11px] text-emerald-400">Emergency mobile welder 24/7</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">JENA WELDING COMPANY</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Founder: {COMPANY_INFO.founder}</span>
            <span>•</span>
            <span>UDYAM: {COMPANY_INFO.udyam}</span>
            <span>•</span>
            <span>SAKHIGOPAL • PURI • ODISHA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
