import "./Pricing.css";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: "500K",
      period: "project",
      description: "Cocok untuk project kecil dan personal",
      features: [
        "Landing Page Sederhana",
        "Responsive Design",
        "1-3 Halaman",
        "Basic SEO",
        "Revisi 2x",
        "Support 1 Bulan",
        "Source Code",
        "Hosting Setup",
      ],
      popular: false,
      color: "#667eea",
    },
    {
      id: 2,
      name: "Professional",
      price: "1.5M",
      period: "project",
      description: "Solusi lengkap untuk bisnis menengah",
      features: [
        "Website Lengkap",
        "E-commerce Basic",
        "5-10 Halaman",
        "Advanced SEO",
        "Revisi 5x",
        "Support 3 Bulan",
        "Source Code",
        "Database Setup",
        "Payment Gateway",
        "Analytics Setup",
      ],
      popular: true,
      color: "#764ba2",
    },
    {
      id: 3,
      name: "Enterprise",
      price: "3M+",
      period: "project",
      description: "Solusi custom untuk perusahaan besar",
      features: [
        "Custom Development",
        "E-commerce Advanced",
        "Unlimited Pages",
        "Premium SEO",
        "Revisi Unlimited",
        "Support 1 Tahun",
        "Source Code",
        "Custom Database",
        "Multiple Payment",
        "Advanced Analytics",
        "API Integration",
        "Custom Features",
      ],
      popular: false,
      color: "#f093fb",
    },
  ];

  const mobilePlans = [
    {
      id: 1,
      name: "Basic App",
      price: "1.5M",
      period: "project",
      description: "Aplikasi mobile sederhana",
      features: [
        "1 Platform (iOS/Android)",
        "5-10 Screen",
        "Basic Features",
        "App Store Setup",
        "Revisi 3x",
        "Support 2 Bulan",
      ],
    },
    {
      id: 2,
      name: "Advanced App",
      price: "3M",
      period: "project",
      description: "Aplikasi mobile dengan fitur kompleks",
      features: [
        "2 Platform (iOS & Android)",
        "10-20 Screen",
        "Advanced Features",
        "Backend API",
        "Push Notifications",
        "App Store Setup",
        "Revisi 5x",
        "Support 6 Bulan",
      ],
    },
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <h1>Paket Harga</h1>
          <p>Pilih paket yang sesuai dengan kebutuhan dan budget Anda</p>
        </div>
      </section>

      {/* Website Pricing */}
      <section className="pricing-section">
        <div className="container">
          <h2>Website Development</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
                style={{ borderColor: plan.color }}
              >
                {plan.popular && (
                  <div className="popular-badge">Terpopuler</div>
                )}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">Rp</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  <p className="description">{plan.description}</p>
                </div>
                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn-order"
                  style={{ backgroundColor: plan.color }}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Pricing */}
      <section className="mobile-pricing">
        <div className="container">
          <h2>Mobile App Development</h2>
          <div className="pricing-grid">
            {mobilePlans.map((plan) => (
              <div key={plan.id} className="pricing-card">
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">Rp</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  <p className="description">{plan.description}</p>
                </div>
                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn-order">Pilih Paket</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <h2>Layanan Tambahan</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Maintenance & Support</h3>
              <div className="service-price">
                <span>Rp 200K</span>
                <span>/bulan</span>
              </div>
              <ul>
                <li>Bug Fixing</li>
                <li>Security Updates</li>
                <li>Performance Optimization</li>
                <li>24/7 Support</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>SEO Optimization</h3>
              <div className="service-price">
                <span>Rp 500K</span>
                <span>/bulan</span>
              </div>
              <ul>
                <li>Keyword Research</li>
                <li>On-Page SEO</li>
                <li>Content Optimization</li>
                <li>Analytics Report</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Consultation</h3>
              <div className="service-price">
                <span>Rp 100K</span>
                <span>/jam</span>
              </div>
              <ul>
                <li>Technical Consultation</li>
                <li>Project Planning</li>
                <li>Code Review</li>
                <li>Architecture Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Pertanyaan Umum</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Berapa lama waktu pengerjaan?</h3>
              <p>
                Waktu pengerjaan tergantung kompleksitas project. Website
                sederhana 1-2 minggu, website kompleks 3-4 minggu, aplikasi
                mobile 4-8 minggu.
              </p>
            </div>
            <div className="faq-item">
              <h3>Apakah ada garansi?</h3>
              <p>
                Ya, kami memberikan garansi revisi gratis sesuai paket yang
                dipilih. Garansi bug fixing selama 1-12 bulan tergantung paket.
              </p>
            </div>
            <div className="faq-item">
              <h3>Bagaimana dengan pembayaran?</h3>
              <p>
                Pembayaran dilakukan secara bertahap: 50% di awal, 25% saat
                progress 50%, dan 25% saat project selesai.
              </p>
            </div>
            <div className="faq-item">
              <h3>Apakah source code diserahkan?</h3>
              <p>
                Ya, semua source code akan diserahkan lengkap beserta
                dokumentasinya setelah project selesai dan pembayaran lunas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Butuh Penawaran Khusus?</h2>
            <p>
              Hubungi kami untuk konsultasi gratis dan dapatkan penawaran custom
              sesuai kebutuhan Anda
            </p>
            <button className="btn-primary">Konsultasi Gratis</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
