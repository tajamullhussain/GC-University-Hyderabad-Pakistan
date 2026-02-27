import React from 'react';
import { Calendar, Download, ArrowRight, Bell } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const notices = [
  {
    title: 'Admissions Open for Undergraduate Programs 2026',
    date: 'Feb 25, 2026',
    category: 'Admissions',
    isNew: true
  },
  {
    title: 'Semester Examination Schedule - Spring 2026',
    date: 'Feb 22, 2026',
    category: 'Examination',
    isNew: false
  },
  {
    title: 'Tender Notice for Laboratory Equipment',
    date: 'Feb 20, 2026',
    category: 'Tenders',
    isNew: false
  },
  {
    title: 'Scholarship Opportunities for Deserving Students',
    date: 'Feb 18, 2026',
    category: 'Financial Aid',
    isNew: false
  }
];

export default function NoticeBoard() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Notices Column */}
      <div className="lg:col-span-2 space-y-4">
        {notices.map((notice, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(`/news/${encodeURIComponent(notice.title)}`)}
            className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-gcuh-maroon/20 hover:shadow-xl hover:shadow-gcuh-maroon/5 transition-all cursor-pointer flex gap-6 items-center"
          >
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-slate-50 rounded-2xl group-hover:bg-gcuh-maroon group-hover:text-white transition-all shrink-0">
              <span className="text-xs font-bold uppercase tracking-tighter opacity-60 group-hover:text-white/60">Feb</span>
              <span className="text-2xl font-black leading-none">{notice.date.split(' ')[1].replace(',', '')}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  notice.category === 'Admissions' ? 'bg-emerald-100 text-emerald-700' : 
                  notice.category === 'Examination' ? 'bg-blue-100 text-blue-700' : 
                  'bg-slate-100 text-slate-600'
                }`}>
                  {notice.category}
                </span>
                {notice.isNew && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-rose-600 animate-pulse">
                    <Bell className="w-3 h-3" /> NEW
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-800 group-hover:text-gcuh-maroon transition-colors line-clamp-2">
                {notice.title}
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-slate-300 group-hover:text-gcuh-maroon transition-colors">
              <Download className="w-5 h-5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social / Side Column */}
      <div className="space-y-8">
        <div className="bg-gcuh-maroon rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gcuh-gold animate-ping" />
            Live Updates
          </h3>
          <div className="space-y-6">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <p className="text-xs text-slate-400 mb-2">Twitter @GCUH_Official</p>
              <p className="text-sm italic">"Excited to announce our new research partnership with global tech leaders. Stay tuned for details!"</p>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <p className="text-xs text-slate-400 mb-2">Facebook @GCUHyderabad</p>
              <p className="text-sm italic">"Photos from today's Annual Sports Gala are now live on our gallery page."</p>
            </motion.div>
          </div>
          <button className="w-full mt-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
            Follow Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-gcuh-gold rounded-3xl p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Quick Downloads</h3>
          <div className="space-y-3">
            {['Academic Calendar', 'Prospectus 2026', 'Fee Voucher'].map((item, i) => (
              <button key={i} className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-xl text-left text-sm font-bold flex justify-between items-center transition-all">
                {item}
                <Download className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
