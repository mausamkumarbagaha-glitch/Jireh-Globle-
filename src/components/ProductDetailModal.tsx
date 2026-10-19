import React from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { 
  X, 
  Send, 
  ShieldCheck, 
  ShoppingBag, 
  CheckCircle2, 
  FileCheck, 
  Sparkles,
  Package,
  Layers,
  Clock
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  currency: Currency;
  onClose: () => void;
  onOpenQuoteModal: (grade: string) => void;
  onAddSampleToCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  onClose,
  onOpenQuoteModal,
  onAddSampleToCart,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-cream-100 text-stone-600 hover:text-stone-900 p-2 rounded-full shadow-md border border-stone-200"
          aria-label="Close specification modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Image & Quick Meta (5 Cols) */}
          <div className="md:col-span-5 relative bg-cream-100 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-cream-300">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-white">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.highlightBadge && (
                  <span className="absolute top-3 left-3 bg-forest-900 text-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-gold-500/30 flex items-center gap-1 shadow">
                    <Sparkles className="w-3 h-3" />
                    {product.highlightBadge}
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <div className="text-xs font-bold text-forest-900 uppercase tracking-wider">
                  Origin & Harvest
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {product.origin}
                </p>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>APEDA & FSSAI Export Certified</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-cream-300 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-stone-500 uppercase">Indicative Rate:</span>
                <span className="text-2xl font-black text-forest-950 font-sans">
                  {formatPrice(product.pricePerKgUSD, currency)} <span className="text-xs font-normal text-stone-500">/ KG (FOB)</span>
                </span>
              </div>
              <button
                onClick={() => {
                  onAddSampleToCart(product);
                  onClose();
                }}
                className="w-full bg-cream-200 hover:bg-cream-300 text-forest-900 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-cream-300"
              >
                <ShoppingBag className="w-4 h-4 text-gold-600" />
                <span>Order 500g Test Sample ({formatPrice(product.samplePriceUSD, currency)})</span>
              </button>
            </div>
          </div>

          {/* Right Column: In-depth Technical Specs (7 Cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block">
                {product.grade}
              </span>
              <h2 className="text-2xl font-serif font-bold text-forest-950 mt-1">
                {product.name}
              </h2>
              {product.hindiName && (
                <div className="text-xs text-stone-500 mt-0.5">
                  Regional Name: {product.hindiName}
                </div>
              )}
            </div>

            <p className="text-sm text-stone-700 leading-relaxed">
              {product.description}
            </p>

            {product.flavorProfile && (
              <div className="bg-gold-50/70 border border-gold-200 rounded-xl p-3 text-xs">
                <strong className="text-gold-900 font-bold block mb-1">Flavor Notes:</strong>
                <span className="text-stone-700">{product.flavorProfile}</span>
              </div>
            )}

            {/* Technical Laboratory Spec Sheet */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest-950 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-forest-800" />
                <span>Technical Laboratory & Export Parameters</span>
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Moisture Content</span>
                  <span className="text-forest-950 font-bold">{product.specifications.moisture}</span>
                </div>
                <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Kernel Size (Suta)</span>
                  <span className="text-forest-950 font-bold">{product.sizeSuta}</span>
                </div>
                <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Foreign Matter / Dust</span>
                  <span className="text-forest-950 font-bold">{product.specifications.foreignMatter}</span>
                </div>
                <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Broken Kernels</span>
                  <span className="text-forest-950 font-bold">{product.specifications.brokenPercentage}</span>
                </div>
                <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Crude Protein</span>
                  <span className="text-forest-950 font-bold">{product.specifications.proteinPer100g}</span>
                </div>
                <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Caloric Value</span>
                  <span className="text-forest-950 font-bold">{product.specifications.energyKcal}</span>
                </div>
              </div>
            </div>

            {/* Packaging Options */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest-950 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-forest-800" />
                <span>Available Packaging Formats</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.packagingOptions.map((opt, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md border border-stone-200 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {opt}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-cream-300 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(product.grade);
                }}
                className="flex-1 bg-forest-900 hover:bg-forest-800 text-gold-300 hover:text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-gold-400" />
                <span>Request Custom Quotation</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
