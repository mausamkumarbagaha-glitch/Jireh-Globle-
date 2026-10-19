import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  currency: Currency;
  onOpenQuoteModal: (grade: string) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  currency,
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'graded' | 'roasted' | 'flour'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'graded') return p.category === 'raw' || p.category === 'graded';
    if (activeTab === 'roasted') return p.category === 'roasted' || p.category === 'flavored';
    if (activeTab === 'flour') return p.category === 'industrial';
    return true;
  });

  return (
    <div id="products-section" className="py-12 sm:py-16 bg-white border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
            B2B Export Catalogue • Direct Factory Supply
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-forest-950">
            Authentic Bihar Makhana Grades for B2B Buyers
          </h2>
          <p className="text-stone-600 text-sm">
            Supplying graded 6+ Suta Jumbo, 5+ Suta commercial grade, raw phool, and roasted snacks in 25kg bulk sea cartons or custom private-label packaging.
          </p>
        </div>

        {/* 4 Simple Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'bg-forest-900 text-gold-300 shadow-xs'
                : 'bg-cream-100 text-stone-700 hover:bg-cream-200'
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setActiveTab('graded')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'graded'
                ? 'bg-forest-900 text-gold-300 shadow-xs'
                : 'bg-cream-100 text-stone-700 hover:bg-cream-200'
            }`}
          >
            Jumbo &amp; Raw Graded (6+ &amp; 5+ Suta)
          </button>
          <button
            onClick={() => setActiveTab('roasted')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'roasted'
                ? 'bg-forest-900 text-gold-300 shadow-xs'
                : 'bg-cream-100 text-stone-700 hover:bg-cream-200'
            }`}
          >
            Roasted &amp; Flavored Snacks
          </button>
          <button
            onClick={() => setActiveTab('flour')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'flour'
                ? 'bg-forest-900 text-gold-300 shadow-xs'
                : 'bg-cream-100 text-stone-700 hover:bg-cream-200'
            }`}
          >
            Makhana Flour &amp; Tukda
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
              onOpenQuoteModal={onOpenQuoteModal}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
