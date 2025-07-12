import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Joki Coding
              <span className="highlight"> Professional</span>
            </h1>
            <p className="hero-subtitle">
              Solusi coding terpercaya untuk semua kebutuhan programming Anda.
              Dari website hingga aplikasi mobile, kami siap membantu mewujudkan
              ide Anda.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Mulai Sekarang</button>
              <button className="btn-secondary">Lihat Portfolio</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-animation">
              <div className="code-line">const jokiCoding = {`{`}</div>
              <div className="code-line"> service: "Professional",</div>
              <div className="code-line"> quality: "Premium",</div>
              <div className="code-line"> delivery: "Fast"</div>
              <div className="code-line">{`}`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Pengerjaan Cepat</h3>
              <p>
                Deadline yang ketat? Kami siap menyelesaikan project Anda dengan
                cepat tanpa mengorbankan kualitas.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Kualitas Terjamin</h3>
              <p>
                Code yang bersih, terstruktur, dan mudah dimaintain. Kami tidak
                pernah kompromi dengan kualitas.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Komunikasi 24/7</h3>
              <p>
                Tim support kami siap membantu Anda kapan saja. Progress project
                dapat dipantau real-time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Garansi 100%</h3>
              <p>
                Kami memberikan garansi revisi gratis hingga Anda puas dengan
                hasil akhirnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Layanan Kami</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Website Development</h3>
              <p>Website responsif dan modern untuk bisnis Anda</p>
              <ul>
                <li>Landing Page</li>
                <li>E-commerce</li>
                <li>Company Profile</li>
                <li>Blog & CMS</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Mobile App Development</h3>
              <p>Aplikasi mobile untuk iOS dan Android</p>
              <ul>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Native iOS/Android</li>
                <li>Progressive Web App</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Custom Software</h3>
              <p>Software custom sesuai kebutuhan bisnis</p>
              <ul>
                <li>Sistem Manajemen</li>
                <li>API Development</li>
                <li>Database Design</li>
                <li>Integration Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Siap Memulai Project Anda?</h2>
            <p>
              Hubungi kami sekarang dan dapatkan konsultasi gratis untuk project
              Anda
            </p>
            <button className="btn-primary">Konsultasi Gratis</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
