import React from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { MessageCircle, Send } from 'lucide-react';
import { COMPANY } from '../data/company';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  onOpenQuoteModal: (productGrade: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onOpenQuoteModal
}) => {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    `Hello Jireh Global Foods! I would like to inquire about ${product.name} (${product.grade}).`
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
      
      {/* Product Image */}
      <div>
        <div className="relative h-48 sm:h-52 overflow-hidden bg-cream-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-forest-900 text-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
            {product.sizeSuta}
          </div>
          {product.highlightBadge && (
            <div className="absolute top-3 right-3 bg-white/95 text-forest-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
              {product.highlightBadge}
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-forest-950/85 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-gold-500/30">
            <span className="text-gold-300 font-serif">JIREH</span>
            <span>GLOBAL FOODS</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
            {product.grade}
          </div>
          <h3 className="font-serif font-bold text-lg text-forest-950 leading-snug">
            {product.name}
          </h3>
          <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Simple bullet points */}
          <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200 text-xs space-y-1 text-stone-700">
            <div className="flex justify-between">
              <span className="text-stone-500">Kernel Size:</span>
              <span className="font-bold text-forest-950">{product.sizeSuta}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Moisture:</span>
              <span className="font-bold text-forest-950">{product.specifications.moisture}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Min. Order:</span>
              <span className="font-semibold text-stone-900">{product.moq.split(' ')[0]} {product.moq.split(' ')[1] || 'KG'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="p-5 pt-0 border-t border-cream-100 space-y-3">
        <div className="flex items-baseline justify-between pt-2">
          <span className="text-xs text-stone-500">Wholesale Price:</span>
          <div className="text-right">
            <span className="text-lg font-bold text-forest-950 font-sans">
              {formatPrice(product.pricePerKgUSD, currency)}
            </span>
            <span className="text-[11px] text-stone-500 font-normal"> / KG</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onOpenQuoteModal(product.grade)}
            className="w-full bg-forest-900 hover:bg-forest-800 text-gold-300 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get Quote</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
