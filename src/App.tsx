import React, { useState } from 'react';
import { PageId, Currency } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { BulkQuoteCalculator } from './components/BulkQuoteCalculator';
import { OriginStory } from './components/OriginStory';
import { CertificationsGrid } from './components/CertificationsGrid';
import { PackagingShowcase } from './components/PackagingShowcase';
import { WholesalePage } from './components/WholesalePage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { PolicyModals, PolicyType } from './components/PolicyModals';
import { MessageCircle, CheckCircle2, X } from 'lucide-react';
import { COMPANY } from './data/company';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialGrade, setQuoteInitialGrade] = useState<string | undefined>(undefined);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenQuoteModal = (grade?: string) => {
    setQuoteInitialGrade(grade);
    setQuoteModalOpen(true);
  };

  const whatsappDirectUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    "Hello Jireh Global Foods! I would like to get a price quote for Bihar Makhana (Fox Nuts)."
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A261D] flex flex-col font-sans">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm bg-forest-950 text-white p-3.5 rounded-2xl shadow-xl border border-gold-500/40 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <div className="flex-1 text-xs text-cream-100">{toastMessage}</div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-stone-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Simplified Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onOpenQuoteModal={handleOpenQuoteModal}
              onExploreProducts={() => {
                const el = document.getElementById('products-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setCurrentPage('products');
              }}
            />
            
            {/* Quick Price Calculator */}
            <div className="py-10 bg-white border-b border-cream-200">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <BulkQuoteCalculator
                  currency={currency}
                  onSuccessToast={showToast}
                />
              </div>
            </div>

            {/* Core Products */}
            <ProductSection
              currency={currency}
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* About & Origin */}
            <OriginStory
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            {/* Verified Certifications */}
            <CertificationsGrid />

            {/* Packaging Options */}
            <PackagingShowcase
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* Simple Contact Form */}
            <ContactSection
              onSuccessToast={showToast}
            />
          </>
        )}

        {currentPage === 'products' && (
          <>
            <div className="bg-forest-950 text-white py-12 px-4 text-center border-b border-forest-800">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block">Bihar Fox Nuts</span>
              <h1 className="text-3xl sm:text-4xl font-serif font-black mt-1">Our Product Range</h1>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
                Hand-picked 6+ Suta Jumbo, standard 5+ Suta, raw sun-dried phool, and slow-roasted snacks.
              </p>
            </div>
            <ProductSection
              currency={currency}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <div className="py-10 bg-white border-b border-cream-200">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <BulkQuoteCalculator
                  currency={currency}
                  onSuccessToast={showToast}
                />
              </div>
            </div>
            <ContactSection onSuccessToast={showToast} />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <div className="bg-forest-950 text-white py-12 px-4 text-center border-b border-forest-800">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block">Mithila Heritage</span>
              <h1 className="text-3xl sm:text-4xl font-serif font-black mt-1">About Jireh Global Foods</h1>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
                Direct processor and exporter of authentic Bihar Makhana based in Mithila, India.
              </p>
            </div>
            <OriginStory onOpenQuoteModal={() => handleOpenQuoteModal()} />
            <CertificationsGrid />
            <ContactSection onSuccessToast={showToast} />
          </>
        )}

        {currentPage === 'wholesale' && (
          <>
            <div className="bg-forest-950 text-white py-12 px-4 text-center border-b border-forest-800">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block">Bulk Supply</span>
              <h1 className="text-3xl sm:text-4xl font-serif font-black mt-1">Wholesale & Container Export</h1>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
                Supplying 500 KG to 40ft container loads to domestic and international buyers.
              </p>
            </div>
            <WholesalePage onOpenQuoteModal={handleOpenQuoteModal} />
            <PackagingShowcase onOpenQuoteModal={handleOpenQuoteModal} />
            <div className="py-10 bg-white border-b border-cream-200">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <BulkQuoteCalculator
                  currency={currency}
                  onSuccessToast={showToast}
                />
              </div>
            </div>
            <ContactSection onSuccessToast={showToast} />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <div className="bg-forest-950 text-white py-12 px-4 text-center border-b border-forest-800">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block">Bihar Headquarters</span>
              <h1 className="text-3xl sm:text-4xl font-serif font-black mt-1">Contact Us</h1>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
                Call, WhatsApp, or send an inquiry to Director Ambrose Kumar and our export team.
              </p>
            </div>
            <ContactSection onSuccessToast={showToast} />
          </>
        )}
      </main>

      {/* Simplified Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenPolicy={setActivePolicy}
      />

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border-2 border-white ring-4 ring-emerald-600/20"
        title="Direct WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-xs pr-1">
          WhatsApp Us
        </span>
      </a>

      {/* Fast Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductGrade={quoteInitialGrade}
        currency={currency}
        onSuccessToast={showToast}
      />

      {/* Clean Policy Modals */}
      <PolicyModals
        activePolicy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

    </div>
  );
}
