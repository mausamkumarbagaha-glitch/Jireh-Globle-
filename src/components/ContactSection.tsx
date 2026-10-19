import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../data/company';

interface ContactSectionProps {
  onSuccessToast?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSuccessToast
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [productGrade, setProductGrade] = useState('Jumbo 6+ Suta');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill your name and phone/WhatsApp number.');
      return;
    }
    setSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast(`Thank you ${name}! We will contact you on WhatsApp/Phone shortly.`);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    `Hello Jireh Global Foods! My name is ${name || 'Buyer'}. I want to inquire about ${productGrade}. Message: ${message || 'Please share price list.'}`
  )}`;

  return (
    <div id="contact-section" className="py-12 sm:py-16 bg-white border-b border-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Simple Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
            Direct Communication
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-forest-950">
            Contact Jireh Global Foods
          </h2>
          <p className="text-stone-600 text-sm">
            Contact our Bihar headquarters directly for quick prices, sample requests, and container bookings.
          </p>
        </div>

        {/* 3 Simple Contact Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
            className="bg-cream-50 p-4 rounded-2xl border border-cream-200 text-center space-y-1 hover:bg-cream-100 transition-colors block"
          >
            <div className="w-10 h-10 rounded-full bg-forest-900 text-gold-300 flex items-center justify-center mx-auto">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-forest-950">Call Directly</div>
            <div className="text-xs text-stone-600">{COMPANY.phone}</div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-center space-y-1 hover:bg-emerald-100 transition-colors block"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-emerald-950">WhatsApp Chat</div>
            <div className="text-xs text-emerald-700 font-semibold">+91 91234 56789</div>
          </a>

          <a
            href={`mailto:${COMPANY.email}`}
            className="bg-cream-50 p-4 rounded-2xl border border-cream-200 text-center space-y-1 hover:bg-cream-100 transition-colors block"
          >
            <div className="w-10 h-10 rounded-full bg-forest-900 text-gold-300 flex items-center justify-center mx-auto">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-forest-950">Email Us</div>
            <div className="text-xs text-stone-600 truncate">{COMPANY.email}</div>
          </a>
        </div>

        {/* Simple 4-Field Form */}
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-xs">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-xl text-forest-950">Message Sent!</h4>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Thank you! Director Ambrose Kumar or our sales team will connect with you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-forest-900 underline font-bold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-forest-950">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-forest-950 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-forest-950">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 or international phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-forest-950 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-forest-950">Product / Grade Interested In</label>
                <select
                  value={productGrade}
                  onChange={(e) => setProductGrade(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-forest-950 focus:outline-none"
                >
                  <option value="Jumbo Makhana (6+ Suta)">Jumbo Makhana (6+ Suta / 19mm - 24mm)</option>
                  <option value="Premium Graded Makhana (5+ Suta)">Premium Graded Makhana (5+ Suta)</option>
                  <option value="Raw Sun-Dried Phool Makhana">Raw Sun-Dried Phool Makhana</option>
                  <option value="Roasted Flavored Makhana Snacks">Roasted Flavored Makhana Snacks</option>
                  <option value="Private Label OEM Packaging">Private Label OEM Custom Packaging</option>
                  <option value="Full Container Load (20ft / 40ft)">Full Container Load (20ft / 40ft)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-forest-950">Message / Quantity Needed (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need price for 1,000 kg shipped to Dubai..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-forest-950 focus:outline-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full bg-forest-900 hover:bg-forest-800 text-gold-300 font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          )}

          <div className="mt-6 pt-5 border-t border-cream-200 space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl border border-cream-200">
              <img
                src="/src/assets/images/jireh_patna_headquarters_1792344794154.jpg"
                alt="Jireh Global Foods Office & Logistics Hub in Patna, Bihar"
                className="w-full sm:w-36 h-24 object-cover rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="text-left space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gold-700 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-forest-900" />
                  <span>Headquarters &amp; Registered Address</span>
                </div>
                <div className="text-sm font-bold text-forest-950 font-serif">
                  {COMPANY.address.displayAddress}
                </div>
                <div className="text-xs text-stone-500">
                  {COMPANY.address.full} • Pin Code: {COMPANY.address.pincode}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
