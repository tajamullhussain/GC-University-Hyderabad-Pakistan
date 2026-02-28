import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, AlertTriangle } from 'lucide-react';

export default function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenDemoPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenDemoPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Accent Bar */}
            <div className="h-2 bg-gcuh-maroon w-full" />

            <div className="p-8 md:p-10">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-gcuh-maroon transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gcuh-maroon/10 rounded-2xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-gcuh-maroon" />
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Demo Project <span className="text-gcuh-maroon italic">Notice</span>
                </h2>

                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    This website is created as a <span className="font-bold text-slate-900">demo project</span>. 
                    It is not the official or real website of the university.
                  </p>
                  
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-sm text-slate-500 italic">
                      "This website is developed only for educational purposes."
                    </p>
                    <p className="text-sm text-slate-700 font-semibold mt-3">
                      Developed by Tajamul Hussain | BS Artificial Intelligence 2024
                    </p>
                  </div>
                </div>

                <button
                  onClick={closePopup}
                  className="mt-8 w-full py-4 bg-gcuh-maroon text-white font-bold rounded-2xl hover:bg-slate-900 transition-all shadow-lg shadow-maroon-900/20 active:scale-95"
                >
                  I Understand
                </button>
              </div>
            </div>

            {/* Footer Info */}
            <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex items-center justify-center gap-2">
              <Info className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Educational Portfolio Project
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
