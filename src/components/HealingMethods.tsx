import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Salad,
  AudioLines,
  HandHeart,
  Wind,
  Flower2,
  Leaf,
} from "lucide-react";
import Reveal from "./Reveal";

const METHODS = [
  {
    icon: Activity,
    title: "Acupuncture",
    desc: "Fine-needle therapy that restores your body's natural energy flow, reduces pain, and promotes deep healing.",
  },
  {
    icon: Brain,
    title: "Meditation",
    desc: "Guided mindfulness sessions that calm the mind, reduce stress, and improve emotional resilience.",
  },
  {
    icon: Salad,
    title: "Nutrition",
    desc: "Personalized nutrition plans focused on whole foods to nourish your body from the inside out.",
  },
  {
    icon: AudioLines,
    title: "Sound Therapy",
    desc: "Immersive sound frequencies that relax the nervous system and encourage mental clarity.",
  },
  {
    icon: HandHeart,
    title: "Therapeutic Massage",
    desc: "Hands-on therapies that release muscle tension, improve circulation, and support recovery.",
  },
  {
    icon: Wind,
    title: "Breathwork",
    desc: "Intentional breathing techniques that increase focus, reduce anxiety, and restore balance.",
  },
  {
    icon: Flower2,
    title: "Yoga Therapy",
    desc: "Mindful movement designed to improve flexibility, posture, strength, and inner wellbeing.",
  },
  {
    icon: Leaf,
    title: "Herbal Medicine",
    desc: "Natural botanical remedies carefully selected to complement your body's healing process.",
  },
];

export default function HealingMethods() {
  return (
    <section
      id="methods"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Main Gradient */}
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <Reveal>
            <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
              Healing Methods
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Eight Natural Paths
              <br />
              To Better Wellness
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
              Every therapy is thoughtfully designed to restore balance,
              strengthen your body, and support lasting wellbeing. Hover over a
              treatment to learn more.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        {/* items-start is the fix: without it, grid's default
            align-items:stretch forces every card in a row to match the
            tallest card, which is what produced the leftover blank space
            at the bottom regardless of the grid-rows collapse trick below. */}
        <div className="mt-20 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METHODS.map((method, index) => (
            <Reveal
              key={method.title}
              delay={(index % 4) * 0.08}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="liquid-glass group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/15">
                  <method.icon
                    className="h-8 w-8 text-cyan-300"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-light text-white">
                  {method.title}
                </h3>

                {/* Animated Description */}

                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-5 text-[15px] leading-7 text-white/65">
                      {method.desc}
                    </p>

                    <div className="mt-6 h-px bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />

                    <p className="mt-5 text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                      Holistic Healing
                    </p>
                  </div>
                </div>

                {/* Glow Effect */}

                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/5 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}