import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/122/1920/1080"
          alt="University Campus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-univ-primary/90 via-univ-primary/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-univ-secondary/20 text-univ-accent rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border border-univ-secondary/30">
              Est. 1924 • Excellence in Education
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Empowering the <br />
              <span className="italic text-univ-accent">Leaders of Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
              Join a global community of scholars and innovators at Aetheria University. 
              Discover your potential through world-class research and transformative learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-univ-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-univ-secondary/90 transition-all group">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                <Play className="w-5 h-5 fill-current" />
                Watch Campus Tour
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8">
            {[
              { label: 'Global Ranking', value: '#12' },
              { label: 'Student-Faculty Ratio', value: '8:1' },
              { label: 'Research Funding', value: '$450M+' },
              { label: 'Alumni Network', value: '150K+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-serif font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
