import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from '../components/Reveal'

const infoCards = [
  {
    icon: 'bi bi-geo-alt',
    title: 'Our Address',
    content: 'Village Khajree, District Tikamgarh, Madhya Pradesh',
  },
  {
    icon: 'bi bi-envelope',
    title: 'Email Us',
    content: (
      <a href="mailto:janakfoundation4@gmail.com">
        janakfoundation4@gmail.com
      </a>
    ),
  },
  {
    icon: 'bi bi-telephone',
    title: 'Call Us',
    content: <a href="tel:+917909375712">+91 7909375712</a>,
  },
]

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    const templateParams = {
      ...form,
      time: new Date().toLocaleString(),
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_CONTACT_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setForm(initialForm)
    } catch (error) {
      console.error('Email send failed:', error)
      setStatus({
        type: 'danger',
        message: 'Failed to send message. Please try again later.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="contact-hero text-center"
        style={{
          background:
            "url('/images/tree.jpg') no-repeat center center",
          backgroundSize: 'cover',
          color: '#fff',
        }}
      >
        <div className="container">
          <span className="eyebrow justify-content-center">Reach Out</span>
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead mt-3 text-center">
            We appreciate your interest in reaching out to us. Whether you
            have questions, need assistance, or want to provide feedback,
            we're here to help.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <Reveal as="section" className="py-5 contact-info-section">
        <div className="container">
          <div className="row g-4 text-center">
            {infoCards.map((card) => (
              <div className="col-md-6 col-lg-4" key={card.title}>
                <div className="contact-card p-4 shadow-sm h-100">
                  <div className="icon mb-3">
                    <i
                      className={`${card.icon} text-teal`}
                      style={{ fontSize: '2rem' }}
                    />
                  </div>
                  <h5 className="fw-semibold mb-2">{card.title}</h5>
                  <p className="text-dark small">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Contact Form */}
      <Reveal as="section" id="contact" className="py-5 contact-form-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow justify-content-center">Send a Message</span>
            <h2 className="fw-bold text-teal">Get in Touch</h2>
            <p className="text-dark">
              Have a question or want to volunteer? Send us a message below!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                onSubmit={handleSubmit}
                className="p-4 shadow-lg rounded contact-form"
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status && (
                  <div className={`alert alert-${status.type}`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-teal w-100 py-2 fw-semibold"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

                {sending && (
                  <div className="mt-3 text-center fw-semibold sending-text">
                    Sending message, please wait...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  )
}
