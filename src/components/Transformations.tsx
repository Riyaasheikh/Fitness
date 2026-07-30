import { motion } from "framer-motion";
import {
  Zap,
  Moon,
  HeartPulse,
  Utensils,
  Scale,
} from "lucide-react";
import Reveal from "./Reveal";

const TRANSFORMATIONS = [
  {
    icon: Zap,
    title: "More Energy",
    desc: "Wake refreshed, stay energized throughout the day, and rediscover the vitality your body naturally deserves.",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    desc: "Enjoy deeper, uninterrupted sleep that leaves you feeling refreshed every morning.",
  },
  {
    icon: HeartPulse,
    title: "Reduced Anxiety",
    desc: "Restore emotional balance with holistic practices designed to calm the nervous system.",
  },
  {
    icon: Utensils,
    title: "Improved Digestion",
    desc: "Support your gut health with personalized nutrition and gentle natural therapies.",
  },
  {
    icon: Scale,
    title: "Balanced Hormones",
    desc: "Achieve greater harmony through treatments that support healthy hormonal function.",
  },
];

export default function Transformations() {
  const cards = [...TRANSFORMATIONS, ...TRANSFORMATIONS];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10141E] via-[#1A2440] to-[#121827]" />

        {/* Blue Glow */}
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[190px]" />

        {/* Purple Glow */}
        <div className="absolute right-[-120px] top-20 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[170px]" />

        {/* Cyan Glow */}
        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[180px]" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
              Transformations
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Real Changes You
              <br />
              Can Feel Every Day
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
              Healing is more than symptom relief. Experience meaningful
              improvements that positively impact your mind, body, and everyday
              life.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Infinite Slider */}
      <div className="marquee-pause relative z-10 mt-20 overflow-hidden">
        <div className="animate-marquee flex w-max gap-6 pr-6">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.35,
              }}
              className="liquid-glass group flex w-[300px] shrink-0 flex-col rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.06]"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/15">
                <item.icon
                  className="h-8 w-8 text-cyan-300"
                  strokeWidth={1.6}
                />
              </div>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-light text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[15px] leading-7 text-white/65">
                {item.desc}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />

              {/* Footer */}
              <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                Natural Healing
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}