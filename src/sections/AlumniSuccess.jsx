const featuredAlumni = [
  {
    id: 1,
    name: 'Djati Priambada',
    position: 'SIPSS POLRI 2024',
    image: '/assets/04-alumni-featured/alumni-featured-01.webp',
    testimonial: '"Berkat bimbingan intensif dan kurikulum yang sangat relevan di Garuda Institute, saya berhasil melewati setiap tahapan seleksi SIPSS dengan percaya diri. Terima kasih atas dukungannya!"',
    reverse: false
  },
  {
    id: 2,
    name: 'Aziz Putra',
    position: 'BINTARA POLRI 2024',
    image: '/assets/04-alumni-featured/alumni-featured-02.webp',
    testimonial: '"Metode pengajaran yang praktis dan simulasi CAT yang sangat mirip dengan aslinya membantu saya memetakan kemampuan saya. Garuda Institute adalah pilihan terbaik untuk persiapan Polri."',
    reverse: true
  },
  {
    id: 3,
    name: 'Ari Wibowo',
    position: 'AKMIL 2024',
    image: '/assets/04-alumni-featured/alumni-featured-03.webp',
    testimonial: '"Disiplin dan pembentukan karakter yang saya dapatkan di sini sangat membantu saya dalam menghadapi seleksi AKMIL. Mentor-mentornya sangat berpengalaman dan suportif."',
    reverse: false
  },
  {
    id: 4,
    name: 'Yolanda Dwi Putri',
    position: 'FPU DI BANGUI AFRIKA TENGAH',
    image: '/assets/04-alumni-featured/alumni-featured-04.webp',
    testimonial: '"Pengalaman belajar di Garuda Institute memberikan fondasi yang kuat bagi karier saya. Materi yang diajarkan sangat komprehensif dan membantu saya mencapai posisi saat ini."',
    reverse: true
  }
];

export default function AlumniSuccess() {
  return (
    <section id="kisah-sukses" className="bg-surface py-16 md:py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-4">
            Kisah Sukses Alumni Kami
          </h2>
          <p className="text-secondary font-body-md max-w-2xl mx-auto">
            Mendengar langsung dari alumni yang kini telah mengabdi pada negara dengan dedikasi tinggi.
          </p>
        </div>
        <div className="space-y-16 md:space-y-24 mb-20 md:mb-32">
          {featuredAlumni.map((alumni, index) => (
            <div
              key={alumni.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${alumni.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 relative transition-transform duration-500 group-hover:scale-[1.02] rounded-xl flex justify-center">
                <img
                  alt={alumni.name}
                  className="relative z-10 w-full max-w-md h-auto object-contain rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                  src={alumni.image}
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant relative">
                <div className={`absolute ${alumni.reverse ? '-right-3' : '-left-3'} top-1/2 -translate-y-1/2 w-6 h-6 bg-surface-container-lowest ${alumni.reverse ? 'border-r border-t' : 'border-l border-b'} border-outline-variant rotate-45 hidden md:block`} />
                <div className="flex gap-1 text-[#FFD700] mb-4 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  ))}
                </div>
                <h3 className="font-headline-md md:font-display-lg text-2xl md:text-3xl text-primary mb-2 font-bold">
                  {alumni.name}
                </h3>
                <p className="font-bold text-secondary mb-4 md:mb-6 uppercase tracking-wider text-xs md:text-sm">
                  {alumni.position}
                </p>
                <p className="text-on-surface-variant font-body-md text-sm md:text-base italic leading-relaxed">
                  {alumni.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}