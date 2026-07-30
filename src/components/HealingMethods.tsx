import { motion } from 'framer-motion';
import {
  Activity,
  Brain,
  Salad,
  AudioLines,
  HandHeart,
  Wind,
  Flower2,
  Leaf,
} from 'lucide-react';
import Reveal from './Reveal';

const METHODS = [
  {
    icon: Activity,
    title: 'Acupuncture',
    desc: 'Fine-needle therapy that rebalances the body\'s energy pathways, relieving pain and restoring internal harmony.',
  },
  {
    icon: Brain,
    title: 'Meditation',
    desc: 'Guided practices that quiet the mind, lower stress hormones, and build lasting emotional resilience.',
  },
  {
    icon: Salad,
    title: 'Nutrition',
    desc: 'Whole-food, plant-forward plans designed around your biology to nourish healing from within.',
  },
  {
    icon: AudioLines,
    title: 'Sound Therapy',
    desc: 'Vibrational sound baths that release tension, shift brainwave states, and induce deep relaxation.',
  },
  {
    icon: HandHeart,
    title: 'Massage',
    desc: 'Therapeutic touch that improves circulation, eases muscle tension, and reconnects you to your body.',
  },
  {
    icon: Wind,
    title: 'Breathwork',
    desc: 'Conscious breathing techniques that regulate the nervous system and anchor you in the present.',
  },
  {
    icon: Flower2,
    title: 'Yoga',
    desc: 'Mindful movement that builds strength, flexibility, and a deeper awareness of body and breath.',
  },
  {
    icon: Leaf,
    title: 'Herbal Medicine',
    desc: 'Botanical remedies that support the body\'s natural healing processes gently and sustainably.',
  },
];

export default function HealingMethods() {
  return (
    <section
      id="methods"
      className="relative w-full bg-[#080808] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
            Healing Methods
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Eight pathways to wholeness
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/55 md:text-base">
            Hover any method to explore how it supports your healing.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
          {METHODS.map((m, i) => (
            <Reveal key={m.title} delay={(i % 4) * 0.08}>
              <motion.div
                className="glass-card group relative h-full min-h-[180px] cursor-default overflow-hidden rounded-2xl p-5"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <m.icon className="h-7 w-7 text-sage" strokeWidth={1.25} />
                <h3 className="mt-4 text-base font-normal text-white">
                  {m.title}
                </h3>
                {/* Expanded explanation on hover */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <p className="overflow-hidden text-sm font-light leading-relaxed text-white/55">
                    <span className="block pt-3">{m.desc}</span>
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
