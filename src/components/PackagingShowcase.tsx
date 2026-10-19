import React from 'react';
import { Package, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import { PACKAGING_TYPES } from '../data/products';
import { CompanyStickerBadge } from './CompanyStickerBadge';

interface PackagingShowcaseProps {
  onOpenQuoteModal: (packType?: string) => void;
}

export const PackagingShowcase: React.FC<PackagingShowcaseProps> = ({
  onOpenQuoteModal
}) => {
  return (
    <div className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-forest-900" />
            <span>Packaging &amp; Sea Loading</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-forest-950">
            Available Packaging Formats
          </h2>
          <p className="text-stone-600 text-sm">
            Consumer-ready pouches, crystal PET jars, and 25kg export master cartons — all sealed with the official <strong>JIREH GLOBAL FOODS</strong> brand seal.
          </p>
        </div>

        {/* Clear Packaging Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGING_TYPES.map((pack) => (
            <div key={pack.id} className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-xs flex flex-col justify-between group hover:border-gold-400 transition-all">
              <div>
                <div className="relative overflow-hidden">
                  <img
                    src={pack.imageUrl}
                    alt={pack.title}
                    className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Real Company Sticker on Packet */}
                  <div className="absolute top-2 left-2 z-10">
                    <CompanyStickerBadge size="sm" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {pack.sizes}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-serif font-bold text-base text-forest-950">
                    {pack.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-gold-800">
                    Sizes: {pack.sizes}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {pack.bestFor}
                  </p>

                  <div className="pt-2 border-t border-cream-100 space-y-1">
                    {pack.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="text-[11px] text-stone-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(pack.title)}
                  className="w-full bg-cream-100 hover:bg-forest-900 hover:text-white text-forest-950 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Inquire This Packaging
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 1 Simple Container Loading Bar */}
        <div className="bg-forest-950 text-white p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-forest-800">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Box className="w-4 h-4 text-gold-400" />
              <h4 className="font-serif font-bold text-base text-white">Full Container Load (FCL) Capacities</h4>
            </div>
            <p className="text-xs text-stone-300">
              • <strong>20ft Sea Container:</strong> ~3.5 to 4.0 MT (150 Master Boxes) &nbsp;|&nbsp; • <strong>40ft High Cube:</strong> ~7.5 to 8.0 MT (310 Master Boxes)
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Container Load Pricing')}
            className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase whitespace-nowrap shadow-md transition-colors"
          >
            Get Container Pricing
          </button>
        </div>

      </div>
    </div>
  );
};
