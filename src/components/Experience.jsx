
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaBriefcase,
  FaUniversity,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: 'Junior Officer',
    company: 'NRBC Bank PLC',
    location: 'Kendua, Netrokona',
    period: '07 Nov, 2024 – Present',
    duration: '1.9 yrs',
    category: 'Banking & Financial Services',
    icon: FaUniversity,
    accent: 'from-red-500 to-rose-600',
    description:
      'Supporting banking operations, credit assessment, documentation, and customer relationship management.',
    responsibilities: [
      'Loan proposal processing and appraisal',
      'Credit risk evaluation and documentation',
      'Managing credit files and client communication',
      'Customer service and credit operations',
    ],
    skills: ['Credit Analysis', 'Risk Assessment', 'Documentation', 'Banking Operations'],
  },
  {
    id: 2,
    role: 'Assistant Teacher',
    company: 'Rabeya-Shamsuddin Technical School and BM College',
    location: 'Bangladesh',
    period: '01 Jan, 2017 – 01 Jan, 2020',
    duration: '3 years',
    category: 'Education & Training',
    icon: FaChalkboardTeacher,
    accent: 'from-blue-500 to-indigo-600',
    description:
      'Contributed to students’ learning and development through teaching, motivation, and organized classroom activities.',
    responsibilities: [
      'Teaching and supporting student learning',
      'Motivating students to achieve their goals',
      'Organizing educational activities',
      'Maintaining an effective learning environment',
    ],
    skills: ['Teaching', 'Motivation', 'Organization', 'Communication'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function ExperienceCard({ experience, index, reduceMotion }) {
  const Icon = experience.icon;

  return (
    <motion.article
      variants={reduceMotion ? undefined : itemVariants}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.12 }}
      className="relative grid gap-5 md:grid-cols-[minmax(0,1fr)_280px] md:gap-7"
    >
      {/* Timeline marker */}
      <div className="absolute -left-[29px] top-7 z-10 hidden h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.12)] md:flex" />

      {/* Main experience card */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:p-8">
        <div
          className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${experience.accent}`}
        />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${experience.accent} text-xl text-white shadow-lg`}
            >
              <Icon />
            </div>

            <div className="min-w-0">
              <span className="mb-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
                {experience.category}
              </span>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {experience.role}
              </h3>

              <p className="mt-1 break-words font-semibold text-slate-600">
                {experience.company}
              </p>
            </div>
          </div>

          <span className="w-fit shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
            {experience.duration}
          </span>
        </div>

        <p className="mt-5 leading-7 text-slate-600">
          {experience.description}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:gap-x-6">
          <span className="flex items-start gap-2">
            <FaCalendarAlt className="mt-1 shrink-0 text-red-500" />
            {experience.period}
          </span>

          <span className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-red-500" />
            {experience.location}
          </span>
        </div>

        <div className="mt-7">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">
            Key Responsibilities
          </h4>

          <ul className="grid gap-3 sm:grid-cols-2">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                <FaCheckCircle className="mt-1 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expertise panel */}
      <aside className="relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl sm:p-7">
        <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${experience.accent} opacity-20 blur-2xl`} />

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${experience.accent}`}>
              <FaBriefcase />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Expertise
              </p>
              <h4 className="mt-1 text-lg font-bold">Core Skills</h4>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-white/25 hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="text-sm leading-6 text-slate-400">
              Experience #{String(index + 1).padStart(2, '0')}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {experience.category}
            </p>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Professional Growth
            <FaArrowRight className="text-red-400" />
          </div>
        </div>
      </aside>
    </motion.article>
  );
}

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#f7f8fc] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 shadow-sm">
            <FaBriefcase />
            Career Journey
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Professional{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            A journey of professional development, practical experience, and
            continuous learning across banking and education.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-rose-600" />
        </motion.div>

        {/* Experience timeline */}
        <div className="relative md:ml-7">
          <div className="absolute bottom-8 left-[-22px] top-8 hidden w-px bg-gradient-to-b from-red-300 via-slate-200 to-blue-300 md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="space-y-8 sm:space-y-10"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                reduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="text-sm text-slate-500">
            Built on experience. Driven by continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
