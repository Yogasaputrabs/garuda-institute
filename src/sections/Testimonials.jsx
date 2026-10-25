const testimonialsData = [
  {
    id: 1,
    image: '/assets/09-testimoni/testimoni-1.webp',
    alt: 'Testimonial Alumni 1'
  },
  {
    id: 2,
    image: '/assets/09-testimoni/testimoni-2.webp',
    alt: 'Testimonial Alumni 2'
  },
  {
    id: 3,
    image: '/assets/09-testimoni/testimoni-3.webp',
    alt: 'Testimonial Alumni 3'
  },
  {
    id: 4,
    image: '/assets/09-testimoni/testimoni-4.webp',
    alt: 'Testimonial Alumni 4'
  },
  {
    id: 5,
    image: '/assets/09-testimoni/testimoni-5.webp',
    alt: 'Testimonial Alumni 5'
  },
  {
    id: 6,
    image: '/assets/09-testimoni/testimoni-6.webp',
    alt: 'Testimonial Alumni 6'
  },
  {
    id: 7,
    image: '/assets/09-testimoni/testimoni-7.webp',
    alt: 'Testimonial Alumni 7'
  },
  {
    id: 8,
    image: '/assets/09-testimoni/testimoni-8.webp',
    alt: 'Testimonial Alumni 8'
  },
  {
    id: 9,
    image: '/assets/09-testimoni/testimoni-9.webp',
    alt: 'Testimonial Alumni 9',
    hiddenLg: true
  }
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-surface-container-low py-16 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-4">
            Testimoni Alumni
          </h2>
          <p className="text-secondary font-body-md max-w-2xl mx-auto">
            Kumpulan testimoni dan kabar kelulusan langsung dari para pejuang yang telah berhasil meraih impian mereka bersama Garuda Institute.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all duration-300 group ${testimonial.hiddenLg ? 'hidden lg:block' : ''}`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  alt={testimonial.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={testimonial.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}