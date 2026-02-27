import React from 'react';
import { Link } from 'react-router-dom';

export default function VCMessageShort() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="section-title-box">Vice Chancellor</div>
      <div className="content-card flex flex-col md:flex-row gap-8 items-center">
        <div className="shrink-0 text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gcuh-maroon shadow-lg mx-auto">
            <img 
              src="https://gcuh.edu.pk/assets/images/slider/vc.jpg" 
              alt="VC" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/vc/200/200';
              }}
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-gcuh-maroon">Prof. Dr. Moazzam Ali Khan</h3>
            <p className="text-sm text-slate-500">Vice Chancellor</p>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="border-l-4 border-gcuh-gold pl-6">
            <h4 className="font-bold text-gcuh-maroon mb-2">Message:</h4>
            <p className="text-slate-700 leading-relaxed italic">
              "It is both an honour and a profound responsibility to assume the office of Vice Chancellor of Government College University Hyderabad. This institution occupies a distinctive place in the academic landscape of Sindh, carrying forward a respected legacy of learning while steadily evolving as a modern public university."
            </p>
            <div className="mt-4 text-right">
              <Link to="/about/vc-message" className="text-gcuh-maroon font-bold hover:text-gcuh-gold transition-colors">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
