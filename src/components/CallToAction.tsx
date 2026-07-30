import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import Reveal from './Reveal';
import scenes from '../assets/scenes.png'

const CTA_IMAGE =scenes;

export default function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B] px-5 py-32 sm:px-8 sm:py-40 md:px-16 lg:px-20 lg:py-56">
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <img
    src={CTA_IMAGE}
    alt="Sunlight filtering through a serene forest"
    className="
      h-full
      w-full
      object-cover
      object-center
      sm:object-center
      md:object-[center_35%]
      lg:object-center
      xl:object-center
    "
  />
  <div className="absolute inset-0 bg-black/55 md:bg-black/50" />
  <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/95 via-black/10 to-[#0B0B0B]/95" />
</div>

      <motion.div
        className="absolute left-[8%] top-[20%] hidden h-24 w-24 rounded-2xl lg:block"
        style={{ background: 'rgba(168,198,134,0.08)' }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-[30%] hidden h-32 w-32 rounded-3xl lg:block"
        style={{ background: 'rgba(231,220,200,0.06)' }}
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[18%] left-[15%] hidden h-20 w-20 rounded-2xl lg:block"
        style={{ background: 'rgba(255,255,255,0.04)' }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
            Begin Today
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Healing Journey Starts Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            Take the first step toward lasting wellness. Book a consultation and
            discover what your body is truly capable of.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="liquid-glass group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10 sm:px-8">
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:bg-white/5 sm:px-8">
              <Compass className="h-4 w-4" strokeWidth={1.5} />
              Explore Programs
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
