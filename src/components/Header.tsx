import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
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
            <Link to="/about" className="nav-link-modern flex items-center gap-1 group-hover:text-gcuh-maroon">
              About <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </Link>
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
          <Link to="/departments" className="nav-link-modern">Departments</Link>
          <Link to="/scholarships" className="nav-link-modern">Scholarships</Link>
          <Link to="/research" className="nav-link-modern">Research</Link>
          <Link to="/contact" className="nav-link-modern">Contact</Link>
          <Link to="/apply" className="px-6 py-2.5 bg-gcuh-maroon text-white font-bold rounded-full hover:bg-gcuh-gold transition-all shadow-lg shadow-maroon-900/20 active:scale-95 whitespace-nowrap ml-4">
            Apply Online
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gcuh-maroon"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <img 
                  src="https://tse2.mm.bing.net/th/id/OIP.eirSUEHZHhrHA4Fhv32gRwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Logo" 
                  className="h-10 w-auto" 
                />
                <span className="font-serif font-bold text-gcuh-maroon">GCUH</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-gcuh-maroon transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-2 flex-grow overflow-y-auto">
              {[
                { label: 'Home', path: '/' },
                { 
                  label: 'About', path: '/about', children: [
                    { label: 'Vision & Mission', path: '/about/vision-mission' },
                    { label: 'History', path: '/about/university' },
                    { label: 'VC Message', path: '/about/vc-message' },
                  ] 
                },
                { label: 'Departments', path: '/departments' },
                { label: 'Scholarships', path: '/scholarships' },
                { label: 'Research', path: '/research' },
                { label: 'Student Corner', path: '/student-corner' },
                { label: 'Complaints', path: '/complaint' },
                { label: 'Contact', path: '/contact' },
                { label: 'Apply Online', path: '/apply' },
              ].map((item) => (
                <div key={item.path}>
                  <Link 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl text-lg font-bold text-slate-700 hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon transition-all group"
                  >
                    {item.label}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>

                  {item.children && (
                    <div className="pl-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link 
                          key={child.path} 
                          to={child.path} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-3 rounded-xl text-base text-slate-600 hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon transition-all group"
                        >
                          {child.label}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
