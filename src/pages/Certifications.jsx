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
          <a className="btn btn-outline btn-small" href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=BDE55157E4D980AEF4F0B06BB628363B0AEE97C62950C8ABC50871CB2ACC447A" target="_blank" rel="noreferrer">View Certificate</a>
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
          <a className="btn btn-outline btn-small" href="https://www.hackerrank.com/certificates/2921d81b9a34" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
        
      </div>
      <div className="card cert-item">
        <div className="cert-icon" aria-hidden="true">
        <img src="/images/hacker.png" alt="Oracle" className="cert-logo" />
        </div>
        <div className="cert-content">
          <h3>HackerRank JavaScript (Intermediate) Certificate</h3>
          <p>Issued: Sep 2024</p>
        </div>
        <div className="cert-actions">
          <a className="btn btn-outline btn-small" href="https://www.hackerrank.com/certificates/f0cdf597634e" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
        
      </div>
    </div>
  )
}

export default Certifications


