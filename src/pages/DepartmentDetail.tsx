import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Microscope, Users, BookOpen, FlaskConical, ArrowLeft, Mail, Linkedin, Award, Palette, Globe } from 'lucide-react';

const departmentData: Record<string, any> = {
  'computer-science': {
    name: 'Computer Science',
    description: 'The Department of Computer Science at GCUH is a hub of innovation, preparing students for the rapidly evolving tech landscape through rigorous academics and hands-on research.',
    head: 'Dr. Sarah Ahmed',
    stats: [
      { label: 'Faculty Members', value: '24' },
      { label: 'Research Labs', value: '6' },
      { label: 'Ongoing Projects', value: '15' },
      { label: 'Publications', value: '120+' },
    ],
    faculty: [
      { name: 'Dr. Sarah Ahmed', role: 'Head of Department', specialty: 'Artificial Intelligence', image: 'https://picsum.photos/seed/sarah/300/300' },
      { name: 'Prof. Faisal Khan', role: 'Professor', specialty: 'Cybersecurity', image: 'https://picsum.photos/seed/faisal/300/300' },
      { name: 'Dr. Amna Sheikh', role: 'Associate Professor', specialty: 'Data Science', image: 'https://picsum.photos/seed/amna/300/300' },
    ],
    labs: [
      { name: 'AI & Robotics Lab', description: 'Equipped with high-performance computing clusters and robotic kits for advanced research.', icon: FlaskConical },
      { name: 'Network Security Lab', description: 'Focused on ethical hacking, network defense, and cryptographic research.', icon: Microscope },
    ],
    research: [
      { title: 'Quantum Cryptography in IoT', lead: 'Prof. Faisal Khan', status: 'Active' },
      { title: 'Urdu Natural Language Processing', lead: 'Dr. Sarah Ahmed', status: 'Completed' },
    ]
  },
  'natural-sciences': {
    name: 'Natural Sciences',
    description: 'Exploring the fundamental laws of nature, our department fosters a deep understanding of physics, chemistry, and biology through experimental excellence.',
    head: 'Prof. Moazzam Ali',
    stats: [
      { label: 'Faculty Members', value: '32' },
      { label: 'Research Labs', value: '8' },
      { label: 'Ongoing Projects', value: '20' },
      { label: 'Publications', value: '250+' },
    ],
    faculty: [
      { name: 'Prof. Moazzam Ali', role: 'Head of Department', specialty: 'Theoretical Physics', image: 'https://picsum.photos/seed/moazzam/300/300' },
      { name: 'Dr. Zoya Malik', role: 'Associate Professor', specialty: 'Organic Chemistry', image: 'https://picsum.photos/seed/zoya/300/300' },
    ],
    labs: [
      { name: 'Advanced Physics Lab', description: 'Features laser interferometers and particle detection systems.', icon: FlaskConical },
      { name: 'Molecular Biology Lab', description: 'Equipped for DNA sequencing and protein analysis.', icon: Microscope },
    ],
    research: [
      { title: 'Renewable Energy Storage', lead: 'Prof. Moazzam Ali', status: 'Active' },
      { title: 'Local Flora Biodiversity', lead: 'Dr. Zoya Malik', status: 'Active' },
    ]
  },
  'business-admin': {
    name: 'Business Administration',
    description: 'Developing the next generation of global leaders, our business programs combine theoretical knowledge with practical industry insights.',
    head: 'Dr. Kamran Shah',
    stats: [
      { label: 'Faculty Members', value: '18' },
      { label: 'Research Labs', value: '2' },
      { label: 'Ongoing Projects', value: '10' },
      { label: 'Publications', value: '85+' },
    ],
    faculty: [
      { name: 'Dr. Kamran Shah', role: 'Head of Department', specialty: 'Strategic Management', image: 'https://picsum.photos/seed/kamran/300/300' },
      { name: 'Prof. Nadia Ali', role: 'Professor', specialty: 'Financial Analytics', image: 'https://picsum.photos/seed/nadia/300/300' },
    ],
    labs: [
      { name: 'Business Simulation Lab', description: 'Interactive environment for market analysis and trading simulations.', icon: FlaskConical },
    ],
    research: [
      { title: 'E-commerce Trends in Sindh', lead: 'Dr. Kamran Shah', status: 'Active' },
    ]
  },
  'arts-design': {
    name: 'Arts & Design',
    description: 'A creative sanctuary where traditional arts meet digital innovation, empowering students to shape the visual future.',
    head: 'Prof. Hina Rizvi',
    stats: [
      { label: 'Faculty Members', value: '15' },
      { label: 'Research Labs', value: '4' },
      { label: 'Ongoing Projects', value: '12' },
      { label: 'Publications', value: '45+' },
    ],
    faculty: [
      { name: 'Prof. Hina Rizvi', role: 'Head of Department', specialty: 'Fine Arts', image: 'https://picsum.photos/seed/hina/300/300' },
      { name: 'Dr. Omar Farooq', role: 'Associate Professor', specialty: 'Digital Media', image: 'https://picsum.photos/seed/omar/300/300' },
    ],
    labs: [
      { name: 'Digital Arts Studio', description: 'High-end workstations for animation and graphic design.', icon: Palette },
      { name: 'Traditional Sculpture Lab', description: 'Spacious workshop for clay, wood, and metal work.', icon: Microscope },
    ],
    research: [
      { title: 'Traditional Patterns in Modern UI', lead: 'Prof. Hina Rizvi', status: 'Active' },
    ]
  },
  'social-sciences': {
    name: 'Social Sciences',
    description: 'Dedicated to understanding the complexities of human society and behavior through rigorous research and critical analysis.',
    head: 'Dr. Junaid Khan',
    stats: [
      { label: 'Faculty Members', value: '22' },
      { label: 'Research Labs', value: '1' },
      { label: 'Ongoing Projects', value: '8' },
      { label: 'Publications', value: '110+' },
    ],
    faculty: [
      { name: 'Dr. Junaid Khan', role: 'Head of Department', specialty: 'Sociology', image: 'https://picsum.photos/seed/junaid/300/300' },
      { name: 'Prof. Sara Malik', role: 'Professor', specialty: 'Political Science', image: 'https://picsum.photos/seed/sara/300/300' },
    ],
    labs: [
      { name: 'Social Research Unit', description: 'Equipped for qualitative and quantitative data analysis.', icon: Globe },
    ],
    research: [
      { title: 'Urbanization in Hyderabad', lead: 'Dr. Junaid Khan', status: 'Active' },
    ]
  },
  'education': {
    name: 'Education',
    description: 'Inspiring the educators of tomorrow through innovative teaching methodologies and a commitment to inclusive learning.',
    head: 'Prof. Maryam Shah',
    stats: [
      { label: 'Faculty Members', value: '20' },
      { label: 'Research Labs', value: '3' },
      { label: 'Ongoing Projects', value: '7' },
      { label: 'Publications', value: '60+' },
    ],
    faculty: [
      { name: 'Prof. Maryam Shah', role: 'Head of Department', specialty: 'Curriculum Design', image: 'https://picsum.photos/seed/maryam/300/300' },
      { name: 'Dr. Bilal Ahmed', role: 'Associate Professor', specialty: 'Educational Tech', image: 'https://picsum.photos/seed/bilal/300/300' },
    ],
    labs: [
      { name: 'EdTech Innovation Lab', description: 'Testing ground for digital classroom tools and strategies.', icon: BookOpen },
    ],
    research: [
      { title: 'Digital Literacy in Rural Sindh', lead: 'Prof. Maryam Shah', status: 'Active' },
    ]
  }
};

export default function DepartmentDetail() {
  const { id } = useParams();
  const dept = departmentData[id || ''] || departmentData['computer-science'];

  return (
    <div className="min-h-screen bg-gcuh-bg pb-24">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center overflow-hidden bg-gcuh-maroon">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <Link to="/departments" className="inline-flex items-center gap-2 text-gcuh-gold font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Departments
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white"
          >
            Dept. of <span className="text-gcuh-gold italic">{dept.name}</span>
          </motion.h1>
        </div>
      </section>

      {/* Description & Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">About the Department</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {dept.description}
              </p>
            </div>
            <div className="bg-gcuh-maroon/5 p-8 rounded-[2.5rem] border border-gcuh-maroon/10">
              <h3 className="text-lg font-bold text-gcuh-maroon mb-6 flex items-center gap-2">
                <Award className="w-5 h-5" /> Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {dept.stats.map((stat: any, i: number) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-gcuh-maroon">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* Faculty Section */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Users className="text-gcuh-maroon" /> Distinguished Faculty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dept.faculty.map((member: any, i: number) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-3">
                        <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@gcuh.edu.pk`} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gcuh-gold transition-all">
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gcuh-gold transition-all">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-bold text-gcuh-gold uppercase tracking-widest mb-2">{member.role}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-gcuh-maroon transition-colors">{member.name}</h3>
                    <p className="text-sm text-slate-500">{member.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Labs Section */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
              <FlaskConical className="text-gcuh-maroon" /> Research Facilities & Labs
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {dept.labs.map((lab: any, i: number) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gcuh-gold/10 text-gcuh-gold flex items-center justify-center shrink-0">
                    <lab.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{lab.name}</h3>
                    <p className="text-slate-500 leading-relaxed">{lab.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Research Highlights */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-gcuh-maroon w-5 h-5" /> Research Highlights
            </h3>
            <div className="space-y-6">
              {dept.research.map((res: any, i: number) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${res.status === 'Active' ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {res.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800 group-hover:text-gcuh-maroon transition-colors mb-1">{res.title}</h4>
                  <p className="text-xs text-slate-500">Lead: {res.lead}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-50 hover:bg-gcuh-maroon hover:text-white rounded-xl text-sm font-bold transition-all">
              View All Publications
            </button>
          </div>

          {/* Department Awards */}
          <div className="bg-gcuh-gold rounded-[2.5rem] p-8 text-white">
            <Award className="w-10 h-10 mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-4">Departmental Awards</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-gcuh-maroon">2025</span>
                <span>Best Research Department Award</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gcuh-maroon">2024</span>
                <span>Excellence in Innovation Trophy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
