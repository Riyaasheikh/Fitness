import { motion } from 'framer-motion';
import { Search, Microscope, Sparkles, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Health consultation',
    detail: 'A deep-dive into your history, lifestyle, and wellness goals.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Understand',
    desc: 'Root cause analysis',
    detail: 'We identify the underlying imbalances, not just the symptoms.',
    icon: Microscope,
  },
  {
    num: '03',
    title: 'Heal',
    desc: 'Personal wellness program',
    detail: 'A tailored plan of therapies, nutrition, and mindful movement.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Thrive',
    desc: 'Long-term lifestyle transformation',
    detail: 'Sustainable habits that keep you well for years to come.',
    icon: TrendingUp,
  },
];

export default function HealingJourney() {
  return (
    <section className="relative w-full bg-[#080808] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
            The Healing Journey
          </span>
          <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Four steps to lasting wellness
          </h2>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 lg:mt-24 lg:gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-3xl"
            >
              <motion.div
                className="glass-card group relative flex items-center gap-6 rounded-3xl p-6 sm:p-8"
                whileHover={{ boxShadow: '0 0 40px rgba(168,198,134,0.15)' }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5">
                  <step.icon className="h-6 w-6 text-sage" strokeWidth={1.25} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-light text-white/30">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-normal text-white sm:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-light text-sage/80">
                    {step.desc}
                  </p>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/50">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
=
              {i < STEPS.length - 1 && (
                <div className="flex justify-center py-3 lg:py-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="h-8 w-px bg-gradient-to-b from-sage/40 to-transparent"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
