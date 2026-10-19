import React, { useState } from 'react';
import { 
  Calculator, 
  MessageCircle, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY } from '../data/company';
import { Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface BulkQuoteCalculatorProps {
  currency: Currency;
  onSuccessToast?: (msg: string) => void;
}

export const BulkQuoteCalculator: React.FC<BulkQuoteCalculatorProps> = ({
  currency,
  onSuccessToast
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [quantityKg, setQuantityKg] = useState<number>(1000);
  const [destination, setDestination] = useState<string>('Dubai, UAE (Jebel Ali)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  // Simple volume discount: 10% for full container (3500kg+), 5% for 1 MT+
  const discount = quantityKg >= 3500 ? 0.10 : quantityKg >= 1000 ? 0.05 : 0;
  const unitPriceUSD = product.pricePerKgUSD * (1 - discount);
  const estimatedTotalUSD = unitPriceUSD * quantityKg;

  const handleWhatsAppQuote = () => {
    const text = `*QUICK BULK QUOTE INQUIRY*
Name: ${name || 'Buyer'}
Phone/WhatsApp: ${phone || 'Not provided'}
Product: ${product.name} (${product.grade})
Quantity: ${quantityKg.toLocaleString()} KG
Destination: ${destination}
Estimated Rate: ${formatPrice(unitPriceUSD, currency)} / KG
Total Value: ${formatPrice(estimatedTotalUSD, currency)}
----------------------------------
Sent to Jireh Global Foods
Jireh Bhawan, Gali No. 1, Chandmari, Patna, Bihar, India`;

    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please enter your Name and Phone/WhatsApp number.');
      return;
    }
    setSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast('Thank you! Your quote request has been sent. We will contact you on WhatsApp.');
    }
  };

  return (
    <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-sm max-w-4xl mx-auto">
      <div className="text-center max-w-lg mx-auto space-y-2 mb-6">
        <span className="text-xs font-bold text-gold-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
          <Calculator className="w-3.5 h-3.5" />
          <span>Quick Price Estimator</span>
        </span>
        <h3 className="text-2xl font-serif font-bold text-forest-950">
          Calculate Your Bulk Order Price
        </h3>
        <p className="text-stone-600 text-xs sm:text-sm">
          Select grade and quantity to see estimated wholesale rates in {currency}.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Left: 3 Simple Selectors */}
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-forest-950 uppercase tracking-wider">
              1. Choose Grade
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-forest-950 focus:outline-none"
            >
              {PRODUCTS.slice(0, 5).map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.sizeSuta})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-forest-950">
              <span className="uppercase tracking-wider">2. Quantity:</span>
              <span className="text-forest-800">{quantityKg.toLocaleString()} KG ({(quantityKg / 1000).toFixed(1)} MT)</span>
            </div>
            
            {/* 3 quick buttons */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { label: '500 KG', val: 500 },
                { label: '1,000 KG (1 MT)', val: 1000 },
                { label: "20' Container", val: 3500 },
              ].map((btn) => (
                <button
                  key={btn.val}
                  type="button"
                  onClick={() => setQuantityKg(btn.val)}
                  className={`py-2 px-2 text-xs font-bold rounded-lg border text-center transition-all ${
                    quantityKg === btn.val
                      ? 'bg-forest-900 text-gold-300 border-forest-900'
                      : 'bg-white text-stone-700 hover:bg-cream-100 border-stone-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-forest-950 uppercase tracking-wider">
              3. Destination Country / Port
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-forest-950 focus:outline-none"
            >
              <option value="Dubai, UAE (Jebel Ali)">Dubai, UAE (Jebel Ali Port)</option>
              <option value="Saudi Arabia (Jeddah)">Saudi Arabia (Jeddah Port)</option>
              <option value="United States (New York / LA)">United States (New York / LA)</option>
              <option value="United Kingdom (Felixstowe)">United Kingdom (Felixstowe)</option>
              <option value="Canada (Vancouver / Toronto)">Canada (Vancouver / Toronto)</option>
              <option value="Singapore / Malaysia">Singapore / Malaysia</option>
              <option value="India Domestic (All States)">India Domestic (All States)</option>
            </select>
          </div>

          {/* Quick Contact inputs */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <input
              type="text"
              required
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-forest-950 focus:outline-none"
            />
            <input
              type="tel"
              required
              placeholder="Phone / WhatsApp *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-forest-950 focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Price Preview Card */}
        <div className="bg-forest-900 text-cream-100 p-6 rounded-2xl border border-forest-800 space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">Estimated Price</span>
            <div className="text-2xl sm:text-3xl font-black text-white font-sans mt-0.5">
              {formatPrice(unitPriceUSD, currency)} <span className="text-xs font-normal text-stone-300">/ KG</span>
            </div>
            {discount > 0 && (
              <span className="text-[11px] text-emerald-400 font-semibold block mt-0.5">
                Includes {(discount * 100).toFixed(0)}% bulk volume discount!
              </span>
            )}
          </div>

          <div className="pt-2 border-t border-forest-800 space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-stone-300">Total Quantity:</span>
              <span className="font-bold text-white">{quantityKg.toLocaleString()} KG</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-300">Estimated Total:</span>
              <span className="font-bold text-gold-300 text-sm">{formatPrice(estimatedTotalUSD, currency)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-300">Packing:</span>
              <span className="font-medium text-white">25kg Export Cartons</span>
            </div>
          </div>

          {submitted && (
            <div className="bg-emerald-900/60 border border-emerald-500/50 text-emerald-200 p-2.5 rounded-xl text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Inquiry received! We will reply on WhatsApp.</span>
            </div>
          )}

          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppQuote}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send This Quote on WhatsApp</span>
            </button>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-forest-950" />
              <span>Submit Email Inquiry</span>
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};
