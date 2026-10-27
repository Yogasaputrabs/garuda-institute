import { WHATSAPP_URL } from '../constants/links';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-section-gap">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-center lg:text-left">
        <div className="z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed rounded-full mb-6">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
            <span className="text-on-primary-fixed font-label-md text-label-md">CPNS Academy Terpercaya Indonesia</span>
          </div>
          <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-6 md:mb-8 leading-tight">
            Raih Impian Jadi Abdi Negara Dengan <span className="text-gold-gradient">Persiapan Terbaik</span>
          </h1>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-secondary mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
            Bimbingan belajar eksklusif dengan kurikulum teruji dan mentor berpengalaman untuk membantu Anda menaklukkan seleksi Polri, Sekolah Kedinasan, TNI, dan CPNS tahun ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
            >
              Hubungi Kami
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              <img
                alt="Dany Raihan Edwin W"
                className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                src="/assets/02.3-hero-alumni/dany-raihan-edwin.webp"
              />
              <img
                alt="Jordan Arnaldo S."
                className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                src="/assets/02.3-hero-alumni/jordan-arnaldo-sihombing.webp"
              />
              <img
                alt="Lumbu Wisesa"
                className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                src="/assets/02.3-hero-alumni/lumbu-wisesa.webp"
              />
            </div>
            <p className="text-secondary font-label-md text-label-md">Bergabung dengan alumni sukses lainnya</p>
          </div>
        </div>
<div className="relative order-1 lg:order-2 px-4 md:px-0 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full blur-3xl pointer-events-none -z-0 opacity-70" style={{ background: 'radial-gradient(circle, rgba(247, 189, 72, 0.18) 0%, rgba(247, 189, 72, 0.05) 50%, transparent 75%)' }} />
<div className="relative z-10 w-full flex justify-center items-end">
                <img
                  alt="Alumni dan Taruna Abdi Negara Garuda Institute"
                  className="relative z-10 w-full max-w-md lg:max-w-lg h-auto object-contain transition-transform duration-500 hover:scale-[1.02] drop-shadow-2xl"
                  src="/assets/02-hero/hero-main.webp"
                  style={{ maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)' }}
                />
              </div>
        </div>
      </div>
    </section>
  );
}