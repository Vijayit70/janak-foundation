import { Link } from 'react-router-dom'
import CauseCard from '../components/CauseCard'
import Reveal from '../components/Reveal'

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
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-center"
        style={{
          background: "url('/images/hero-children.jpg') no-repeat center center",
          backgroundSize: 'cover',
          minHeight: '80vh',
        }}
      >
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
          <span className="eyebrow justify-content-center">Janak Foundation</span>
          <h1 className="display-5 fw-bold">Together, We Can Make a Difference</h1>
          <p className="lead mt-2">
            Join hands with us to empower communities through education, environment, and equality.
          </p>
          <div className="d-flex gap-3 mt-3">
            <Link to="/causes" className="btn btn-join">
              Get Involved
            </Link>
            <Link to="/donate" className="btn btn-outline-light">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

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
