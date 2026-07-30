import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import image3 from '../assets/massage.png'
import yoga from '../assets/yoga.png'
import wellbeing from '../assets/wellbeing.avif'
import lemonade from '../assets/lemonade.avif'
import stress from '../assets/stress.avif'
import herbs from '../assets/herbal.avif'

const PROGRAMS = [
  {
    title: 'Functional Nutrition',
    tag: 'Nutrition',
    image:wellbeing,
  },
  {
    title: 'Yoga & Breathwork',
    tag: 'Movement',
    image:yoga,
  },
  {
    title: 'Stress Recovery',
    tag: 'Mind',
    image:stress,
  },
  {
    title: 'Therapeutic Massage',
    tag: 'Body',
    image:image3,
  },
  {
    title: 'Herbal Medicine',
    tag: 'Natural',
    image:herbs,
  },
  {
    title: 'Detox Programs',
    tag: 'Cleanse',
    image:lemonade,
  },
];

export default function WellnessPrograms() {
  return (
    <section
      id="programs"
      className="relative w-full bg-[#0B0B0B] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
              Wellness Programs
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-light text-white sm:text-4xl md:text-5xl">
              Programs designed around your whole being
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-white/55">
            Each program blends ancient wisdom with modern science to restore
            balance at every level — body, mind, and spirit.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <motion.article
                className="group relative h-[420px] overflow-hidden rounded-3xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Hover glass overlay */}
                <div className="glass-card absolute inset-x-4 bottom-4 rounded-2xl p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm font-light leading-relaxed text-white/75">
                    Discover a personalized approach to {p.title.toLowerCase()}.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-sage">
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Always-visible label */}
                <div className="absolute left-5 top-5">
                  <span className="glass-card rounded-full px-3 py-1 text-xs font-light text-white/80">
                    {p.tag}
                  </span>
                </div>

                <h3 className="absolute bottom-5 left-5 text-2xl font-light text-white transition-transform duration-500 group-hover:translate-y-2 group-hover:opacity-0">
                  {p.title}
                </h3>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
