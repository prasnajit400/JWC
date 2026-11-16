import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck, Mail, MapPin, ChevronRight, MessageSquare, Flame, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        {/* 1. Top Industrial Utility Bar (Like apswelding.com) */}
        <div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 text-xs border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            
            {/* Left Info Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UDYAM: <strong className="text-white">{COMPANY_INFO.udyam}</strong> (Verified MSME)</span>
              </div>

              <a 
                href={COMPANY_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors"
                title="Open exact location in Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Sakhigopal, Block Chaka, Puri, Odisha 752014</span>
              </a>
            </div>

            {/* Right Contact Details: Instagram placed near Phone Number */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span className="hidden sm:inline text-slate-300">Instagram:</span>
                <span className="text-white font-semibold">{COMPANY_INFO.instagram}</span>
              </a>

              <span className="text-slate-600">|</span>

              <a
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="hover:text-orange-400 transition-colors flex items-center gap-1 text-white font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{COMPANY_INFO.phones.primary}</span>
              </a>

              <span className="text-slate-600 hidden md:inline">|</span>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hidden md:flex items-center gap-1 hover:text-white transition-colors text-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>

          </div>
        </div>

        {/* 2. Main White Clean Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 gap-3">
              
              {/* Brand Logo & Title (Removed ESTD 1999 near Home button as requested) */}
              <Link to="/" className="flex items-center gap-3 group shrink-0">
                <img
                  src="./images/logo_web.png"
                  onError={(e) => { e.currentTarget.src = "./images/logo_transparent.png"; }}
                  alt="Jena Welding Company Logo"
                  className="h-11 sm:h-13 w-auto object-contain"
                />

                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-base sm:text-xl lg:text-2xl text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors whitespace-nowrap">
                    JENA WELDING COMPANY
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-600 tracking-normal font-sans whitespace-nowrap">
                    "We Make It. We Repair It. We Make It Strong!"
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links (Enforced Single Line with whitespace-nowrap) */}
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

              {/* Mobile Menu Hamburger */}
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
                  className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-emerald-700 font-mono font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>UDYAM REG: {COMPANY_INFO.udyam}</span>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
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
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-xs font-bold font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-orange-600 text-white text-xs font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
