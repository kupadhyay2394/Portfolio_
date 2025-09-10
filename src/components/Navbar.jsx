import { Link, useLocation } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'dark':'light')
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            Krishna.dev
          </Link>
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/education" 
              className={`navbar-link ${location.pathname === '/education' ? 'active' : ''}`}
            >
              Education
            </Link>
            <Link 
              to="/skills" 
              className={`navbar-link ${location.pathname === '/skills' ? 'active' : ''}`}
            >
              Skills
            </Link>
            <Link 
              to="/certifications" 
              className={`navbar-link ${location.pathname === '/certifications' ? 'active' : ''}`}
            >
              Certifications
            </Link>
            <Link 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
            <button className="navbar-link theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
