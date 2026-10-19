import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light'; // Light text on dark bg
  const textColor = isLight ? 'text-white' : 'text-forest-950';
  const subtextColor = isLight ? 'text-gold-300' : 'text-forest-800';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Outer Gold/Green Circular Garland Wreath */}
          <circle cx="50" cy="50" r="46" stroke="#C5A059" strokeWidth="2.5" strokeDasharray="4 2" opacity="0.85" />
          <circle cx="50" cy="50" r="42" stroke="#123824" strokeWidth="1.5" />
          
          {/* Laurel Branch Left */}
          <path d="M22 68 C16 52 24 32 40 22 C34 29 32 38 35 48 C28 53 24 60 22 68 Z" fill="#246343" opacity="0.8" />
          {/* Laurel Branch Right */}
          <path d="M78 68 C84 52 76 32 60 22 C66 29 68 38 65 48 C72 53 76 60 78 68 Z" fill="#246343" opacity="0.8" />
          
          {/* Wooden Bowl Base */}
          <path d="M24 55 Q50 86 76 55 Q50 63 24 55 Z" fill="#784A1E" />
          <path d="M24 55 Q50 62 76 55 Q50 50 24 55 Z" fill="#9C6633" />
          
          {/* Makhana Puffed Kernels in Bowl */}
          {/* Back layer */}
          <circle cx="34" cy="46" r="8" fill="#F8F6F0" stroke="#D8CDBA" strokeWidth="1" />
          <circle cx="48" cy="42" r="9" fill="#FFFDF8" stroke="#D8CDBA" strokeWidth="1" />
          <circle cx="64" cy="46" r="8" fill="#F8F6F0" stroke="#D8CDBA" strokeWidth="1" />
          {/* Middle layer */}
          <circle cx="40" cy="36" r="8.5" fill="#FFFFFF" stroke="#D8CDBA" strokeWidth="1" />
          <circle cx="58" cy="38" r="8" fill="#FFFDF8" stroke="#D8CDBA" strokeWidth="1" />
          {/* Crown top kernel */}
          <circle cx="50" cy="30" r="8.5" fill="#FFFFFF" stroke="#C5A059" strokeWidth="1" />
          {/* Small natural seed spot accents */}
          <circle cx="51" cy="28" r="1.2" fill="#B48A45" opacity="0.7" />
          <circle cx="41" cy="35" r="1.2" fill="#B48A45" opacity="0.7" />
          <circle cx="33" cy="47" r="1.1" fill="#B48A45" opacity="0.7" />
          <circle cx="63" cy="45" r="1.1" fill="#B48A45" opacity="0.7" />

          {/* Golden Sunburst / Sparkle */}
          <path d="M50 14 L51.5 18 L55.5 19.5 L51.5 21 L50 25 L48.5 21 L44.5 19.5 L48.5 18 Z" fill="#C5A059" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif tracking-widest font-extrabold uppercase ${size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl'} ${textColor}`}>
            JIREH
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-forest-900 text-gold-400 border border-gold-500/40">
            GLOBAL
          </span>
        </div>
        <span className={`tracking-wider text-[11px] font-semibold uppercase mt-0.5 ${textColor}`}>
          FOODS PVT. LTD.
        </span>
        <span className={`text-[8.5px] font-medium tracking-widest uppercase mt-0.5 ${subtextColor}`}>
          NOURISHED BY NATURE, SUPPLIED BY JIREH
        </span>
      </div>
    </div>
  );
};
