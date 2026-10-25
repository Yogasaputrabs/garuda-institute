import { WHATSAPP_URL } from '../constants/links';

const programLinks = [
  { label: 'Pelatihan TWK', href: '#program' },
  { label: 'Pelatihan TIU', href: '#program' },
  { label: 'Pelatihan TKP', href: '#program' },
  { label: 'Try Out Simulasi', href: '#program' }
];

const bantuanLinks = [
  { label: 'Konsultasi Mentor', href: '#kontak' },
  { label: 'Panduan Belajar', href: '#' },
  { label: 'Kontak Support', href: WHATSAPP_URL, external: true },
  { label: 'Syarat & Ketentuan', href: '#' }
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-gutter px-4 md:px-margin-desktop py-12 md:py-16 max-w-container-max mx-auto">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img
              alt="Garuda Institute Logo"
              className="h-16 md:h-20 w-auto object-contain"
              src="/assets/01-logo/logo-main-02.png"
            />
          </div>
          <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-6">
            Jl. Kalpataru 5 No.12A Blk K8, RT.005/RW.039, Sumberjaya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17517
          </p>
        </div>
        <div className="">
          <h6 className="font-bold text-on-surface mb-4 md:mb-6 uppercase tracking-wider text-sm">Program</h6>
          <ul className="space-y-3 md:space-y-4">
            {programLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm md:text-base"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold text-on-surface mb-4 md:mb-6 uppercase tracking-wider text-sm">Bantuan</h6>
          <ul className="space-y-3 md:space-y-4">
            {bantuanLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm md:text-base"
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold text-on-surface mb-4 md:mb-6 uppercase tracking-wider text-sm">Kontak</h6>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex gap-2 items-start">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm md:text-base"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                @acd_garuda
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <span className="text-on-surface-variant font-body-md text-sm md:text-base">0858-1007-8161</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="material-symbols-outlined text-primary text-xl">schedule</span>
              <span className="text-on-surface-variant font-body-md text-sm md:text-base">24/7 Support</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 md:px-margin-desktop py-6 max-w-container-max mx-auto border-t border-outline-variant text-center">
        <p className="text-on-surface-variant font-body-md text-sm">
          &copy; 2026 Garuda Institute CPNS Academy. Mewujudkan Insan Pengabdi Negara Berprestasi.
        </p>
      </div>
    </footer>
  );
}
