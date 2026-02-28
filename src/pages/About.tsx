import React from 'react';
import { motion } from 'motion/react';
import { History, Target, MessageSquare, ShieldCheck, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gcuh-bg">
      {/* Hero */}
      <div className="bg-gcuh-maroon py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            About <span className="text-gcuh-gold italic">GCUH</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Goverment College University Hyderabad: A legacy of excellence, a future of innovation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Our History', icon: History, path: '/about/university', desc: 'Established in 1917, we have over a century of academic heritage.' },
            { title: 'Vision & Mission', icon: Target, path: '/about/vision-mission', desc: 'Our commitment to shaping the leaders of tomorrow.' },
            { title: 'VC Message', icon: MessageSquare, path: '/about/vc-message', desc: 'A word from our Vice Chancellor, Prof. Dr. Moazzam Ali Khan.' },
            { title: 'Affiliations', icon: ShieldCheck, path: '/about/affiliations', desc: 'Recognized and accredited by leading educational bodies.' },
            { title: 'Statutory Bodies', icon: Users, path: '/about/bodies', desc: 'The governance structure that ensures our excellence.' },
            { title: 'Alumni Network', icon: Award, path: '/about/alumni', desc: 'Connecting our successful graduates across the globe.' },
          ].map((item, i) => (
            <Link 
              key={i} 
              to={item.path}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gcuh-maroon/5 text-gcuh-maroon flex items-center justify-center mb-6 group-hover:bg-gcuh-maroon group-hover:text-white transition-all">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
              <div className="flex items-center gap-2 text-gcuh-maroon font-bold group-hover:gap-3 transition-all">
                Read More <History className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
