import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  X, 
  Share2, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenQuoteModal: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenQuoteModal
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Grading', 'Sourcing', 'Nutrition', 'Export Guide'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-gold-600" />
            <span>Makhana Trade Insights & Technical Library</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-forest-950">
            MAKHANA KNOWLEDGE & EXPORT RESOURCES
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            In-depth guides on Indian Makhana grading meshes (Suta), wetland agronomy in Bihar, superfood nutrition metrics, and ocean shipping moisture safeguards.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-forest-900 text-gold-300 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-cream-100 border border-cream-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-cream-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-forest-900/90 text-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[10px] text-stone-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setSelectedPost(post)}
                    className="font-serif font-bold text-base text-forest-950 group-hover:text-forest-800 transition-colors cursor-pointer line-clamp-2 leading-snug"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full bg-cream-100 hover:bg-cream-200 text-forest-950 font-bold py-2 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-cream-300"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 text-gold-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Read Article Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-cream-300 relative p-6 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-cream-100 hover:bg-cream-200 p-2 rounded-full text-stone-600"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="bg-forest-900 text-gold-300 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950 leading-tight">
                    {selectedPost.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-gold-600" />
                      {selectedPost.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      {selectedPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-64 bg-cream-100">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                  {selectedPost.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-stone-500">
                    Published by Jireh Global Foods Knowledge Desk
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      onOpenQuoteModal();
                    }}
                    className="bg-forest-900 hover:bg-forest-800 text-gold-300 px-5 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider"
                  >
                    Request Related Product Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
