import { Link } from 'react-router-dom'
import CauseCard from '../components/CauseCard'
import Reveal from '../components/Reveal'
import useBootstrapCarousel from '../hooks/useBootstrapCarousel'

const heroSlides = [
  {
    image: '/images/hero-children.jpg',
    title: 'Together, We Can Make a Difference',
    text: 'Join hands with us to empower communities through education, environment, and equality.',
    primary: { to: '/causes', label: 'Get Involved' },
    secondary: { to: '/donate', label: 'Donate Now' },
  },
  {
    image: '/images/tree.jpg',
    title: 'Volunteer With Us',
    text: 'Be a part of community projects and make a real impact.',
    primary: { to: '/volunteer', label: 'Join Us' },
    secondary: { to: '/causes', label: 'Our Projects' },
  },
  {
    image: '/images/banner.jpg',
    title: 'Support Our Causes',
    text: 'Your donations help us reach more people in need.',
    primary: { to: '/donate', label: 'Donate Now' },
    secondary: { to: '/contact', label: 'Contact' },
  },
]

const focusAreas = [
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
]

export default function Home() {
  const carouselRef = useBootstrapCarousel({ interval: 5000 })

  return (
    <>
      {/* Hero Carousel */}
      <div
        ref={carouselRef}
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.title}
              className={'carousel-item hero-slide' + (i === 0 ? ' active' : '')}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <span className="eyebrow">Janak Foundation</span>
                <h1 className="display-5 fw-bold">{slide.title}</h1>
                <p className="lead">{slide.text}</p>
                <div className="d-flex gap-3 mt-3">
                  <Link to={slide.primary.to} className="btn btn-join">
                    {slide.primary.label}
                  </Link>
                  <Link to={slide.secondary.to} className="btn btn-outline-light">
                    {slide.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Organic wave divider */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,32 C240,60 480,0 720,18 C960,36 1200,58 1440,24 L1440,60 L0,60 Z"
            fill="#fbf7ee"
          />
        </svg>
      </div>

      {/* About Preview */}
      <Reveal as="section" className="about-section py-5" >
        <img src="/logo-mark.svg" alt="" className="section-watermark" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/images/about.jpg"
                className="img-fluid rounded shadow"
                alt="Children learning with Janak Foundation"
              />
            </div>
            <div className="col-lg-6">
              <span className="eyebrow">Who we are</span>
              <h2 className="fw-bold mb-3">About Our Foundation</h2>
              <p className="lead text-dark mb-3">
                Founded with a mission to bring hope and support to
                underprivileged families, Janak Foundation has been working
                tirelessly to provide essential resources including food,
                clothing, school supplies, and emotional support to those who
                need it most.
              </p>
              <p className="text-muted mb-4">
                Since our inception, we've been working tirelessly to bring
                change in rural communities — empowering children with
                education, supporting women through skill programs, and
                spreading awareness about health and environment.
              </p>
              <Link to="/work" className="btn btn-learn">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Focus Areas */}
      <Reveal as="section" className="causes-section py-5 text-center">
        <div className="container">
          <div className="mb-5">
            <span className="eyebrow">Our Impact</span>
            <h2 className="fw-bold text-teal">Our Focus Areas</h2>
            <p className="text-dark">
              We are committed to creating a positive impact in every
              community we touch.
            </p>
          </div>

          <div className="row g-4">
            {focusAreas.map((area) => (
              <CauseCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </Reveal>
    </>
  )
}
