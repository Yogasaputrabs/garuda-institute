export default function TentangGaruda() {
  return (
    <section id="tentang" className="py-16 md:py-section-gap bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-center">
            <img
              alt="Tentang Garuda Institute"
              className="w-full h-auto object-cover rounded-2xl"
              src="/assets/02.2-deskripsi/deskripsi.webp"
            />
            <a
              href="https://maps.app.goo.gl/p7f5gNUoUHwTB2Fk7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-6 inline-flex items-center gap-2 bg-primary text-on-primary font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg shadow-lg hover:shadow-primary/20 transition-all w-fit"
            >
              <span className="material-symbols-outlined text-base">location_on</span>
              Lihat Lokasi Kami
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed rounded-full mb-6 w-fit">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>school</span>
              <span className="text-primary font-label-md text-label-md tracking-wide uppercase">TENTANG GARUDA INSTITUTE</span>
            </span>
            <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-4 md:mb-6">
              Persiapan CPNS yang Lebih Terarah, Dimulai dari Sini
            </h2>
            <div className="space-y-4 md:space-y-5 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                Didirikan pada tahun 2023, Garuda Institute hadir untuk membantu calon peserta seleksi CPNS mempersiapkan diri melalui program pelatihan yang terstruktur dan berorientasi pada kesiapan menghadapi seleksi.
              </p>
              <p>
                Melalui pembelajaran tatap muka, latihan soal, simulasi CAT, serta pendampingan mentor, peserta dapat mempelajari materi, melatih kemampuan, dan mengevaluasi bagian yang masih perlu ditingkatkan.
              </p>
              <p>
                Garuda Institute percaya bahwa persiapan yang baik dimulai dari proses belajar yang terarah, latihan yang konsisten, dan kemauan untuk terus berkembang.
              </p>
            </div>
            <p className="text-secondary font-body-md text-sm md:text-base mt-6 md:mt-8 max-w-xl">
              Kenali program pelatihan kami dan mulai persiapkan langkah Anda menuju seleksi CPNS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}