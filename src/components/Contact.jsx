// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT } from './navLinks';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: opens the visitor's mail app with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.emails[0]}?subject=${subject}&body=${body}`;
  };

  const field =
    'w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-800 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

  const info = [
    { icon: FaPhoneAlt, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
    ...CONTACT.emails.map((m) => ({ icon: FaEnvelope, label: 'Email', value: m, href: `mailto:${m}` })),
    { icon: FaMapMarkerAlt, label: 'Address', value: CONTACT.address },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Get In{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-4 text-slate-500">Have a question or an opportunity? Send a message and I will get back to you.</p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-rose-600" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={value} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                  {href ? (
                    <a href={href} className="break-all font-medium text-slate-800 hover:text-red-600">{value}</a>
                  ) : (
                    <p className="font-medium text-slate-800">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8 lg:col-span-3"
          >
            <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
            <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Full Name" className={field} required />
            <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email" className={field} required />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" className={field} required />
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-7 py-3 font-semibold text-white shadow-lg shadow-red-900/20 transition hover:brightness-110"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
