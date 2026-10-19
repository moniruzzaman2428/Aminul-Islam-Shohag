// src/components/Training.jsx
import { motion } from 'framer-motion';

export default function Training() {
  return (
    <section id="training" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-slate-800"
        >
          Professional Training
        </motion.h2>

        <div className="space-y-4">
          {[
            { title: 'Foundation Course', desc: 'NRBC Training Institute | Dhaka, Bangladesh | 2025 (5 Days)' },
            { title: 'Anti-Money Laundering', desc: 'NRBC Training Institute | Dhaka, Bangladesh | 2024 (1 Day)' },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.h3 className="font-semibold text-slate-800">{t.title}</motion.h3>
              <p className="text-gray-700">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}