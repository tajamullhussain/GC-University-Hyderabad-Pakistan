import React from 'react';

const tenders = [
  {
    date: '10-02-2026',
    title: 'HIRING OF FLEET TRANSPORT SERVICE FOR STUDENTS AT GC, UNIVERSITY HYDERABAD'
  },
  {
    date: '27-06-2025',
    title: 'HIRING/PROVIDING JANITORIAL SERVICES INCLUDING NECESSARY CLEANING MATERIAL AT GOVERNMENT COLLEGE UNIVERSITY HYDERABAD'
  }
];

const links = [
  'About University', 'Digital Library', 'QEC',
  'History', 'Gallery', 'ORIC',
  'Annual Reports / Newsletter', 'Career', 'HEC Policies',
  'Tenders', 'Sports', 'Downloads'
];

export default function QuickLinks() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 mb-12">
      {/* Tenders */}
      <div className="flex-1">
        <div className="section-title-box">Tender & Notice / NIT / RFQ</div>
        <div className="content-card h-full">
          <div className="space-y-8">
            {tenders.map((tender, i) => (
              <div key={i} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                <h4 className="font-bold text-gcuh-maroon text-sm mb-2">NOTICE INVITING TENDERS</h4>
                <p className="text-xs text-slate-500 mb-2">{tender.date} - {tender.title}</p>
                <a href="#" className="text-gcuh-maroon text-xs font-bold hover:underline">View details...</a>
              </div>
            ))}
            <div className="text-right">
              <a href="#" className="text-gcuh-maroon text-sm font-bold hover:underline">View More...</a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="lg:w-[500px]">
        <div className="section-title-box">Quick Links</div>
        <div className="content-card h-full">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {links.map((link, i) => (
              <a key={i} href="#" className="quick-link-item text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
