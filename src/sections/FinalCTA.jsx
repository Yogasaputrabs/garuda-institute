import { WHATSAPP_URL } from '../constants/links';

export default function FinalCTA() {
  return (
    <section id="kontak" className="py-16 md:py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="bg-primary rounded-3xl md:rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -mr-24 md:-mr-32 -mt-24 md:-mt-32" />
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -ml-24 md:-ml-32 -mb-24 md:-mb-32" />
          <h2 className="font-headline-lg md:font-display-lg text-3xl md:text-display-lg text-on-primary mb-4 md:mb-6 relative z-10 font-bold">
            Wujudkan Impian Jadi PNS Sekarang!
          </h2>
          <p className="text-on-primary/90 text-sm md:text-body-lg mb-8 md:mb-12 max-w-2xl mx-auto relative z-10 font-body-md">
            Jangan biarkan kesempatan emas berlalu begitu saja. Persiapkan dirimu bersama akademi CPNS terbaik di Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center relative z-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-on-primary text-on-primary font-bold py-3 md:py-4 px-8 md:px-12 rounded-xl text-base md:text-lg hover:bg-on-primary/10 transition-all"
            >
              Chat Admin WA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
