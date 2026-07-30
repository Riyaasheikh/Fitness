import { motion } from 'framer-motion';
import { Users, Stethoscope, Smile, Leaf, ClipboardList, FlaskConical } from 'lucide-react';
import Reveal from './Reveal';

const STATS = [
  { value: '500+', label: 'Clients Healed', icon: Users },
  { value: '15+', label: 'Expert Practitioners', icon: Stethoscope },
  { value: '98%', label: 'Satisfaction', icon: Smile },
  { value: 'Natural', label: 'Treatments', icon: Leaf },
  { value: 'Personalized', label: 'Plans', icon: ClipboardList },
  { value: 'Evidence', label: 'Based Wellness', icon: FlaskConical },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#080808] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
            Why Choose Us
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-light text-white sm:text-4xl md:text-5xl">
            A wellness experience trusted by hundreds
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 3) * 0.08}>
              <motion.div
                className="glass-card flex h-full flex-col items-center justify-center rounded-3xl p-8 text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <s.icon className="h-8 w-8 text-sage" strokeWidth={1.25} />
                <span className="mt-5 text-3xl font-light text-white sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-2 text-sm font-light text-white/55">
                  {s.label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
