import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Flame, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  Truck, 
  ChevronRight,
  Layers,
  Sparkles,
  ClipboardList,
  Compass,
  MapPin,
  Clock,
  Award,
  Play,
  Maximize2
} from 'lucide-react';
import Card3D from '../components/Card3D';
import ImageLightboxModal from '../components/ImageLightboxModal';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_CATEGORIES } from '../data/servicesData';
import { GALLERY_PROJECTS } from '../data/galleryData';

export default function Home({ onOpenQuote }) {
  // Image Lightbox State (Universal Viewer)
  const [lightboxImage, setLightboxImage] = useState(null);

  // Specification Planner State (No fake prices!)
  const [specProduct, setSpecProduct] = useState('Main Entrance Gate');
  const [specMaterial, setSpecMaterial] = useState('Tata Structura Heavy MS Steel (IS 2062)');
  const [specWidth, setSpecWidth] = useState(14);
  const [specHeight, setSpecHeight] = useState(7);
  const [specLocation, setSpecLocation] = useState('Puri / Sakhigopal, Odisha');
  const [specNotes, setSpecNotes] = useState('');

  const handlePlanWhatsApp = () => {
    const text = `*CUSTOM FABRICATION SPECIFICATION - JENA WELDING COMPANY*%0A%0A` +
      `*Product Required:* ${encodeURIComponent(specProduct)}%0A` +
      `*Material Grade:* ${encodeURIComponent(specMaterial)}%0A` +
      `*Approx Dimensions:* ${specWidth} ft (W) × ${specHeight} ft (H) = ${specWidth * specHeight} Sq. Ft%0A` +
      `*Project Site/Location:* ${encodeURIComponent(specLocation)}%0A` +
      (specNotes ? `*Specific Details:* ${encodeURIComponent(specNotes)}%0A` : '') +
      `%0APlease provide an official blueprint recommendation and arrange a site measurement quotation.`;
    window.open(`https://wa.me/91${COMPANY_INFO.phones.primaryRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans">
      
      {/* =========================================================================
          CINEMATIC FULL-SCREEN HERO WITH LIVE WELDING VIDEO BACKGROUND
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-36 sm:pt-40 md:pt-44 pb-20 md:pb-24 overflow-hidden border-b border-slate-900 bg-slate-950">
        
        {/* Full-Screen Background Welding Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          >
            <source src="./videos/hero_welding.mp4" type="video/mp4" />
            <source src="./hero_welding.mp4" type="video/mp4" />
            <source src="./Background%20hero%20video.mp4" type="video/mp4" />
          </video>

          {/* High-Contrast Industrial Overlay for Razor-Sharp Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Hero Content Over Video */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 text-center lg:text-left">
            
            {/* Badges Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-mono font-medium shadow-sm backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>UDYAM REG: <strong className="text-white">{COMPANY_INFO.udyam}</strong> (Verified MSME)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/50 text-orange-300 text-xs font-mono uppercase font-semibold backdrop-blur-sm">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>25+ YEARS FABRICATION MASTERY</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-mono font-medium backdrop-blur-sm">
                <Truck className="w-3.5 h-3.5 text-sky-400" />
                <span>PAN-INDIA SUPPLY</span>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-3">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight filter drop-shadow-md">
                <span className="block text-white">JENA WELDING</span>
                <span className="block text-orange-500">COMPANY</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-bold tracking-wide font-sans">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>

            {/* Tagline Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/85 border-l-4 border-orange-500 border border-slate-700/60 shadow-xl backdrop-blur-md text-slate-200 max-w-2xl">
              <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                "{COMPANY_INFO.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-normal">
                Centrally located at Block Chaka, Sakhigopal, Puri, Odisha. We manufacture heavy-duty architectural entrance gates, stainless steel railings, commercial food kiosks, and heavy industrial steel structures with on-site installation across Odisha and custom freight delivery all over India.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-heading font-bold text-sm tracking-wide shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Free Custom Quote</span>
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-600 bg-slate-900/80 hover:bg-slate-800 text-white font-heading font-semibold text-sm transition-all shadow-md backdrop-blur-sm"
              >
                <span>Explore Products & Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-emerald-500/50 bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 font-mono text-xs font-semibold transition-all backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: {COMPANY_INFO.phones.primaryRaw}</span>
              </a>
            </div>

            {/* Key Trust Stats Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              {COMPANY_INFO.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-tight font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Live Workshop Indicator Pill */}
        <div className="absolute bottom-4 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-700/80 text-xs font-mono text-slate-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span>WORKSHOP FABRICATION IN PROGRESS</span>
        </div>
      </section>

      {/* Industrial Ticker Strip in Corporate Navy */}
      <div className="py-3.5 bg-slate-900 text-slate-200 border-b border-slate-800 overflow-hidden font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 text-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>HEAVY MS & SS ARCHITECTURAL GATES</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>CERTIFIED JINDAL SS 304 & 316</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>GOVT. UDYAM: OD-26-0069288</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>COMMERCIAL FOOD STALLS & KIOSKS</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>INDUSTRIAL TIG, MIG & ARC WELDING</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PAN-INDIA FREIGHT DISPATCH</span>
          </span>
        </div>
      </div>


      {/* =========================================================================
          WHY CHOOSE US / TRUST HIGHLIGHTS (Clean White Cards)
      ========================================================================= */}
      <section className="py-20 relative bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/60 border border-slate-300 text-slate-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>CERTIFIED MANUFACTURING STANDARDS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              Why Builders & Homeowners Trust Jena Welding
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Combining 25+ years of structural metalcraft with certified steel alloys, heavy-gauge tubing, and multi-stage anti-corrosion protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. UDYAM Certified */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider block font-semibold">
                  GOVERNMENT ACCREDITATION
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  UDYAM Registered Workshop
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Registered under Government of India Ministry of MSME with official registration number <strong className="text-slate-900 font-mono">{COMPANY_INFO.udyam}</strong>. Full corporate compliance and commercial invoicing.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                Official Verified MSME
              </div>
            </div>

            {/* 2. Heavy-Duty Steel */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                <Flame className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-orange-700 uppercase tracking-wider block font-semibold">
                  GENUINE RAW MATERIALS
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Tata, Jindal & SAIL Steel
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Zero compromise on steel thickness. We use certified Jindal SS 304/316, Tata Structura heavy MS hollow sections, and SAIL heavy structural plates with multi-coat anti-rust primer.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                100% Certified Gauge Guarantee
              </div>
            </div>

            {/* 3. High Structural Craft */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Wrench className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-sky-700 uppercase tracking-wider block font-semibold">
                  MASTER FABRICATION
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Deep Penetration Welds
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Clean TIG, MIG, and heavy structural Arc welding with full joint penetration, seamless corner miters, and sag-resistant internal diagonal truss geometry.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                Engineered For Decades of Use
              </div>
            </div>

            {/* 4. On-Site & Pan India */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Truck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-purple-700 uppercase tracking-wider block font-semibold">
                  ODISHA & PAN-INDIA
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  On-Site Fitment & Pan-India
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Fast on-site measurement and emergency repair in Puri and Khordha districts, coupled with heavy protective crating for safe dispatch to all states of India.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                24/7 Mobile Welding Service
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6 CORE PRODUCT DIVISIONS SHOWCASE
      ========================================================================= */}
      <section className="py-24 relative bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-mono uppercase tracking-wider font-semibold">
                <Layers className="w-3.5 h-3.5 text-orange-600" />
                <span>CORE PRODUCT DIVISIONS</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
                Six Specialized Metalwork Divisions
              </h2>
              <p className="text-slate-600 text-sm font-normal">
                Explore our dedicated departments, each equipped with certified steel sections, heavy tube bending, and experienced fabricators.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>View Full Technical Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CATEGORIES.map((category, idx) => (
              <div
                key={category.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 overflow-hidden"
              >
                <div>
                  {/* Category Image Header (Clickable for full size inspect) */}
                  <div 
                    onClick={() => setLightboxImage({ 
                      src: category.heroImage, 
                      title: category.name, 
                      category: `Division 0${idx + 1}`,
                      subtitle: category.tagline 
                    })}
                    className="relative h-56 overflow-hidden bg-slate-100 cursor-zoom-in group/img"
                    title="Click to view full size image"
                  >
                    <img
                      src={category.heroImage}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/95 border border-slate-200 font-mono text-xs text-slate-800 font-bold shadow-sm">
                      DIVISION 0{idx + 1}
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                      <span className="px-2.5 py-1 rounded bg-slate-900/80 text-white font-mono text-[11px] backdrop-blur-sm">
                        {category.subServices.length} Specialties
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-mono text-orange-300 uppercase tracking-wider block font-semibold">
                        {category.tagline}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-orange-300 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                      {category.overview}
                    </p>

                    {/* Sub-services pills */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                        KEY SOLUTIONS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {category.subServices.map((sub) => (
                          <span
                            key={sub.id}
                            className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[11px] text-slate-700 font-mono font-medium"
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100">
                  <Link
                    to={`/services?category=${category.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-orange-600 transition-colors font-semibold"
                  >
                    <span>Technical Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 text-orange-600" />
                  </Link>

                  <button
                    onClick={() => onOpenQuote(null, category.name)}
                    className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-mono font-bold transition-all shadow-sm"
                  >
                    Inquire Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          CUSTOM SPECIFICATION PLANNER (NO FAKE ESTIMATES)
      ========================================================================= */}
      <section className="py-20 relative bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-mono uppercase tracking-wider font-semibold">
                <ClipboardList className="w-3.5 h-3.5 text-orange-600" />
                <span>PLAN YOUR METAL PROJECT</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
                Build Your Project Specification
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Metal fabrication pricing depends on the exact steel gauge (14/16/18 gauge), structural foundation, paint coating (epoxy primer vs polyurethane), and custom architectural design.
              </p>

              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                Select your product parameters below. Our engineering team led by Prashanjit Jena will review your dimensional requirements, calculate exact steel tonnage, and send you a certified blueprint layout and transparent quote.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free on-site dimension measurement across Puri & Odisha</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified Tata Structura & Jindal SS 304/316 raw materials</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pan-India secure crated transport available</span>
                </div>
              </div>
            </div>

            {/* Right Specification Builder Card */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-xl space-y-5">
                
                {/* 1. Product Type */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
                    1. Select Product / Work Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Main Entrance Gate',
                      'Balcony / Stair Railing',
                      'Aluminium Doors & Windows',
                      'Commercial Food Stall',
                      'Mobile Food Cart',
                      'Industrial Roof Shed'
                    ].map(p => (
                      <button
                        key={p}
                        onClick={() => setSpecProduct(p)}
                        className={`p-2.5 rounded-lg text-xs font-medium text-left transition-all border ${
                          specProduct === p
                            ? 'bg-orange-600 text-white border-orange-600 font-bold shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Material Grade Selection */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
                    2. Select Preferred Steel / Metal Grade
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { name: 'Tata Structura Heavy MS Steel (IS 2062)', desc: 'Heavy hollow box sections with anti-rust primer' },
                      { name: 'Jindal SS 304 Stainless Steel', desc: 'Satin & mirror polish for non-rusting luxury' },
                      { name: 'Marine Grade SS 316', desc: 'Maximum salt-air resistance for Puri sea beach area' },
                      { name: 'Architectural Aluminium (Jindal/Hindalco)', desc: 'Extruded heavy powder-coated sections' }
                    ].map(m => (
                      <button
                        key={m.name}
                        onClick={() => setSpecMaterial(m.name)}
                        className={`p-3 rounded-lg text-left transition-all border ${
                          specMaterial === m.name
                            ? 'bg-orange-50 border-orange-600 text-slate-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span className="block text-xs font-bold text-slate-900">{m.name}</span>
                        <span className="block text-[11px] text-slate-500 mt-0.5">{m.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5">
                      <span>Width (Span): <strong className="text-orange-600 font-bold">{specWidth} Feet</strong></span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="32"
                      value={specWidth}
                      onChange={(e) => setSpecWidth(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>4 ft</span>
                      <span>16 ft</span>
                      <span>32 ft</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5">
                      <span>Height (Clearance): <strong className="text-orange-600 font-bold">{specHeight} Feet</strong></span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="14"
                      value={specHeight}
                      onChange={(e) => setSpecHeight(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>3 ft</span>
                      <span>8 ft</span>
                      <span>14 ft</span>
                    </div>
                  </div>
                </div>

                {/* 4. Location & Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 uppercase tracking-wider mb-1 font-semibold">
                      Project Location (City / Town)
                    </label>
                    <input
                      type="text"
                      value={specLocation}
                      onChange={(e) => setSpecLocation(e.target.value)}
                      placeholder="e.g. Puri, Sakhigopal, Bhubaneswar, Kolkata"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-orange-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 uppercase tracking-wider mb-1 font-semibold">
                      Specific Notes / Details
                    </label>
                    <input
                      type="text"
                      value={specNotes}
                      onChange={(e) => setSpecNotes(e.target.value)}
                      placeholder="e.g. Sliding track, horizontal slats, wooden stall"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-orange-600 transition-all"
                    />
                  </div>
                </div>

                {/* Action Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase font-bold">
                      APPROX AREA: {specWidth * specHeight} SQ. FT
                    </span>
                    <span className="block text-xs text-emerald-700 font-mono mt-0.5 font-semibold">
                      Direct consultation with Prashanjit Jena
                    </span>
                  </div>

                  <button
                    onClick={handlePlanWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Send Specs via WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          FOUNDER & MANAGING DIRECTOR (PRASHANJIT JENA)
      ========================================================================= */}
      <section className="py-20 relative bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Founder Portrait (Tastefully Sized: w-56 sm:w-64 h-72 sm:h-80 - Clickable for full view) */}
            <div className="shrink-0 relative">
              <div 
                onClick={() => setLightboxImage({
                  src: './images/founder.jpg',
                  title: 'PRASHANJIT JENA',
                  category: 'FOUNDER & MANAGING DIRECTOR',
                  subtitle: 'Jena Welding Company • Established 1999 • Sakhigopal, Puri'
                })}
                className="w-56 sm:w-64 h-72 sm:h-80 rounded-xl overflow-hidden border-2 border-slate-300 shadow-lg bg-white cursor-zoom-in group/fnd relative"
                title="Click to view full photo"
              >
                <img
                  src="./images/founder.jpg"
                  alt="PRASHANJIT JENA - Founder & Managing Director of Jena Welding Company"
                  className="w-full h-full object-cover object-top group-hover/fnd:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/fnd:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-black/75 text-white text-xs font-mono flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border border-orange-300 text-[11px] font-mono text-orange-700 font-bold whitespace-nowrap shadow-sm">
                ESTD 1999
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-center md:text-left flex-1">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-orange-100 text-orange-800 text-xs font-mono uppercase tracking-wider font-bold">
                  FOUNDER & MANAGING DIRECTOR
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase tracking-wide">
                  PRASHANJIT JENA
                </h3>
                <p className="text-xs font-mono text-slate-500 font-medium">
                  JENA WELDING COMPANY • SAKHIGOPAL, PURI, ODISHA
                </p>
              </div>

              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  "In 1999, we laid the foundation of Jena Welding Company at <strong>Block Chaka, Sakhigopal, Puri</strong> with a simple principle: every weld joint and every gate must be built strong enough to protect a family and endure coastal Odisha's harsh elements for decades."
                </p>
                <p>
                  "We use heavy structural steel sections, genuine Jindal SS 304/316, and professional anti-corrosive coatings. Whether you need a modern gate in Puri or Bhubaneswar, or custom food stalls supplied to Kolkata, Hyderabad, or Delhi NCR, our workshop delivers uncompromising quality."
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white border-l-4 border-orange-600 border border-slate-200 text-xs font-mono text-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">OUR MOTTO:</span>
                <span className="text-slate-900 font-bold text-sm">
                  "{COMPANY_INFO.tagline}"
                </span>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Prashanjit Jena: {COMPANY_INFO.phones.primaryRaw}</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-mono text-xs font-semibold transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          RECENT WORK SHOWCASE
      ========================================================================= */}
      <section className="py-20 relative bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-orange-700 uppercase tracking-wider block font-bold">
                RECENT FIELD INSTALLATIONS
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
                Featured Project Highlights
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-600 hover:text-orange-700 transition-colors font-bold"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_PROJECTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Clickable Image to view in full size */}
                <div 
                  onClick={() => setLightboxImage({
                    src: item.image,
                    title: item.title,
                    category: item.category,
                    subtitle: item.material
                  })}
                  className="relative h-60 overflow-hidden bg-slate-100 cursor-zoom-in group/item"
                  title="Click to view full size image"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 border border-slate-200 text-[10px] font-mono text-slate-800 font-bold shadow-sm">
                    {item.category}
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono text-orange-300 block font-medium">
                      {item.material}
                    </span>
                    <h3 className="font-heading font-bold text-base text-white group-hover/item:text-orange-300 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 space-y-2 text-xs text-slate-600">
                  <p className="line-clamp-2">{item.description}</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500 font-medium">Dimensions: {item.dimensions}</span>
                    <button
                      onClick={() => onOpenQuote(item.title, item.category)}
                      className="text-orange-600 hover:text-orange-700 font-bold"
                    >
                      Inquire Similar →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          PAN-INDIA LOGISTICS & EMERGENCY REPAIR ACTION STRIP
      ========================================================================= */}
      <section className="py-16 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
            <div className="space-y-1">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block font-bold">
                SAKHIGOPAL • PURI • ODISHA • PAN-INDIA SUPPLY
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Ready to Start Your Metalwork Project?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Contact Prashanjit Jena directly for free site measurements & quotations across Odisha and nationwide delivery.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Message</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Flame className="w-4 h-4" />
                <span>Request Custom Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Image Fullscreen Lightbox Modal */}
      <ImageLightboxModal
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage?.src}
        title={lightboxImage?.title}
        category={lightboxImage?.category}
        subtitle={lightboxImage?.subtitle}
        onClose={() => setLightboxImage(null)}
        onInquire={onOpenQuote}
      />

    </div>
  );
}
