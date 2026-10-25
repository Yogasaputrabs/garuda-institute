import { WHATSAPP_URL } from '../constants/links';

const features = [
  {
    icon: 'check',
    title: 'Kelas Tatap Muka Intensif',
    description: 'Belajar langsung bersama mentor dengan materi dan latihan yang terstruktur.'
  },
  {
    icon: 'check',
    title: 'Simulasi Analisis Tryout',
    description: 'Simulasi CAT dan analisis hasil untuk mengukur perkembangan kemampuan Anda.'
  },
  {
    icon: 'check',
    title: 'Pendampingan & Coaching',
    description: 'Bimbingan untuk membantu meningkatkan strategi belajar dan kesiapan menghadapi seleksi.'
  }
];

const pricingCategories = [
  {
    icon: 'stars',
    title: 'Materi Pembelajaran',
    items: [
      'Modul TWK Terlengkap',
      'Materi TIU & TKP Update',
      'Kesamaptaan & Jasmani',
      'Tips Dan Strategi Sukses'
    ]
  },
  {
    icon: 'task_alt',
    title: 'Latihan & Simulasi',
    items: [
      '1000+ Soal Latihan',
      'Try Out Simulasi',
      'Pembahasan Detail',
      'Analisis Kemampuan'
    ]
  },
  {
    icon: 'groups',
    title: 'Bimbingan Intensif',
    items: [
      'Kelas Offline',
      'Konsultasi Personal',
      'Grup Diskusi Eksklusif',
      'Mentor Berpengalaman'
    ]
  },
  {
    icon: 'card_giftcard',
    title: 'Bonus Eksklusif',
    items: [
      'Akses Selamanya',
      'Update Materi Gratis',
      'Garansi Mengulang Kembali'
    ]
  }
];

export default function Program() {
  return (
    <section id="program" className="py-16 md:py-section-gap relative">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-4 md:mb-6">
              Program Pelatihan Komprehensif
            </h2>
            <p className="text-secondary text-body-md md:text-body-lg mb-8 md:mb-12">
              Program intensif yang dirancang secara sistematis untuk membantu Anda mempersiapkan seleksi CPNS dengan lebih terarah.
            </p>
            <div className="space-y-6 text-left max-w-md mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background">{feature.title}</h4>
                    <p className="text-secondary text-sm md:text-base mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface p-6 md:p-10 whisper-shadow border-4 border-primary/10 relative overflow-hidden rounded-2xl mx-auto w-full max-w-lg lg:max-w-none" style={{ transform: 'translateY(0px)' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary px-6 py-1.5 rounded-b-xl text-on-primary font-label-md text-xs md:text-sm uppercase tracking-wider z-10 whitespace-nowrap">Biaya Investasi</div>
            <div className="flex flex-col h-full pt-8">
              <div className="text-center mb-8">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Rp 7.500.000</div>
                <div className="text-secondary font-body-md text-sm md:text-base">Paket Lengkap All-in-One</div>
                <div className="mt-4 inline-block bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full font-label-md text-xs md:text-sm">DP Min 3 - 4 Juta</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
                {pricingCategories.map((category, index) => (
                  <div key={category.title} className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-bold mb-3">
                      <span className="material-symbols-outlined text-xl">{category.icon}</span>
                      <span className="text-xs md:text-sm uppercase tracking-wide">{category.title}</span>
                    </div>
                    <ul className="space-y-2.5 text-sm text-on-surface-variant">
                      {category.items.map((item, itemIndex) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-lg shrink-0">check</span>
                          <span className="">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center mt-auto">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center whitespace-nowrap bg-primary px-6 py-4 md:py-4.5 rounded-xl text-on-primary font-bold text-base md:text-lg hover:bg-primary-container transition-all shadow-lg active:scale-95"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}