import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { NAV_LINKS, CONTACT } from './navLinks';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative bg-slate-950 text-slate-400">
      <div className="h-1 bg-gradient-to-r from-red-500 via-rose-500 to-blue-600" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-sm font-extrabold text-white">
              AIS
            </span>
            <div>
              <p className="font-bold text-white">Aminul Islam Shohag</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">Junior Officer, NRBC Bank PLC</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7">
            Dedicated banking professional with experience in general banking, credit operations
            and customer relationship management.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-red-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Get In Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-red-400" />
              <a href={`tel:${CONTACT.phone}`} className="hover:text-white">{CONTACT.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-red-400" />
              <span className="flex flex-col gap-1 break-all">
                {CONTACT.emails.map((m) => (
                  <a key={m} href={`mailto:${m}`} className="hover:text-white">{m}</a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-red-400" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Aminul Islam Shohag. All rights reserved.</p>
          <p>Built with React, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-black/30 transition hover:-translate-y-1"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
