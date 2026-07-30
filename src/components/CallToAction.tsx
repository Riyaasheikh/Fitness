import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Reveal from "./Reveal";

import scenes from "../assets/scenes.png";

const CTA_IMAGE = scenes;

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden px-5 py-32 sm:px-8 sm:py-40 md:px-16 lg:px-20 lg:py-56">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt="Healing Nature"
          className="h-full w-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10141E]/90 via-[#1A2440]/60 to-[#121827]/95" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Blue Glow */}
        <div className="absolute -left-40 top-0 h-[650px] w-[650px] rounded-full bg-blue-400/15 blur-[200px]" />

        {/* Purple Glow */}
        <div className="absolute right-[-120px] top-20 h-[520px] w-[520px] rounded-full bg-violet-400/10 blur-[180px]" />

        {/* Cyan Glow */}
        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[180px]" />
      </div>

      {/* Floating Glass Elements */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[18%] hidden h-24 w-24 rounded-3xl border border-cyan-300/10 bg-cyan-400/5 backdrop-blur-xl lg:block"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute right-[10%] top-[28%] hidden h-32 w-32 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl lg:block"
      />

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-[18%] left-[15%] hidden h-20 w-20 rounded-2xl border border-cyan-300/10 bg-cyan-300/5 backdrop-blur-xl lg:block"
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
            Begin Your Journey
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl">
            Your Path To
            <br />
            Lasting Wellness
            <br />
            Starts Today
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-white/70">
            Discover personalized holistic care designed to restore balance,
            improve vitality, and help you live a healthier, happier life.
            Schedule your consultation today.
          </p>
        </Reveal>

        {/* Divider */}

        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 h-px w-44 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
        </Reveal>

        {/* Buttons */}

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="group flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-8 py-4 text-sm font-medium text-cyan-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/20 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
              Book Consultation

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/10 hover:text-white">
              <Compass
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              Explore Programs
            </button>
          </div>
        </Reveal>

        {/* Bottom Label */}

        <Reveal delay={0.5}>
          <p className="mt-12 text-xs uppercase tracking-[0.35em] text-cyan-200/70">
            Holistic • Natural • Personalized
          </p>
        </Reveal>
      </div>
    </section>
  );
}