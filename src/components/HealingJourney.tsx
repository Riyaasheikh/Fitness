import { motion } from "framer-motion";
import {
  Search,
  Microscope,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Health Consultation",
    detail:
      "A comprehensive consultation to understand your health history, lifestyle, and personal wellness goals.",
    icon: Search,
  },
  {
    num: "02",
    title: "Understand",
    desc: "Root Cause Analysis",
    detail:
      "We uncover the underlying imbalances instead of simply treating symptoms.",
    icon: Microscope,
  },
  {
    num: "03",
    title: "Heal",
    desc: "Personal Wellness Program",
    detail:
      "Receive a personalized roadmap combining nutrition, therapies, movement, and recovery.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Thrive",
    desc: "Lifestyle Transformation",
    detail:
      "Build sustainable habits that help you maintain long-term vitality and wellbeing.",
    icon: TrendingUp,
  },
];

export default function HealingJourney() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">

      {/* ---------- Background ---------- */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#12182A] via-[#1A2440] to-[#11151F]" />

        <div className="absolute -left-40 top-0 h-[550px] w-[550px] rounded-full bg-blue-400/15 blur-[180px]" />

        <div className="absolute right-[-150px] top-40 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[180px]" />

        <div className="absolute inset-0 bg-black/25" />

      </div>

      {/* ---------- Content ---------- */}

      <div className="relative z-10 mx-auto max-w-5xl">

        <div className="text-center">

          <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
            The Healing Journey
          </span>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            Four Steps Toward
            <br />
            Lifelong Wellness
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
            Our evidence-informed wellness process helps restore balance,
            improve vitality, and create sustainable healthy habits.
          </p>

        </div>

        {/* ---------- Timeline ---------- */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-7 top-5 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-sage/40 via-white/10 to-transparent md:block" />

          <div className="space-y-8">

            {STEPS.map((step, index) => (

              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.35 }}
                  className="liquid-glass relative rounded-3xl p-7 sm:p-8"
                >

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                    {/* Icon */}

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5">

                      <step.icon
                        className="h-7 w-7 text-sage"
                        strokeWidth={1.5}
                      />

                    </div>

                    {/* Text */}

                    <div className="flex-1">

                      <div className="flex items-center gap-4">

                        <span className="text-sm tracking-[0.25em] text-white/35">
                          {step.num}
                        </span>

                        <h3 className="text-2xl font-light text-white">
                          {step.title}
                        </h3>

                      </div>

                      <p className="mt-3 text-sm uppercase tracking-widest text-sage">
                        {step.desc}
                      </p>

                      <p className="mt-4 max-w-xl text-base font-light leading-8 text-white/65">
                        {step.detail}
                      </p>

                    </div>

                  </div>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}