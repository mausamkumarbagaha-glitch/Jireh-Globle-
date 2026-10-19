import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY } from '../data/company';
import { PageId } from '../types';
import { PolicyType } from './PolicyModals';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
  onOpenPolicy: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenPolicy
}) => {
  return (
    <footer className="bg-forest-950 text-cream-100 border-t border-forest-800 text-xs py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-forest-800">
          <BrandLogo variant="light" size="md" />

          {/* Simple Nav Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            <span>•</span>
            <button onClick={() => onNavigate('products')} className="hover:text-white">Products</button>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white">About Us</button>
            <span>•</span>
            <button onClick={() => onNavigate('wholesale')} className="hover:text-white">Bulk & Export</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white">Contact</button>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-4 py-2 rounded-xl text-xs uppercase"
          >
            Get a Quote
          </button>
        </div>

        {/* Contacts Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-stone-400 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span className="font-semibold text-cream-200">{COMPANY.address.displayAddress}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{COMPANY.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span>{COMPANY.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <a
              href={`https://wa.me/${COMPANY.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:underline"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-4 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. APEDA, FSSAI & ISO Certified.
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => onOpenPolicy('privacy')} className="hover:text-stone-300">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => onOpenPolicy('terms')} className="hover:text-stone-300">Terms</button>
            <span>•</span>
            <button onClick={() => onOpenPolicy('shipping')} className="hover:text-stone-300">Shipping Policy</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
