import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import imag1 from '../assets/mind.avif';
import image2 from'../assets/nature.avif';
import image3 from'../assets/movement.avif';
const POSTS = [
  {
    category: 'Mindfulness',
    title: 'The Science of Stillness: How Meditation Reshapes the Brain',
    excerpt:
      'New research reveals how just eight minutes of daily meditation can physically rewire the neural pathways that govern stress.',
    image:imag1
  },
  {
    category: 'Nutrition',
    title: 'Eating With the Seasons: A Guide to Functional Nutrition',
    excerpt:
      'Aligning your meals with nature\'s rhythms supports digestion, energy, and immunity through every part of the year.',
    image:image2
  },
  {
    category: 'Movement',
    title: 'Morning Yoga: Five Poses to Awaken Your Body Gently',
    excerpt:image3
  },
];

export default function WellnessBlog() {
  return (
    <section className="relative w-full bg-[#0B0B0B] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
              Wellness Journal
            </span>
            <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl md:text-5xl">
              Insights for your journey
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <motion.article
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white/[0.03]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="glass-card absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-light text-white/80">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-normal leading-snug text-white sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/55">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-sage">
                    Read Article
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
