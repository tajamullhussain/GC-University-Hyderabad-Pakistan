import React from 'react';
import { GraduationCap, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-univ-primary p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-serif font-bold text-univ-primary tracking-tight">
              AETHERIA <span className="text-univ-secondary">UNIVERSITY</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Academics</a>
            <a href="#" className="nav-link">Admissions</a>
            <a href="#" className="nav-link">Research</a>
            <a href="#" className="nav-link">Campus Life</a>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button className="bg-univ-primary text-white px-6 py-2 rounded-full font-medium hover:bg-univ-primary/90 transition-all">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-univ-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">About</a>
              <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Academics</a>
              <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Admissions</a>
              <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Research</a>
              <a href="#" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Campus Life</a>
              <div className="pt-4">
                <button className="w-full bg-univ-primary text-white px-6 py-3 rounded-xl font-medium">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
