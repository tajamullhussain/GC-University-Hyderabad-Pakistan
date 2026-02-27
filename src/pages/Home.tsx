import React from 'react';
import HeroSlider from '../components/HeroSlider';
import DashboardStats from '../components/DashboardStats';
import AdmissionsSection from '../components/AdmissionsSection';
import DepartmentsOverview from '../components/DepartmentsOverview';
import NoticeBoard from '../components/NoticeBoard';
import EventTimeline from '../components/EventTimeline';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-gcuh-bg">
      <HeroSlider />
      
      {/* Short Intro Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gcuh-blue/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gcuh-blue/5 text-gcuh-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-gcuh-blue/10">
                <Sparkles className="w-4 h-4" />
                Welcome to GCUH
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                A Century of <span className="text-gcuh-blue italic">Academic Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded in 1917, Government College University Hyderabad has been a beacon of knowledge for over a hundred years. We combine our rich historical legacy with modern innovation to provide a transformative educational experience.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-gcuh-blue text-white font-bold rounded-full hover:bg-gcuh-maroon transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                  Learn Our History
                </button>
                <button className="flex items-center gap-2 font-bold text-gcuh-blue hover:text-gcuh-maroon hover:gap-3 transition-all">
                  Explore Campus <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://startuppakistan.com.pk/wp-content/uploads/2021/03/home-gc-university-hyderabad-1068x600.jpeg" 
                  alt="Campus" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gcuh-blue p-8 rounded-[2rem] shadow-xl hidden md:block border-4 border-white">
                <p className="text-white font-serif italic text-xl max-w-[200px]">
                  "Empowering minds, shaping the future since 1917."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DashboardStats />
      <AdmissionsSection />
      
      {/* Modern Notice Board Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Latest Updates</h2>
              <p className="text-slate-500">Stay informed with the latest news and announcements.</p>
            </div>
            <button className="btn-primary hidden md:block">View All News</button>
          </div>
          <NoticeBoard />
        </div>
      </section>

      <DepartmentsOverview />
      <EventTimeline />

      {/* Career Paths Callout */}
      <section className="py-24 bg-gcuh-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Smart Career Paths</h2>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            We don't just provide degrees; we build futures. Every program at GCUH is designed with clear career outcomes in mind.
          </p>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 inline-block mb-12">
            <p className="text-gcuh-gold font-bold text-lg">Example: BS AI → Data Scientist, ML Engineer</p>
          </div>
          <br />
          <button className="btn-gold px-12 py-4 text-lg">Find Your Career Path</button>
        </div>
      </section>
    </main>
  );
}
