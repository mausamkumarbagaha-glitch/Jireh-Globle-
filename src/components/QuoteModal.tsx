import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../data/company';
import { PRODUCTS } from '../data/products';
import { Currency } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductGrade?: string;
  currency: Currency;
  onSuccessToast?: (msg: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductGrade,
  currency,
  onSuccessToast
}) => {
  const [grade, setGrade] = useState('');
  const [quantity, setQuantity] = useState('1,000 KG (1 Metric Ton)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('Dubai, UAE');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductGrade) {
      setGrade(initialProductGrade);
    } else {
      setGrade('Jumbo Makhana (6+ Suta)');
    }
  }, [initialProductGrade, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    setSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast(`Thank you ${name}! We received your quote request and will reply on WhatsApp.`);
    }
  };

  const handleWhatsAppQuote = () => {
    const text = `*QUICK MAKHANA QUOTE REQUEST*
Buyer Name: ${name || 'Buyer'}
Phone/WhatsApp: ${phone || 'Not provided'}
Product Grade: ${grade}
Quantity: ${quantity}
Destination Port/City: ${destination}
Notes: ${notes || 'None'}
----------------------------
Sent to Jireh Global Foods
Jireh Bhawan, Gali No. 1, Chandmari, Patna, Bihar, India`;

    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-cream-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-950 text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-lg text-white">
              Request a Quick Quote
            </h3>
            <p className="text-[11px] text-cream-200">
              Direct from Jireh Global Foods, Bihar, India
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-lg text-forest-950">
                Inquiry Received!
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                Thank you <strong>{name}</strong>! We will contact you at <strong>{phone}</strong> with the price quote shortly.
              </p>
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open on WhatsApp</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-forest-950">Select Grade</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold text-forest-950 focus:outline-none"
                >
                  <option value="Jumbo Makhana (6+ Suta)">Jumbo Makhana (6+ Suta / 19mm - 24mm)</option>
                  <option value="Premium Graded Makhana (5+ Suta)">Premium Graded Makhana (5+ Suta)</option>
                  <option value="Raw Sun-Dried Phool Makhana">Raw Sun-Dried Phool Makhana</option>
                  <option value="Roasted Flavored Makhana Snacks">Roasted Flavored Makhana Snacks</option>
                  <option value="Private Label OEM Packaging">Custom Private Label Packaging</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-forest-950">Order Quantity</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold text-forest-950 focus:outline-none"
                >
                  <option value="500 KG (Trial Batch)">500 KG (Trial Batch)</option>
                  <option value="1,000 KG (1 Metric Ton)">1,000 KG (1 Metric Ton)</option>
                  <option value="2,000 KG (2 Metric Tons)">2,000 KG (2 Metric Tons)</option>
                  <option value="1x20ft Container (~3.5 MT)">1x20ft Container (~3.5 MT)</option>
                  <option value="1x40ft High Cube Container (~7.5 MT)">1x40ft High Cube Container (~7.5 MT)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-forest-950">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-forest-950 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-forest-950">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 or phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-forest-950 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-forest-950">Delivery Destination (City / Country)</label>
                <input
                  type="text"
                  placeholder="e.g. Dubai, London, New York, Delhi"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-forest-950 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-forest-950">Notes (Optional)</label>
                <input
                  type="text"
                  placeholder="Packaging preference or special requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-forest-950 focus:outline-none"
                />
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full bg-forest-900 hover:bg-forest-800 text-gold-300 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}

          <div className="pt-2 text-center text-[10px] text-stone-500">
            Export Desk: +91 91234 56789 • info@jirehglobalfoods.com
          </div>
        </div>
      </div>
    </div>
  );
};
