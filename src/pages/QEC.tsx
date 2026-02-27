import React from 'react';

const tabs = [
  'Introduction', 'Contact Information', 'Events', 'Gallery', 'Our Team', 'Quality Policy', 'Activity Calandar'
];

export default function QEC() {
  const [active, setActive] = React.useState('Introduction');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="section-title-box">Quality Enhancement Cell</div>
      <div className="content-card mt-4">
        <div className="flex flex-wrap justify-center gap-6 mb-8 border-b pb-4">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActive(tab)}
              className={`font-medium text-sm transition-colors ${active === tab ? 'text-gcuh-maroon border-b-2 border-gcuh-maroon' : 'text-slate-400 hover:text-gcuh-maroon'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-gcuh-maroon text-white px-4 py-1 rounded-t-lg inline-block font-bold text-sm mb-4">
          {active}
        </div>

        <div className="border border-slate-200 rounded-lg p-8 bg-slate-50">
          {active === 'Introduction' ? (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold mb-2">Introduction:</h4>
                <p>
                  The Quality Enhancement Cell (QEC) at Government College (GC) University aims to elevate a culture of sustainable mechanism of quality assurance at GC University Hyderabad through stake holder's engagement, enduring self-evaluation and ongoing development. The QEC's operations orbit around the quality of teaching, learning, research and management under the umbrella of HEC criterion.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Vision:</h4>
                <p>
                  To nurture the core values of academic and research excellence in order to evolve GC University Hyderabad into an organization that meets significant national and international quality standards..
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Mission:</h4>
                <p>
                  The Quality Enhancement Cell is committed to foster a sustainable quality assurance mechanism to support the GC University Hyderabad through stakeholder engagement for ongoing process of self-evaluation, monitoring and striving to achieve the highest level of academic and research excellence at national and international level.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Objectives:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Implementation of the HEC assessment procedures to ensure quality standards for the promotion of academic and research excellence.</li>
                  <li>To develop tangible feedback mechanism and carrying out multidimensional analysis of each academic and research programs to ensure the quality assurance for further improvements in policy standards.</li>
                  <li>To Act as a co-ordination office between University and national and international organizations for capacity building and training programs.</li>
                  <li>To facilitate academic departments to Adopt appropriate standards to get accreditation with relevant accreditation councils.</li>
                  <li>Promoting the confidence among society by attaining top ranking among national and international HEIs.</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-400 py-12">
              Content for {active} would go here...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
