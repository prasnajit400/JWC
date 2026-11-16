import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState(null);
  const [quoteInitialCategory, setQuoteInitialCategory] = useState(null);

  const handleOpenQuote = (service = null, category = null) => {
    setQuoteInitialService(service);
    setQuoteInitialCategory(category);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
        {/* Clean Corporate Industrial Header */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Real Route Navigation */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
            <Route path="/gallery" element={<Gallery onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Deep Industrial Corporate Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Ergonomic Floating Actions (Left Call, Right WhatsApp - Equal Size) */}
        <FloatingActions onOpenQuote={handleOpenQuote} />

        {/* Pre-fillable Clean Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuote}
          initialService={quoteInitialService}
          initialCategory={quoteInitialCategory}
        />
      </div>
    </Router>
  );
}
