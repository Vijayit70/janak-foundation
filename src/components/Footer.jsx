import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/causes', label: 'Causes' },
  { to: '/work', label: 'What We Do' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="jkss-footer pt-5 mt-5">
      <div className="container pb-4">
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3 d-flex align-items-center gap-2">
              <img src="/logo-mark.svg" alt="" width="34" height="34" />
              <span>Janak Foundation</span>
            </h5>
            <p>Address: Village Khajree, District Tikamgarh, Madhya Pradesh</p>
            <p>
              Contact No:{' '}
              <a href="tel:+917909375712">+91 7909375712</a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:janakfoundation4@gmail.com">
                janakfoundation4@gmail.com
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>
              <span className="text-orange mb-3">Important Links</span>
            </h5>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>
              <span className="text-orange mb-3">Follow Us</span>
            </h5>
            <div className="social-links mb-3">
              <a
                href="https://www.facebook.com/share/162ZHHSEYM/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" aria-hidden="true" />
                <span className="visually-hidden">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/pandit_vijay_tiwari_18?igsh=MW1zcnZhZjJxanRqdA=="
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram" aria-hidden="true" />
                <span className="visually-hidden">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vijay-tiwari-"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin" aria-hidden="true" />
                <span className="visually-hidden">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Copyright Bar */}
      <div className="footer-bottom-bar py-3 text-center">
        <p className="mb-0 footer-bottom-content">
          <span className="fb-item fb-made">
            &copy; 2026 <span className="text-orange">Tech Vijay</span>. All
            rights reserved.
          </span>
        </p>
      </div>
    </footer>
  )
}
