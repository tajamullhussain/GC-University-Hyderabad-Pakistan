import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    date: 'Oct 24, 2025',
    category: 'Research',
    title: 'Breakthrough in Quantum Computing Research at Aetheria Lab',
    image: 'https://images.pexels.com/photos/9574456/pexels-photo-9574456.jpeg',
  },
  {
    date: 'Oct 20, 2025',
    category: 'Campus Life',
    title: 'Annual Fall Festival Welcomes Record Number of Students',
    image: 'https://images.pexels.com/photos/5905470/pexels-photo-5905470.jpeg',
  },
  {
    date: 'Oct 15, 2025',
    category: 'Academics',
    title: 'New Interdisciplinary Program in Sustainability Launched',
    image: 'https://images.pexels.com/photos/30739687/pexels-photo-30739687.jpeg',
  },
];

export default function News() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-univ-primary mb-4">Latest News & Events</h2>
            <p className="text-slate-600">Stay updated with the latest happenings, research breakthroughs, and campus events at Aetheria University.</p>
          </div>
          <button className="flex items-center gap-2 text-univ-primary font-bold hover:text-univ-secondary transition-colors">
            View All News
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-univ-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
              <h3 className="text-xl font-serif font-bold text-univ-primary group-hover:text-univ-secondary transition-colors leading-tight">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
