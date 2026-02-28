import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Landmark, HeartHandshake, FileCheck, ArrowRight, ExternalLink } from 'lucide-react';

const scholarships = [
  {
    title: 'HEC Need-Based Scholarship',
    provider: 'Higher Education Commission',
    eligibility: 'Undergraduate students with financial constraints.',
    deadline: 'March 30, 2026',
    amount: 'Full Tuition + Stipend',
    type: 'Need-Based'
  },
  {
    title: 'Sindh Educational Endowment Fund',
    provider: 'Government of Sindh',
    eligibility: 'Domicile of Sindh, minimum 2.5 CGPA.',
    deadline: 'April 15, 2026',
    amount: 'Partial Tuition',
    type: 'Need-Based'
  },
  {
    title: 'GCUH Merit Scholarship',
    provider: 'GC University Hyderabad',
    eligibility: 'Top 5% students in each department.',
    deadline: 'Ongoing',
    amount: '100% Tuition Waiver',
    type: 'Merit-Based'
  },
  {
    title: 'USAID Merit & Need Based',
    provider: 'USAID',
    eligibility: 'Deserving students from remote areas.',
    deadline: 'May 10, 2026',
    amount: 'Full Coverage',
    type: 'External'
  }
];

export default function Scholarships() {
  const [filter, setFilter] = React.useState('All');

  const filteredScholarships = filter === 'All' 
    ? scholarships 
    : scholarships.filter(s => s.type === filter);

  return (
    <div className="min-h-screen bg-gcuh-bg py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-gcuh-maroon mb-6">Scholarships & Financial Aid</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe that financial constraints should never be a barrier to quality education. Explore our various aid programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Need-Based Aid', icon: HeartHandshake, desc: 'Support for students from low-income backgrounds.', type: 'Need-Based' },
            { title: 'Merit Scholarships', icon: GraduationCap, desc: 'Rewarding academic excellence and high achievers.', type: 'Merit-Based' },
            { title: 'External Funding', icon: Landmark, desc: 'Partnerships with HEC and provincial governments.', type: 'External' },
          ].map((type, i) => (
            <div 
              key={i} 
              onClick={() => setFilter(type.type)}
              className={`bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center group cursor-pointer transition-all ${filter === type.type ? 'ring-4 ring-gcuh-gold' : 'hover:bg-gcuh-maroon'}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gcuh-gold/10 text-gcuh-gold flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 group-hover:text-white transition-all ${filter === type.type ? 'bg-gcuh-gold text-white' : ''}`}>
                <type.icon className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-all ${filter === type.type ? 'text-gcuh-maroon' : ''}`}>{type.title}</h3>
              <p className={`text-sm text-slate-500 group-hover:text-slate-300 transition-all ${filter === type.type ? 'text-slate-600' : ''}`}>{type.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Available Opportunities</h2>
            <div className="flex gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100">
              {['All', 'Need-Based', 'Merit-Based', 'External'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${filter === f ? 'bg-gcuh-maroon text-white shadow-lg' : 'text-slate-500 hover:text-gcuh-maroon'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredScholarships.map((s, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-white hover:shadow-xl hover:border-gcuh-maroon/10 transition-all group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-gcuh-maroon/5 text-gcuh-maroon rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {s.provider}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">{s.amount}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{s.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{s.eligibility}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <FileCheck className="w-4 h-4" />
                    Deadline: {s.deadline}
                  </div>
                </div>
                <button className="btn-primary whitespace-nowrap flex items-center gap-2 group-hover:gap-3 transition-all">
                  Apply Now <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
            {filteredScholarships.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                No scholarships found for the selected category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
