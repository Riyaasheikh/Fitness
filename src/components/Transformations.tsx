import { Zap, Moon, HeartPulse, Utensils, Scale } from 'lucide-react';
import Reveal from './Reveal';

const TRANSFORMATIONS = [
  {
    icon: Zap,
    title: 'More Energy',
    desc: 'Wake refreshed and stay vibrant through the day.',
  },
  {
    icon: Moon,
    title: 'Better Sleep',
    desc: 'Drift off naturally and wake truly rested.',
  },
  {
    icon: HeartPulse,
    title: 'Reduced Anxiety',
    desc: 'A calmer nervous system and clearer mind.',
  },
  {
    icon: Utensils,
    title: 'Improved Digestion',
    desc: 'Gentle nutrition that restores gut balance.',
  },
  {
    icon: Scale,
    title: 'Balanced Hormones',
    desc: 'Steady mood, metabolism, and energy cycles.',
  },
];

export default function Transformations() {
  const doubled = [...TRANSFORMATIONS, ...TRANSFORMATIONS];

  return (
    <section className="relative w-full overflow-hidden bg-[#080808] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
        <div className="text-center">
          <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
            Transformations
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Real shifts you can feel every day
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/55 md:text-base">
            Wellness is more than a number on a scale. Here's what our clients
            experience after committing to their journey.
          </p>
        </div>
      </div>

      {/* Infinite horizontal slider */}
      <div className="marquee-pause mt-16 flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 gap-5 pr-5">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="glass-card flex w-[280px] shrink-0 flex-col items-start rounded-3xl p-6 sm:w-[340px]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10">
                <t.icon className="h-6 w-6 text-sage" strokeWidth={1.25} />
              </div>
              <h3 className="mt-5 text-xl font-light text-white">{t.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
