// src/components/Education.jsx
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-slate-800"
        >
          Academic / Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Master of Arts (MA) in Islamic History and Culture', detail: 'National University | CGPA: 2.8/4 | Year: 2016' },
            { title: 'Bachelor of Arts (BA) in Islamic History and Culture', detail: 'National University | CGPA: 3.1/4 | Year: 2015' },
            { title: 'HSC (Humanities)', detail: 'Advanced Residential Model College, Mymensingh | GPA: 3.5/5 | Year: 2011' },
            { title: 'SSC (Humanities)', detail: 'Garadoba Abdul Hamid High School, Netrakona | GPA: 3.63/5 | Year: 2009' },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.h3 className="font-semibold text-slate-800 mb-2">{edu.title}</motion.h3>
              <p className="text-gray-700">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}