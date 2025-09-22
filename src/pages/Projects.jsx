const Projects = () => {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <h2 style={{ marginBottom: 16 }}>Projects</h2>
      <div className="blog-grid">
        <div className="blog-card">
          <img
            className="blog-card-image"
            src="/images/paytm.png"
            alt="PayTM Clone - digital wallet"
          />
          <div className="blog-card-content">
            <h3>PayTM Clone</h3>
            <p>Secure wallet backend with JWT auth, REST APIs, and Dockerized services.</p>
            <div className="blog-meta">
              <span>Node.js • Express.js • MongoDB • JWT • Docker</span>
            </div>
            <div className="blog-actions">
              <a className="btn btn-primary btn-small" href="https://github.com/kupadhyay2394/Paytm-clone" target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-outline btn-small" href="https://github.com/kupadhyay2394/Paytm-clone" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img
            className="blog-card-image"
            src="/images/goldInvestment.png"
            alt="Gold Investment AI Assistant"
          />
          <div className="blog-card-content">
            <h3>Gold Investment AI Assistant</h3>
            <p>Real-time, data-driven gold advice with live market feeds and memory.</p>
            <div className="blog-meta">
              <span>Node.js • Express.js • Sambanova/OpenAI • REST • Axios</span>
            </div>
            <div className="blog-actions">
              <a className="btn btn-primary btn-small" href="https://github.com/kupadhyay2394/ChatGold" target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-outline btn-small" href="https://chat-gold-frontend-khaki.vercel.app/" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img
            className="blog-card-image"
            src="/images/urlShortner.png"
            alt="URL Shortener backend"
          />
          <div className="blog-card-content">
            <h3>URL Shortener</h3>
            <p>Scalable URL shortener with JWT/OAuth security and modular APIs.</p>
            <div className="blog-meta">
              <span>Node.js • Express.js • MongoDB • JWT • OAuth</span>
            </div>
            <div className="blog-actions">
              <a className="btn btn-primary btn-small" href="https://github.com/kupadhyay2394/UrlShortner" target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-outline btn-small" href="https://github.com/kupadhyay2394/UrlShortner" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img
            className="blog-card-image"
            src="/images/weather.png"
            alt="URL Shortener backend"
          />
          <div className="blog-card-content">
            <h3>Weather App with Redis Caching</h3>
            <p>Fetch weather data and stores the results in Redis</p>
            <div className="blog-meta">
              <span>Node.js • Express.js • MongoDB • JWT • Redis • React</span>
            </div>
            <div className="blog-actions">
              <a className="btn btn-primary btn-small" href="https://github.com/kupadhyay2394/wether-api-using-redi" target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-outline btn-small" href="https://github.com/kupadhyay2394/wether-api-using-redi" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img
            className="blog-card-image"
            src="/images/LSTM.png"
            alt="URL Shortener backend"
          />
          <div className="blog-card-content">
            <h3>LSTMS Stock Price Prediction</h3>
            <p>Real Time stock price prediction using LSTMS</p>
            <div className="blog-meta">
              <span>Python • py-torch • LSTMS • pytorch • Tensorflow • Matplotlib • SkLearn • Pandas</span>
            </div>
            <div className="blog-actions">
              <a className="btn btn-primary btn-small" href="https://github.com/kupadhyay2394/LSTM" target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-outline btn-small" href="https://github.com/kupadhyay2394/LSTM" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img
            className="blog-card-image"
            src="/images/snetence.png"
            alt="URL Shortener backend"
          />
          <div className="blog-card-content">
            <h3>Sentense Completion</h3>
            <p>Quize app using react</p>
            <div className="blog-meta">
              <span>React • Node.js • Express.js • MongoDB • JWT • Tailwind • React Router • React Hooks</span>
            </div>
            <div className="blog-actions">
              <a className="btn btn-primary btn-small" href="https://github.com/kupadhyay2394/Sentence-Construction" target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-outline btn-small" href="https://sentence-construction-m58a.vercel.app/" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img
            className="blog-card-image"
            src="/images/blog.png"
            alt="URL Shortener backend"
          />
          <div className="blog-card-content">
            <h3>Blog </h3>
            <p>Full stack Blog App</p>
            <div className="blog-meta">
              <span>React • Node.js • Express.js • MongoDB • JWT • Tailwind • React Router • React Hooks</span>
            </div>
            <div className="blog-actions">
              <a className="btn btn-primary btn-small" href="https://github.com/kupadhyay2394/Blog" target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-outline btn-small" href="https://blog-fr.netlify.app/" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects


