import { motion } from 'framer-motion';
import { Instagram, Linkedin, Calendar } from 'lucide-react';
import Reveal from './Reveal';

const EXPERTS = [
  {
    name: 'Dr. Amara Okafor',
    specialty: 'Holistic Physician',
    image:
      'https://images.pexels.com/photos/8459997/pexels-photo-8459997.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Julian Reyes',
    specialty: 'Clinical Nutritionist',
    image:
      'https://images.pexels.com/photos/20002955/pexels-photo-20002955.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Mei Lin Chen',
    specialty: 'Mindfulness Coach',
    image:
      'https://images.pexels.com/photos/4101210/pexels-photo-4101210.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Sofia Andersson',
    specialty: 'Yoga Therapist',
    image:
      'https://images.pexels.com/photos/4498516/pexels-photo-4498516.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function MeetExperts() {
  return (
    <section className="relative w-full bg-[#0B0B0B] px-5 py-24 sm:px-8 sm:py-32 md:px-16 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-light uppercase tracking-[0.25em] text-sage">
            Meet Our Experts
          </span>
          <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Guides who walk the path with you
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {EXPERTS.map((e, i) => (
            <Reveal key={e.name} delay={(i % 4) * 0.1}>
              <motion.article
                className="glass-card group overflow-hidden rounded-3xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-normal text-white">{e.name}</h3>
                  <p className="mt-1 text-sm font-light text-sage/80">
                    {e.specialty}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                      <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    </div>
                    <button className="flex items-center gap-1.5 rounded-full bg-sage/15 px-3.5 py-2 text-xs font-medium text-sage transition-colors hover:bg-sage/25">
                      <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
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
