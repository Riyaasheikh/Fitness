import { Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const LINKS = {
  'Quick Links': ['Home', 'Our Approach', 'Healing Methods', 'About Us'],
  Programs: [
    'Functional Nutrition',
    'Yoga & Breathwork',
    'Stress Recovery',
    'Herbal Medicine',
  ],
  Contact: ['hello@vibrantwellness.com', '+1 (555) 123-4567', 'Retreat Hours: 7am – 8pm'],
};

function FooterLogo() {
  return (
    <svg
      viewBox="0 0 256 256"
      className="h-7 w-7 fill-white"
      aria-label="Vibrant Wellness logo"
    >
      <path d="M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#080808] px-5 py-20 sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-12 border-t border-white/10 pt-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8"
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <FooterLogo />
              <span className="text-lg font-light text-white">Vibrant Wellness</span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/50">
              A premium holistic wellness brand helping people heal through
              natural therapies, nutrition, mindfulness, and movement.
            </p>

            {/* Newsletter */}
            <div className="mt-8 max-w-sm">
              <p className="text-sm font-light text-white/70">
                Join our newsletter for wellness insights.
              </p>
              <form
                className="mt-3 flex items-center gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-light text-white placeholder:text-white/40 focus:border-sage/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage transition-colors hover:bg-sage/25"
                  aria-label="Subscribe"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-sm font-normal text-white">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-light text-white/50 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs font-light text-white/40">
            © 2026 Vibrant Wellness. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
