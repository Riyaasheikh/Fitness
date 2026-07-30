import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

import massage from "../assets/massage.png";
import yoga from "../assets/yoga.png";
import wellbeing from "../assets/wellbeing.avif";
import lemonade from "../assets/lemonade.avif";
import stress from "../assets/stress.avif";
import herbs from "../assets/herbal.avif";

const PROGRAMS = [
  {
    title: "Functional Nutrition",
    tag: "Nutrition",
    image: wellbeing,
  },
  {
    title: "Yoga & Breathwork",
    tag: "Movement",
    image: yoga,
  },
  {
    title: "Stress Recovery",
    tag: "Mind",
    image: stress,
  },
  {
    title: "Therapeutic Massage",
    tag: "Body",
    image: massage,
  },
  {
    title: "Herbal Medicine",
    tag: "Natural",
    image: herbs,
  },
  {
    title: "Detox Programs",
    tag: "Cleanse",
    image: lemonade,
  },
];

export default function WellnessPrograms() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#11151F] via-[#18213A] to-[#10141E]" />

        <div className="absolute -left-52 top-0 h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[200px]" />

        <div className="absolute right-[-180px] top-40 h-[520px] w-[520px] rounded-full bg-violet-400/10 blur-[180px]" />

        <div className="absolute bottom-[-150px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[180px]" />

        <div className="absolute inset-0 bg-black/20" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
              Wellness Programs
            </span>

            <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Programs designed for
              <br />
              every part of your wellbeing.
            </h2>

          </div>

          <p className="max-w-md text-base font-light leading-8 text-white/65">
            Every wellness experience is thoughtfully designed to restore
            balance through movement, nutrition, relaxation, and natural
            healing.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {PROGRAMS.map((program, index) => (

            <Reveal key={program.title} delay={(index % 3) * 0.12}>

              <motion.article
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="group relative overflow-hidden rounded-[32px]"
              >

                {/* Image */}

                <motion.img
                  src={program.image}
                  alt={program.title}
                  className="h-[460px] w-full object-cover transition-transform duration-[1800ms] group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/40" />

                {/* Tag */}

                <div className="absolute left-6 top-6">

                  <span className="liquid-glass rounded-full px-4 py-1.5 text-xs tracking-wide text-white/85">
                    {program.tag}
                  </span>

                </div>

                {/* Bottom */}

                <div className="absolute inset-x-0 bottom-0 p-6">

                  <h3 className="text-3xl font-light text-white transition-all duration-500 group-hover:-translate-y-6">
                    {program.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between opacity-0 transition-all duration-500 group-hover:opacity-100">

                    <p className="max-w-[220px] text-sm leading-7 text-white/70">
                      Personalized wellness designed around your body's unique
                      needs.
                    </p>

                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full"
                    >
                      <ArrowUpRight
                        className="h-5 w-5 text-white"
                        strokeWidth={1.5}
                      />
                    </motion.div>

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