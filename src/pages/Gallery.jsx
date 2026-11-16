import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Maximize2, 
  X, 
  MessageSquare, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Ruler,
  Shield
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_PROJECTS } from '../data/galleryData';
import { COMPANY_INFO } from '../data/companyInfo';
import ImageLightboxModal from '../components/ImageLightboxModal';

export default function Gallery({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredProjects = selectedCategory === "All Projects"
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 pt-36 pb-24 font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER: VISUAL PORTFOLIO OF COMPLETED INSTALLATIONS
        ========================================================================= */}
        <div className="max-w-4xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-mono uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>REAL WORK PORTFOLIO • PROVEN FIELD TRACK RECORD</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Completed Projects & Fabrication Portfolio
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Browse our completed architectural gates, safety railings, commercial food kiosks, and heavy structural metalwork. Click on any project card or image to inspect the build quality in complete high-definition full-screen size.
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
            <span className="text-emerald-700 flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>UDYAM Verified: {COMPANY_INFO.udyam}</span>
            </span>
            <span>•</span>
            <span className="text-slate-800">Tata Structura IS 2062 & Jindal SS 304/316</span>
            <span>•</span>
            <span className="text-orange-600 font-semibold">Pan-India Freight Delivery</span>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTER BUTTONS
        ========================================================================= */}
        <div className="flex items-center flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
          {GALLERY_CATEGORIES.map((cat) => {
            const count = cat === "All Projects"
              ? GALLERY_PROJECTS.length
              : GALLERY_PROJECTS.filter(p => p.category === cat).length;

            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-orange-600 text-white border-orange-600 shadow-sm font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isSelected ? 'bg-black/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            VISUAL PROJECT CARDS GRID (MASONRY-STYLE PORTFOLIO)
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Photo showcase with hover indicator (Click to view in complete full screen) */}
                <div 
                  onClick={() => setLightboxImage({
                    src: project.image,
                    title: project.title,
                    category: project.category,
                    subtitle: project.material
                  })}
                  className="relative h-64 overflow-hidden bg-slate-100 cursor-zoom-in group/proj"
                  title="Click to view complete full size photo"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/proj:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 border border-slate-200 text-[10px] font-mono text-slate-800 font-bold shadow-sm">
                    {project.category}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span>Heavy Duty</span>
                  </div>

                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/proj:opacity-100 transition-opacity bg-slate-900/30">
                    <span className="px-3.5 py-1.5 rounded-lg bg-orange-600 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Full Size</span>
                    </span>
                  </div>

                  {/* Bottom title & material */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono text-orange-300 block font-medium">
                      {project.material}
                    </span>
                    <h3 className="font-heading font-bold text-base text-white group-hover/proj:text-orange-300 transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Scope & Details */}
                <div className="p-5 space-y-3 text-xs">
                  <p className="text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] font-mono text-slate-700">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">APPLICATION:</span>
                      <span className="text-slate-900 font-sans font-medium">{project.clientType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">DIMENSIONS:</span>
                      <span className="text-orange-700 font-bold">{project.dimensions}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-mono font-semibold transition-all bg-slate-50 hover:bg-slate-100"
                >
                  <span>Specs Details</span>
                </button>

                <button
                  onClick={() => onOpenQuote(project.title, project.category)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-mono font-semibold transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR DETAILED SPECS
      ========================================================================= */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Container (Clickable for full screen) */}
            <div 
              onClick={() => {
                const proj = activeProject;
                setLightboxImage({
                  src: proj.image,
                  title: proj.title,
                  category: proj.category,
                  subtitle: proj.material
                });
              }}
              className="relative rounded-xl overflow-hidden h-72 sm:h-96 mb-6 bg-slate-100 cursor-zoom-in group/mimg"
              title="Click to view full screen"
            >
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover group-hover/mimg:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white flex items-center gap-1.5 text-xs font-mono">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-mono font-bold shadow-sm">
                  {activeProject.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-2">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Details Grid (Location & Year removed as requested) */}
            <div className="space-y-6">
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {activeProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block uppercase font-semibold">WORKSHOP QUALITY:</span>
                  <strong className="text-emerald-700 text-xs">100% Weld Tested • Multi-Layer Anti-Rust</strong>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-semibold">SERVICE SCOPE:</span>
                  <strong className="text-slate-900 text-xs">Odisha Installation • Pan-India Supply</strong>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-semibold">MATERIAL SPECIFICATION:</span>
                  <strong className="text-slate-800">{activeProject.material}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-semibold">PROJECT DIMENSIONS:</span>
                  <strong className="text-orange-700 text-sm">{activeProject.dimensions}</strong>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    const proj = activeProject;
                    setActiveProject(null);
                    onOpenQuote(proj.title, proj.category);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Quote for Similar Project</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-mono text-xs font-semibold transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call PRASHANJIT JENA</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

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
