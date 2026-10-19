import React from 'react';

interface CompanyStickerBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CompanyStickerBadge: React.FC<CompanyStickerBadgeProps> = ({
  className = '',
  size = 'md'
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-xl border border-gold-500/50 shadow-md px-3 py-1.5 select-none ${className}`}>
      {/* Mini Laurel Logo Icon */}
      <div className={`${isSm ? 'w-6 h-6' : isLg ? 'w-9 h-9' : 'w-7 h-7'} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <circle cx="50" cy="50" r="46" stroke="#C5A059" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="42" stroke="#246343" strokeWidth="2" />
          {/* Laurel Wreath */}
          <path d="M22 68 C16 52 24 32 40 22 C34 29 32 38 35 48 C28 53 24 60 22 68 Z" fill="#246343" />
          <path d="M78 68 C84 52 76 32 60 22 C66 29 68 38 65 48 C72 53 76 60 78 68 Z" fill="#246343" />
          {/* Bowl */}
          <path d="M24 55 Q50 86 76 55 Q50 63 24 55 Z" fill="#784A1E" />
          <path d="M24 55 Q50 62 76 55 Q50 50 24 55 Z" fill="#9C6633" />
          {/* Puffed Kernels */}
          <circle cx="34" cy="46" r="8" fill="#F8F6F0" />
          <circle cx="48" cy="42" r="9" fill="#FFFFFF" />
          <circle cx="64" cy="46" r="8" fill="#F8F6F0" />
          <circle cx="40" cy="36" r="8.5" fill="#FFFFFF" />
          <circle cx="58" cy="38" r="8" fill="#FFFFFF" />
          <circle cx="50" cy="30" r="8.5" fill="#FFFFFF" stroke="#C5A059" strokeWidth="1" />
          <path d="M50 14 L51.5 18 L55.5 19.5 L51.5 21 L50 25 L48.5 21 L44.5 19.5 L48.5 18 Z" fill="#C5A059" />
        </svg>
      </div>

      <div className="leading-tight text-left">
        <div className="flex items-center gap-1">
          <span className={`${isSm ? 'text-[10px]' : isLg ? 'text-sm' : 'text-xs'} font-black font-serif tracking-wider text-gold-300 uppercase`}>
            JIREH
          </span>
          <span className="text-[9px] font-bold text-white tracking-widest uppercase">
            GLOBAL FOODS
          </span>
        </div>
        <div className="text-[8.5px] font-semibold text-emerald-300 tracking-wider uppercase">
          Official Packet Brand &amp; Logo
        </div>
      </div>
    </div>
  );
};
