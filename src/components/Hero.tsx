import { useState } from 'react';
import { CircleUserRound, Menu, X } from 'lucide-react';
import video from '../assets/brain.mp4';
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img4.avif'
import img4 from '../assets/img5.avif'

const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Our Approach', href: '#approach', active: false },
  { label: 'Healing Methods', href: '#methods', active: false },
];

const AVATARS = [
img1,img2,img3,img4
];

const VIDEO_URL = video;

function Logo() {
  return (
    <svg
      viewBox="0 0 256 256"
      className="h-8 w-8 fill-white md:h-9 md:w-9"
      aria-label="Vibrant Wellness logo"
    >
      <path d="M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z" />
    </svg>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onNavigate}
          className={`text-sm font-medium transition-opacity duration-300 hover:opacity-100 ${
            link.active ? 'text-white' : 'text-white/70'
          }`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

function DotPatternIcon() {
  // 3x3 grid of 2.5px white/60 squares in a 20x20 box
  const coords = [0, 8.75, 17.5];
  return (
    <div className="relative h-5 w-5">
      {coords.map((y) =>
        coords.map((x) => (
          <span
            key={`${x}-${y}`}
            className="absolute h-[2.5px] w-[2.5px] rounded-[1px] bg-white/60"
            style={{ left: `${x}px`, top: `${y}px` }}
          />
        ))
      )}
    </div>
  );
}

function GridIcon() {
  const pattern = [
    1, 0, 1,
    0, 1, 0,
    1, 0, 1,
  ];
  return (
    <div className="grid h-5 w-5 grid-cols-3 gap-[2px]">
      {pattern.map((on, i) => (
        <span
          key={i}
          className={`h-1 w-1 rounded-[1px] ${on ? 'bg-white/60' : 'bg-white/0'}`}
        />
      ))}
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {icon}
      <span className="text-xl font-normal text-white sm:text-2xl md:text-3xl">
        {value}
      </span>
      <span className="text-xs font-light text-white/60 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative flex h-screen w-full flex-col overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
      />
      <div className="absolute inset-0 bg-black/30" />
      <nav className="relative z-20 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:px-20">
        <Logo />
        <div className="liquid-glass hidden rounded-full px-8 py-3 md:flex md:items-center md:gap-8">
          <NavLinks />
        </div>
        <div className="liquid-glass hidden h-10 w-10 items-center justify-center rounded-full md:flex">
          <CircleUserRound className="h-5 w-5 text-white/80" strokeWidth={1.5} />
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="liquid-glass relative z-50 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
        >
          <span className="relative h-5 w-5">
            <Menu
              className={`absolute inset-0 h-5 w-5 text-white transition-all duration-300 ${
                menuOpen
                  ? 'rotate-90 scale-0 opacity-0'
                  : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              className={`absolute inset-0 h-5 w-5 text-white transition-all duration-300 ${
                menuOpen
                  ? 'rotate-0 scale-100 opacity-100'
                  : '-rotate-90 scale-0 opacity-0'
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-10 flex flex-col items-center justify-center gap-8 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ease-out md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`flex flex-col items-center gap-8 transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <NavLinks onNavigate={() => setMenuOpen(false)} />
          <div className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full">
            <CircleUserRound className="h-5 w-5 text-white/80" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-light text-white/60">Account</span>
        </div>
      </div>

      <div
        className={`relative z-10 flex flex-1 flex-col justify-between px-5 pb-10 sm:px-8 md:px-16 md:pb-12 lg:px-20 lg:pb-16 transition-opacity duration-500 ${
          menuOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="mt-14 max-w-2xl sm:mt-20 md:mt-28">
          <div className="liquid-glass mb-5 inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 sm:mb-6 sm:gap-3 sm:px-4 sm:py-2">
            <div className="flex -space-x-2">
              {AVATARS.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-5 w-5 rounded-full border-2 border-white/20 object-cover sm:h-6 sm:w-6"
                />
              ))}
            </div>
            <span className="text-xs font-light text-white/80 sm:text-sm">
              our path to natural wellness
            </span>
          </div>

          <h1 className="block text-4xl font-normal leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ letterSpacing: '-0.05em' }}>
            Heal Your Body
            <br />
            Naturally
          </h1>

          <p className="mt-4 text-sm font-light text-white/70 sm:mt-5 sm:text-base md:text-lg">
            Holistic wellness. Transformative results.
          </p>

          <button
            type="button"
            className="liquid-glass mt-6 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10 sm:mt-8 sm:px-7 sm:py-3.5"
          >
            Begin Your Journey
          </button>
        </div>

        <div className="flex items-end gap-6 sm:gap-10 md:gap-16">
          <Stat
            icon={<DotPatternIcon />}
            value="48 Hours"
            label="Initial Consultation"
          />
          <Stat
            icon={<GridIcon />}
            value="Initial Consultation"
            label="Healing Sessions"
          />
        </div>
      </div>
    </section>
  );
}
