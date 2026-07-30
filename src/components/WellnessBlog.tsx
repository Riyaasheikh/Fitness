import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

import mindImg from "../assets/mind.avif";
import nutritionImg from "../assets/nature.avif";
import movementImg from "../assets/movement.avif";

const POSTS = [
  {
    category: "Mindfulness",
    title: "The Science of Stillness: How Meditation Reshapes the Brain",
    excerpt:
      "Discover how just a few minutes of daily meditation can improve focus, reduce stress, and strengthen emotional resilience through measurable neurological changes.",
    image: mindImg,
  },
  {
    category: "Nutrition",
    title: "Eating with the Seasons: A Guide to Functional Nutrition",
    excerpt:
      "Learn how seasonal, nutrient-rich foods naturally support digestion, immunity, and energy throughout every stage of the year.",
    image: nutritionImg,
  },
  {
    category: "Movement",
    title: "Morning Yoga: Five Poses to Awaken Your Body Gently",
    excerpt:
      "Start every morning with simple yoga movements that increase flexibility, improve posture, and prepare your body for the day ahead.",
    image: movementImg,
  },
];

export default function WellnessBlog() {
  return (
    <section className="relative overflow-hidden px-5 py-2 sm:px-8 sm:py-2 md:px-5 lg:px-10 lg:py-20">
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
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-light uppercase tracking-[0.3em] text-sage">
                Wellness Journal
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                Insights For
                <br />
                Your Wellness Journey
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
                Explore expert articles on holistic health, nutrition,
                mindfulness, movement, and natural healing to help you live a
                healthier, more balanced life.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
          {POSTS.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.12}>
              <motion.article
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="liquid-glass group relative flex h-fit flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090B12] via-[#090B12]/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan-200 backdrop-blur-xl">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col px-6 pt-6 ">
                  <h3 className="text-2xl font-light leading-snug text-white transition-colors duration-300 group-hover:text-cyan-200">
                    {post.title}
                  </h3>

                  {/* Excerpt now reveals on hover instead of always
                      taking up space, matching the HealingMethods pattern.
                      Remove this wrapper and go back to a plain <p> if you
                      actually want the excerpt visible by default. */}
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-5 text-[15px] leading-7 text-white/65">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4">
                    <div className="h-px bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />

                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                        Wellness Guide
                      </span>

                      <div className="flex items-center gap-2 font-medium text-cyan-300 transition-all duration-300 group-hover:gap-3">
                        Read Article
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-300/5 blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}