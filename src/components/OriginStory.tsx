import React from 'react';
import { 
  Leaf, 
  MapPin, 
  Users, 
  Flame, 
  Layers, 
  ShieldCheck, 
  MessageCircle,
  Building2
} from 'lucide-react';
import { COMPANY } from '../data/company';

interface OriginStoryProps {
  onOpenQuoteModal?: () => void;
}

export const OriginStory: React.FC<OriginStoryProps> = ({
  onOpenQuoteModal
}) => {
  const steps = [
    {
      num: "01",
      icon: Leaf,
      title: "Freshwater Wetland Ponds",
      desc: "Cultivated in natural freshwater ponds in Mithila, Bihar without chemical pesticides.",
      image: "/src/assets/images/bihar_makhana_pond_1792344795085.jpg",
      tag: "Bihar Origin"
    },
    {
      num: "02",
      icon: Users,
      title: "Traditional Pond Harvesting",
      desc: "Skilled local harvesters collect black fox nut seeds from pond beds using traditional nets.",
      image: "/src/assets/images/raw_makhana_bulk_1792343021806.jpg",
      tag: "Sun-Dried Seeds"
    },
    {
      num: "03",
      icon: Flame,
      title: "Hot Popping & Sizing",
      desc: "Roasted in cast-iron kilns, popped to crispy white kernels, and sieved into 6+ and 5+ Suta.",
      image: "/src/assets/images/jumbo_makhana_6suta_1792343020360.jpg",
      tag: "6+ Suta Jumbo"
    },
    {
      num: "04",
      icon: Building2,
      title: "Patna Export Hub & Sealing",
      desc: "Moisture tested, vacuum sealed, and palletized at Jireh Bhawan, Patna for worldwide dispatch.",
      image: "/src/assets/images/jireh_patna_headquarters_1792344794154.jpg",
      tag: "Jireh Bhawan, Patna"
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Leaf className="w-3.5 h-3.5 text-forest-900" />
            <span>Direct Sourcing from Bihar</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-forest-950">
            From Bihar Farms to Global Containers
          </h2>
          <p className="text-stone-600 text-sm">
            Over 90% of global Makhana originates in Bihar. Jireh Global Foods provides direct farm-to-port supply without middlemen.
          </p>
        </div>

        {/* 4 Photo Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-xs space-y-3 flex flex-col justify-between group">
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-forest-900/90 text-gold-300 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      {s.tag}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Step {s.num}
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-forest-900 text-gold-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                      <h4 className="font-bold text-sm text-forest-950 leading-snug">{s.title}</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pt-1">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Director Note with Address */}
        <div className="bg-white rounded-2xl p-6 border border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold text-forest-900 uppercase tracking-wider">Direct Origin Guarantee</div>
            <h4 className="font-serif font-bold text-lg text-forest-950">
              &ldquo;We guarantee genuine Bihar origin, strictly graded kernels, and moisture below 7.0%.&rdquo;
            </h4>
            <p className="text-xs text-stone-500">
              — {COMPANY.director}, Director, Jireh Global Foods Pvt. Ltd. • {COMPANY.address.displayAddress}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent("Hello Ambrose Kumar! I would like to speak directly about Makhana supply.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Talk to Director</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
