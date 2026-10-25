import { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../constants/links';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Program', href: '#program' },
    { label: 'Materi', href: '#materi' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className={`bg-surface sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm border-b border-outline-variant' : 'shadow-sm border-b border-outline-variant'}`}>
      <nav className="flex justify-between items-center w-full px-4 md:px-margin-desktop max-w-container-max mx-auto py-3 md:py-4">
        <div className="flex items-center gap-3 bg-transparent border-0 shadow-none ring-0 outline-none">
          <img
            alt="Garuda Institute Logo"
            className="h-16 md:h-20 w-auto object-contain bg-transparent border-0 shadow-none ring-0 outline-none"
            src="/assets/01-logo/logo-main-01.png"
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              className={`font-body-md text-body-md transition-colors duration-200 ${
                index === 0
                  ? 'text-primary font-bold border-b-2 border-primary py-1'
                  : 'text-secondary hover:text-primary hover:bg-surface-container-low px-2 py-1 rounded'
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-primary hover:bg-primary-container text-on-primary font-bold text-center py-2.5 md:py-3.5 px-7 md:px-9 rounded-lg transition-transform active:scale-95 duration-200 shadow-sm"
        >
          Daftar Sekarang
        </a>
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                className={`font-body-md text-body-md transition-colors duration-200 ${
                  index === 0
                    ? 'text-primary font-bold border-b-2 border-primary py-1'
                    : 'text-secondary hover:text-primary hover:bg-surface-container-low px-2 py-1 rounded'
                }`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-bold text-center py-3.5 px-7 rounded-lg shadow-sm mt-2"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}