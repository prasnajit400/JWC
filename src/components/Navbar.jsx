import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck, Mail, MapPin, ChevronRight, MessageSquare, Flame, Instagram, Truck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/services' },
    { name: 'Project Gallery', path: '/gallery' },
    { name: 'Contact & Inquiry', path: '/contact' },
  ];

  // Ticker items to render in continuous sliding loop
  const tickerItems = (
    <>
      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>UDYAM: <strong className="text-white">{COMPANY_INFO.udyam}</strong> (Govt. Verified MSME)</span>
      </span>

      <span className="text-slate-600 font-bold">•</span>

      <a
        href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
        className="inline-flex items-center gap-1.5 text-white hover:text-orange-400 transition-colors font-mono font-semibold"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>Call: {COMPANY_INFO.phones.primary}</span>
      </a>

      <span className="text-slate-600 font-bold">•</span>

      <a
        href={`mailto:${COMPANY_INFO.email}`}
        className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-mono"
      >
        <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
        <span>Email: <strong className="text-white">{COMPANY_INFO.email}</strong></span>
      </a>

      <span className="text-slate-600 font-bold">•</span>

      <a
        href={COMPANY_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors font-mono"
      >
        <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
        <span>Instagram: <strong className="text-white">{COMPANY_INFO.instagram}</strong></span>
      </a>

      <span className="text-slate-600 font-bold">•</span>

      <a
        href={COMPANY_INFO.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors font-mono"
      >
        <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
        <span>Workshop: Sakhigopal, Block Chaka, Puri, Odisha</span>
      </a>

      <span className="text-slate-600 font-bold">•</span>

      <span className="inline-flex items-center gap-1.5 text-amber-300 font-mono">
        <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>Pan-India Supply & Freight Delivery Across All States</span>
      </span>

      <span className="text-slate-600 font-bold">•</span>
    </>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        {/* 1. BRANDING AT THE VERY TOP (As requested) */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
              
              {/* Brand Logo & Title */}
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
                <img
                  src="./images/logo_web.png"
                  onError={(e) => { e.currentTarget.src = "./images/logo_transparent.png"; }}
                  alt="Jena Welding Company Logo"
                  className="h-10 sm:h-13 w-auto object-contain"
                />

                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-sm sm:text-lg lg:text-2xl text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors whitespace-nowrap">
                    JENA WELDING COMPANY
                  </span>
                  <span className="text-[9px] sm:text-xs font-semibold text-slate-600 tracking-normal font-sans whitespace-nowrap">
                    "We Make It. We Repair It. We Make It Strong!"
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links (Single Line) */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 shrink-0">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-2.5 lg:px-3.5 py-2 rounded-lg text-xs lg:text-[13px] font-semibold tracking-normal whitespace-nowrap transition-all ${
                        isActive
                          ? 'text-orange-600 bg-orange-50 font-bold border border-orange-200'
                          : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Desktop Action Buttons */}
              <div className="hidden lg:flex items-center gap-2.5 shrink-0">
                <a
                  href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-mono font-semibold whitespace-nowrap transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Us</span>
                </a>

                <button
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all shadow-sm"
                >
                  <Flame className="w-3.5 h-3.5 text-orange-200" />
                  <span>Request Quote</span>
                </button>
              </div>

              {/* Mobile Menu & Quick Call Buttons */}
              <div className="flex md:hidden items-center gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                  className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
                  aria-label="Call Now"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 2. CONTINUOUS RUNNING SLIDING TICKER STRIP BELOW BRANDING */}
        <div className="bg-slate-950 text-slate-300 border-b border-slate-800 py-1.5 overflow-hidden text-xs select-none">
          <div className="relative w-full overflow-hidden flex items-center">
            
            {/* Left/Right subtle fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Seamless Infinite Continuous Sliding Track */}
            <div className="animate-ticker flex items-center gap-6 px-4">
              <div className="flex items-center gap-4 shrink-0">
                {tickerItems}
              </div>
              <div className="flex items-center gap-4 shrink-0" aria-hidden="true">
                {tickerItems}
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-emerald-700 font-mono font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>UDYAM REG: <strong className="text-slate-900">{COMPANY_INFO.udyam}</strong></span>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <a href={`tel:${COMPANY_INFO.phones.primaryRaw}`} className="font-bold text-slate-900">{COMPANY_INFO.phones.primary}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-800">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-800">{COMPANY_INFO.instagram}</a>
              </div>
            </div>

            <nav className="space-y-1 pt-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'text-orange-600 bg-orange-50 font-bold border border-orange-200'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </nav>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-orange-600 text-white text-xs font-bold"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
