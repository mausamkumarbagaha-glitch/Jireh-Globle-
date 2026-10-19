import React, { useState } from 'react';
import { 
  Sparkles, 
  Package, 
  Layers, 
  Palette, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  QrCode, 
  FileCheck,
  Flame,
  Tag
} from 'lucide-react';
import { COMPANY } from '../data/company';

interface PrivateLabelBuilderProps {
  onOpenQuoteModal: (details?: string) => void;
  onSuccessToast?: (msg: string) => void;
}

export const PrivateLabelBuilder: React.FC<PrivateLabelBuilderProps> = ({
  onOpenQuoteModal,
  onSuccessToast
}) => {
  const [brandName, setBrandName] = useState('JIREH GLOBAL FOODS');
  const [packStyle, setPackStyle] = useState<'pouch' | 'jar' | 'kraft'>('pouch');
  const [packSize, setPackSize] = useState('250g Stand-up Zip Pouch');
  const [flavor, setFlavor] = useState('Himalayan Pink Salt & Black Pepper');
  const [brandColor, setBrandColor] = useState('#123824'); // Forest Green default
  const [unitsNeeded, setUnitsNeeded] = useState(2500);

  const flavors = [
    'Raw Graded 6+ Suta Jumbo (Unroasted)',
    'Himalayan Pink Salt & Black Pepper',
    'Zesty Peri Peri Bird\'s Eye Chili',
    'Sour Cream & Caramelized Onion',
    'Tangy Pudina & Mint Chaat',
    'Truffle Cheese & Italian Herbs',
    'Custom Proprietary Seasoning'
  ];

  const packSizes = [
    '70g On-the-Go Snack Pouch',
    '100g Retail Zip Pouch',
    '150g PET Jar with Foil Ring-pull',
    '250g Stand-up Zip Pouch (Most Popular)',
    '500g Family Pack Pouch',
    '1kg Bulk Zip Pouch'
  ];

  const handleSendOEMInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const details = `OEM Private Label: Brand "${brandName}", Style: ${packStyle}, Size: ${packSize}, Flavor: ${flavor}, Quantity: ${unitsNeeded} Units`;
    onOpenQuoteModal(details);
  };

  return (
    <div className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Contract Manufacturing & White Label Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-forest-950">
            PRIVATE LABEL & OEM PACKAGING
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Launch your own gourmet Makhana brand with turnkey ease. From custom recipe formulation and nitrogen gas flushing to custom gravure pouch printing and FDA / GSO compliant nutritional panels.
          </p>
        </div>

        {/* Interactive Customizer & Mockup Preview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-cream-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Left (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-forest-950">
                Interactive Private Label Packaging Simulator
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Customize your mock package below to view initial volume tiers and packaging options.
              </p>
            </div>

            {/* Brand Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-950 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-gold-600" />
                <span>Enter Your Brand / Label Name:</span>
              </label>
              <input
                type="text"
                value={brandName}
                maxLength={30}
                onChange={(e) => setBrandName(e.target.value.toUpperCase())}
                placeholder="e.g. NATURE PUFFS, GOURMET NUTS..."
                className="w-full bg-cream-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm font-bold text-forest-950 focus:ring-2 focus:ring-forest-800 focus:outline-none uppercase tracking-wider"
              />
            </div>

            {/* Packaging Style */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-950">
                Select Package Format:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPackStyle('pouch')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    packStyle === 'pouch'
                      ? 'bg-forest-900 text-gold-300 border-forest-900 shadow-sm'
                      : 'bg-cream-50 text-stone-700 hover:bg-cream-100 border-stone-200'
                  }`}
                >
                  Matte Zip Pouch
                </button>
                <button
                  type="button"
                  onClick={() => setPackStyle('jar')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    packStyle === 'jar'
                      ? 'bg-forest-900 text-gold-300 border-forest-900 shadow-sm'
                      : 'bg-cream-50 text-stone-700 hover:bg-cream-100 border-stone-200'
                  }`}
                >
                  Clear PET Jar / Tin
                </button>
                <button
                  type="button"
                  onClick={() => setPackStyle('kraft')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    packStyle === 'kraft'
                      ? 'bg-forest-900 text-gold-300 border-forest-900 shadow-sm'
                      : 'bg-cream-50 text-stone-700 hover:bg-cream-100 border-stone-200'
                  }`}
                >
                  Eco Kraft Paper
                </button>
              </div>
            </div>

            {/* Size & Flavor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-forest-950">
                  Net Weight Unit Size:
                </label>
                <select
                  value={packSize}
                  onChange={(e) => setPackSize(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs font-medium text-forest-950 focus:outline-none"
                >
                  {packSizes.map((s, idx) => (
                    <option key={idx} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-forest-950">
                  Product / Flavor Profile:
                </label>
                <select
                  value={flavor}
                  onChange={(e) => setFlavor(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs font-medium text-forest-950 focus:outline-none"
                >
                  {flavors.map((f, idx) => (
                    <option key={idx} value={f}>{f}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Brand Color Picker */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-950 flex items-center gap-1">
                <Palette className="w-3.5 h-3.5 text-gold-600" />
                <span>Simulated Brand Accent Color:</span>
              </label>
              <div className="flex items-center gap-3">
                {[
                  { color: '#123824', name: 'Forest Green' },
                  { color: '#8C6E2B', name: 'Mithila Gold' },
                  { color: '#8B1E1E', name: 'Spicy Burgundy' },
                  { color: '#1E3A8A', name: 'Royal Navy' },
                  { color: '#1F2937', name: 'Midnight Matte' },
                ].map((c) => (
                  <button
                    key={c.color}
                    type="button"
                    onClick={() => setBrandColor(c.color)}
                    style={{ backgroundColor: c.color }}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${
                      brandColor === c.color ? 'scale-125 border-gold-500 shadow-md ring-2 ring-forest-900/20' : 'border-white'
                    }`}
                    title={c.name}
                  />
                ))}
                <span className="text-xs text-stone-500 pl-2">Select to preview packaging</span>
              </div>
            </div>

            {/* Order Volume Tier */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-forest-950 uppercase tracking-wider">Pilot Batch Quantity:</span>
                <span className="font-extrabold text-forest-800">{unitsNeeded.toLocaleString()} Retail Units</span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={unitsNeeded}
                onChange={(e) => setUnitsNeeded(Number(e.target.value))}
                className="w-full accent-forest-800 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>Pilot MOQ: 1,000 Pcs</span>
                <span>5,000 Pcs</span>
                <span>10,000 Pcs</span>
                <span>25,000+ Pcs</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSendOEMInquiry}
              className="w-full bg-forest-900 hover:bg-forest-800 text-gold-300 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send className="w-4 h-4 text-gold-400" />
              <span>Get Custom Private Label Proposal</span>
            </button>
          </div>

          {/* Visual Mockup Preview Right (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-cream-100/70 p-8 rounded-3xl border border-cream-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-4 block">
              Live Packaging Concept Preview
            </span>

            {/* Simulated Standup Pouch Container */}
            <div 
              className="w-64 h-96 rounded-t-3xl rounded-b-xl shadow-2xl relative overflow-hidden flex flex-col justify-between p-5 border-t-8 transition-colors duration-300"
              style={{
                backgroundColor: packStyle === 'kraft' ? '#D6BA91' : '#FFFFFF',
                borderColor: brandColor,
                boxShadow: `0 20px 25px -5px ${brandColor}25, 0 8px 10px -6px ${brandColor}20`
              }}
            >
              {/* Pouch Zipper & Notch detail */}
              <div className="absolute top-2 left-6 right-6 h-1 border-b border-dashed border-stone-300"></div>
              <div className="absolute top-3 left-2 w-1.5 h-1 bg-stone-300 rounded-r"></div>
              <div className="absolute top-3 right-2 w-1.5 h-1 bg-stone-300 rounded-l"></div>

              {/* Brand Header */}
              <div className="text-center pt-2 space-y-1">
                <div className="w-7 h-7 mx-auto rounded-full bg-forest-900 border border-gold-400 flex items-center justify-center text-gold-300 text-[10px] font-bold shadow-xs">
                  🥣
                </div>
                <div 
                  className="font-serif font-black text-lg tracking-wider leading-none py-0.5"
                  style={{ color: brandColor }}
                >
                  {brandName || 'JIREH GLOBAL FOODS'}
                </div>
                <div className="text-[7.5px] uppercase tracking-widest font-semibold text-stone-500">
                  NOURISHED BY NATURE, SUPPLIED BY JIREH
                </div>
              </div>

              {/* Pouch Window showing crispy popped makhana */}
              <div className="my-auto relative">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-stone-200 shadow-inner bg-cream-50">
                  <img
                    src="/src/assets/images/makhana_hero_bowl_1792343020330.jpg"
                    alt="Fox Nuts Puffed Kernels"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div 
                  className="text-center text-[9px] font-bold uppercase px-2 py-0.5 rounded-full mt-2 mx-auto w-fit text-white shadow-sm"
                  style={{ backgroundColor: brandColor }}
                >
                  {flavor.length > 24 ? flavor.slice(0, 24) + '...' : flavor}
                </div>
              </div>

              {/* Pouch Bottom Badges & Net Wt */}
              <div className="pt-2 border-t border-stone-200/80 space-y-1.5 text-[9px]">
                <div className="flex justify-between items-center text-stone-500 font-bold">
                  <span>NON-GMO</span>
                  <span>•</span>
                  <span>GLUTEN-FREE</span>
                  <span>•</span>
                  <span>VEGAN</span>
                </div>
                <div className="flex justify-between items-center text-stone-700">
                  <span className="font-bold">{packSize.split(' ')[0]}</span>
                  <span className="font-mono text-[8px] bg-stone-100 px-1 py-0.5 rounded">NITROGEN FLUSHED</span>
                </div>
              </div>

            </div>

            <div className="mt-4 text-center space-y-1">
              <span className="text-xs font-bold text-forest-950">
                100% Turnkey Private Label Delivery
              </span>
              <p className="text-[11px] text-stone-500 max-w-xs">
                We handle sourcing, grading, custom seasoning, pouch printing, lab testing and export palletization under your brand.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Jireh OEM Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center">
              <Package className="w-5 h-5 text-gold-400" />
            </div>
            <h4 className="font-bold text-sm text-forest-950">Turnkey Packaging</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Full rotogravure / digital printing for stand-up zipper pouches, PET jars, canisters, or pillow bags with matte/gloss finishes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center">
              <Flame className="w-5 h-5 text-gold-400" />
            </div>
            <h4 className="font-bold text-sm text-forest-950">Proprietary Seasoning</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Match existing regional flavors or create exclusive savory blends (Wasabi, Cheddar, Peri Peri, Barbeque, Caramel Sweet).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-gold-400" />
            </div>
            <h4 className="font-bold text-sm text-forest-950">Regulatory Label Adaptation</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              We design compliant bilingual nutrition panels tailored for US FDA, Canadian CFIA, UK Food Standards, and GCC GSO 9/2013 rules.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </div>
            <h4 className="font-bold text-sm text-forest-950">NDA & Brand Protection</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Guaranteed confidentiality agreements protecting your unique recipe, proprietary spices, packaging designs, and market distribution channels.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
