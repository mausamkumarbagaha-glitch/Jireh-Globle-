import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/company';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does 'Suta' mean in Makhana grading and why does 6+ Suta command a premium?",
      a: "In India's agro-grading system, 'Suta' represents approximately 1/8th of an inch (around 3.175 mm). Grade 6+ Suta equates to popped fox nut kernels of 19mm to 24mm in diameter. Because only 8% to 10% of any pond harvest pool attains this massive expansion size, 6+ Suta is considered the gold standard for luxury gift hampers and gourmet health snack brands in North America, Europe, and GCC markets."
    },
    {
      q: "How does Jireh Global Foods safeguard against moisture in sea containers?",
      a: "Makhana is hygroscopic. We implement a strict 4-tier moisture containment protocol: (1) Halogen testing ensuring moisture < 7.0%, (2) 100-micron heavy barrier LDPE co-extruded liners, (3) 7-ply heavy-duty 28+ PSI burst-factor corrugated export cartons, and (4) High-capacity calcium chloride container pole desiccants that prevent sweat and humidity condensation during ocean transit through equatorial waters."
    },
    {
      q: "What is the Minimum Order Quantity (MOQ) for bulk exports and private label?",
      a: "Our standard trial commercial MOQ is 500 KG. For containerized sea cargo, standard loads are ~3.5 to 4.0 Metric Tons for a 20ft FCL and ~7.5 to 8.2 Metric Tons for a 40ft High Cube. For turnkey private label OEM packaging with custom printed pouches, pilot runs start at just 1,000 units."
    },
    {
      q: "What export documentation and certifications do you supply with shipments?",
      a: "Every consignment ships with an official APEDA Registered Exporter Certificate, FSSAI Central License verification, Government-issued Phytosanitary Certificate, Certificate of Origin (COO), NABL-accredited Certificate of Analysis (COA) for moisture and aflatoxins, Clean On-Board Ocean Bill of Lading (B/L), and an ISPM-15 Heat-Treatment Palletization Certificate."
    },
    {
      q: "What are your accepted international payment and shipping terms?",
      a: "We trade under ICC Incoterms® 2020: FOB (Kolkata Port or Nhava Sheva), CIF (Destination Port), CFR, or EXW Factory Bihar. Payment is supported via Irrevocable Confirmed Letter of Credit (L/C at sight) or Telegraphic Transfer (T/T: 30% advance deposit with balance upon clean Bill of Lading scan)."
    },
    {
      q: "Can international importers receive test sample boxes before contracting?",
      a: "Yes! We provide 500g and 1kg evaluation sample boxes dispatched via DHL / FedEx Express air courier to overseas buyers. 100% of all sample evaluation costs are credited directly back on your first commercial container invoice."
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-white border-b border-cream-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Buyer Guidance & Trade Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-forest-950">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Everything you need to know about procuring authentic Bihar Makhana, container specifications, and international trade compliance.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-cream-50 rounded-2xl border border-cream-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-forest-950 hover:text-forest-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gold-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-cream-200/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp assistance banner */}
        <div className="bg-forest-900 text-cream-100 p-6 rounded-2xl border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-white text-base">Have a specialized trade or tender query?</h4>
            <p className="text-xs text-stone-300 mt-0.5">Our export desk is on standby to assist with customs codes, container slot bookings, and lab reports.</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent("Hello Jireh Global Foods! I have a specialized inquiry regarding Makhana export.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
