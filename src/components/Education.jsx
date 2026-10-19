
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUniversity,
  FaBookOpen,
  FaAward,
  FaCalendarAlt,
} from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const educationData = [
  {
    title: 'Master of Arts (MA)',
    subject: 'Islamic History and Culture',
    institution: 'National University',
    resultLabel: 'CGPA',
    result: '2.8 / 4.0',
    year: '2016',
    level: 'Postgraduate',
    icon: FaGraduationCap,
    accent: 'from-rose-500 to-red-600',
  },
  {
    title: 'Bachelor of Arts (BA)',
    subject: 'Islamic History and Culture',
    institution: 'National University',
    resultLabel: 'CGPA',
    result: '3.1 / 4.0',
    year: '2015',
    level: 'Undergraduate',
    icon: FaUniversity,
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Higher Secondary Certificate',
    subject: 'HSC · Humanities',
    institution: 'Advanced Residential Model College, Mymensingh',
    resultLabel: 'GPA',
    result: '3.5 / 5.0',
    year: '2011',
    level: 'Higher Secondary',
    icon: FaBookOpen,
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Secondary School Certificate',
    subject: 'SSC · Humanities',
    institution: 'Garadoba Abdul Hamid High School, Netrakona',
    resultLabel: 'GPA',
    result: '3.63 / 5.0',
    year: '2009',
    level: 'Secondary',
    icon: FaAward,
    accent: 'from-amber-500 to-orange-600',
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

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-[#f7f8fc] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

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
            Academic Background
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Academic{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            An overview of academic qualifications, educational institutions,
            and academic achievements.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-rose-600" />
        </motion.div>

        {/* Education cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;

            return (
              <motion.article
                key={edu.title}
                variants={cardVariants}
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: reduceMotion ? 0 : (index % 2) * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:p-8"
              >
                {/* Top accent */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${edu.accent}`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${edu.accent} text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
                      {edu.level}
                    </span>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                      {edu.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium leading-6 text-rose-600">
                      {edu.subject}
                    </p>
                  </div>

                  <FaArrowUpRightFromSquare className="mt-1 hidden text-slate-300 transition-colors group-hover:text-rose-500 sm:block" />
                </div>

                {/* Institution */}
                <div className="mt-6 flex items-start gap-3 border-t border-slate-100 pt-5">
                  <FaUniversity className="mt-1 shrink-0 text-slate-400" />
                  <p className="text-sm leading-6 text-slate-600">
                    {edu.institution}
                  </p>
                </div>

                {/* Result and year */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Academic Result
                    </p>
                    <p className="mt-2 text-lg font-extrabold text-slate-900">
                      {edu.result}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {edu.resultLabel}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <FaCalendarAlt />
                      Passing Year
                    </p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">
                      {edu.year}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Completed
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
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
            <FaGraduationCap />
          </span>
          <p className="text-sm leading-6 text-slate-500">
            Knowledge builds confidence. Education creates opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
