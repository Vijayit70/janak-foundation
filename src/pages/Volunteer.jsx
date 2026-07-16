import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import CauseCard from '../components/CauseCard'
import Reveal from '../components/Reveal'

const whyCards = [
  {
    icon: 'bi bi-book',
    title: 'Support Education',
    text: 'Help children access quality learning resources and mentorship to build a brighter future.',
  },
  {
    icon: 'bi bi-heart-pulse',
    title: 'Healthcare Support',
    text: 'Assist in health awareness programs and medical camps for underprivileged communities.',
  },
  {
    icon: 'bi bi-tree',
    title: 'Environment',
    text: 'Participate in tree plantations, clean-up drives, and sustainability projects.',
  },
  {
    icon: 'bi bi-people',
    title: 'Community Support',
    text: 'Engage with local communities, helping in skill development and women empowerment programs.',
  },
]

const interestOptions = [
  'Education',
  'HealthCare',
  'Environment & Plantation',
  'Food & Nutrition',
  'Fundraising & Events',
]

const availabilityOptions = ['Weekdays', 'Weekends', 'Flexible']

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
const phoneRegex = /^[6-9]\d{9}$/

const initialForm = {
  name: '',
  email: '',
  phone: '',
  city: '',
  interest: [],
  availability: [],
  why: '',
  skills: '',
}

export default function Volunteer() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // { type: 'success' | 'danger', message }
  const [submitting, setSubmitting] = useState(false)
  const nameInputRef = useRef(null)

  const scrollToFormAndFocus = (e) => {
    e.preventDefault()
    document
      .getElementById('volunteerForm')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => nameInputRef.current?.focus(), 600)
  }

  const toggleCheckbox = (field, value) => {
    setForm((prev) => {
      const current = prev[field]
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [field]: next }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    if (!gmailRegex.test(form.email)) {
      setStatus({
        type: 'danger',
        message: 'Please enter a valid Gmail address (example@gmail.com).',
      })
      return
    }

    if (!phoneRegex.test(form.phone)) {
      setStatus({
        type: 'danger',
        message: 'Please enter a valid 10-digit phone number.',
      })
      return
    }

    setSubmitting(true)

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      interest: form.interest.join(', '),
      availability: form.availability.join(', '),
      why: form.why,
      skills: form.skills,
      time: new Date().toLocaleString(),
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_VOLUNTEER_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_VOLUNTEER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus({
        type: 'success',
        message:
          "Thank you! You've successfully signed up as a volunteer. We'll contact you soon.",
      })
      setForm(initialForm)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'danger',
        message: 'Something went wrong. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="hero-section text-center"
        style={{
          background:
            "url('/images/volunteers-action.jpg') no-repeat center 25%",
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <span className="eyebrow justify-content-center">Get Involved</span>
          <h1 className="display-5">Join Us as a Volunteer</h1>
          <p className="lead mt-3">
            Make a difference in the lives of children and communities by
            contributing your time and skills.
          </p>
          <a href="#volunteerForm" className="btn btn-learn mt-3" onClick={scrollToFormAndFocus}>
            <span>Sign Up Now</span>
          </a>
        </div>
      </section>

      {/* Why Volunteer */}
      <Reveal as="section" className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <span className="eyebrow justify-content-center">Why Us</span>
            <h2 className="fw-bold text-teal mb-3">Why Volunteer With Us?</h2>
            <p className="text-dark">
              Your contribution matters. Together, we can empower
              communities, support education, healthcare, and environmental
              initiatives.
            </p>
          </div>

          <div className="row g-4 text-center">
            {whyCards.map((card) => (
              <CauseCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Form */}
      <Reveal as="section" id="volunteerForm" className="py-5 volunteer-form-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow justify-content-center">Sign Up</span>
            <h2 className="fw-bold text-teal">Volunteer With Us</h2>
            <p className="text-dark">
              Fill out the form below to join our volunteer community and
              make a difference.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                onSubmit={handleSubmit}
                className="p-4 shadow-lg rounded volunteer-form"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your Gmail address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your 10-digit phone number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label fw-semibold">
                    City / Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Enter your city or area"
                    value={form.city}
                    onChange={handleChange}
                    required
                    autoComplete="address-level2"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Area of Interest
                  </label>
                  <br />
                  {interestOptions.map((opt) => (
                    <div className="form-check" key={opt}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={opt}
                        id={`interest-${opt}`}
                        checked={form.interest.includes(opt)}
                        onChange={() => toggleCheckbox('interest', opt)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`interest-${opt}`}
                      >
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Availability
                  </label>
                  <br />
                  {availabilityOptions.map((opt) => (
                    <div
                      className="form-check form-check-inline"
                      key={opt}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={opt}
                        id={`availability-${opt}`}
                        checked={form.availability.includes(opt)}
                        onChange={() => toggleCheckbox('availability', opt)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`availability-${opt}`}
                      >
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-3">
                  <label htmlFor="why" className="form-label fw-semibold">
                    Why do you want to volunteer with us?
                  </label>
                  <textarea
                    className="form-control"
                    id="why"
                    name="why"
                    rows="3"
                    placeholder="Tell us why you'd like to join"
                    value={form.why}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="skills" className="form-label fw-semibold">
                    Any special skills or experience?
                  </label>
                  <textarea
                    className="form-control"
                    id="skills"
                    name="skills"
                    rows="3"
                    placeholder="List your relevant skills or experience"
                    value={form.skills}
                    onChange={handleChange}
                  />
                </div>

                {status && (
                  <div className={`alert alert-${status.type} mt-3`}>
                    {status.message}
                  </div>
                )}

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-teal px-5 py-2 fw-semibold"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  )
}
