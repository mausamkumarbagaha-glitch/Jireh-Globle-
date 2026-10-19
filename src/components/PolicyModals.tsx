import React from 'react';
import { X, ShieldCheck, Scale, Truck, RotateCcw } from 'lucide-react';
import { COMPANY } from '../data/company';

export type PolicyType = 'privacy' | 'terms' | 'shipping' | 'return' | null;

interface PolicyModalsProps {
  activePolicy: PolicyType;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalsProps> = ({
  activePolicy,
  onClose,
}) => {
  if (!activePolicy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-cream-300 relative p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-cream-100 hover:bg-cream-200 p-2 rounded-full text-stone-600"
          aria-label="Close policy"
        >
          <X className="w-5 h-5" />
        </button>

        {activePolicy === 'privacy' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="flex items-center gap-2 text-forest-900 border-b border-cream-300 pb-3">
              <ShieldCheck className="w-6 h-6 text-gold-600" />
              <h3 className="font-serif font-bold text-xl sm:text-2xl">Privacy & Data Governance Policy</h3>
            </div>
            <p className="text-stone-500 font-mono text-xs">Effective Date: October 2026 | Jireh Global Foods Pvt. Ltd.</p>
            <p>
              At Jireh Global Foods Pvt. Ltd., we maintain the utmost confidentiality and data integrity regarding our commercial buyers, prospective distributors, and individual clients.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">1. Information Collection & Commercial Use</h4>
            <p>
              We collect information provided directly through our request-for-quotation (RFQ) forms, product inquiries, sample evaluation orders, and direct communications. This data includes corporate buyer name, company registration, shipping destination, phone number, and commercial procurement specifications.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">2. Non-Disclosure of Proprietary Formulas & OEM Client Data</h4>
            <p>
              Private-label recipes, brand artwork, packaging files, and confidential distributor territories are protected under strict corporate Non-Disclosure protocols and are never licensed, disclosed, or traded with third parties.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">3. Compliance with International Privacy Directives</h4>
            <p>
              We adhere to applicable data privacy principles aligned with the Digital Personal Data Protection (DPDP) Act of India, the EU General Data Protection Regulation (GDPR), and GCC personal data standards.
            </p>
          </div>
        )}

        {activePolicy === 'terms' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="flex items-center gap-2 text-forest-900 border-b border-cream-300 pb-3">
              <Scale className="w-6 h-6 text-gold-600" />
              <h3 className="font-serif font-bold text-xl sm:text-2xl">Commercial Terms & Conditions (Incoterms 2020)</h3>
            </div>
            <p className="text-stone-500 font-mono text-xs">Governed by International Chamber of Commerce (ICC) Regulations</p>
            <h4 className="font-bold text-forest-950 text-sm">1. Commercial Quotations & Proforma Invoices</h4>
            <p>
              All formal commercial quotations issued by Jireh Global Foods are valid for fourteen (14) calendar days unless otherwise stated in writing, due to prevailing agricultural crop market pricing and ocean bunker adjustment fluctuations.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">2. Incoterms & Transfer of Risk</h4>
            <p>
              Deliveries are governed under ICC Incoterms® 2020 (FOB Kolkata/Nhava Sheva, CIF Destination Port, CFR, or EXW Factory Bihar). Risk transfers to the buyer upon completion of loading on board the vessel for FOB, or at the terminal of destination for CIF shipments with Institute Cargo Clauses (A) marine insurance in force.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">3. Payment Terms</h4>
            <p>
              Standard export transactions are conducted via Irrevocable Confirmed Letter of Credit (L/C at sight) opened through a first-class international bank, or Telegraphic Transfer (T/T: 30% advance deposit with balance against scanned clean On-Board Bill of Lading and inspection certificates).
            </p>
          </div>
        )}

        {activePolicy === 'shipping' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="flex items-center gap-2 text-forest-900 border-b border-cream-300 pb-3">
              <Truck className="w-6 h-6 text-gold-600" />
              <h3 className="font-serif font-bold text-xl sm:text-2xl">Ocean Freight & International Shipping Policy</h3>
            </div>
            <p className="text-stone-500 font-mono text-xs">Logistics Origin: Bihar inland rail corridor to Kolkata Sea Port</p>
            <h4 className="font-bold text-forest-950 text-sm">1. Port Routing & Dispatch Timelines</h4>
            <p>
              Full Container Loads (20ft FCL & 40ft HQ) are processed at our Darbhanga/Patna facility and transferred via the Indian Railways Dedicated Freight Corridor to Kolkata Sea Port / Haldia Port or ICD Bihta. Typical dispatch from facility to vessel loading is completed in 7 to 10 working days following LC receipt or order confirmation.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">2. Moisture Control & Container Environment</h4>
            <p>
              Makhana consignments are packed strictly in multi-layer moisture barrier liners inserted into 7-ply heavy kraft export cartons. Active calcium chloride desiccant poles are installed within every ocean container to prevent container sweat and condensation during tropical ocean transits.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">3. Sample & Air Cargo Shipments</h4>
            <p>
              Courier sample boxes (250g - 1kg) and urgent evaluation batches are dispatched via authorized express couriers (DHL / FedEx Express) with door-to-door tracking provided within 48 hours of dispatch.
            </p>
          </div>
        )}

        {activePolicy === 'return' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="flex items-center gap-2 text-forest-900 border-b border-cream-300 pb-3">
              <RotateCcw className="w-6 h-6 text-gold-600" />
              <h3 className="font-serif font-bold text-xl sm:text-2xl">Quality Guarantee, Inspection & Claim Policy</h3>
            </div>
            <p className="text-stone-500 font-mono text-xs">Fair Trade & Quality Assurance Protocol</p>
            <h4 className="font-bold text-forest-950 text-sm">1. Pre-Shipment Inspection Rights</h4>
            <p>
              Buyers reserve the right to appoint independent inspection surveyors (such as SGS, Eurofins, Intertek, or Cotecna) at our processing plant or port of departure prior to container sealing. The surveyor&apos;s Certificate of Quality and Quantity shall be mutually binding.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">2. Claims on Arrival</h4>
            <p>
              In the rare event of transit damage, seal tampering, or variance from proforma specifications, written notification must be submitted within seven (7) days of container destuffing at the destination port, supported by photographic evidence and an official joint surveyor report.
            </p>
            <h4 className="font-bold text-forest-950 text-sm">3. Sample Box Reimbursement</h4>
            <p>
              All sample costs invoiced for testing boxes are 100% credited against your first commercial container contract value.
            </p>
          </div>
        )}

        <div className="pt-6 border-t border-cream-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-forest-900 text-gold-300 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
