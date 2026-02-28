import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Send, Search, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export default function Complaint() {
  const [trackingId, setTrackingId] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingId('GCUH-' + Math.random().toString(36).substr(2, 9).toUpperCase());
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gcuh-bg py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Section */}
          <div>
            <div className="mb-12">
              <h1 className="text-5xl font-serif font-bold text-gcuh-maroon mb-6">Complaint & Suggestion</h1>
              <p className="text-lg text-slate-600">
                Your feedback helps us improve. Submit your concerns or suggestions through our transparent tracking system or directly email us at <a href="mailto:info@gcuh.edu.pk" className="text-gcuh-maroon font-bold hover:underline">info@gcuh.edu.pk</a>.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon focus:ring-0 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Student ID (Optional)</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon focus:ring-0 transition-all outline-none" placeholder="2026-CS-001" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</label>
                  <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon focus:ring-0 transition-all outline-none appearance-none">
                    <option>Academic Issue</option>
                    <option>Administrative Concern</option>
                    <option>Facility Maintenance</option>
                    <option>IT Support</option>
                    <option>General Suggestion</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows={4} required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon focus:ring-0 transition-all outline-none resize-none" placeholder="Describe your concern in detail..." />
                </div>
                <button type="submit" className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Submit Complaint
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Submission Successful</h2>
                <p className="text-slate-500 mb-8">Your complaint has been recorded and sent to <span className="font-bold text-gcuh-maroon">info@gcuh.edu.pk</span>. Please save your tracking ID for future reference.</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200 mb-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Tracking ID</p>
                  <p className="text-3xl font-mono font-bold text-gcuh-maroon tracking-wider">{trackingId}</p>
                </div>
                <button onClick={() => setSubmitted(false)} className="text-gcuh-maroon font-bold hover:underline">
                  Submit Another Complaint
                </button>
              </motion.div>
            )}
          </div>

          {/* Tracking Section */}
          <div className="lg:pt-24">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gcuh-maroon/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                <Search className="text-gcuh-gold" />
                Track Status
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Enter your tracking ID to check the real-time status of your submitted complaint or suggestion.
              </p>
              <div className="space-y-4 mb-12">
                <input type="text" className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-gcuh-gold transition-all outline-none text-white font-mono" placeholder="GCUH-XXXXXXXXX" />
                <button className="w-full btn-gold py-4">Check Status</button>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">How it works</h3>
                {[
                  { icon: MessageSquare, title: 'Submission', desc: 'Your complaint is assigned a unique ID.' },
                  { icon: Clock, title: 'Review', desc: 'Relevant department reviews the concern.' },
                  { icon: ShieldCheck, title: 'Resolution', desc: 'Action is taken and status is updated.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-gcuh-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{step.title}</h4>
                      <p className="text-xs text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
