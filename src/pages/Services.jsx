import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, 
  Flame, 
  Search, 
  Layers, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  MessageSquare, 
  Phone,
  Maximize2,
  Wrench,
  Grid,
  Store,
  Shield,
  Maximize,
  Sparkles
} from 'lucide-react';
import { SERVICES_CATEGORIES } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyInfo';
import ImageLightboxModal from '../components/ImageLightboxModal';

export default function Services({ onOpenQuote }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('category');

  // activeCatId is null if user wants to see the 6 main categories overview,
  // or a category id (e.g. 'gates') if drilled into a category.
  const [activeCatId, setActiveCatId] = useState(catParam || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    setActiveCatId(cat || null);
    if (cat) {
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleSelectCategory = (catId) => {
    setActiveCatId(catId);
    setSearchParams(catId ? { category: catId } : {});
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleBackToAllCategories = () => {
    setActiveCatId(null);
    setSearchParams({});
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedCategory = SERVICES_CATEGORIES.find(c => c.id === activeCatId);

  // Sub-services search filter (when inside a category)
  const displayedSubServices = selectedCategory 
    ? selectedCategory.subServices.filter(sub => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          sub.name.toLowerCase().includes(q) ||
          sub.description.toLowerCase().includes(q) ||
          sub.specs.some(s => s.toLowerCase().includes(q)) ||
          sub.bestFor.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 pt-36 pb-24 font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER: TECHNICAL STANDARDS & SPECIFICATIONS
        ========================================================================= */}
        <div className="max-w-4xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-mono uppercase tracking-wider font-semibold">
            <Layers className="w-3.5 h-3.5 text-orange-600" />
            <span>FABRICATION CAPABILITIES & TECHNICAL SPECIFICATIONS</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Products & Engineering Standards
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Explore our six specialized metal fabrication departments. Click on any category below to view all corresponding sub-categories, structural raw materials, and technical specifications.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
            <span className="text-emerald-700 flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>UDYAM: {COMPANY_INFO.udyam}</span>
            </span>
            <span>•</span>
            <span className="text-slate-800">Tata Structura IS 2062 & Jindal SS 304/316</span>
            <span>•</span>
            <span className="text-orange-600 font-semibold">On-Site Measurement Across Odisha</span>
          </div>
        </div>


        {/* =========================================================================
            VIEW 1: LIST ONLY 6 MAIN CATEGORIES (DEFAULT GRID)
        ========================================================================= */}
        {!selectedCategory && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Select a Department to View Sub-Categories
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  6 SPECIALIZED INDUSTRIAL & ARCHITECTURAL DIVISIONS
                </p>
              </div>
            </div>

            {/* 6 Core Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES_CATEGORIES.map((category, idx) => (
                <div
                  key={category.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 overflow-hidden"
                >
                  <div>
                    {/* Category Image Header (Clickable for full size view) */}
                    <div 
                      onClick={() => setLightboxImage({
                        src: category.heroImage,
                        title: category.name,
                        category: `Division 0${idx + 1}`,
                        subtitle: category.tagline
                      })}
                      className="relative h-60 overflow-hidden bg-slate-100 cursor-zoom-in group/img"
                      title="Click to view full size photo"
                    >
                      <img
                        src={category.heroImage}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                      
                      <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-white/95 border border-slate-200 font-mono text-[11px] text-slate-800 font-bold shadow-sm">
                        DEPARTMENT 0{idx + 1}
                      </div>

                      <div className="absolute top-4 right-4 flex items-center gap-1.5">
                        <span className="p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                        <span className="px-2.5 py-1 rounded bg-orange-600 text-white font-mono text-xs font-bold shadow-sm">
                          {category.subServices.length} Sub-Categories
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-[11px] font-mono text-orange-300 uppercase tracking-wider block font-semibold">
                          {category.tagline}
                        </span>
                        <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-orange-300 transition-colors mt-0.5">
                          {category.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {category.overview}
                      </p>

                      {/* Sub-services list bullets */}
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                          SUB-SERVICES IN THIS DEPARTMENT:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {category.subServices.map((sub) => (
                            <span 
                              key={sub.id} 
                              className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/60"
                            >
                              {sub.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Primary Trigger Button to open sub-categories */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleSelectCategory(category.id)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all group-hover:shadow-orange-500/20"
                    >
                      <span>View Sub-Categories ({category.subServices.length} Items)</span>
                      <ArrowRight className="w-4 h-4 text-orange-200" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* =========================================================================
            VIEW 2: SUB-CATEGORIES DETAIL VIEW (WHEN A CATEGORY IS CLICKED)
        ========================================================================= */}
        {selectedCategory && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Navigation Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <button
                onClick={handleBackToAllCategories}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-orange-500 hover:text-orange-600 text-slate-800 text-xs font-mono font-bold transition-all shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 text-orange-600" />
                <span>Back to All 6 Main Categories</span>
              </button>

              {/* Quick Jump Bar across the 6 categories */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
                {SERVICES_CATEGORIES.map((cat) => {
                  const isCurrent = cat.id === selectedCategory.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all border ${
                        isCurrent
                          ? 'bg-orange-600 text-white border-orange-600 font-bold shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Department Banner Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-orange-600 text-white text-[11px] font-mono font-bold">
                      ACTIVE DIVISION
                    </span>
                    <span className="text-xs font-mono text-orange-300 uppercase tracking-wider">
                      {selectedCategory.tagline}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
                    {selectedCategory.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedCategory.overview}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <button
                    onClick={() => setLightboxImage({
                      src: selectedCategory.heroImage,
                      title: selectedCategory.name,
                      category: selectedCategory.tagline,
                      subtitle: 'Department Master Photo'
                    })}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-all border border-slate-700"
                  >
                    <Maximize2 className="w-4 h-4 text-orange-400" />
                    <span>View Department Image</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote(null, selectedCategory.name)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire This Division</span>
                  </button>
                </div>
              </div>

              {/* Department Quality Standards Grid */}
              <div className="pt-4 border-t border-slate-800">
                <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                  MANDATORY QUALITY & MATERIAL STANDARDS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {selectedCategory.standards.map((std, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 shadow-sm flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-mono leading-tight">{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-Services Grid */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    Sub-Categories under {selectedCategory.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    CLICK ANY IMAGE TO VIEW IN COMPLETE FULL-SCREEN SIZE
                  </p>
                </div>

                {/* Search within sub-services */}
                <div className="relative w-full sm:w-72">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search specifications..."
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-orange-600 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedSubServices.map((sub) => (
                  <div
                    key={sub.id}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Photo Banner (Clickable to view in full size) */}
                      <div 
                        onClick={() => setLightboxImage({
                          src: sub.image,
                          title: sub.name,
                          category: selectedCategory.name,
                          subtitle: sub.badge
                        })}
                        className="relative h-56 overflow-hidden bg-slate-100 cursor-zoom-in group/sub"
                        title="Click to view full size photo"
                      >
                        <img
                          src={sub.image}
                          alt={sub.name}
                          className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 border border-slate-200 text-[10px] font-mono text-slate-800 font-bold shadow-sm">
                          {sub.badge}
                        </div>

                        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover/sub:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h4 className="font-heading font-bold text-base text-white group-hover/sub:text-orange-300 transition-colors">
                            {sub.name}
                          </h4>
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="p-5 space-y-4">
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {sub.description}
                        </p>

                        {/* Technical Specifications */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                            ENGINEERING SPECIFICATIONS:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-700 font-mono">
                            {sub.specs.map((spec, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-orange-600 mt-0.5">•</span>
                                <span className="text-[11px]">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Best suited for */}
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px]">
                          <span className="text-slate-500 block font-mono text-[10px] uppercase font-semibold">
                            SUITED FOR:
                          </span>
                          <span className="text-slate-700 font-normal">{sub.bestFor}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Action */}
                    <div className="p-5 pt-0">
                      <button
                        onClick={() => onOpenQuote(sub.name, selectedCategory.name)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-700 text-xs font-mono font-semibold transition-all shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire for {sub.name}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}


        {/* =========================================================================
            COMPARATIVE STEEL ALLOY MATRIX TABLE
        ========================================================================= */}
        <div className="mt-20 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-orange-700 uppercase tracking-wider block font-bold">
              ENGINEERING COMPARISON TABLE
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
              Raw Metal Alloy & Corrosion Resistance Guide
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Selecting the right steel grade ensures optimal durability, especially in coastal Puri where salt air is prevalent.
            </p>
          </div>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs font-mono border-collapse bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700 bg-slate-100 font-bold">
                  <th className="py-3 px-4">Material Grade</th>
                  <th className="py-3 px-4">Rust Protection</th>
                  <th className="py-3 px-4">Recommended Finish</th>
                  <th className="py-3 px-4">Ideal Applications</th>
                  <th className="py-3 px-4">Expected Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Heavy MS Steel (IS 2062)</td>
                  <td className="py-3 px-4">Requires Zinc Primer + Enamel</td>
                  <td className="py-3 px-4">Epoxy / Polyurethane Satin</td>
                  <td className="py-3 px-4">Entrance Gates, Window Grills, Structural Sheds</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">20+ Years (with paint)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Jindal SS 304 Stainless</td>
                  <td className="py-3 px-4">High Corrosion Immunity</td>
                  <td className="py-3 px-4">Mirror Polish / Brushed Satin</td>
                  <td className="py-3 px-4">Balcony Railings, Staircases, Main Gates</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">30+ Years (Zero rust)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Marine Grade SS 316</td>
                  <td className="py-3 px-4">Maximum Salt-Air Immunity</td>
                  <td className="py-3 px-4">Electro-Polished Satin</td>
                  <td className="py-3 px-4">Puri Beachfront Hotels, Coastal Resorts</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">50+ Years (Marine grade)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Aluminium (Hindalco 6063)</td>
                  <td className="py-3 px-4">100% Rust-Proof & Light</td>
                  <td className="py-3 px-4">Powder Coated / Anodized</td>
                  <td className="py-3 px-4">Sliding Glass Doors, Casement Windows</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">Lifetime (Zero rust)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

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
