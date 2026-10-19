import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Leaf, 
  Award, 
  Globe2, 
  Package
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { CompanyStickerBadge } from './CompanyStickerBadge';

interface HeroProps {
  onOpenQuoteModal: (grade?: string) => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onExploreProducts
}) => {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    "Hello Jireh Global Foods! I would like to get a quote for bulk Makhana."
  )}`;

  return (
    <div className="bg-[#FAF7F2] py-10 sm:py-16 border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>🏭 B2B Agro Exporter • Direct From Bihar, India</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-forest-950 leading-tight">
              Premium Makhana from Bihar, India <br />
              <span className="text-forest-800 font-sans font-bold text-2xl sm:text-3xl lg:text-3xl block mt-1 text-gold-700">
                Naturally Sourced, Globally Supplied.
              </span>
            </h1>

            <p className="text-stone-700 text-base leading-relaxed max-w-xl">
              Direct processor and container load supplier of authentic Bihar Makhana (Fox Nuts). Supplying wholesalers, distributors, supermarkets, retailers, food manufacturers, and importers across 20+ countries.
            </p>

            <div className="text-xs text-forest-900 font-semibold flex items-center gap-1.5 bg-cream-100 p-2.5 rounded-xl border border-cream-200">
              <span>📍 Registered Office:</span>
              <span className="font-bold">{COMPANY.address.displayAddress}</span>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-forest-900 hover:bg-forest-800 text-gold-300 hover:text-white px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <span>Request a Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp B2B Desk</span>
              </a>

              <button
                onClick={onExploreProducts}
                className="bg-white hover:bg-cream-100 text-forest-950 border border-cream-300 px-5 py-3.5 rounded-xl font-bold text-sm transition-all"
              >
                Explore Products
              </button>
            </div>

            {/* Key B2B trust bullets */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-stone-600">
              <span>✓ 6+ Suta Jumbo Grade</span>
              <span>✓ FSSAI &amp; APEDA Certified</span>
              <span>✓ Moisture &lt; 7.0% Guaranteed</span>
              <span>✓ Container Loading Ready (FCL/LCL)</span>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="/src/assets/images/makhana_hero_bowl_1792343020330.jpg"
                alt="Real authentic popped white Bihar Makhana in wooden bowl"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 z-10">
                <CompanyStickerBadge size="sm" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md border border-cream-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-forest-950">Real 6+ Suta Popped Fox Nuts</div>
                  <div className="text-[11px] text-stone-500">Bihar Origin • Pure White &amp; Crispy</div>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('Jumbo Makhana (6+ Suta)')}
                  className="bg-forest-900 text-gold-300 px-3 py-1.5 rounded-lg text-xs font-bold uppercase shadow-xs hover:bg-forest-800"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Simple Highlights */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-cream-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-forest-950">100% Pure Makhana</div>
              <div className="text-[11px] text-stone-500">Low moisture &lt; 7%, no chemicals</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-cream-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-forest-950">Direct Factory Price</div>
              <div className="text-[11px] text-stone-500">Ex-Mithila, zero middlemen</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-cream-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-forest-950">Global B2B Export</div>
              <div className="text-[11px] text-stone-500">FCL &amp; LCL to 20+ countries</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-cream-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-forest-950">Export Packaging</div>
              <div className="text-[11px] text-stone-500">25kg cartons &amp; OEM private label</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
