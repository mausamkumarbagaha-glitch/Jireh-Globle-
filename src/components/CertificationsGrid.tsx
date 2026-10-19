import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/company';

export const CertificationsGrid: React.FC = () => {
  return (
    <div className="py-12 bg-white border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Government Verified & Certified</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest-950">
            Our Certifications & Quality Standards
          </h3>
        </div>

        {/* 5 Simple Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {COMPANY.certifications.map((cert) => (
            <div 
              key={cert.code}
              className="bg-cream-50 p-4 rounded-xl border border-cream-200 text-center space-y-2 hover:bg-cream-100 transition-colors"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center font-display font-black text-sm tracking-wide border border-gold-400/40">
                {cert.code}
              </div>
              <div>
                <h4 className="font-bold text-xs text-forest-950">{cert.title.split('(')[0]}</h4>
                <div className="text-[10px] text-stone-500 font-mono mt-0.5">Reg: {cert.regNo}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-stone-500">
          All consignments include official Phytosanitary Certificate, Certificate of Origin, and Moisture Lab Test Report.
        </p>

      </div>
    </div>
  );
};
