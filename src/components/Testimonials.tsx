import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import Reveal from "./Reveal";

import q1 from "../assets/q1.avif";
import q2 from "../assets/q2.avif";
import q3 from "../assets/q3.avif";

const TESTIMONIALS = [
  {
    quote:
      "Vibrant Wellness gave me tools I use every single day. My anxiety has transformed into a quiet confidence I never imagined possible. Every session left me feeling lighter, stronger, and more connected with myself.",
    name: "Elena Marsh",
    role: "Client since 2023",
    image: q1,
  },
  {
    quote:
      "After years of exhaustion, I finally sleep peacefully and wake up energized. The personalized nutrition plan completely changed the way I feel every day.",
    name: "Marcus Reid",
    role: "Client since 2022",
    image: q3,
  },
  {
    quote:
      "The mindfulness coaching helped me reconnect with myself. I feel calmer, more present, and genuinely happier than I have in years.",
    name: "Aisha Khan",
    role: "Client since 2024",
    image: q2,
  },
  {
    quote:
      "Every practitioner truly listened to my concerns. This isn't just healthcare—it feels like a sanctuary where every aspect of your wellbeing matters.",
    name: "Thomas Berg",
    role: "Client since 2021",
    image: q3,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);

  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  const testimonial = TESTIMONIALS[index];

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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}

        <div className="text-center">
          <Reveal>
            <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
              Testimonials
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Stories of Healing
              <br />
              & Transformation
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
              Every wellness journey is unique. Here's what our clients have
              experienced after embracing holistic care.
            </p>
          </Reveal>
        </div>

        {/* Card */}

        <div className="relative mt-20">
          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative liquid-glass rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:p-16"
            >
              {/* Quote */}

              <div className="absolute left-10 top-10">
                <Quote
                  className="h-16 w-16 text-cyan-300/25"
                  strokeWidth={1.3}
                />
              </div>

              {/* Stars */}

              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-cyan-300 text-cyan-300"
                  />
                ))}
              </div>

              {/* Quote */}

              <p className="mx-auto mt-10 max-w-4xl text-center text-xl font-light leading-relaxed text-white/90 sm:text-2xl lg:text-3xl lg:leading-[1.6]">
                "{testimonial.quote}"
              </p>

              {/* Divider */}

              <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

              {/* Client */}

              <div className="mt-10 flex flex-col items-center">
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-24 w-24 rounded-full border-2 border-cyan-300/20 object-cover shadow-lg"
                />

                <h3 className="mt-6 text-xl font-medium text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-white/60">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}

        <div className="mt-14 flex items-center justify-center gap-5">
          <button
            onClick={prev}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 ${
                  i === index
                    ? "h-2 w-10 rounded-full bg-cyan-300"
                    : "h-2 w-2 rounded-full bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}