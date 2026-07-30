import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How does holistic healing work?",
    a: "Holistic healing treats you as a whole person—body, mind, and spirit. Rather than simply managing symptoms, we focus on identifying and addressing the root causes of imbalance through natural therapies, personalized nutrition, movement, mindfulness, and lifestyle support.",
  },
  {
    q: "How many sessions will I need?",
    a: "Every wellness journey is unique. Following your initial consultation, your practitioner will recommend a personalized treatment plan. Most clients begin with weekly sessions for six to eight weeks before transitioning to monthly maintenance.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes. We provide secure online consultations, allowing you to connect with our wellness experts from anywhere. In-person appointments are also available for clients who prefer face-to-face care.",
  },
  {
    q: "Is nutrition included in every wellness plan?",
    a: "Absolutely. Nutrition is one of the foundations of our holistic approach. Your personalized meal recommendations evolve alongside your progress to support lasting health and vitality.",
  },
  {
    q: "Can beginners participate in yoga sessions?",
    a: "Of course. Our yoga and breathwork sessions are suitable for every experience level. Your instructor will adapt each practice to your abilities, ensuring a comfortable and supportive experience.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">
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
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}

          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
                Frequently Asked Questions
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Everything You
                <br />
                Need To Know
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg font-light leading-8 text-white/65">
                Find answers to the most common questions about our holistic
                wellness programs, treatments, and personalized care plans.
              </p>
            </Reveal>

            {/* Decorative Line */}

            <div className="mt-10 h-px w-44 bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              We're Here To Help
            </p>
          </div>

          {/* FAQ */}

          <div className="space-y-5">
            {FAQS.map((item, index) => {
              const isOpen = open === index;

              return (
                <Reveal
                  key={item.q}
                  delay={index * 0.08}
                >
                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    className="liquid-glass overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.06]"
                  >
                    <button
                      onClick={() =>
                        setOpen(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center justify-between gap-6 p-7 text-left"
                    >
                      <span className="text-lg font-medium text-white">
                        {item.q}
                      </span>

                      <motion.div
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 backdrop-blur-xl"
                      >
                        <Plus
                          className="h-5 w-5 text-cyan-300"
                          strokeWidth={2}
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-7 pb-7">
                            <div className="mb-6 h-px bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />

                            <p className="text-[15px] leading-8 text-white/65">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}