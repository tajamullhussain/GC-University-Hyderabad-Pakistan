import React from 'react';

const bodies = [
  {
    name: 'Senate',
    text: 'The Senate is one of the statutory bodies established by the GCUH Act 2018. It is responsible for overseeing academic matters such as curriculum development, student admissions, and degree programs. The Senate also approves policies related to academic matters. The GCUH has a very active Senate body that regularly meets and guides the University on strategic lines and oversees the governance of the institution.'
  },
  {
    name: 'Syndicate',
    text: 'The Syndicate is responsible for overall governance of Government College University Hyderabad. It approves policies related to administrative matters such as human resources, infrastructure development, and student affairs. The GCUH has a very dynamic and vibrant Syndicate that regularly meets and discusses the progress, policies and practices of the university and provides guidance as well as approvals on matters of finance, administration, academics and overall operations.'
  },
  {
    name: 'Academic Council',
    text: 'The Academic Council is responsible for overseeing academic matters at Government College University Hyderabad. It approves new degree programs, reviews existing programs, and ensures that academic standards are maintained. The Academic Council at GCUH has been constituted, notified and functioning as per the GCUH Act 2018.'
  },
  {
    name: 'Selection Board',
    text: 'The Selection Board is responsible for overseeing the recruitment and selection process at the GCUH. The Selection Board scrutinizes the profiles of applicants for appointment on various positions of the varsity, reviews cases of promotion and appointment of eminently qualified persons as a recommendatory forum for the University Syndicate. The Selection Board at GCUH has been constituted, notified and functioning as per the GCUH Act 2018.'
  },
  {
    name: 'Finance and Planning Committee',
    text: 'The Finance and Planning Committee (FPC) is responsible for financial management at Government College University Hyderabad. It prepares the annual budget, monitors expenditures, and ensures that financial policies are followed. The FPC at GCUH has been constituted, notified and functioning as per the GCUH Act 2018.'
  },
  {
    name: 'Board of Studies & Faculties',
    text: 'The Board of Studies is another important statutory body established by the GCUH Act 2018. It is responsible for overseeing academic programs offered by Government College University Hyderabad. The Board of Studies approves new academic programs, reviews existing programs, and ensures that academic standards are maintained. The Board of Studies at GCUH has been constituted, notified and functioning as per the GCUH Act 2018. With the progressive expansion of the universities and launch of new programs and faculties.'
  },
  {
    name: 'Advanced Studies & Research Board',
    text: 'The Advanced Studies & Research Board is responsible for advising the authorities on all matters connected with Advanced Studies and Research in the University. It is also mandated to consider instituting various research degrees at the varsity and finalized research supervisors and panels for various studies as well as for the students undertaking research at the highest level. GCUH has notified ASRB with the approval of the statutory body of the University.'
  }
];

export default function Bodies() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="section-title-box">GCUH Bodies</div>
      <div className="content-card mt-4 space-y-12">
        {bodies.map((body, i) => (
          <div key={i} className="text-center">
            <h3 className="font-bold text-gcuh-maroon mb-2">{body.name}</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-4xl mx-auto">
              {body.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
