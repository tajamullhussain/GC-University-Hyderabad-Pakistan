import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

export default function NewsDetail() {
  const { title } = useParams();
  
  return (
    <div className="min-h-screen bg-gcuh-bg py-24">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gcuh-maroon font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-gcuh-blue/5 text-gcuh-blue rounded-full text-[10px] font-bold uppercase tracking-widest border border-gcuh-blue/10">
              University News
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              Feb 27, 2026
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            {decodeURIComponent(title || 'News Article')}
          </h1>
          
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-slate-100">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <p className="font-bold text-slate-900">GCUH Press Release</p>
              <p className="text-xs text-slate-500">Official Communication Department</p>
            </div>
            <button className="ml-auto p-3 bg-slate-50 rounded-full text-slate-400 hover:text-gcuh-maroon transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Government College University Hyderabad (GCUH) is pleased to announce further details regarding "{decodeURIComponent(title || 'this update')}". This initiative is part of our ongoing commitment to academic excellence and student welfare.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              The university administration has been working tirelessly to ensure that all stakeholders are informed and involved in the decision-making process. We believe that transparency and communication are key to our success as a premier educational institution.
            </p>
            <div className="aspect-video rounded-3xl overflow-hidden my-12">
              <img src="https://picsum.photos/seed/news/1200/800" alt="News" className="w-full h-full object-cover" />
            </div>
            <p className="text-slate-600 leading-relaxed">
              For more information, students and faculty members are encouraged to visit the respective department offices or contact the public relations office during official working hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
