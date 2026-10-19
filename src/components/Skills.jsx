
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaUniversity,
  FaFileInvoice,
  FaClipboardCheck,
  FaUsers,
  FaLanguage,
  FaUsersCog,
  FaHandsHelping,
  FaFutbol,
  FaCalendarAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
const skills = [
  {
    name: 'General Banking',
    description: 'Banking services and daily operational activities.',
    icon: FaUniversity,
  },
  {
    name: 'Credit Operations',
    description: 'Credit processes and operational support.',
    icon: FaClipboardCheck,
  },
  {
    name: 'Loan Documentation',
    description: 'Loan records, documentation, and file management.',
    icon: FaFileInvoice,
  },
  {
    name: 'Customer Management',
    description: 'Client communication and customer service.',
    icon: FaUsers,
  },
];

const activities = [
  {
    name: 'Leadership & Organizational Activities',
    icon: FaUsersCog,
  },
  {
    name: 'Social Work & Community Services',
    icon: FaHandsHelping,
  },
  {
    name: 'Sports (Football & Cricket)',
    icon: FaFutbol,
  },
  {
    name: 'Event Management & Cultural Activities',
    icon: FaCalendarAlt,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#f7f8fc] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true }}
          variants={reveal}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-600 shadow-sm">
            <FaCheckCircle />
            Professional Strengths
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Skills &amp; Core{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
              Competencies
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            Key professional skills, interpersonal abilities, and interests
            supporting a career in banking and financial services.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-rose-600" />
        </motion.div>

        {/* Core skills */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-rose-500" />
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Core Competencies
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Banking knowledge and professional capabilities
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 to-rose-600 opacity-70 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-lg text-rose-600 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                    <Icon />
                  </span>
                  <FaArrowUpRightFromSquare className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-rose-500" />
                </div>

                <h4 className="mt-6 text-lg font-bold text-slate-900">
                  {skill.name}
                </h4>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                  {skill.description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Core Competency
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Languages */}
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
          variants={reveal}
          className="mt-14 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm sm:mt-16"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden bg-[#071426] p-7 text-white sm:p-9">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-500/15 blur-3xl" />

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-xl">
                  <FaLanguage />
                </span>

                <h3 className="mt-5 text-2xl font-extrabold">
                  Language Skills
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Communication skills for professional and everyday
                  interactions.
                </p>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900">Bengali</h4>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Native / High
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Native language proficiency
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900">English</h4>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Professional / Medium
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Professional communication
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Extracurricular activities */}
        <div className="mb-6 mt-14 flex items-center gap-3 sm:mt-16">
          <span className="h-8 w-1 rounded-full bg-rose-500" />
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Extra-Curricular Activities
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Leadership, teamwork, and community involvement
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.name}
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-lg text-rose-600 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                  <Icon />
                </span>

                <h4 className="pt-1 text-sm font-bold leading-6 text-slate-800">
                  {activity.name}
                </h4>
              </motion.div>
            );
          })}
        </div>

        {/* Closing note */}
        <div className="mt-12 text-center">
          <p className="text-sm leading-7 text-slate-500">
            Strong skills, effective communication, and continuous
            professional development.
          </p>
        </div>
      </div>
    </section>
  );
}
