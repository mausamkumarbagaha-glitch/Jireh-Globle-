import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Globe
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY } from '../data/company';
import { Currency, PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenQuoteModal: (productGrade?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simplified to 5 easy-to-understand main navigation items
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'B2B Products' },
    { id: 'about', label: 'About Us' },
    { id: 'wholesale', label: 'Bulk & Export' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    "Hello Jireh Global Foods! I would like to get a price quote for Bihar Makhana (Fox Nuts)."
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-cream-200 shadow-xs">
      {/* Simple Top Notice Bar */}
      <div className="bg-forest-950 text-cream-100 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden sm:inline text-gold-400 font-bold">Jireh Global Foods • B2B Makhana Exporter</span>
            <span className="text-stone-300 hidden md:inline">📍 Chandmari, Patna, Bihar, India</span>
            <a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`} className="hover:text-gold-300 whitespace-nowrap">
              📞 {COMPANY.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-forest-950" />
              <span>WhatsApp</span>
            </a>

            {/* Currency switch */}
            <div className="flex items-center gap-1 text-[11px] bg-forest-900 px-2 py-0.5 rounded border border-forest-800">
              <Globe className="w-3 h-3 text-gold-400" />
              <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                <option value="USD" className="text-black">USD ($)</option>
                <option value="INR" className="text-black">INR (₹)</option>
                <option value="EUR" className="text-black">EUR (€)</option>
                <option value="AED" className="text-black">AED (د.إ)</option>
                <option value="GBP" className="text-black">GBP (£)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer py-1"
          >
            <BrandLogo size="md" variant="dark" />
          </div>

          {/* Simple Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-forest-950 bg-forest-100 font-bold'
                      : 'text-stone-700 hover:text-forest-900 hover:bg-cream-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Direct CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-forest-900 hover:bg-forest-800 text-gold-300 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-forest-900 text-gold-300 px-3 py-1.5 rounded-lg text-xs font-bold uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:bg-cream-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 px-4 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === item.id
                  ? 'bg-forest-900 text-gold-300'
                  : 'text-stone-700 hover:bg-cream-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-forest-900 text-gold-300 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Get Quick Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
