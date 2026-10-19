
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaClock,
  FaShieldAlt,
  FaArrowRight,
} from 'react-icons/fa';

const trainings = [
  {
    id: 1,
    title: 'Foundation Course',
    institution: 'NRBC Training Institute',
    location: 'Dhaka, Bangladesh',
    year: '2025',
    duration: '5 Days',
    category: 'Banking Fundamentals',
    icon: FaGraduationCap,
    accent: 'from-red-500 to-rose-600',
    description:
      'Professional foundation training focused on developing essential banking knowledge and workplace competencies.',
  },
  {
    id: 2,
    title: 'Anti-Money Laundering',
    institution: 'NRBC Training Institute',
    location: 'Dhaka, Bangladesh',
    year: '2024',
    duration: '1 Day',
    category: 'Compliance & Risk',
    icon: FaShieldAlt,
    accent: 'from-blue-500 to-indigo-600',
    description:
      'Specialized training in anti-money laundering awareness and the importance of compliance in banking operations.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Training() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="training"
      className="relative isolate overflow-hidden bg-[#f7f8fc] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-600 shadow-sm">
            <FaGraduationCap className="text-base" />
            Skills & Development
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Professional{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
              Training
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Professional learning and training undertaken to strengthen
            banking knowledge, operational skills, and compliance awareness.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-rose-600" />
        </motion.div>

        {/* Training cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {trainings.map((training, index) => {
            const Icon = training.icon;

            return (
              <motion.article
                key={training.id}
                variants={cardVariants}
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:p-8"
              >
                {/* Top accent */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${training.accent}`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${training.accent} text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
                      {training.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                      {training.title}
                    </h3>
                  </div>

                  <FaArrowRight className="mt-2 hidden text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-rose-500 sm:block" />
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {training.description}
                </p>

                {/* Training provider */}
                <div className="mt-6 flex items-start gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <FaUniversity />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Training Provider
                    </p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {training.institution}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {training.location}
                    </p>
                  </div>
                </div>

                {/* Year and duration */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <FaCalendarAlt className="text-rose-500" />
                      Training Year
                    </div>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">
                      {training.year}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <FaClock className="text-rose-500" />
                      Duration
                    </div>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">
                      {training.duration}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            Continuous learning. Stronger skills. Better professional service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
