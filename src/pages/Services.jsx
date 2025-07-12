import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Website modern dan responsif untuk bisnis Anda",
      icon: "🌐",
      features: [
        "Landing Page Profesional",
        "Website E-commerce",
        "Company Profile",
        "Blog & CMS",
        "Website Portfolio",
        "Website Pendidikan",
      ],
      price: "Mulai dari Rp 500.000",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Aplikasi mobile untuk iOS dan Android",
      icon: "📱",
      features: [
        "React Native Apps",
        "Flutter Apps",
        "Native iOS Apps",
        "Native Android Apps",
        "Progressive Web Apps",
        "Hybrid Apps",
      ],
      price: "Mulai dari Rp 1.500.000",
    },
    {
      id: 3,
      title: "Custom Software",
      description: "Software custom sesuai kebutuhan bisnis",
      icon: "💻",
      features: [
        "Sistem Manajemen",
        "API Development",
        "Database Design",
        "Integration Services",
        "Desktop Applications",
        "Backend Systems",
      ],
      price: "Mulai dari Rp 2.000.000",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Desain antarmuka yang user-friendly",
      icon: "🎨",
      features: [
        "Wireframing",
        "Prototyping",
        "User Interface Design",
        "User Experience Design",
        "Design Systems",
        "Icon & Illustration",
      ],
      price: "Mulai dari Rp 300.000",
    },
    {
      id: 5,
      title: "Maintenance & Support",
      description: "Layanan maintenance dan support berkelanjutan",
      icon: "🔧",
      features: [
        "Bug Fixing",
        "Performance Optimization",
        "Security Updates",
        "Feature Updates",
        "24/7 Support",
        "Backup & Recovery",
      ],
      price: "Mulai dari Rp 200.000/bulan",
    },
    {
      id: 6,
      title: "Consultation",
      description: "Konsultasi teknologi untuk bisnis Anda",
      icon: "💡",
      features: [
        "Technical Consultation",
        "Project Planning",
        "Technology Stack Selection",
        "Architecture Design",
        "Code Review",
        "Performance Audit",
      ],
      price: "Mulai dari Rp 100.000/jam",
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Layanan Kami</h1>
          <p>
            Solusi lengkap untuk semua kebutuhan programming dan development
            Anda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-features">
                  <h4>Fitur yang termasuk:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-price">
                  <span className="price">{service.price}</span>
                </div>
                <button className="btn-order">Pesan Sekarang</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Bagaimana Kami Bekerja</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Konsultasi</h3>
              <p>Diskusikan kebutuhan dan ide project Anda dengan tim kami</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Perencanaan</h3>
              <p>Buat timeline dan rencana pengembangan yang detail</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>Tim developer kami mulai mengerjakan project Anda</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p>Lakukan testing menyeluruh untuk memastikan kualitas</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Delivery</h3>
              <p>Serahkan project yang sudah siap dan berfungsi sempurna</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <h2>Teknologi yang Kami Gunakan</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-items">
                <span>React.js</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>Next.js</span>
                <span>HTML5/CSS3</span>
                <span>JavaScript/TypeScript</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-items">
                <span>Node.js</span>
                <span>Python</span>
                <span>PHP</span>
                <span>Java</span>
                <span>C#</span>
                <span>Go</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Mobile</h3>
              <div className="tech-items">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Swift</span>
                <span>Kotlin</span>
                <span>Ionic</span>
                <span>Xamarin</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-items">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
                <span>Firebase</span>
                <span>SQLite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Siap Memulai Project Anda?</h2>
            <p>
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan
              penawaran terbaik
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Konsultasi Gratis</button>
              <button className="btn-secondary">Lihat Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
