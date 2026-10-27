const alumniGridData = [
  {
    id: 1,
    name: 'Rendy Dwiendra R',
    position: 'BINTARA POLRI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-01.webp',
    visible: 'all'
  },
  {
    id: 2,
    name: 'Surya Eka Prasetya',
    position: 'BINTARA POLRI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-02.webp',
    visible: 'all'
  },
  {
    id: 3,
    name: 'M. Rafli Permana',
    position: 'KAI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-03.webp',
    visible: 'all'
  },
  {
    id: 4,
    name: 'Riangga Aditya',
    position: 'PAPK TNI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-04.webp',
    visible: 'all'
  },
  {
    id: 5,
    name: 'Aditya Rizky',
    position: 'CPNS 2024',
    image: '/assets/05-alumni-grid/alumni-grid-05.webp',
    visible: 'sm'
  },
  {
    id: 6,
    name: 'Lumbu Wisesa',
    position: 'BINTARA POLRI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-06.webp',
    visible: 'md'
  },
  {
    id: 7,
    name: 'Dany Raihan E.W.',
    position: 'BINTARA POLRI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-07.webp',
    visible: 'md'
  },
  {
    id: 8,
    name: 'Dhany Bagus Satrio',
    position: 'TAMTAMA POLRI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-08.webp',
    visible: 'md'
  },
  {
    id: 9,
    name: 'Jordan Arnaldo S.',
    position: 'BINTARA POLRI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-09.webp',
    visible: 'md'
  },
  {
    id: 10,
    name: 'Dany Raehan P.W',
    position: 'BINTARA POLRI 2024',
    image: '/assets/05-alumni-grid/alumni-grid-10.webp',
    visible: 'md'
  }
];

export default function AlumniGrid() {
  return (
    <div>
      <div className="text-center mb-10 md:mb-12">
        <h3 className="font-headline-md md:font-headline-lg text-xl md:text-2xl text-on-background mb-4 font-bold">
          Alumni Sukses Lainnya
        </h3>
        <div className="w-16 md:w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {alumniGridData.map((alumni, index) => (
          <div
            key={alumni.id}
            className={`text-center group bg-white p-3 md:p-4 rounded-xl shadow-sm border border-outline-variant hover:border-primary transition-all`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg mb-3 bg-gray-100 flex items-center justify-center">
              <img
                alt={alumni.name}
                className="w-full h-full object-contain p-2"
                src={alumni.image}
              />
            </div>
            <p className="font-bold text-on-background text-xs md:text-sm truncate px-1">
              {alumni.name}
            </p>
            <p className="text-primary text-[10px] md:text-xs font-bold truncate">
              {alumni.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}