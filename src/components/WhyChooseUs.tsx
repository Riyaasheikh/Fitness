import { motion } from "framer-motion";
import {
  Users,
  Stethoscope,
  Smile,
  Leaf,
  ClipboardList,
  FlaskConical,
} from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  {
    value: "500+",
    label: "Clients Healed",
    icon: Users,
  },
  {
    value: "15+",
    label: "Expert Practitioners",
    icon: Stethoscope,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Smile,
  },
  {
    value: "100%",
    label: "Natural Treatments",
    icon: Leaf,
  },
  {
    value: "Tailored",
    label: "Wellness Plans",
    icon: ClipboardList,
  },
  {
    value: "Science",
    label: "Evidence-Based Care",
    icon: FlaskConical,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#10141E] via-[#1A2440] to-[#121827]" />

        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[190px]" />

        <div className="absolute right-[-120px] top-20 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[170px]" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[180px]" />

        <div className="absolute inset-0 bg-black/25" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="text-center">

          <Reveal>

            <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
              Why Choose Us
            </span>

          </Reveal>

          <Reveal delay={0.1}>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Trusted by hundreds on
              <br />
              their wellness journey.
            </h2>

          </Reveal>

          <Reveal delay={0.2}>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
              Our holistic approach combines evidence-based wellness,
              personalized care, and natural healing to create lasting results.
            </p>

          </Reveal>

        </div>

        {/* Cards */}

        <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-3">

          {STATS.map((stat, index) => (

            <Reveal
              key={stat.label}
              delay={(index % 3) * 0.12}
            >

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="liquid-glass group rounded-[28px] p-8 text-center transition-all duration-500"
              >

                {/* Icon */}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-colors duration-500 group-hover:bg-sage/10">

                  <stat.icon
                    className="h-8 w-8 text-sage"
                    strokeWidth={1.5}
                  />

                </div>

                {/* Value */}

                <h3 className="mt-6 text-3xl font-light text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </h3>

                {/* Label */}

                <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                  {stat.label}
                </p>

              </motion.div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}