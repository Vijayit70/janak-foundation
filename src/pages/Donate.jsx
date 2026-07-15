import Reveal from '../components/Reveal'

const bankDetails = [
  { label: 'Bank Name', value: 'IPPB Bank' },
  { label: 'Banking Name', value: 'Vijay Tiwari (Janak Foundation)' },
  { label: 'Account Number', value: '0274410087590' },
  { label: 'IFSC Code', value: 'IPOS0000001' },
]

const afterDonationSteps = [
  'Full Name',
  'Email ID',
  'Mobile Number',
  'Full Address',
]

const whyDonate = [
  {
    icon: 'bi-check-circle text-warning',
    title: 'Empower Lives',
    text: 'Your donation enables us to provide education, healthcare, and economic opportunities to those who are marginalized and underserved.',
    borderClass: '',
  },
  {
    icon: 'bi-check-circle text-success',
    title: 'Ensure Sustainability',
    text: 'Your support allows us to implement long-term solutions that promote self-reliance and resilience in communities.',
    borderClass: 'green',
  },
  {
    icon: 'bi-check-circle text-primary',
    title: 'Promote Equality',
    text: 'By donating, you are contributing to efforts that promote fairness and justice, ensuring everyone has equal opportunities.',
    borderClass: 'blue',
  },
]

export default function Donate() {
  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow justify-content-center" style={{ color: '#fff' }}>
            Make an Impact
          </span>
          <h1 className="display-5 fw-bold text-white">Donate Today</h1>
        </div>
      </section>

      <h1 className="text-center mt-5 fw-bold text-uppercase">
        Donate Using The Below Details
      </h1>

      <Reveal as="div" className="container my-5">
        <div className="row g-4 align-items-start">
          {/* Bank Details */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="donation-card auto-height">
              <h2>Bank Account Details</h2>
              {bankDetails.map((item) => (
                <p className="icon-text" key={item.label}>
                  <i className="bi bi-arrow-right-short" />
                  <strong>{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="donation-card qr-card">
              <h2>You can donate via QR Code</h2>
              <img src="/images/qr.jpg" className="qr" alt="Donation QR Code" />
              <p className="icon-text text-muted mt-2">
                <i className="bi bi-arrow-right-short" />
                You can use any UPI app for payment.
              </p>
            </div>
          </div>

          {/* After Donation */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="donation-card auto-height">
              <h2>After Donation Please Send Your Following Details:</h2>
              <ul className="list-unstyled mb-0">
                {afterDonationSteps.map((step) => (
                  <li className="icon-text" key={step}>
                    <i className="bi bi-arrow-right-short" />
                    {step}
                  </li>
                ))}
                <li className="icon-text">
                  <i className="bi bi-arrow-right-short" />
                  Donation screenshot to:
                  <br />
                  <strong>
                    <i className="bi bi-check-circle text-warning me-1" />
                    janakfoundation4@gmail.com
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Why Donate */}
      <Reveal as="div" className="why-section">
        <img src="/logo-mark.svg" alt="" className="section-watermark" />
        <span className="eyebrow justify-content-center">Impact</span>
        <h2>Why Donate?</h2>
        <p>
          Your generosity can make a world of difference. By donating to{' '}
          <strong>Janak Foundation</strong>, you are investing in the future
          of communities and individuals who need it most. Your support
          helps us provide essential services and create sustainable,
          positive change.
        </p>
      </Reveal>

      {/* Bottom Cards */}
      <div className="container mb-5">
        <div className="row g-4">
          {whyDonate.map((card) => (
            <div className="col-md-4 col-12" key={card.title}>
              <div
                className={`donation-card highlight-border ${card.borderClass} auto-height`}
              >
                <h5 className="fw-bold">
                  <i className={`bi ${card.icon} me-1`} />
                  {card.title}
                </h5>
                <p className="fw-semibold small">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
