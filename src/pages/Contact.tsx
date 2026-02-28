import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gcuh-bg py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gcuh-maroon mb-6">Contact <span className="text-gcuh-gold italic">Us</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the following channels or send us a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gcuh-maroon/5 text-gcuh-maroon flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-slate-500 text-sm mb-2">For general inquiries and support</p>
                <a href="mailto:info@gcuh.edu.pk" className="text-gcuh-maroon font-bold hover:underline">info@gcuh.edu.pk</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gcuh-gold/5 text-gcuh-gold flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-500 text-sm mb-2">Mon-Fri from 9am to 5pm</p>
                <p className="text-gcuh-maroon font-bold">+92-22-2111856</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gcuh-blue/5 text-gcuh-blue flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                <p className="text-slate-500 text-sm mb-2">Main Campus Location</p>
                <p className="text-gcuh-maroon font-bold">Kali Mori, Hyderabad, Sindh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon outline-none transition-all" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows={5} className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-gcuh-maroon outline-none transition-all resize-none" placeholder="Your message here..." />
                </div>
                <button type="submit" className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-[3rem] overflow-hidden h-[400px] bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
            <Globe className="w-12 h-12 opacity-20" />
            <p className="font-bold">Interactive Campus Map Integration</p>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.123456789!2d68.36!3d25.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzI0LjAiTiA2OMKwMjEnMzYuMCJF!5e0!3m2!1sen!2spk!4v1234567890" 
            className="w-full h-full border-0 grayscale opacity-50 contrast-125"
            allowFullScreen 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
