import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ChevronRight, 
  ChevronLeft, 
  Building2, 
  Award, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Globe2, 
  Package, 
  FileText
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY } from '../data/company';
import { PRODUCTS } from '../data/products';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const pages = [
    { id: 1, title: '01 Company Overview' },
    { id: 2, title: '02 About Jireh & Bihar Heritage' },
    { id: 3, title: '03 Product Portfolio & Grades' },
    { id: 4, title: '04 Sourcing & Popping Process' },
    { id: 5, title: '05 Quality Assurance & Lab COA' },
    { id: 6, title: '06 Certifications & Licences' },
    { id: 7, title: '07 Packaging & Container Specs' },
    { id: 8, title: '08 Export Markets & Logistics' },
    { id: 9, title: '09 Why Partner With Jireh' },
    { id: 10, title: '10 Mission, Vision & Values' },
    { id: 11, title: '11 Message From The Director' },
    { id: 12, title: '12 Global Contact & Trade Desk' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-forest-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl border border-cream-300 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-forest-950 text-white p-4 sm:px-6 flex items-center justify-between border-b border-forest-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <BrandLogo variant="light" size="sm" />
            <div className="hidden sm:block border-l border-forest-800 pl-3">
              <span className="text-xs font-serif font-bold text-gold-300 block">
                Official Company Profile & Product Catalogue
              </span>
              <span className="text-[10px] text-cream-200/70">
                12-Page Export Dossier (PDF Ready)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-gold-500 hover:bg-gold-400 text-forest-950 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="bg-forest-900 hover:bg-forest-800 text-cream-100 p-2 rounded-lg text-xs"
              aria-label="Close catalogue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-cream-100 border-b border-cream-300 px-4 py-2 overflow-x-auto flex items-center gap-1.5 flex-shrink-0 no-scrollbar">
          {pages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === idx
                  ? 'bg-forest-900 text-gold-300 shadow-sm'
                  : 'text-stone-600 hover:bg-cream-200'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 bg-cream-50 print-only">
          
          {/* TAB 0: 01 Company Overview */}
          {activeTab === 0 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 01</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">COMPANY OVERVIEW</h3>
                <p className="text-sm text-stone-600">Premier Makhana Processor, Packager & Bulk Global Exporter</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                  <p>
                    <strong>Jireh Global Foods Pvt. Ltd.</strong> is a specialized agro-commodity export company founded with the mission of delivering authentic, naturally grown, and hygienically processed Makhana (Fox Nuts / Gorgon Nut) from the historic Mithila region of Bihar, India to discerning international buyers.
                  </p>
                  <p>
                    With deep roots across Darbhanga, Madhubani, Samastipur, and Purnia districts, we manage direct procurement networks with more than 850 traditional wetland farmer collectives.
                  </p>
                  <p>
                    Operating from modern processing infrastructure equipped with calibrated vibratory sieves, color sorters, and nitrogen flush lines, Jireh ensures zero adulteration, uniform grading, and certified moisture containment.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-3">
                  <h4 className="font-serif font-bold text-forest-950 text-base border-b border-cream-200 pb-2">
                    Key Corporate Data
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-400">Legal Entity:</span>
                      <span className="font-bold text-forest-900">{COMPANY.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-400">Key Director:</span>
                      <span className="font-bold text-forest-900">{COMPANY.director}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-400">Headquarters:</span>
                      <span className="font-bold text-forest-900">Bihar, India</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-400">Primary Product:</span>
                      <span className="font-bold text-forest-900">Euryale Ferox (Fox Nuts / Phool Makhana)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-400">Annual Throughput:</span>
                      <span className="font-bold text-forest-900">2,400+ Metric Tons</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-stone-400">Certifications:</span>
                      <span className="font-bold text-emerald-700">APEDA, FSSAI Central, IEC, ISO 9001, MSME</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: 02 About Jireh & Bihar Heritage */}
          {activeTab === 1 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 02</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">ABOUT JIREH & BIHAR HERITAGE</h3>
                <p className="text-sm text-stone-600">The Land of the World&apos;s Best Makhana</p>
              </div>

              <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                <p>
                  Mithila, the historical cultural belt in Northern Bihar, produces over 90% of the entire world&apos;s commercial makhana harvest. The region&apos;s unique agro-climatic conditions — perennial water ponds, nutrient-dense alluvial silts deposited by Himalayan streams, and tropical subtropical sunshine — provide the perfect environment for the aquatic giant water lily <em>Euryale ferox</em>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-xl border border-cream-300">
                    <strong className="text-forest-950 block font-serif">GI Tag Advantage</strong>
                    <p className="text-xs text-stone-600 mt-1">Protected Geographical Indication guarantees genuine origin, rich mineral count, and large puff size.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-cream-300">
                    <strong className="text-forest-950 block font-serif">Traditional Mallah Network</strong>
                    <p className="text-xs text-stone-600 mt-1">Deep-pond harvesting conducted sustainably by indigenous harvester families with fair-trade pricing.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-cream-300">
                    <strong className="text-forest-950 block font-serif">Chemical-Free Cultivation</strong>
                    <p className="text-xs text-stone-600 mt-1">Zero synthetic chemical fertilizers, bleaching agents, or sulfur gas treatments.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 03 Product Portfolio & Grades */}
          {activeTab === 2 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 03</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">OUR PRODUCT PORTFOLIO</h3>
                <p className="text-sm text-stone-600">Jumbo 6+ Suta, Graded 5+ Suta, Roasted Snacks & Industrial Grades</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRODUCTS.slice(0, 6).map((p) => (
                  <div key={p.id} className="bg-white p-4 rounded-xl border border-cream-300 flex items-start gap-4">
                    <img src={p.imageUrl} alt={p.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gold-700 uppercase">{p.grade}</span>
                      <h4 className="font-serif font-bold text-forest-950 text-sm">{p.name}</h4>
                      <p className="text-[11px] text-stone-500 line-clamp-2">{p.description}</p>
                      <div className="text-[10px] text-stone-400">MOQ: {p.moq} • Size: {p.sizeSuta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 04 Sourcing & Popping Process */}
          {activeTab === 3 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 04</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">OUR PROCESS</h3>
                <p className="text-sm text-stone-600">Artisanal Wisdom Meets Modern Industrial Quality Control</p>
              </div>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="bg-white p-4 rounded-xl border border-cream-300 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-forest-900 text-gold-300 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <strong className="text-forest-950 text-sm block">Harvesting from Natural Pokhars (Ponds)</strong>
                    <p className="text-stone-600 mt-0.5">Seeds are gathered from the mud bed of freshwater ponds using bamboo nets during dawn hours.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-cream-300 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-forest-900 text-gold-300 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <strong className="text-forest-950 text-sm block">Cleaning & Sun-Curing</strong>
                    <p className="text-stone-600 mt-0.5">Seeds are washed in clean flowing water, sun-dried on hygienic mesh sheets, and graded into size lots.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-cream-300 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-forest-900 text-gold-300 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <strong className="text-forest-950 text-sm block">Cast-Iron Roasting & Popping</strong>
                    <p className="text-stone-600 mt-0.5">Heated in earthen ovens and swiftly struck with wooden mallets to pop the kernel into snow-white Phool Makhana.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-cream-300 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-forest-900 text-gold-300 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <strong className="text-forest-950 text-sm block">Sieve Grading & Moisture Sealing</strong>
                    <p className="text-stone-600 mt-0.5">Processed through mechanical screens to classify 6+ Suta, 5+ Suta, followed by nitrogen packaging under 7% moisture.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 05 Quality Assurance & Lab COA */}
          {activeTab === 4 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 05</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">QUALITY ASSURANCE</h3>
                <p className="text-sm text-stone-600">Standardized Batch Testing & Lab Verification</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-cream-300 space-y-4">
                <p className="text-stone-700 text-xs leading-relaxed">
                  Every batch of Jireh Makhana undergoes multi-stage laboratory testing conducted in accredited NABL certified laboratories, ensuring absolute compliance with US FDA, European Union (EU) Codex Alimentarius, and GCC Standard GSO 9/2013.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Moisture</span>
                    <span className="font-bold text-forest-900">&lt; 7.0% Max</span>
                  </div>
                  <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Aflatoxins</span>
                    <span className="font-bold text-forest-900">Not Detected (&lt; 1 ppb)</span>
                  </div>
                  <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Heavy Metals</span>
                    <span className="font-bold text-forest-900">Compliant (Nil)</span>
                  </div>
                  <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Salmonella / E. Coli</span>
                    <span className="font-bold text-forest-900">Absent in 25g</span>
                  </div>
                  <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Chemical Bleach</span>
                    <span className="font-bold text-forest-900">Zero / Unbleached</span>
                  </div>
                  <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Pre-Shipment Inspection</span>
                    <span className="font-bold text-forest-900">SGS / Eurofins Ready</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: 06 Certifications */}
          {activeTab === 5 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 06</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">CERTIFICATIONS & LICENCES</h3>
                <p className="text-sm text-stone-600">Verified Credentials for International Food Trade</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY.certifications.map((c) => (
                  <div key={c.code} className="bg-white p-5 rounded-xl border border-cream-300 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-base text-gold-700">{c.code}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">{c.badge}</span>
                    </div>
                    <h4 className="font-serif font-bold text-forest-950 text-sm">{c.title}</h4>
                    <div className="text-xs font-mono text-stone-500">Reg No: {c.regNo}</div>
                    <p className="text-xs text-stone-600">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: 07 Packaging & Loading */}
          {activeTab === 6 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 07</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">PACKAGING & CONTAINER LOADING</h3>
                <p className="text-sm text-stone-600">Export Packaging Options & Ocean Freight Payload</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
                <div className="bg-white p-5 rounded-xl border border-cream-300 space-y-3">
                  <h4 className="font-bold text-forest-950 text-sm uppercase">Standard Master Export Carton</h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-stone-600">
                    <li>7-Ply Heavy Corrugated Kraft Box (28+ PSI Burst Factor)</li>
                    <li>Inside Virgin LDPE Co-Extruded Barrier Moisture Liner (100 micron)</li>
                    <li>Active Silica / Calcium Chloride Desiccant Bags inserted</li>
                    <li>Net Weights: 10kg, 20kg, and 25kg configurations</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-cream-300 space-y-3">
                  <h4 className="font-bold text-forest-950 text-sm uppercase">Container Capacities</h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-stone-600">
                    <li><strong>20ft Standard FCL:</strong> ~3,500 to 4,000 KG (140-160 Cartons)</li>
                    <li><strong>40ft High Cube HQ:</strong> ~7,500 to 8,200 KG (300-330 Cartons)</li>
                    <li><strong>Palletization:</strong> ISPM-15 Certified Heat-Treated Pine Wood Pallets</li>
                    <li><strong>Inland Haulage:</strong> Dedicated Freight Corridor to Kolkata Sea Port</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: 08 Export Markets */}
          {activeTab === 7 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 08</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">EXPORT MARKETS</h3>
                <p className="text-sm text-stone-600">Regular Supply to 20+ Global Destinations</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {COMPANY.exportMarketsList.map((m, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-cream-300 text-center space-y-1">
                    <span className="text-2xl">{m.flag}</span>
                    <strong className="block text-forest-950 font-serif">{m.country}</strong>
                    <span className="text-[10px] text-stone-500 block">{m.mainPorts}</span>
                    <span className="text-[10px] font-bold text-emerald-700 block">{m.typicalTransit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: 09 Why Choose Us */}
          {activeTab === 8 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 09</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">WHY CHOOSE JIREH</h3>
                <p className="text-sm text-stone-600">The Jireh Global Advantage for International Buyers</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-5 rounded-xl border border-cream-300 space-y-1.5">
                  <strong className="text-forest-950 text-sm font-serif block">Direct Origin Sourcing</strong>
                  <p className="text-stone-600">Located in Bihar itself, giving you first-hand pricing without intermediary markups and fresh current-year crops.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-cream-300 space-y-1.5">
                  <strong className="text-forest-950 text-sm font-serif block">Guaranteed 6+ Suta Jumbo Availability</strong>
                  <p className="text-stone-600">We operate high-capacity screening drums to filter out true 19-24mm jumbo kernels for luxury markets.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-cream-300 space-y-1.5">
                  <strong className="text-forest-950 text-sm font-serif block">Strict Moisture Containment (&lt; 7.0%)</strong>
                  <p className="text-stone-600">Halogen digital moisture testing ensures that your nuts arrive crisp in overseas containers without soggy dampness.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-cream-300 space-y-1.5">
                  <strong className="text-forest-950 text-sm font-serif block">Flexible OEM & Low MOQs</strong>
                  <p className="text-stone-600">We assist emerging health snack brands with pilot batches from 1,000 pouches with complete legal label design.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: 10 Mission & Vision */}
          {activeTab === 9 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 10</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">MISSION, VISION & VALUES</h3>
                <p className="text-sm text-stone-600">Guiding Principles of Sustainable Agro Export</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700">
                <div className="bg-white p-6 rounded-2xl border border-cream-300 space-y-2">
                  <h4 className="font-serif font-bold text-forest-950 text-lg">Our Mission</h4>
                  <p className="text-xs leading-relaxed text-stone-600">
                    To deliver uncompromised quality Bihar Fox Nuts to global dinner tables and retail shelves while ensuring fair-trade prosperity, modern training, and dignified livelihoods for Mithila wetland harvesting families.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-cream-300 space-y-2">
                  <h4 className="font-serif font-bold text-forest-950 text-lg">Our Vision</h4>
                  <p className="text-xs leading-relaxed text-stone-600">
                    To become the world&apos;s most recognized, dependable, and technologically advanced exporter of value-added Makhana and plant-based superfoods from India.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: 11 Director's Message */}
          {activeTab === 10 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 11</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">MESSAGE FROM THE DIRECTOR</h3>
                <p className="text-sm text-stone-600">A Personal Word From Ambrose Kumar</p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-cream-300 space-y-4 text-stone-700 text-sm leading-relaxed">
                <p className="font-serif italic text-base text-forest-950">
                  &ldquo;Dear Valued Partners & International Buyers,&rdquo;
                </p>
                <p>
                  Makhana is more than just an agricultural commodity to us in Bihar; it is a sacred heritage that has sustained our wetlands for millennia. When we founded Jireh Global Foods Pvt. Ltd., our determination was to elevate this remarkable superfood to global standards of purity, consistency, and presentation.
                </p>
                <p>
                  We recognize that international importers need certainty — certainty in sizing, certainty in moisture levels, and certainty in delivery schedules. Our facility and export desk are engineered to deliver precisely that level of reliability.
                </p>
                <div className="pt-4 border-t border-cream-200">
                  <strong className="font-serif font-bold text-forest-950 block text-base">{COMPANY.director}</strong>
                  <span className="text-xs text-stone-500">Director, Jireh Global Foods Pvt. Ltd.</span>
                  <div className="text-xs text-stone-400 mt-1">Darbhanga / Patna, Bihar, India</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: 12 Contact & Trade Desk */}
          {activeTab === 11 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-cream-300 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">Section 12</span>
                <h3 className="text-3xl font-serif font-black text-forest-950 mt-1">GLOBAL TRADE DESK & CONTACT</h3>
                <p className="text-sm text-stone-600">Connect With Our International Export Desk</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-cream-300 space-y-3 text-xs">
                  <h4 className="font-serif font-bold text-forest-950 text-base">Direct Export Communication</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-stone-700">
                      <Phone className="w-4 h-4 text-gold-600" />
                      <span>{COMPANY.phone} / {COMPANY.secondaryPhone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-700">
                      <Mail className="w-4 h-4 text-gold-600" />
                      <span>{COMPANY.email} / {COMPANY.salesEmail}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-700">
                      <Globe2 className="w-4 h-4 text-gold-600" />
                      <span>www.jirehglobalfoods.com</span>
                    </div>
                    <div className="flex items-start gap-2 text-stone-700 pt-1">
                      <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>{COMPANY.address.displayAddress}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-forest-900 text-white p-6 rounded-2xl border border-forest-800 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Ready to Order or Request Samples?</h4>
                    <p className="text-xs text-stone-300 mt-1">
                      We dispatch sample testing boxes via DHL / FedEx International within 48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenQuoteModal();
                    }}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider text-center transition-all"
                  >
                    Request Proforma Quotation Now
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Controls */}
        <div className="bg-white p-4 border-t border-cream-300 flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
            disabled={activeTab === 0}
            className="flex items-center gap-1 text-xs font-bold text-stone-700 hover:text-forest-900 disabled:opacity-30 disabled:pointer-events-none px-3 py-2 rounded-lg hover:bg-cream-100"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Page</span>
          </button>

          <span className="text-xs text-stone-500 font-mono">
            Page {activeTab + 1} of {pages.length}
          </span>

          <button
            onClick={() => setActiveTab(Math.min(pages.length - 1, activeTab + 1))}
            disabled={activeTab === pages.length - 1}
            className="flex items-center gap-1 text-xs font-bold text-stone-700 hover:text-forest-900 disabled:opacity-30 disabled:pointer-events-none px-3 py-2 rounded-lg hover:bg-cream-100"
          >
            <span>Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
