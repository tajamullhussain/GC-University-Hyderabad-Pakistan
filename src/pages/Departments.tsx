import React from 'react';
import DepartmentsOverview from '../components/DepartmentsOverview';
import { motion } from 'motion/react';

export default function Departments() {
  return (
    <div className="min-h-screen bg-gcuh-bg">
      <div className="bg-gcuh-maroon py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Academic <span className="text-gcuh-gold italic">Departments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Discover our diverse range of faculties and find the perfect program to launch your career.
          </motion.p>
        </div>
      </div>
      
      <div className="py-12">
        <DepartmentsOverview />
      </div>
    </div>
  );
}
