import Reveal from '../components/Reveal'

const focusSlides = [
  [
    {
      icon: 'bi bi-book',
      title: 'Education',
      text: 'Providing quality education to underprivileged children to secure their future.',
    },
    {
      icon: 'bi bi-heart-pulse',
      title: 'Healthcare',
      text: 'Ensuring access to basic health facilities and promoting hygiene awareness.',
    },
    {
      icon: 'bi bi-tree',
      title: 'Environment',
      text: 'Conducting tree plantations and promoting sustainable living practices.',
    },
    {
      icon: 'bi bi-people',
      title: 'Women Empowerment',
      text: 'Supporting women through training and employment opportunities for self-reliance.',
    },
  ],
  [
    {
      icon: 'bi bi-flower1',
      title: 'Tree Plantation',
      text: 'Promoting a greener environment for a sustainable future.',
    },
    {
      icon: 'bi bi-droplet',
      title: 'Clean Water',
      text: 'Providing access to clean and safe drinking water for all.',
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Child Care',
      text: "Supporting children's nutrition and emotional well-being.",
    },
    {
      icon: 'bi bi-heart',
      title: 'Social Welfare',
      text: 'Helping marginalized communities with resources and care.',
    },
  ],
]

const gallerySlides = [
  [
    {
      image: '/images/gallery-food.jpeg',
      title: 'Provide healthy food',
      text: 'Good nutrition is the foundation of a bright future. We provide wholesome and balanced meals to children in need, helping them grow healthy, stay active, and concentrate better in school while combating malnutrition.',
    },
    {
      image: '/images/gallery-water.jpeg',
      title: 'Water for all children',
      text: 'Access to clean water is essential for a healthy childhood. We ensure that every child in underserved communities has safe drinking water, reducing diseases and supporting their growth, education, and overall well-being.',
    },
    {
      image: '/images/gallery-treatment.jpeg',
      title: 'Help for treatment',
      text: 'Every child deserves health and care. We provide medical support, treatment, and access to healthcare services for children and families in need, helping them recover from illness and lead a healthier, happier life.',
    },
  ],
  [
    {
      image: '/images/tree1.jpg',
      title: 'Plantation Tree',
      text: 'Trees are vital for a sustainable future. We conduct tree plantation drives to restore green spaces, improve air quality, and create a healthier environment for children and communities to live, learn, and thrive.',
    },
    {
      image: '/images/about1.jpg',
      title: 'Education for poor children',
      text: 'Education transforms lives. We support underprivileged students with school supplies, scholarships, and mentorship, enabling them to pursue learning opportunities, overcome barriers, and build a brighter, self-reliant future for themselves and their families.',
    },
  ],
]

export default function Causes() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="hero-section text-center"
        style={{
          background: "url('/images/tree1.jpg') no-repeat center center",
          backgroundSize: 'cover',
          minHeight: '46vh',
        }}
      >
        <div className="container">
          <span className="eyebrow justify-content-center">What We Champion</span>
          <h1 className="display-5 fw-bold">Our Causes</h1>
          <p className="lead mt-2">
            Focused programs, real photos from the field, and a clear
            picture of where your support goes.
          </p>
        </div>
      </section>

      {/* Focus Areas Carousel */}
      <Reveal as="section" id="causes" className="causes-section py-5 text-center">
        <div className="container">
          <div className="mb-5">
            <span className="eyebrow justify-content-center">Focus Areas</span>
            <h2 className="fw-bold text-teal py-2">Where We Work</h2>
            <p className="text-dark mb-5">
              We are committed to creating a positive impact in every
              community we touch.
            </p>
          </div>

          <div
            id="causesCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {focusSlides.map((slide, i) => (
                <div
                  key={i}
                  className={'carousel-item' + (i === 0 ? ' active' : '')}
                >
                  <div className="row g-4">
                    {slide.map((item) => (
                      <div className="col-md-6 col-lg-3" key={item.title}>
                        <div className="cause-card p-4 shadow-sm h-100">
                          <div className="icon mb-3">
                            <i className={item.icon} />
                          </div>
                          <h5 className="fw-semibold mb-2">{item.title}</h5>
                          <p className="text-dark small">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls mt-4">
              <button
                className="btn btn-outline-teal me-2"
                type="button"
                data-bs-target="#causesCarousel"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left" />
              </button>
              <button
                className="btn btn-outline-teal"
                type="button"
                data-bs-target="#causesCarousel"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Gallery Carousel */}
      <Reveal as="section" id="gallery" className="gallery-section py-5 text-center">
        <div className="container">
          <span className="eyebrow justify-content-center">In The Field</span>
          <h2 className="fw-bold text-teal mb-2">Our Causes In Action</h2>
          <p className="text-dark mb-5">
            You can help the needy people by donating.
          </p>

          <div
            id="galleryCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-bs-wrap="true"
          >
            <div className="carousel-inner">
              {gallerySlides.map((slide, i) => (
                <div
                  key={i}
                  className={'carousel-item' + (i === 0 ? ' active' : '')}
                >
                  <div className="row g-4 justify-content-center">
                    {slide.map((item) => (
                      <div className="col-md-6 col-lg-4" key={item.title}>
                        <div className="gallery-card">
                          <img
                            src={item.image}
                            className="img-fluid rounded"
                            alt={item.title}
                          />
                          <h3 className="fw-bold">{item.title}</h3>
                          <p className="mt-3 text-dark small">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls mt-4">
              <button
                className="btn btn-outline-teal me-2"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left" />
              </button>
              <button
                className="btn btn-outline-teal"
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  )
}
