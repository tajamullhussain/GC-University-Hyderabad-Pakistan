import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Award, BookOpen, Users, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Session hijacking',
    lead: 'Siraj Mahmood',
    category: 'Computer Science',
    status: 'Ongoing',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFvd4d1B9aM4w/profile-displayphoto-scale_200_200/B4DZvGGiaCJYAY-/0/1768555162696?e=1773878400&v=beta&t=gjgPzsDsHoOWW6L5-_BcWkV2hhfSpz9Cr8Bt6xa4MGQ'
  },
  {
    title: 'Code Rush Arena',
    lead: 'Tajamul Hussain',
    category: 'Artificial intelligence',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1768316784536-46f1609e5ec5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Rightinterns',
    lead: 'Mahmood Ali',
    category: 'Computer Science',
    status: 'Complated',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGO2MTf_8NUUA/profile-displayphoto-shrink_200_200/B4DZeD0s7gHkAc-/0/1750263320923?e=2147483647&v=beta&t=CwO3nPpCP_7yW_yzuizjXXrN1jNaA99H3sTOd_S66uY'
  }
];

export default function ResearchHub() {
  return (
    <div className="min-h-screen bg-gcuh-bg py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-gcuh-maroon mb-6">Research & Innovation Hub</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing the groundbreaking work of our students and faculty in shaping a better tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Publications', value: '850+', icon: BookOpen },
            { label: 'Patents Filed', value: '12', icon: Rocket },
            { label: 'Research Grants', value: '$2.5M', icon: Award },
            { label: 'Active Researchers', value: '150+', icon: Users },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <stat.icon className="w-8 h-8 text-gcuh-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group"
            >
              <div className="aspect-video relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-gcuh-maroon uppercase">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-gcuh-maroon transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-gcuh-maroon transition-colors" />
                </div>
                <p className="text-sm text-slate-500 mb-6">Lead: {project.lead}</p>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.status === 'Ongoing' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{project.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
