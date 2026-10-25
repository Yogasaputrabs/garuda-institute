const trainingItems = [
  {
    id: 1,
    image: '/assets/03-training/training-01.webp',
    alt: 'Keunggulan Akademik',
    icon: 'school',
    badge: 'Kurikulum Unggulan',
    title: 'Keunggulan Akademik (TIU, TWK, & TKP)',
    description: 'Kuasai materi seleksi dengan bimbingan intensif yang mencakup Tes Intelegensia Umum (TIU), Tes Wawasan Kebangsaan (TWK), dan Tes Karakteristik Pribadi (TKP). Kurikulum kami dirancang khusus untuk mengasah logika, memperdalam nasionalisme, dan membentuk mentalitas unggul sebagai calon abdi negara.',
    reverse: false
  },
  {
    id: 2,
    image: '/assets/03-training/training-02.webp',
    alt: 'Kebersamaan & Kedisiplinan',
    icon: 'groups',
    badge: 'Pembentukan Karakter',
    title: 'Kebersamaan & Kedisiplinan',
    description: 'Membangun jiwa korsa dan kedisiplinan tinggi melalui latihan lapangan rutin. Di Garuda Institute, Anda tidak berjuang sendiri; Anda adalah bagian dari komunitas yang saling mendukung untuk mencapai impian menjadi abdi negara.',
    reverse: true
  },
  {
    id: 3,
    image: '/assets/03-training/training-03.webp',
    alt: 'Interval Renang & Ketangkasan Air',
    icon: 'pool',
    badge: 'Pelatihan Fisik Prima',
    title: 'Interval Renang & Ketangkasan Air',
    description: 'Persiapan fisik komprehensif mencakup teknik renang dan ketangkasan air yang dipandu langsung oleh instruktur ahli. Kami memastikan setiap calon siswa memiliki standar fisik yang melampaui kriteria seleksi nasional.',
    reverse: false
  }
];

export default function Training() {
  return (
    <section id="materi" className="py-16 md:py-section-gap bg-transparent">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-4">
            Materi & Program Latihan Nyata
          </h2>
          <p className="text-secondary font-body-md max-w-2xl mx-auto">
            Kami tidak hanya melatih kecerdasan intelektual, tetapi juga membentuk karakter dan fisik yang tangguh.
          </p>
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          {trainingItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 group ${item.reverse ? '' : ''}`}
            >
              <div className={`w-full md:w-1/2 ${item.reverse ? 'order-2' : 'order-1'} overflow-hidden rounded-2xl border border-outline-variant transition-all shadow-lg aspect-[4/3] lg:aspect-video`}>
                <img
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                />
              </div>
              <div className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left ${item.reverse ? 'order-1' : 'order-2'} bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden whisper-shadow transition-all group-hover:border-primary/40`}>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-2xl hidden md:block" />
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-3 w-fit mx-auto md:mx-0">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  <span className="text-primary font-label-md text-xs font-bold tracking-wide uppercase">{item.badge}</span>
                </div>
                <h4 className="font-headline-md text-xl md:text-2xl font-bold text-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}