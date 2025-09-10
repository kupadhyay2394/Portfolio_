const Certifications = () => {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <h2 style={{ marginBottom: 16 }}>Certifications</h2>
      <div className="card cert-item">
        <div className="cert-icon" aria-hidden="true">
          <img src="/images/oracle.png" alt="Oracle" className="cert-logo" />
        </div>
        <div className="cert-content">
          <h3>Oracle Cloud Infrastructure 2025 Generative AI Professional</h3>
          <p>Issued: Aug 2025</p>
        </div>
        <div className="cert-actions">
          <a className="btn btn-outline btn-small" href="https://www.credly.com/" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
      </div>
      <div className="card cert-item">
        <div className="cert-icon" aria-hidden="true">
        <img src="/images/hacker.png" alt="Oracle" className="cert-logo" />
        </div>
        <div className="cert-content">
          <h3>HackerRank Problem Solving (Intermediate)</h3>
          <p>Issued: Jul 2024</p>
        </div>
        <div className="cert-actions">
          <a className="btn btn-outline btn-small" href="https://www.hackerrank.com/certificates" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
      </div>
    </div>
  )
}

export default Certifications


