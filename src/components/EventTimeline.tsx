import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    title: 'Annual Sports Gala 2026',
    date: 'March 10, 2026',
    time: '09:00 AM',
    location: 'University Ground',
    type: 'Upcoming',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
  },
  {
    title: 'International Research Symposium',
    date: 'March 22, 2026',
    time: '10:30 AM',
    location: 'Main Auditorium',
    type: 'Upcoming',
    image: 'https://images.pexels.com/photos/8540832/pexels-photo-8540832.jpeg'
  },
  {
    title: 'Convocation Ceremony 2025',
    date: 'Dec 15, 2025',
    time: '11:00 AM',
    location: 'Convocation Hall',
    type: 'Past',
    image: 'https://images.pexels.com/photos/7713159/pexels-photo-7713159.jpeg'
  }
];

export default function EventTimeline() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gcuh-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Event <span className="text-gcuh-maroon italic">Timeline</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay connected with our vibrant campus life through our upcoming and past events.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 hidden lg:block" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(`/events/${encodeURIComponent(event.title)}`)}
                className={`flex flex-col lg:flex-row items-center gap-8 cursor-pointer group ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group-hover:shadow-xl transition-all">
                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${
                      event.type === 'Upcoming' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {event.type}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-gcuh-maroon group-hover:underline transition-all">
                      {event.title}
                    </h3>
                    <div className={`flex flex-wrap gap-4 text-sm text-slate-500 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gcuh-gold" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gcuh-gold" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gcuh-gold" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 hidden lg:block">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-gcuh-maroon shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gcuh-maroon animate-pulse" />
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-lg">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
