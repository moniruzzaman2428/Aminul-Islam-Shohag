
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowDown,
  FaUniversity,
  FaPaperPlane,
  FaBriefcase,
} from 'react-icons/fa';
import { CONTACT } from './navLinks';
import profile from "../assets/Profile1.png";

const roles = [
  'Banking Professional',
  'Credit & Risk Analysis',
  'Customer Relationship Management',
];

function useTypingEffect(words, reduceMotion) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(reduceMotion ? words[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex];
    let delay = deleting ? 40 : 85;

    if (!deleting && text === currentWord) {
      delay = 1500;
    } else if (deleting && text === '') {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === currentWord) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(
          currentWord.substring(
            0,
            text.length + (deleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, reduceMotion]);

  return text;
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const typedRole = useTypingEffect(roles, reduceMotion);

  const items = [
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      text: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      text: CONTACT.emails[0],
      href: `mailto:${CONTACT.emails[0]}`,
    },
    {
      icon: FaEnvelope,
      label: 'Work Email',
      text: CONTACT.emails[1],
      href: `mailto:${CONTACT.emails[1]}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      text: CONTACT.address,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#050d1b] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pt-36"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(220,38,38,0.13),transparent_35%),radial-gradient(ellipse_at_85%_35%,rgba(37,99,235,0.15),transparent_40%)]" />

      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-rose-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main hero */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left content */}
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'visible'}
            variants={fadeUp}
            className="relative z-10 text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300 sm:text-sm">
              <span className="h-[3px] w-9 rounded-full bg-rose-500" />
              Hello, I'm
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Aminul Islam
              <span className="mt-1 block bg-gradient-to-r from-rose-400 via-red-500 to-rose-600 bg-clip-text text-transparent">
                Shohag
              </span>
            </h1>

            <p className="mt-6 flex items-center justify-center gap-3 text-base font-medium text-slate-300 sm:text-lg lg:justify-start">
              <FaUniversity className="shrink-0 text-rose-500" />
              Junior Officer at NRBC Bank PLC
            </p>

            {/* Typing effect */}
            <div className="mt-7 flex min-h-8 flex-wrap items-center justify-center gap-x-2 text-base font-semibold sm:text-lg lg:justify-start">
              <span className="text-slate-400">I am a</span>
              <span className="text-rose-400">
                {typedRole}
                <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-rose-400 align-middle sm:h-6" />
              </span>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base lg:mx-0">
              Committed to building a better financial future through trust,
              service and integrity.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:-translate-y-1 hover:shadow-red-500/20"
              >
                <FaPaperPlane />
                Get In Touch
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#experience"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-slate-200 transition duration-300 hover:border-rose-400/50 hover:bg-white/[0.08]"
              >
                <FaBriefcase className="text-rose-400" />
                View Experience
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-500 lg:justify-start">
              <span className="h-px w-8 bg-rose-500/70" />
              LEARN <span>/</span> GROW <span>/</span> CONTRIBUTE
            </div>
          </motion.div>

          {/* Right profile image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Decorative glow */}
            <div className="absolute inset-8 rounded-full bg-rose-600/20 blur-[70px]" />

            <div className="relative mx-auto aspect-[4/4.5] max-w-[440px]">
              {/* Decorative frame */}
              <div className="absolute inset-4 rotate-[-7deg] rounded-[2rem] border border-rose-500/60 bg-gradient-to-br from-rose-500/20 to-blue-500/10 sm:inset-7" />

              <div className="absolute -right-1 top-8 h-20 w-20 rounded-full border border-rose-400/30 bg-rose-500/10 blur-sm sm:right-2" />

              {/* Image container */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
                <img
                  src={profile}
                  alt="Aminul Islam Shohag - Junior Officer at NRBC Bank PLC"
                  loading="eager"
                  fetchPriority="high"
                  onError={(event) => {
                    event.currentTarget.style.visibility = 'hidden';
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050d1b] via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/65 p-4 shadow-xl backdrop-blur-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white">
                      <FaUniversity />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">
                        Banking Professional
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        NRBC Bank PLC
                      </p>
                    </div>
                    <span className="ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -left-3 top-10 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-5 sm:top-14">
                <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                  Professional
                </p>
                <p className="mt-1 text-sm font-bold text-rose-400">
                  Career Journey
                </p>
              </div>

              <div className="absolute -right-2 bottom-24 hidden rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block sm:-right-5">
                <p className="text-xs text-slate-400">Driven by</p>
                <p className="mt-1 text-sm font-bold text-white">
                  Trust & Integrity
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact information */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {items.map(({ icon: Icon, label, text, href }, index) => {
            const content = (
              <>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rose-500/70 text-rose-400 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                  <Icon />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 break-words text-sm font-medium text-slate-200">
                    {text}
                  </p>
                </div>
              </>
            );

            return (
              <div
                key={`${label}-${text}`}
                className={`group flex min-w-0 items-center gap-4 p-5 transition-colors hover:bg-white/[0.04] sm:p-6 ${
                  index % 2 === 0 ? 'lg:border-r' : ''
                } border-white/[0.08] ${
                  index < 2 ? 'border-b sm:border-b-0' : ''
                } ${index < 3 ? 'lg:border-b-0' : ''}`}
              >
                {href ? (
                  <a
                    href={href}
                    className="flex min-w-0 flex-1 items-center gap-4"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="group flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-rose-400"
          >
            <FaArrowDown className="animate-bounce text-lg" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
              Scroll Down
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
