import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Ticket } from 'lucide-react';

export default function EventDetail() {
  const { title } = useParams();
  
  return (
    <div className="min-h-screen bg-gcuh-bg py-24">
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gcuh-maroon font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Timeline
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100">
              <div className="aspect-video">
                <img src="https://picsum.photos/seed/event-detail/1200/800" alt="Event" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Upcoming Event
                  </span>
                </div>
                <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">
                  {decodeURIComponent(title || 'Event Title')}
                </h1>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p className="mb-6">
                    Join us for the {decodeURIComponent(title || 'event')}, one of the most anticipated gatherings at GC University Hyderabad. This event brings together students, faculty, and distinguished guests for a day of celebration and learning.
                  </p>
                  <p className="mb-6">
                    The program includes keynote speeches, interactive workshops, and networking opportunities designed to foster collaboration and innovation within our academic community.
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Agenda</h3>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex gap-4">
                      <span className="font-bold text-gcuh-maroon">09:00 AM</span>
                      <span>Opening Ceremony & Welcome Address</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-gcuh-maroon">11:00 AM</span>
                      <span>Panel Discussion: Future of Education</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-gcuh-maroon">01:00 PM</span>
                      <span>Networking Lunch</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gcuh-blue/5 flex items-center justify-center text-gcuh-blue">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</p>
                    <p className="font-bold text-slate-700">March 10, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gcuh-blue/5 flex items-center justify-center text-gcuh-blue">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</p>
                    <p className="font-bold text-slate-700">09:00 AM - 04:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gcuh-blue/5 flex items-center justify-center text-gcuh-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</p>
                    <p className="font-bold text-slate-700">Main Campus, GCUH</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 btn-primary flex items-center justify-center gap-2">
                <Ticket className="w-5 h-5" /> Register Now
              </button>
            </div>
            
            <div className="bg-gcuh-maroon p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-gcuh-gold" />
                Who can attend?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                This event is open to all current students, alumni, and faculty members of GC University Hyderabad. External guests may attend by prior registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
