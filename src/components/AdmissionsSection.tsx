import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

export default function AdmissionsSection() {
  return (
    <section className="py-20 bg-gcuh-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gcuh-blue rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gcuh-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gcuh-gold/20 text-gcuh-gold rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-gcuh-gold/30">
                <Sparkles className="w-4 h-4" />
                Admissions Open 2026
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Your Future Starts <br />
                <span className="italic text-gcuh-gold">Right Here.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl">
                Join a community of 12,000+ students and embark on a journey of academic excellence and personal growth.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="px-10 py-4 bg-gcuh-gold text-gcuh-blue font-bold rounded-full hover:bg-white transition-all shadow-lg shadow-gold-500/20 active:scale-95 flex items-center gap-2 group">
                  Apply Online Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full font-bold transition-all">
                  Download Prospectus
                </button>
              </div>
            </div>

            <div className="lg:w-[400px] w-full">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <GraduationCap className="text-gcuh-gold" />
                  Important Dates
                </h3>
                <div className="space-y-6">
                  {[
                    { label: 'Application Deadline', date: 'March 15, 2026', color: 'bg-rose-500' },
                    { label: 'Entrance Test', date: 'March 25, 2026', color: 'bg-amber-500' },
                    { label: 'First Merit List', date: 'April 05, 2026', color: 'bg-emerald-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-2 h-10 rounded-full ${item.color}`} />
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                        <p className="text-white font-bold">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
