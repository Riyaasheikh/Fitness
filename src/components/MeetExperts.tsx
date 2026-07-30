import { motion } from "framer-motion";
import { Instagram, Linkedin, Calendar } from "lucide-react";
import Reveal from "./Reveal";

import yogaImg from "../assets/yoga.avif";
import julianImg from "../assets/julein.avif";
import amaraImg from "../assets/amra.avif";
import meiImg from "../assets/dr.avif";

const EXPERTS = [
  {
    name: "Dr. Amara Okafor",
    specialty: "Holistic Physician",
    image: amaraImg,
  },
  {
    name: "Julian Reyes",
    specialty: "Clinical Nutritionist",
    image: julianImg,
  },
  {
    name: "Mei Lin Chen",
    specialty: "Mindfulness Coach",
    image: meiImg,
  },
  {
    name: "Sofia Andersson",
    specialty: "Yoga Therapist",
    image: yogaImg,
  },
];

export default function MeetExperts() {
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
        {/* Heading */}
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
              Meet Our Experts
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Meet Our
              <br />
              Healing Experts
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
              Compassionate practitioners combining modern medicine,
              nutrition, mindfulness, and holistic healing to guide your
              wellness journey naturally.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {EXPERTS.map((expert, index) => (
            <Reveal key={expert.name} delay={(index % 4) * 0.12}>
              <motion.article
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="liquid-glass group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                {/* Image */}
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090B12] via-[#090B12]/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white">
                    {expert.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/65">
                    {expert.specialty}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    {/* Social Icons */}
                    <div className="flex gap-3">
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        <Instagram
                          size={18}
                          strokeWidth={1.6}
                        />
                      </a>

                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        <Linkedin
                          size={18}
                          strokeWidth={1.6}
                        />
                      </a>
                    </div>

                    {/* Button */}
                    <button className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                      <Calendar
                        size={14}
                        strokeWidth={1.7}
                      />
                      Book Session
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}