import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    quote:
      'Vibrant Wellness gave me tools I use every single day. My anxiety has dissolved into a quiet confidence I didn\'t know was possible.',
    name: 'Elena Marsh',
    role: 'Client since 2023',
    image:
      'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote:
      'After years of exhaustion, I finally sleep through the night and wake up with energy. The personalized nutrition plan changed everything.',
    name: 'Marcus Reid',
    role: 'Client since 2022',
    image:
      'https://images.pexels.com/photos/7665704/pexels-photo-7665704.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote:
      'The mindfulness coaching helped me reconnect with myself. I feel calmer, more present, and genuinely happier than I have in a decade.',
    name: 'Aisha Khan',
    role: 'Client since 2024',
    image:
      'https://images.pexels.com/photos/35367077/pexels-photo-35367077.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote:
      'Every practitioner I worked with was deeply attentive. This isn\'t a clinic — it feels like a retreat for your whole being.',
    name: 'Thomas Berg',
    role: 'Client since 2021',
    image:
      'https://images.pexels.com/photos/14566062/pexels-photo-14566062.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
            Testimonials
          </span>
          <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Stories of healing and renewal
          </h2>
        </Reveal>

        <div className="relative mt-14 min-h-[340px] sm:min-h-[300px]">
          {/* Animated quotation mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2"
          >
            <Quote className="h-24 w-24 text-sage" fill="currentColor" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center"
            >
              <div className="mt-12 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-sage"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="mt-6 max-w-3xl text-xl font-light leading-relaxed text-white/90 sm:text-2xl md:text-3xl md:leading-[1.4]">
                "{t.quote}"
              </p>

              <div className="mt-8 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/15"
                />
                <div className="text-left">
                  <p className="text-base font-normal text-white">{t.name}</p>
                  <p className="text-sm font-light text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="glass-card flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-sage' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="glass-card flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
