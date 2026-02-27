import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Search, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      {/* Top Bar */}
      <div className="bg-gcuh-maroon text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[11px] font-bold tracking-wider">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-gcuh-gold" />
              <span>+92-22-2111856</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-gcuh-gold" />
              <span>info@gcuh.edu.pk</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to="/student-corner" className="hover:text-gcuh-gold transition-colors">STUDENT CORNER</Link>
            <Link to="/complaint" className="hover:text-gcuh-gold transition-colors">COMPLAINTS</Link>
            <Link to="#" className="hover:text-gcuh-gold transition-colors">ALUMNI</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://tse2.mm.bing.net/th/id/OIP.eirSUEHZHhrHA4Fhv32gRwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="GCUH Logo" 
            className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/gcuh/100/100';
            }}
          />
          <div>
            <h1 className="text-gcuh-maroon font-extrabold text-lg md:text-xl leading-none">GC UNIVERSITY</h1>
            <p className="text-gcuh-gold font-bold text-[10px] md:text-xs tracking-[0.2em]">HYDERABAD</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link to="/" className="nav-link-modern">Home</Link>
          <div className="relative group">
            <button className="nav-link-modern flex items-center gap-1 group-hover:text-gcuh-maroon">
              About <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-slate-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-4 group-hover:translate-y-0 z-50">
              <div className="px-4 py-2 mb-2 border-b border-slate-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">University Info</p>
              </div>
              <Link to="/about/vision-mission" className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon transition-all group/item">
                Vision & Mission <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
              </Link>
              <Link to="/about/university" className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon transition-all group/item">
                History <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
              </Link>
              <Link to="/about/vc-message" className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon transition-all group/item">
                VC Message <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>
          <a href="/#departments" className="nav-link-modern">Departments</a>
          <Link to="/scholarships" className="nav-link-modern">Scholarships</Link>
          <Link to="/research" className="nav-link-modern">Research</Link>
          <Link to="/contact" className="nav-link-modern">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:text-gcuh-maroon transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/apply" className="px-6 py-2.5 bg-gcuh-maroon text-white font-bold rounded-full hover:bg-gcuh-gold transition-all shadow-lg shadow-maroon-900/20 active:scale-95 whitespace-nowrap hidden sm:flex">
            Apply Online
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gcuh-maroon"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Floating Apply Button (Mobile/Desktop) */}
      <Link 
        to="/apply" 
        className="fixed bottom-8 right-8 z-[60] bg-gcuh-gold text-gcuh-maroon p-4 rounded-full shadow-2xl border-4 border-white hover:scale-110 active:scale-95 transition-all group flex items-center gap-2"
      >
        <div className="w-10 h-10 bg-gcuh-maroon text-white rounded-full flex items-center justify-center">
          <ArrowRight className="w-5 h-5" />
        </div>
        <span className="font-bold pr-2 hidden group-hover:block transition-all">Apply Now</span>
      </Link>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-24 space-y-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Home</Link>
          <Link to="/about/university" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">About</Link>
          <Link to="/departments" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Departments</Link>
          <Link to="/scholarships" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Scholarships</Link>
          <Link to="/research" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Research</Link>
          <Link to="/student-corner" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Student Corner</Link>
          <Link to="/complaint" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Complaints</Link>
          
          <div className="pt-6 border-t border-slate-100">
            <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)} className="w-full btn-primary flex items-center justify-center gap-2">
              Apply Online <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
