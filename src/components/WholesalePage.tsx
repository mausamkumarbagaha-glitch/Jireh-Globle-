import React from 'react';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  Send,
  Box,
  CheckCircle2
} from 'lucide-react';
import { COMPANY } from '../data/company';

interface WholesalePageProps {
  onOpenQuoteModal: (pref?: string) => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({
  onOpenQuoteModal
}) => {
  const tiers = [
    {
      title: "Trial Wholesale Batch",
      qty: "500 KG to 2,000 KG",
      packing: "Packed in 10kg or 25kg master boxes",
      transit: "Shipped by LCL Sea or Air Cargo",
      bestFor: "Best for trial marketing, regional distributors, and initial testing.",
      image: "/src/assets/images/raw_makhana_bulk_1792343021806.jpg",
      tag: "Trial Batch"
    },
    {
      title: "20 FT FCL Sea Container",
      qty: "~3.5 to 4.0 Metric Tons",
      packing: "140 - 160 Master Cartons (25kg net)",
      transit: "Direct dispatch to Kolkata Sea Port (18 hrs)",
      bestFor: "Popular for supermarket distributors and established repackagers.",
      image: "/src/assets/images/makhana_export_carton_1792343021861.jpg",
      tag: "FCL Container"
    },
    {
      title: "40 FT High Cube Container",
      qty: "~7.5 to 8.2 Metric Tons",
      packing: "300 - 320 Master Cartons (25kg net)",
      transit: "Maximum volume ocean freight rate efficiency",
      bestFor: "Highest value for large international importers and food processors.",
      image: "/src/assets/images/jumbo_makhana_6suta_1792343020360.jpg",
      tag: "Maximum Savings"
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-white border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-forest-900" />
            <span>Bulk Supply &amp; Container Export</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-forest-950">
            Wholesale B2B Makhana Supply
          </h2>
          <p className="text-stone-600 text-sm">
            Direct pricing from our Bihar logistics hub. Mechanized grading, vacuum moisture sealing, and complete export documentation.
          </p>
        </div>

        {/* 3 Simple Volume Tiers with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className="bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 flex flex-col justify-between shadow-xs group hover:border-gold-400 transition-all">
              <div>
                <div className="relative h-44 overflow-hidden bg-cream-100">
                  <img
                    src={tier.image}
                    alt={tier.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-forest-900/90 text-gold-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    {tier.tag}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Tier 0{idx + 1}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-forest-950">{tier.title}</h3>
                  <div className="text-2xl font-black text-forest-900 font-sans">{tier.qty}</div>
                  
                  <div className="text-xs text-stone-600 space-y-1.5 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                      <span>{tier.packing}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-forest-800 flex-shrink-0" />
                      <span>{tier.transit}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-500 pt-2 border-t border-cream-200">
                    {tier.bestFor}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(tier.title)}
                  className="w-full bg-forest-900 hover:bg-forest-800 text-gold-300 hover:text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Get Quote for this Tier
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Call to Action */}
        <div className="bg-forest-950 text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-forest-800 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif font-bold text-lg text-white">Looking for a Recurring Monthly Supply Contract?</h4>
            <p className="text-xs text-stone-300">
              We provide locked seasonal pricing, container scheduling, and customized private-label packaging.
            </p>
            <div className="text-[11px] text-gold-400 font-medium pt-1">
              📍 Factory &amp; Office: {COMPANY.address.displayAddress}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('Container Supply')}
              className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase shadow-md transition-colors"
            >
              Request Container Quote
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
