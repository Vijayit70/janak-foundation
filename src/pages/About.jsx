import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import useBootstrapCarousel from '../hooks/useBootstrapCarousel'

const team = [
  {
    name: 'Mr. Vijay Tiwari',
    role: 'Founder',
    bio: 'Mr. Vijay Tiwari is the visionary behind Janak Foundation, founded with a deep-rooted belief that every individual — regardless of background — deserves access to education, healthcare, and the opportunity to live with dignity. Driven by firsthand experience with the challenges faced by underprivileged communities in Tikamgarh district, he established the Foundation to create lasting, sustainable change through grassroots action. Under his leadership, Janak Foundation has grown into a trusted platform for education, womens empowerment, environmental conservation, and community welfare — with Vijay continuing to be a hands-on driving force in every initiative the organization undertakes.',
  },
  {
    name: 'Mr. Jayhind Pal',
    role: 'Co-Founder',
    bio: "Mr. Jayhind Pal co-founded Janak Foundation alongside a shared vision of empowering underserved communities through practical, sustainable support. He focuses closely on the Foundation's skill development and women's empowerment programs, working directly with local families to build pathways toward self-reliance and economic independence. Known for his grassroots approach and genuine connection with the communities he serves, Jayhind plays a key role in shaping programs that are not just well-intentioned, but truly responsive to the everyday realities people face in rural Madhya Pradesh.",
  },
  {
    name: 'Mr. Ajay Tiwari',
    role: 'Managing Director',
    bio: 'Mr. Ajay Tiwari serves as the Managing Director of Janak Foundation, overseeing the organizations day-to-day operations and long-term strategic direction. With a strong commitment to transparent and effective governance, he ensures that every program — from education initiatives to healthcare outreach — translates into real, measurable impact for the communities the Foundation serves. Ajay works closely with the founding team to build partnerships, strengthen operational systems, and expand the Foundations reach across rural Madhya Pradesh, always keeping the needs of the people at the center of every decision.',
  },
]

const visionMission = [
  {
    title: 'OUR VISION',
    text: 'We envision a nation where every individual regardless of their background has access to education, healthcare, equality, and the opportunity to live with dignity. Janak Foundation aims to create a self-reliant society free from poverty and discrimination, where compassion and empowerment light the way for every family.',
  },
  {
    title: 'OUR MISSION',
    text: 'At Janak Foundation, our mission is to uplift underprivileged communities through education, skill development, health awareness, and women empowerment. We work tirelessly to provide basic necessities, promote sustainable livelihoods, and inspire social change ensuring that hope and opportunity reach every corner of society.',
  },
]

const coreValues = [
  {
    icon: 'bi bi-person-hearts',
    title: 'Empowerment',
    text: 'We believe in empowering individuals and communities to take charge of their own development, building skills, knowledge, and confidence.',
  },
  {
    icon: 'bi bi-flower1',
    title: 'Sustainability',
    text: 'We implement lasting solutions designed with the future in mind, so the benefits we bring endure for generations.',
  },
  {
    icon: 'bi bi-shield-check',
    title: 'Equity',
    text: 'We promote fairness and equality, bridging the gap between the privileged and the underprivileged with equal opportunity for all.',
  },
  {
    icon: 'bi bi-people',
    title: 'Collaboration',
    text: 'We work closely with local communities, governments, and organizations to build a network of support and resources.',
  },
]

const objectives = [
  {
    icon: 'bi bi-book',
    title: 'Education',
    text: 'Access to quality education for children and adults, unlocking their full potential.',
  },
  {
    icon: 'bi bi-heart-pulse',
    title: 'Healthcare',
    text: 'Essential healthcare services, preventive care, and awareness of health issues.',
  },
  {
    icon: 'bi bi-graph-up-arrow',
    title: 'Economic Development',
    text: 'Vocational training, microfinance, and entrepreneurship programs for advancement.',
  },
  {
    icon: 'bi bi-tree',
    title: 'Environmental Protection',
    text: 'Sustainable practices and conservation through education and community engagement.',
  },
]

export default function About() {
  const teamCarouselRef = useBootstrapCarousel({ interval: 6000 })
  const missionCarouselRef = useBootstrapCarousel({ interval: 6000 })

  return (
    <>
      {/* Page Hero */}
      <section
        className="hero-section text-center"
        style={{
          background: "url('/images/about1.jpg') no-repeat center 30%",
          backgroundSize: 'cover',
          minHeight: '46vh',
        }}
      >
        <div className="container">
          <span className="eyebrow justify-content-center">Our Story</span>
          <h1 className="display-5 fw-bold">About Janak Foundation</h1>
          <p className="lead mt-2">
            Building a self-reliant, dignified future for rural communities
            in Madhya Pradesh.
          </p>
        </div>
      </section>

      {/* About Section */}
      <Reveal as="section" className="about-section py-5">
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

          <div className="mb-5 py-5 text-center">
            <span className="eyebrow justify-content-center">Purpose</span>
            <h1 className="fw-bold text-teal">Our Mission</h1>
            <p className="text-dark">
              We believe every family deserves dignity, hope, and the
              opportunity to thrive. Through our comprehensive support
              programs, we address immediate needs while empowering families
              to build sustainable futures.
            </p>
          </div>
        </div>

        {/* Team Slider */}
        <div
          ref={teamCarouselRef}
          id="teamSlider"
          className="carousel slide text-center"
          data-bs-ride="carousel"
        >
          <h1 className="fw-bold mb-4">MEET OUR TEAM</h1>

          <div className="carousel-inner">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={'carousel-item' + (i === 0 ? ' active' : '')}
              >
                <h4 className="fw-bold mb-1">{member.name}</h4>
                <p className="text-warning mb-2">{member.role}</p>
                <p className="px-lg-5 text-dark">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="team-slider-controls mt-4 d-flex justify-content-center gap-3">
            <button
              className="btn btn-warning rounded-circle p-3"
              type="button"
              data-bs-target="#teamSlider"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
              className="btn btn-warning rounded-circle p-3"
              type="button"
              data-bs-target="#teamSlider"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Vision / Mission Slider */}
        <div className="container">
          <div
            ref={missionCarouselRef}
            id="aboutSlider"
            className="carousel slide carousel-fade text-center"
            data-bs-ride="carousel"
          >
            <h1 className="fw-bold mb-4">KNOW MORE ABOUT US</h1>

            <div className="carousel-inner">
              {visionMission.map((item, i) => (
                <div
                  key={item.title}
                  className={'carousel-item' + (i === 0 ? ' active' : '')}
                >
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="px-lg-5 text-dark">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="carousel-arrows">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#aboutSlider"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon p-3"
                  aria-hidden="true"
                />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#aboutSlider"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon p-3"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Core Values */}
      <Reveal as="section" className="causes-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="fw-bold">Core Values</h2>
          </div>
          <div className="row g-4">
            {coreValues.map((value) => (
              <div className="col-md-6 col-lg-3" key={value.title}>
                <div className="cause-card p-4 shadow-sm h-100 text-center">
                  <div className="icon mb-3">
                    <i className={value.icon} />
                  </div>
                  <h5 className="fw-semibold mb-2">{value.title}</h5>
                  <p className="text-dark small">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Objectives */}
      <Reveal as="section" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">Where We Focus</span>
            <h2 className="fw-bold">Our Objectives</h2>
          </div>
          <div className="row g-4">
            {objectives.map((obj) => (
              <div className="col-md-6 col-lg-3" key={obj.title}>
                <div className="cause-card p-4 shadow-sm h-100 text-center">
                  <div className="icon mb-3">
                    <i className={obj.icon} />
                  </div>
                  <h5 className="fw-semibold mb-2">{obj.title}</h5>
                  <p className="text-dark small">{obj.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  )
}
