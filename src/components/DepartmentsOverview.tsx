import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Code, Briefcase, Palette, Globe, BookOpen, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const departments = [
  { 
    id: 'computer-science',
    name: 'Computer Science', 
    icon: Code, 
    color: 'bg-blue-50 text-blue-600',
    careers: ['Software Engineer', 'Data Scientist', 'ML Engineer'],
    description: 'Lead the digital revolution with our cutting-edge CS programs.',
    stats: { faculty: '24', labs: '3', projects: '15+', }
  },
  { 
    id: 'Zoology',
    name: 'Zoology', 
    icon: Microscope, 
    color: 'bg-emerald-50 text-emerald-600',
    careers: ['Research Scientist', 'Lab Analyst', 'Environmentalist'],
    description: 'Zoology is the scientific study of animals, encompassing their structure, behavior, evolution, and interactions with ecosystems.',
    stats: { faculty: '12', labs: '2', projects: '10+', }
  },
  { 
    id: 'business-admin',
    name: 'Business Administration ', 
    icon: Briefcase, 
    color: 'bg-amber-50 text-amber-600',
    careers: ['Business Analyst', 'HR Manager', 'Entrepreneur'],
    description: 'The Bachelor of Business Administration (BBA) is an undergraduate degree that equips students with essential business knowledge and skills, preparing them for various careers in management, finance, marketing, and entrepreneurship.',
    stats: { faculty: '18', labs: '1', projects: '10',  }
  },
  { 
    id: 'Artificial intelligence',
    name: 'Artificial intelligence', 
    icon: Globe, 
    color: 'bg-rose-50 text-rose-600',
    careers: ['AI Researcher', 'ML Engineer', 'AI Ethics and Policy Specialist'],
    description: 'Artificial intelligence (AI) is the simulation of human intelligence by machines, enabling them to perform tasks such as learning, reasoning, problem-solving, and decision-making.',
    stats: { faculty: '7', labs: '4', projects: '12+', }
  },
  { 
    id: 'social-sciences',
    name: 'Social Sciences', 
    icon: Globe, 
    color: 'bg-indigo-50 text-indigo-600',
    careers: ['Social Worker', 'Policy Analyst', 'Diplomat'],
    description: 'Understand human behavior and societal structures.',
    stats: { faculty: '22', labs: '1', projects: '8', pubs: '110+' }
  },
  { 
    id: 'education',
    name: 'Education', 
    icon: BookOpen, 
    color: 'bg-purple-50 text-purple-600',
    careers: ['Educator', 'Curriculum Developer', 'School Admin'],
    description: 'Shape the future by inspiring the next generation.',
    stats: { faculty: '20', labs: '3', projects: '7+', pubs: '60+' }
  },
];

export default function DepartmentsOverview() {
  return (
    <section id="departments" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Our <span className="text-gcuh-maroon italic">Departments</span>
          </h2>
          <p className="text-lg text-slate-600">
            Explore our diverse range of faculties and discover the career path that suits your passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl ${dept.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <dept.icon className="w-7 h-7" />
                </div>
                <Link to={`/departments/${dept.id}`} className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-gcuh-maroon hover:text-white transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
              
              <Link to={`/departments/${dept.id}`}>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-gcuh-maroon transition-colors">{dept.name}</h3>
              </Link>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {dept.description}
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-slate-50 rounded-2xl">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Faculty</p>
                  <p className="text-sm font-bold text-gcuh-maroon">{dept.stats.faculty}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Labs</p>
                  <p className="text-sm font-bold text-gcuh-maroon">{dept.stats.labs}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Projects</p>
                  <p className="text-sm font-bold text-gcuh-maroon">{dept.stats.projects}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pubs</p>
                  <p className="text-sm font-bold text-gcuh-maroon">{dept.stats.pubs}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Career Paths:</p>
                <ul className="space-y-2 list-disc list-inside">
                  {dept.careers.map((career, j) => (
                    <li key={j} className="text-sm text-slate-600 marker:text-gcuh-gold">
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
