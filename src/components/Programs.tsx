import { motion } from 'motion/react';
import { BookOpen, Microscope, Briefcase, Palette, Code, Globe } from 'lucide-react';

const programs = [
  {
    title: 'Arts & Humanities',
    icon: Palette,
    description: 'Explore the depths of human expression and culture through literature, history, and the arts.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Science & Research',
    icon: Microscope,
    description: 'Push the boundaries of knowledge in our state-of-the-art laboratories and research centers.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Business & Economics',
    icon: Briefcase,
    description: 'Develop the skills to lead in a global economy with our top-ranked business programs.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Engineering & Tech',
    icon: Code,
    description: 'Innovate and build the future with our cutting-edge engineering and computer science courses.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Social Sciences',
    icon: Globe,
    description: 'Understand society and human behavior to create positive change in the world.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Education',
    icon: BookOpen,
    description: 'Shape the next generation with our comprehensive teacher training and education programs.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-univ-primary mb-6">
            Academic Excellence Across <span className="italic text-univ-secondary">All Disciplines</span>
          </h2>
          <p className="text-lg text-slate-600">
            With over 150 undergraduate and graduate programs, Aetheria University offers a diverse range of study options tailored to your passions and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6`}>
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-univ-primary mb-4">{program.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {program.description}
              </p>
              <a href="#" className="text-univ-primary font-semibold flex items-center gap-2 hover:text-univ-secondary transition-colors">
                Learn More
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
