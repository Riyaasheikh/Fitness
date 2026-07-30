import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Brain, Salad } from 'lucide-react';
import Reveal from './Reveal';
import img from '../assets/relax.png'

const ABOUT_IMAGE =img;

const FEATURES = [
  {
    icon: Leaf,
    title: 'Natural Healing',
    desc: 'Plant-based therapies that work with your body, not against it.',
  },
  {
    icon: Brain,
    title: 'Mindfulness',
    desc: 'Daily practices to calm the mind and reduce chronic stress.',
  },
  {
    icon: Salad,
    title: 'Personalized Nutrition',
    desc: 'Nutrition plans tailored to your unique biology and lifestyle.',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="approach"
      ref={ref}
      className="relative w-full bg-[#0B0B0B] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={ABOUT_IMAGE}
            alt="A woman meditating peacefully at sunrise"
            style={{ y: imageY }}
            className="h-[400px] w-full scale-110 object-cover sm:h-[500px] lg:h-[640px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        <div className="flex flex-col">
          <Reveal>
            <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
              Our Philosophy
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-light leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              We believe the body already knows how to heal.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/65 md:text-lg">
              True wellness is not found in a single treatment — it's a harmony
              of natural healing, nourishing nutrition, stress reduction, and
              whole-body care. We guide you back to balance, honoring the
              intelligence already living within you.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.3 + i * 0.1}>
                <div className="glass-card group h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                  <f.icon className="h-7 w-7 text-sage" strokeWidth={1.25} />
                  <h3 className="mt-4 text-base font-normal text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
