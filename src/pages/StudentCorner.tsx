import React from 'react';
import { FileText, CreditCard, Calendar, ClipboardList, Download, ArrowRight, ChevronDown, HelpCircle, Phone, Mail, Bell } from 'lucide-react';
import { motion } from 'motion/react';

const resources = [
  {
    title: 'Examination Results',
    icon: ClipboardList,
    items: [
      { label: 'Annual Examination 2025', link: '#' },
      { label: 'Semester Results Fall 2024', link: '#' },
      { label: 'Supplementary Results 2024', link: '#' },
    ]
  },
  {
    title: 'Fee Structure',
    icon: CreditCard,
    items: [
      { label: 'Undergraduate Fee Schedule 2025-26', link: '#' },
      { label: 'Postgraduate Fee Schedule 2025-26', link: '#' },
      { label: 'Hostel & Transport Charges', link: '#' },
    ]
  },
  {
    title: 'Date Sheets',
    icon: Calendar,
    items: [
      { label: 'Final Term Exams March 2026', link: '#' },
      { label: 'Mid Term Exams May 2026', link: '#' },
      { label: 'Practical Exam Schedule', link: '#' },
    ]
  },
  {
    title: 'Download Forms',
    icon: Download,
    items: [
      { label: 'Admission Form', link: '#' },
      { label: 'Scholarship Application Form', link: '#' },
      { label: 'Degree Verification Form', link: '#' },
      { label: 'NOC Request Form', link: '#' },
    ]
  }
];

function CollapsibleSection({ resource }: { resource: any }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-gcuh-maroon/5 text-gcuh-maroon flex items-center justify-center group-hover:bg-gcuh-maroon group-hover:text-white transition-all">
            <resource.icon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{resource.title}</h3>
        </div>
        <div className={`p-2 rounded-full bg-slate-50 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-8 pt-2 space-y-3">
          {resource.items.map((item: any, j: number) => (
            <a 
              key={j} 
              href={item.link}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-gcuh-gold/10 hover:text-gcuh-maroon transition-all group/item"
            >
              <span className="text-sm font-medium">{item.label}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StudentCorner() {
  return (
    <div className="min-h-screen bg-gcuh-bg pb-24">
      {/* Hero Section */}
      <section className="bg-gcuh-maroon py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Student Corner</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your one-stop destination for all academic resources, results, and administrative support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -translate-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Resources */}
          <div className="lg:col-span-2 space-y-6">
            {resources.map((resource, i) => (
              <CollapsibleSection key={i} resource={resource} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Support */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="text-gcuh-gold w-6 h-6" /> Need Help?
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Can't find what you're looking for? Contact the student affairs office.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gcuh-maroon shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Call Us</p>
                    <p className="text-sm font-bold text-slate-900">+92 22 1234567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gcuh-maroon shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Email Us</p>
                    <p className="text-sm font-bold text-slate-900">support@gcuh.edu.pk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-gcuh-maroon rounded-[2.5rem] p-8 text-white">
              <Bell className="w-10 h-10 mb-4 text-gcuh-gold" />
              <h3 className="text-xl font-bold mb-4">Important Notice</h3>
              <p className="text-sm text-slate-300 mb-6">
                The deadline for semester registration has been extended to March 15, 2026.
              </p>
              <button className="w-full py-3 bg-gcuh-gold text-gcuh-maroon font-bold rounded-xl hover:bg-white transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
