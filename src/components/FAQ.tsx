import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

const FAQS = [
  {
    q: 'How does holistic healing work?',
    a: 'Holistic healing treats you as a whole person — body, mind, and spirit — rather than isolating a single symptom. We combine natural therapies, nutrition, mindfulness, and movement to address the root causes of imbalance, so your body can restore its own natural state of wellness.',
  },
  {
    q: 'How many sessions do I need?',
    a: 'Every journey is unique. After your initial consultation, your practitioner will recommend a personalized plan. Most clients begin with weekly sessions over 6–8 weeks, then transition to monthly maintenance as their wellness stabilizes.',
  },
  {
    q: 'Do you offer online consultations?',
    a: 'Yes. All of our practitioners are available for secure video consultations, so you can begin or continue your healing journey from anywhere in the world. In-person sessions are also available at our retreat locations.',
  },
  {
    q: 'Is nutrition included?',
    a: 'Absolutely. Personalized nutrition is a core pillar of every wellness program. Your plan is designed around your biology, lifestyle, and goals, and evolves as your body responds and heals.',
  },
  {
    q: 'Can beginners join yoga?',
    a: 'Of course. Our yoga and breathwork sessions are designed for every level, from complete beginners to experienced practitioners. Your therapist will guide you at a pace that feels supportive and sustainable for your body.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#080808] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
              Questions
            </span>
            <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl md:text-5xl">
              Everything you need to know
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/55 md:text-base">
              Can't find what you're looking for? Reach out and our team will
              be happy to help.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.06}>
                <div className="glass-card overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="text-base font-normal text-white sm:text-lg">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/10"
                    >
                      <Plus className="h-4 w-4 text-sage" strokeWidth={1.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-sm font-light leading-relaxed text-white/60 sm:px-6 sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
