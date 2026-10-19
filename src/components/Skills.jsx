// src/components/Skills.jsx
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-slate-800"
        >
          Skills &amp; Core Competencies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'General Banking' },
            { name: 'Credit Operations' },
            { name: 'Loan Documentation' },
            { name: 'Customer Management' },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.h3 className="font-semibold text-slate-800 mb-2">{skill.name}</motion.h3>
              <motion.div className="bg-gradient-to-r from-slate-100 to-slate-200 p-4 rounded-lg">
                <motion.p className="text-gray-700">{skill.name}</motion.p>
                <motion.div className="w-full bg-red-200 h-2 mt-2 rounded">
                  <motion.div className="h-2 bg-red-600 w-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Language & Extra-Curricular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-6 shadow-md mt-8"
        >
          <motion.h3 className="font-semibold text-slate-800 mb-2">Languages</motion.h3>
          <motion.p className="text-gray-700">Bengali (Native/High), English (Professional/Medium)</motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-6 shadow-md mt-8"
        >
          <motion.h3 className="font-semibold text-slate-800 mb-2">Extra-Curricular</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Leadership & Organizational Activities', 'Social Work & Community Services', 'Sports (Football & Cricket)', 'Event Management & Cultural Activities'].map((item, i) => (
              <motion.div key={i} className="bg-gradient-to-r from-slate-100 to-slate-200 p-4 rounded-lg">
                <motion.h4 className="font-semibold text-slate-800">{item}</motion.h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}