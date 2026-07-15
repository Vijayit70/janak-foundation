import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const services = [
  {
    title: 'Basic Education Programs',
    text: 'We provide access to quality education for children and adults, focusing on literacy, numeracy, and essential life skills. Our programs are designed to foster a love for learning.',
  },
  {
    title: 'Vocational Training',
    text: 'We offer vocational training and skills development programs to equip individuals with the practical skills needed for gainful employment. Our training covers a wide range of trades and professions.',
  },
  {
    title: 'Scholarships',
    text: "We provide scholarships, school supplies, and other educational resources to ensure that financial barriers do not hinder access to education. Financial help can save someone's education.",
  },
  {
    title: 'Primary Healthcare',
    text: 'Our primary healthcare clinics offer essential medical services, including check-ups, vaccinations, maternal and child health services, and treatment for common illnesses.',
  },
  {
    title: 'Awareness Program',
    text: 'We conduct health education campaigns to raise awareness about preventive healthcare, hygiene, nutrition, and reproductive health, empowering communities to make informed health choices.',
  },
  {
    title: 'Mental Health Support',
    text: 'We offer counseling and mental health support services to address the psychological well-being of individuals, helping them cope with stress, trauma, and other mental health challenges.',
  },
  {
    title: 'Environmental Education',
    text: 'We educate communities about environmental issues and sustainable practices, encouraging stewardship of natural resources and promoting eco-friendly lifestyles.',
  },
  {
    title: 'Gender Equality Programs',
    text: 'We promote gender equality through education, advocacy, and support services that address gender-based violence, discrimination, and economic disparities.',
  },
  {
    title: 'Youth Empowerment',
    text: 'We offer programs that engage and empower youth, providing them with leadership opportunities, life skills training, and platforms to contribute to their communities.',
  },
]

export default function Work() {
  return (
    <section className="what-we-do">
      {/* Banner */}
      <div className="banner">
        <h2>WHAT WE DO</h2>
      </div>

      <div className="container text-center my-5">
        <span className="eyebrow justify-content-center">Our Services</span>
        <h1 className="fw-bold mb-3">We work for all...</h1>
        <div className="work-description">
          <p className="px-md-5 px-3 text-dark">
            At Janak Foundation, we offer a comprehensive range of services
            designed to address the diverse needs of the communities we
            serve. Our goal is to create sustainable and impactful solutions
            that empower individuals and promote long-term development.
          </p>
        </div>
      </div>

      <Reveal as="div" className="container">
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 col-12" key={service.title}>
              <div className="card">
                <h5>{service.title}</h5>
                <p>{service.text}</p>
                <Link to="/donate" className="btn btn-donate">
                  DONATE NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
