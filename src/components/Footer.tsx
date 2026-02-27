import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gcuh-maroon via-gcuh-gold to-gcuh-maroon" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gcuh-maroon/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <img src="https://tse2.mm.bing.net/th/id/OIP.eirSUEHZHhrHA4Fhv32gRwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo" className="h-10 w-auto" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl leading-none">GC UNIVERSITY</h2>
                <p className="text-gcuh-gold font-bold text-[10px] tracking-[0.2em]">HYDERABAD</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering minds since 1917. A premier institution dedicated to academic excellence, research, and the holistic development of our students.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gcuh-gold hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gcuh-gold" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'About University', path: '/about/university' },
                { name: 'Academics', path: '/academics' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Research', path: '/research' },
                { name: 'Campus Life', path: '/campus-life' },
                { name: 'Student Corner', path: '/student-corner' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-400 hover:text-gcuh-gold transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gcuh-gold" />
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Merit List', path: '/merit-list' },
                { name: 'Examination Results', path: '/results' },
                { name: 'Fee Structure', path: '/fee' },
                { name: 'Download Forms', path: '/downloads' },
                { name: 'HEC Policies', path: '#' },
                { name: 'Digital Library', path: '#' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-400 hover:text-gcuh-gold transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gcuh-gold" />
                Contact Us
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gcuh-gold" />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Kali Mori, Hyderabad,<br />Sindh, Pakistan
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gcuh-gold" />
                  </div>
                  <p className="text-slate-400 text-sm">+92-22-2111856</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gcuh-gold" />
                  </div>
                  <p className="text-slate-400 text-sm">info@gcuh.edu.pk</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-40 bg-slate-800 relative group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8828639/pexels-photo-8828639.jpeg')] bg-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-xs font-bold flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-gcuh-gold" />
                  View Campus Map
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © 2026 GC University Hyderabad. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <img src="https://tse2.mm.bing.net/th/id/OIP.7xuhmNTWVzRiBsjuNf4v9wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="HEC" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://tse2.mm.bing.net/th/id/OIP.eirSUEHZHhrHA4Fhv32gRwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Govt" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
