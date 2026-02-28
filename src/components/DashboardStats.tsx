import React from 'react';
import { Users, BookOpen, Rocket, Calendar, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Total Students', value: '12,450+', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Departments', value: '45+', icon: BookOpen, iconColor: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Research Projects', value: '120+', icon: Rocket, iconColor: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Upcoming Events', value: '15+', icon: Calendar, iconColor: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function DashboardStats() {
  return (
    <section className="py-24 bg-gcuh-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              <Activity className="w-3 h-3 animate-pulse" />
              Live University Dashboard
            </div>
            <h2 className="text-4xl font-serif font-bold text-slate-900">University at a <span className="text-gcuh-maroon italic">Glance</span></h2>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Sessions</p>
              <p className="text-xl font-bold text-gcuh-maroon">1,204</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Status</p>
              <p className="text-xl font-bold text-emerald-600">Optimal</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform" />
              
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 relative z-10`}>
                <stat.icon className={`w-7 h-7 ${stat.iconColor || stat.color}`} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
