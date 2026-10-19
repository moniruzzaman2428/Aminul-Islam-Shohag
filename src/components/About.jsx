
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaUniversity,
  FaUsers,
  FaBolt,
  FaShieldAlt,
  FaQuoteRight,
  FaArrowRight,
} from 'react-icons/fa';
import profile from "../assets/profile.jpeg";
const skills = [
  {
    label: 'Good Interpersonal Skills',
    icon: FaUsers,
  },
  {
    label: 'Proactive',
    icon: FaBolt,
  },
  {
    label: 'Ability to Work Under Pressure',
    icon: FaShieldAlt,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/60 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Profile image */}
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-8 rounded-full bg-blue-300/30 blur-3xl" />

            {/* Decorative rings */}
            <div className="absolute inset-[5%] rounded-full border border-blue-200" />
            <div className="absolute inset-[1%] rounded-full border border-dashed border-slate-300" />

            <div className="relative mx-auto aspect-square w-[88%]">
              <div className="absolute inset-0 rotate-[-7deg] rounded-[48%_48%_42%_42%] bg-gradient-to-br from-red-500 via-rose-500 to-blue-700 shadow-xl shadow-blue-900/10" />

              <div className="absolute inset-[7px] overflow-hidden rounded-[48%_48%_42%_42%] border-[5px] border-white bg-slate-200 shadow-2xl">
                <img
                  src={profile}
                  alt="Aminul Islam Shohag"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating accent */}
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-3 top-[18%] h-5 w-5 rounded-full border-4 border-white bg-red-500 shadow-lg sm:right-0"
              />

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 bottom-[28%] h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white"
              />

              {/* Professional label */}
              <div className="absolute -bottom-2 left-1/2 w-[90%] -translate-x-1/2 sm:bottom-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-slate-950/90 p-4 text-white shadow-2xl backdrop-blur-xl sm:p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-xl">
                    <FaUniversity />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold sm:text-base">
                      Banking Professional
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                      NRBC Bank PLC
                    </p>
                  </div>

                  <span className="ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            {/* Decorative quote */}
            <FaQuoteRight className="absolute -right-1 top-0 -z-10 text-5xl text-red-100 sm:-right-5 sm:text-6xl" />

            <div className="mt-14 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 sm:mt-16">
              <span className="h-[3px] w-8 rounded-full bg-red-500" />
              Growth Through Trust & Service
            </div>
          </motion.div>

          {/* Career objective content */}
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              ...reveal,
              visible: {
                ...reveal.visible,
                transition: { duration: 0.6, delay: 0.12, ease: 'easeOut' },
              },
            }}
            className="relative"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                About Me
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Career
              <span className="mt-1 block bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
                Objective
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
              Dedicated banking professional with experience in general
              banking and credit operations, seeking to apply expertise in
              credit risk assessment, loan processing, and customer
              relationship management to drive organisational growth.
            </p>

            {/* Skill badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:border-rose-200 hover:bg-rose-100"
                >
                  <Icon className="shrink-0 text-base text-red-500" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom quote card */}
            <div className="mt-9 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
              <FaQuoteRight className="mb-3 text-xl text-red-400" />

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Focused on professional growth, reliable service, and
                building strong customer relationships through integrity
                and continuous improvement.
              </p>

              <a
                href="#experience"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-colors hover:text-red-700"
              >
                Explore My Experience
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
