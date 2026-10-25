const benefits = [
  {
    icon: 'trending_up',
    title: 'Proven Method',
    description: 'Metode belajar berbasis riset soal 5 tahun terakhir untuk akurasi prediksi materi.'
  },
  {
    icon: 'workspace_premium',
    title: 'Expert Instructors',
    description: 'Diajar langsung oleh ASN berprestasi dan ahli psikologi pendidikan.'
  },
  {
    icon: 'forum',
    title: 'Group Discussion',
    description: 'Ekosistem kompetitif yang sehat untuk saling berbagi ilmu dan motivasi.'
  },
  {
    icon: 'analytics',
    title: 'Deep Analysis',
    description: 'Analisis performa mendalam untuk mengetahui di mana titik lemah Anda.'
  },
  {
    icon: 'support_agent',
    title: '24/7 Support',
    description: 'Layanan bantuan akademik kapanpun Anda mengalami kesulitan belajar.'
  },
  {
    icon: 'verified_user',
    title: 'Free retake guarantee',
    description: 'Jaminan mengulang kembali tanpa biaya tambahan.'
  }
];

export default function WhyGaruda() {
  return (
    <section id="mengapa" className="bg-surface py-16 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-4">
            Mengapa Memilih Garuda Institute
          </h2>
          <p className="text-secondary font-body-md max-w-2xl mx-auto">
            Keunggulan kami yang menjadikan alumni kami selalu mendominasi daftar kelulusan nasional.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-gutter">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant whisper-shadow transition-all hover:border-primary group text-center sm:text-left"
              style={{ transform: 'translateY(0px)' }}
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-5 md:mb-6 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">{benefit.icon}</span>
              </div>
              <h4 className="font-headline-md text-lg md:text-xl font-bold text-on-background mb-3">
                {benefit.title}
              </h4>
              <p className="text-on-surface-variant font-body-md text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}