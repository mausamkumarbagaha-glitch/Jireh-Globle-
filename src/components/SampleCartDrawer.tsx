import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Package, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { COMPANY } from '../data/company';

interface SampleCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  currency: Currency;
  onSuccessToast: (msg: string) => void;
}

export const SampleCartDrawer: React.FC<SampleCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  currency,
  onSuccessToast
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('United Arab Emirates');
  const [shippingAddress, setShippingAddress] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const totalSampleCostUSD = items.reduce(
    (acc, item) => acc + item.product.samplePriceUSD * item.quantity,
    0
  );

  const handleSendSampleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) {
      alert('Please fill your name and email address.');
      return;
    }

    const itemsSummary = items
      .map((i) => `• ${i.product.name} (${i.product.grade}) x ${i.quantity} boxes`)
      .join('\n');

    const msg = `*SAMPLE BOX INQUIRY / ORDER*
Buyer: ${buyerName}
Company: ${buyerCompany || 'Independent Importer'}
Country: ${destinationCountry}
Email: ${buyerEmail}
Phone/WhatsApp: ${buyerPhone}
Shipping Address: ${shippingAddress || 'To be confirmed'}
-------------------------
Requested Samples:
${itemsSummary}
Estimated Sample Value: ${formatPrice(totalSampleCostUSD, currency)}
-------------------------
Sent to Jireh Global Foods (Bihar, India)`;

    setOrderSent(true);
    onSuccessToast('Sample evaluation request dispatched! Our courier team will contact you with tracking details.');
    
    // Also allow WhatsApp
    const waUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-forest-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl border-l border-cream-300 relative animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-950 text-white p-5 flex items-center justify-between border-b border-forest-800 flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            <div>
              <h3 className="font-serif font-bold text-base text-white">Sample Box & Evaluation Basket</h3>
              <p className="text-[10px] text-cream-200/70">Test authentic Bihar quality before container booking</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1 rounded-lg"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center mx-auto text-stone-400">
                <Package className="w-8 h-8 text-gold-600" />
              </div>
              <h4 className="font-serif font-bold text-forest-950 text-lg">Your sample basket is empty</h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Explore our catalog and click &ldquo;Sample Box&rdquo; on any grade to test our 6+ Suta kernels and crispy roasted flavors.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <div 
                    key={item.product.id}
                    className="bg-cream-50 p-3.5 rounded-xl border border-cream-200 flex items-center justify-between gap-3"
                  >
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name}
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif font-bold text-xs text-forest-950 truncate">
                        {item.product.name}
                      </h5>
                      <div className="text-[10px] text-gold-800 font-semibold truncate">
                        {item.product.grade}
                      </div>
                      <div className="text-xs font-bold text-forest-900 mt-1">
                        {formatPrice(item.product.samplePriceUSD, currency)} / 500g Box
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-xs font-bold text-stone-600 hover:bg-cream-100"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold font-mono">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-stone-600 hover:bg-cream-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-red-600 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sample Subtotal */}
              <div className="bg-forest-900 text-cream-100 p-4 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-300">Total Sample Units:</span>
                  <span className="font-bold">{items.reduce((s, i) => s + i.quantity, 0)} Box(es)</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-1 border-t border-forest-800 text-white">
                  <span>Sample Value (Ex-Factory):</span>
                  <span className="text-gold-300">{formatPrice(totalSampleCostUSD, currency)}</span>
                </div>
                <p className="text-[10px] text-stone-400 pt-1">
                  *Sample product costs are credited back 100% against your first commercial container invoice!
                </p>
              </div>

              {/* Sample Dispatch Form */}
              <form onSubmit={handleSendSampleRequest} className="space-y-3 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-forest-950">
                  Courier Delivery Details (DHL / FedEx Express)
                </h5>

                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-forest-950 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Company / Supermarket / Brand Name"
                  value={buyerCompany}
                  onChange={(e) => setBuyerCompany(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-forest-950 focus:outline-none"
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full bg-cream-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-forest-950 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp *"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    className="w-full bg-cream-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-forest-950 focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Destination Country & City *"
                  required
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-forest-950 focus:outline-none"
                />

                <textarea
                  rows={2}
                  placeholder="Complete courier delivery address..."
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-forest-950 focus:outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-forest-900 hover:bg-forest-800 text-gold-300 font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Request Sample Dispatch via WhatsApp/Email</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-cream-100 border-t border-cream-300 text-center text-[10px] text-stone-500 flex-shrink-0">
          Worldwide Air Courier Dispatch • Tested for &lt; 7.0% Moisture
        </div>
      </div>
    </div>
  );
};
