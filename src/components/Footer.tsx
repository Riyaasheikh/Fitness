import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LINKS = {
  "Quick Links": [
    "Home",
    "Our Approach",
    "Healing Methods",
    "Meet Our Experts",
  ],
  Programs: [
    "Functional Nutrition",
    "Yoga Therapy",
    "Stress Recovery",
    "Herbal Medicine",
  ],
  Contact: [
    "hello@vibrantwellness.com",
    "+1 (555) 123-4567",
    "Open Daily • 7:00 AM – 8:00 PM",
  ],
};

function FooterLogo() {
  return (
    <svg
      viewBox="0 0 256 256"
      className="h-8 w-8 fill-cyan-300"
      aria-label="Vibrant Wellness Logo"
    >
      <path d="M128 128C198.692 128 256 185.308 256 256H151.883C149.812 220.307 120.213 192 84 192C47.787 192 18.188 220.307 16.117 256H0C0 185.308 57.308 128 128 128ZM104.117 0C106.188 35.694 135.787 64 172 64C208.213 64 237.812 35.694 239.883 0H256C256 70.692 198.692 128 128 128C57.308 128 0 70.692 0 0Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-16 lg:px-20">
      {/* Background */}

      <div className="absolute inset-0">
        {/* Gradient */}

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
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid gap-14 border-t border-white/10 pt-16 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <FooterLogo />

              <span className="text-2xl font-light text-white">
                Vibrant Wellness
              </span>
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-8 text-white/65">
              Helping people restore balance through personalized holistic
              wellness, natural therapies, nutrition, mindfulness, and movement.
              Your journey toward lifelong wellbeing begins here.
            </p>

            {/* Newsletter */}

            <div className="mt-10">
              <h3 className="text-lg font-light text-white">
                Join Our Newsletter
              </h3>

              <p className="mt-2 text-white/60">
                Receive wellness tips, expert insights, and exclusive updates.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex flex-col gap-4 sm:flex-row"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 backdrop-blur-xl outline-none transition-all focus:border-cyan-300/30"
                />

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-7 py-4 font-medium text-cyan-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                >
                  Subscribe

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Links */}

          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-lg font-medium text-white">
                {title}
              </h3>

              <ul className="mt-6 space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[15px] text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © 2026 Vibrant Wellness. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Instagram
                size={18}
                strokeWidth={1.6}
              />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Linkedin
                size={18}
                strokeWidth={1.6}
              />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Mail
                size={18}
                strokeWidth={1.6}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}