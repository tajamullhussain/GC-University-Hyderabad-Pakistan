import React from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    image: 'https://gcuh.edu.pk/images/Prof-Dr-Moazzam-Ali-Khan.jpg',
    title: 'Excellence in Higher Education',
    subtitle: 'PROF. DR. MOAZZAM ALI KHAN',
    role: 'Vice Chancellor',
    university: 'GC University Hyderabad'
  },
  {
    image: 'https://i.dawn.com/primary/2016/09/57edaa5d42f08.jpg',
  },
  {
    image: 'https://i.ytimg.com/vi/nJZJ8O6FLPo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gOCgzMA8=&rs=AOn4CLDZ2x0xe9dwNZU6nksicRP36xxARA',
  },
  {
    image: 'https://gcuh.edu.pk/images/library/5.jpg',
  },
  {
    image: 'https://gcuh.edu.pk/images/library/5.jpg',
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = React.useState(0);
  const [showVideo, setShowVideo] = React.useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[600px] md:h-[750px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[current].image} 
            alt="Slide" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://picsum.photos/seed/slide${current}/1920/1080`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gcuh-blue/80 via-gcuh-blue/40 to-transparent flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/20 backdrop-blur-sm">
                    {slides[current].university}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-4">
                    {slides[current].title}
                  </h2>
                  <div className="mb-10">
                    <p className="text-2xl text-slate-200 font-medium">{slides[current].subtitle}</p>
                    <p className="text-lg text-gcuh-gold font-bold">{slides[current].role}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-gcuh-gold text-gcuh-blue font-bold rounded-full hover:bg-white transition-all shadow-lg shadow-gold-500/20 active:scale-95 flex items-center justify-center gap-2 group">
                      Explore Programs
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Watch Campus Tour
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-10">
        <button onClick={prev} className="text-white/50 hover:text-white transition-colors">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${current === i ? 'bg-gcuh-gold w-12' : 'bg-white/30 w-6'}`}
            />
          ))}
        </div>
        <button onClick={next} className="text-white/50 hover:text-white transition-colors">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <Play className="w-20 h-20 mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-2">Campus Tour Video</h3>
                <p className="text-slate-400">Video player would be embedded here</p>
                <button 
                  onClick={() => setShowVideo(false)}
                  className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-colors"
                >
                  Close Player
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
