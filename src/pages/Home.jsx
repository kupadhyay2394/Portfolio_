import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {
  const roles = [
    'Full Stack Developer',
    'Node.js • Express • React • MongoDB',
    'AI & Data Science Enthusiast'
  ]
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]
    const speed = deleting ? 50 : 90

    const tick = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1)
        setDisplay(next)
        if (next === current) setDeleting(true)
      } else {
        const next = current.slice(0, display.length - 1)
        setDisplay(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => (i + 1) % roles.length)
        }
      }
    }, display === '' && !deleting ? 400 : speed)

    return () => clearTimeout(tick)
  }, [display, deleting, index])

  return (
    <div className="hero">
      <div className="container">
        <h1 className="fade-in-up ">Krishna Upadhyay</h1>
        <p className="fade-in-up typewriter" style={{ animationDelay: '0.12s' }}>
          {display}
        </p>
        <div className="fade-in-up intro" style={{ animationDelay: '0.18s' }}>
          <p>
            I’m a Full Stack Developer skilled in backend (Node.js, Express.js, PostgreSQL, MongoDB)
            and frontend (React.js, JavaScript, HTML, CSS). I love building scalable, secure web
            applications, and I’m passionate about functional programming and clean, reliable APIs.
          </p>
        </div>
        <div className="fade-in-up social-links" style={{ animationDelay: '0.24s' }}>
          <a className="social-icon" href="https://github.com/kupadhyay2394" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="devicon-github-original" />
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/krishnaupadhyay1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="devicon-linkedin-plain" />
          </a>
          <a className="social-icon" href="mailto:kupadhyay2394@gmail.com" aria-label="Email">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="fade-in-up" style={{ animationDelay: '0.36s', marginTop: 16 }}>

  <a href="https://drive.google.com/file/d/1Cf4SmQkxWmm239fqQOeDMmOSLyILRTky/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" aria-label="View Resume in a new tab">
    View Resume
  </a>
</div>
      </div>
    </div>
  )
}

export default Home
