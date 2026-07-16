import { useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Collapse } from 'bootstrap'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/causes', label: 'Causes' },
  { to: '/work', label: 'What We Do' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const collapseRef = useRef(null)

  const closeMenu = () => {
    if (!collapseRef.current) return
    const instance = Collapse.getInstance(collapseRef.current)
    if (instance) instance.hide()
  }

  // Safety net: also close if the window gets resized up to desktop width
  // while the mobile menu happens to be open.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="/logo-mark.svg" alt="" width="42" height="42" />
          <span>
            <span style={{ color: '#f4c430' }}>Janak</span>{' '}
            <span style={{ color: '#fbf7ee' }}>Foundation</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    'nav-link' + (isActive ? ' active' : '')
                  }
                  to={link.to}
                  end={link.to === '/'}
                  onClick={closeMenu}
                >
                  {link.label.toUpperCase()}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <Link to="/donate" className="btn btn-donate" onClick={closeMenu}>
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
