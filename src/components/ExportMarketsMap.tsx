import React, { useState } from 'react';
import { 
  Globe2, 
  Ship, 
  Plane, 
  Clock, 
  FileText, 
  ShieldCheck, 
  MapPin, 
  Send,
  Building,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { COMPANY } from '../data/company';

interface ExportMarketsMapProps {
  onOpenQuoteModal: (countryName?: string) => void;
}

export const ExportMarketsMap: React.FC<ExportMarketsMapProps> = ({
  onOpenQuoteModal
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('All');

  const regions = ['All', 'Middle East', 'North America', 'Europe', 'Asia Pacific', 'Oceania'];

  const filteredMarkets = activeRegion === 'All'
    ? COMPANY.exportMarketsList
    : COMPANY.exportMarketsList.filter(m => m.region === activeRegion);

  const documentationSteps = [
    { name: "Bill of Lading (B/L)", desc: "Clean On-Board ocean or air waybill issued by shipping lines (Maersk, MSC, Hapag-Lloyd, CMA CGM)." },
    { name: "Phytosanitary Certificate", desc: "Issued by Plant Quarantine & Directorate of Plant Protection, Quarantine & Storage, Govt of India." },
    { name: "Certificate of Origin (COO)", desc: "Formal legalized origin document issued under Indo-GCC or country-specific bilateral trade agreements." },
    { name: "Certificate of Analysis (COA)", desc: "Comprehensive laboratory report for moisture, pesticide residue, and heavy metal testing." },
    { name: "Fumigation Certificate", desc: "Eco-friendly aluminium phosphide / non-residual container fumigation for international phytosanitary clearance." },
    { name: "Commercial Invoice & Packing List", desc: "Detailed HS code 19041090 / 08029000 itemization, net/gross weights, batch numbers, and carton dimensions." }
  ];

  return (
    <div className="py-16 sm:py-24 bg-white border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-gold-600" />
            <span>Delivering Goodness to the World</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-forest-950">
            GLOBAL EXPORT MARKETS & SHIPPING HUBS
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            With regular FCL container loads departing Kolkata Sea Port and ICD Bihta dry port, Jireh Global Foods powers supermarket shelves and private brands across 20+ countries.
          </p>
        </div>

        {/* 4 Quick Global Proof Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPANY.stats.slice(0, 4).map((stat, i) => (
            <div key={i} className="bg-cream-50 p-5 rounded-2xl border border-cream-200 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-serif font-black text-forest-900">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-forest-950">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-500">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeRegion === region
                  ? 'bg-forest-900 text-gold-300 shadow-md scale-105'
                  : 'bg-cream-100 text-stone-700 hover:bg-cream-200 border border-cream-300'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid of Global Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMarkets.map((market, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl drop-shadow-sm">{market.flag}</span>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-forest-950 group-hover:text-forest-800 transition-colors">
                        {market.country}
                      </h3>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide">
                        {market.region}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] bg-forest-50 text-forest-800 font-bold px-2 py-1 rounded border border-forest-200 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-600" />
                    {market.typicalTransit}
                  </span>
                </div>

                <div className="space-y-2 text-xs pt-2 border-t border-cream-200">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Key Entry Ports / Terminals</span>
                    <span className="font-medium text-forest-900 flex items-center gap-1">
                      <Ship className="w-3.5 h-3.5 text-stone-400" />
                      {market.mainPorts}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Highest Demand Grades</span>
                    <span className="font-semibold text-gold-800">{market.demand}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Customs Cleared Route
                </span>
                <button
                  onClick={() => onOpenQuoteModal(market.country)}
                  className="bg-forest-900 hover:bg-forest-800 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  <Send className="w-3 h-3" />
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Export Documentation & Compliance Checklist */}
        <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-10 border border-forest-800 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-forest-800 pb-6">
            <div className="space-y-1">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Seamless Customs Clearance</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Comprehensive Export Documentation Provided
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-2xl">
                Every consignment ships with a complete legal documentation packet ensuring swift, zero-delay clearance at destination customs.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-forest-900 px-4 py-2.5 rounded-xl border border-forest-700 text-xs text-cream-200">
              <Compass className="w-4 h-4 text-gold-400" />
              <span>Inland ICD Bihta & Kolkata Port Gateway</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentationSteps.map((doc, i) => (
              <div key={i} className="bg-forest-900/60 p-4 rounded-xl border border-forest-800 space-y-1.5">
                <div className="flex items-center gap-2 text-gold-300 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>{doc.name}</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-forest-800">
            <div className="text-xs text-stone-300">
              Need custom consular legalization or SASO / SABER certification for Saudi Arabia?
            </div>
            <button
              onClick={() => onOpenQuoteModal('Custom Export Documentation')}
              className="bg-gold-500 hover:bg-gold-400 text-forest-950 px-5 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
            >
              Speak to Export Logistics Specialist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
