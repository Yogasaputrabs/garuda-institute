import { WHATSAPP_URL } from '../constants/links';

const problems = [
  {
    icon: 'psychology_alt',
    title: 'Kebingungan Arah',
    description: 'Tidak tahu harus mulai belajar dari mana karena cakupan materi yang sangat luas dan membingungkan.'
  },
  {
    icon: 'menu_book',
    title: 'Materi Terlalu Banyak',
    description: 'Kewalahan dengan tumpukan buku dan modul yang tidak terstruktur, membuat proses belajar tidak efektif.'
  },
  {
    icon: 'timer_off',
    title: 'Kurang Latihan',
    description: 'Jarang melakukan tryout berbasis CAT yang nyata, sehingga grogi dan kesulitan mengatur waktu saat ujian.'
  }
];

export default function Problems() {
  return (
    <section id="masalah" className="bg-surface-container-low py-16 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop text-center">
        <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-4">
          Masalah Yang Sering Dihadapi Calon PNS
        </h2>
        <p className="text-secondary font-body-md max-w-2xl mx-auto mb-12 md:mb-16">
          Kami memahami tantangan berat dalam menghadapi ujian CPNS. Garuda Institute hadir untuk memberikan solusi konkret bagi Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="bg-surface p-8 md:p-10 rounded-xl whisper-shadow border border-outline-variant hover:border-primary transition-all duration-300 group cursor-default py-10 md:py-12 flex flex-col items-center"
              style={{ transform: 'translateY(0px)' }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 md:mb-8 transition-colors group-hover:bg-primary-container">
                <span className="material-symbols-outlined text-on-primary text-3xl">{problem.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg md:text-headline-md mb-3 md:mb-4 text-center">
                {problem.title}
              </h3>
              <p className="text-on-surface-variant text-center font-body-md">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-surface-container-lowest p-6 rounded-2xl border border-primary/20 max-w-4xl w-full justify-between shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <span className="material-symbols-outlined text-primary text-4xl hidden sm:block">support_agent</span>
            <div>
              <p className="font-bold text-on-background text-lg">Ingin tahu peluang kelulusan Anda?</p>
              <p className="text-secondary text-sm md:text-body-md mt-1">Dapatkan analisis gratis dari konsultan pendidikan kami.</p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary-container text-on-primary-container font-bold py-3 px-8 rounded-lg hover:scale-105 transition-all text-center whitespace-nowrap"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}