import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Brain, Salad } from "lucide-react";
import Reveal from "./Reveal";
import img from "../assets/relax.png";

const ABOUT_IMAGE = img;

const FEATURES = [
  {
    icon: Leaf,
    title: "Natural Healing",
    desc: "Plant-based therapies that work with your body instead of against it.",
  },
  {
    icon: Brain,
    title: "Mindful Living",
    desc: "Daily practices designed to reduce stress and restore mental clarity.",
  },
  {
    icon: Salad,
    title: "Functional Nutrition",
    desc: "Personalized nutrition plans tailored to your lifestyle and goals.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="approach"
      ref={ref}
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40"
    >
      {/* ---------- Background ---------- */}

      <div className="absolute inset-0">

        {/* Main gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#3B4F8E] via-[#1E2744] to-[#10151F]" />

        {/* Left blue glow */}

        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-[180px]" />

        {/* Right purple glow */}

        <div className="absolute right-[-120px] top-40 h-[500px] w-[500px] rounded-full bg-violet-400/15 blur-[180px]" />

        {/* Bottom pink glow */}

        <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-pink-300/10 blur-[180px]" />

        {/* Soft overlay */}

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ---------- Content ---------- */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[32px]"
        >
          <motion.img
            src={ABOUT_IMAGE}
            alt="Peaceful meditation"
            style={{ y: imageY }}
            className="h-[420px] w-full scale-110 object-cover sm:h-[520px] lg:h-[650px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#11151F]/80 via-transparent to-white/5" />

          <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10" />
        </motion.div>

        {/* Text */}

        <div>

          <Reveal>
            <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
              Our Philosophy
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Wellness begins when
              <br />
              your body is heard.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-base font-light leading-8 text-white/70 md:text-lg">
              We combine natural therapies, mindful movement, nutrition,
              and evidence-informed wellness practices to restore balance,
              improve vitality, and help you feel your best—naturally.
            </p>
          </Reveal>

          {/* Feature Cards */}

          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            {FEATURES.map((feature, index) => (

              <Reveal key={feature.title} delay={0.35 + index * 0.12}>

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="liquid-glass rounded-2xl p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">

                    <feature.icon
                      className="h-6 w-6 text-sage"
                      strokeWidth={1.5}
                    />

                  </div>

                  <h3 className="mt-5 text-lg font-medium text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {feature.desc}
                  </p>
                </motion.div>

              </Reveal>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
}