
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
  FaRegCommentDots,
} from 'react-icons/fa';
import { CONTACT } from './navLinks';

const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError('Please complete all fields before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`
    );

    window.location.href =
      `mailto:${CONTACT.emails[0]}?subject=${subject}&body=${body}`;
  };

  const info = [
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      description: 'Call for professional inquiries',
    },
    ...CONTACT.emails.map((email, index) => ({
      icon: FaEnvelope,
      label: index === 0 ? 'Email' : 'Work Email',
      value: email,
      href: `mailto:${email}`,
      description:
        index === 0
          ? 'Send me a personal message'
          : 'Professional correspondence',
    })),
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: CONTACT.address,
      description: 'My current location',
    },
  ];

  const fieldClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10';

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#f7f8fc] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true }}
          variants={contactVariants}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-600 shadow-sm">
            <FaRegCommentDots />
            Let's Connect
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Get In{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            Have a question or a professional opportunity? Feel free to reach
            out. I would be happy to hear from you.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-rose-600" />
        </motion.div>

        {/* Main contact layout */}
        <div className="grid items-stretch gap-7 lg:grid-cols-5 lg:gap-8">
          {/* Contact information panel */}
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.1 }}
            variants={contactVariants}
            className="relative overflow-hidden rounded-3xl bg-[#071426] p-6 text-white shadow-2xl shadow-slate-900/10 sm:p-8 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-400">
                Contact Information
              </span>

              <h3 className="mt-4 text-2xl font-extrabold leading-snug sm:text-3xl">
                Let's start a
                <span className="block text-rose-400">conversation.</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Reach out using any of the contact options below for
                professional communication and opportunities.
              </p>

              <div className="mt-8 space-y-3">
                {info.map(({ icon: Icon, label, value, href, description }) => {
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-rose-400 transition duration-300 group-hover:border-rose-400/30 group-hover:bg-rose-500 group-hover:text-white">
                        <Icon />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-medium leading-6 text-slate-100">
                          {value}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {description}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <div
                      key={`${label}-${value}`}
                      className="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      {href ? (
                        <a
                          href={href}
                          className="flex min-w-0 flex-1 items-start gap-3"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex min-w-0 flex-1 items-start gap-3">
                          {content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                  <FaCheckCircle />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Open to professional connections
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Banking · Finance · Career Opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              ...contactVariants,
              visible: {
                ...contactVariants.visible,
                transition: {
                  duration: 0.5,
                  delay: reduceMotion ? 0 : 0.12,
                  ease: 'easeOut',
                },
              },
            }}
            className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] sm:p-9 lg:col-span-3 lg:p-10"
          >
            <div className="mb-7 flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-lg text-white shadow-lg shadow-rose-500/20">
                <FaEnvelope />
              </span>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Send a Message
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in the details below to compose your email.
                </p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    className={fieldClass}
                    maxLength={100}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className={fieldClass}
                    maxLength={254}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Write your message here..."
                  rows={6}
                  maxLength={5000}
                  className={`${fieldClass} resize-y`}
                  required
                />
                <p className="mt-2 text-right text-xs text-slate-400">
                  {form.message.length}/5000 characters
                </p>
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-900/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-500/20 sm:w-auto"
              >
                <FaPaperPlane />
                Compose & Send Email
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-xs leading-6 text-slate-400">
                Your email application will open with your message pre-filled.
                No message is sent automatically from this website.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
