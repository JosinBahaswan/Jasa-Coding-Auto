import { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Rahman",
      company: "PT Maju Bersama",
      position: "CEO",
      rating: 5,
      service: "website",
      image: "👨‍💼",
      review:
        "Jasa Coding sangat profesional dalam mengerjakan website perusahaan kami. Hasilnya sesuai ekspektasi dan selesai tepat waktu. Sangat direkomendasikan!",
      project: "Website E-commerce",
    },
    {
      id: 2,
      name: "Sarah Putri",
      company: "Startup Tech",
      position: "Founder",
      rating: 5,
      service: "mobile",
      image: "👩‍💻",
      review:
        "Aplikasi mobile yang dibuat sangat user-friendly dan performanya bagus. Tim Jasa Coding sangat responsif dan komunikatif selama proses development.",
      project: "Mobile App React Native",
    },
    {
      id: 3,
      name: "Budi Santoso",
      company: "Restoran Sederhana",
      position: "Owner",
      rating: 5,
      service: "website",
      image: "👨‍🍳",
      review:
        "Website restoran kami jadi lebih menarik dan mudah diakses pelanggan. Order online langsung meningkat setelah website baru diluncurkan.",
      project: "Website Restoran",
    },
    {
      id: 4,
      name: "Diana Sari",
      company: "Boutique Fashion",
      position: "Manager",
      rating: 4,
      service: "design",
      image: "👩‍🎨",
      review:
        "Desain UI/UX yang dibuat sangat modern dan sesuai dengan brand kami. Proses revisi juga cepat dan memuaskan.",
      project: "UI/UX Design E-commerce",
    },
    {
      id: 5,
      name: "Rudi Hermawan",
      company: "Klinik Sehat",
      position: "Direktur",
      rating: 5,
      service: "software",
      image: "👨‍⚕️",
      review:
        "Sistem manajemen klinik yang dibuat sangat membantu operasional kami. Fitur-fiturnya lengkap dan mudah digunakan.",
      project: "Sistem Manajemen Klinik",
    },
    {
      id: 6,
      name: "Linda Wijaya",
      company: "Sekolah Cerdas",
      position: "Kepala Sekolah",
      rating: 5,
      service: "website",
      image: "👩‍🏫",
      review:
        "Website sekolah kami jadi lebih informatif dan menarik. Orang tua siswa bisa dengan mudah mengakses informasi akademik.",
      project: "Website Sekolah",
    },
    {
      id: 7,
      name: "Agus Setiawan",
      company: "Toko Online",
      position: "Owner",
      rating: 4,
      service: "mobile",
      image: "👨‍💼",
      review:
        "Aplikasi mobile untuk toko online kami sangat membantu meningkatkan penjualan. Interface yang intuitif dan proses checkout yang mudah.",
      project: "Mobile App E-commerce",
    },
    {
      id: 8,
      name: "Maya Indah",
      company: "Studio Foto",
      position: "Fotografer",
      rating: 5,
      service: "website",
      image: "👩‍📷",
      review:
        "Portfolio website yang dibuat sangat elegan dan menampilkan karya foto kami dengan sempurna. Klien jadi lebih mudah melihat portfolio kami.",
      project: "Website Portfolio",
    },
  ];

  const filters = [
    { id: "all", label: "Semua" },
    { id: "website", label: "Website" },
    { id: "mobile", label: "Mobile App" },
    { id: "software", label: "Software" },
    { id: "design", label: "UI/UX Design" },
  ];

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.service === activeFilter
        );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <h1>Apa Kata Klien Kami</h1>
          <p>Testimoni dari klien yang telah mempercayai layanan Jasa Coding</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Project Selesai</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Klien Puas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating Rata-rata</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-grid">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <div className="client-avatar">{testimonial.image}</div>
                    <div className="client-details">
                      <h3>{testimonial.name}</h3>
                      <p className="client-position">{testimonial.position}</p>
                      <p className="client-company">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <div className="testimonial-content">
                  <p className="review-text">"{testimonial.review}"</p>
                </div>

                <div className="testimonial-footer">
                  <span className="project-type">{testimonial.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-testimonial">
        <div className="container">
          <div className="featured-content">
            <div className="featured-quote">
              <h2>
                "Jasa Coding telah membantu kami mengubah ide menjadi kenyataan
                dengan hasil yang luar biasa."
              </h2>
              <p>
                Tim Jasa Coding tidak hanya memberikan solusi teknis yang tepat,
                tetapi juga memahami kebutuhan bisnis kami. Hasil akhirnya
                melebihi ekspektasi dan membantu bisnis kami berkembang pesat.
              </p>
            </div>
            <div className="featured-author">
              <div className="author-avatar">👨‍💼</div>
              <div className="author-info">
                <h3>Budi Santoso</h3>
                <p>CEO, PT Maju Bersama</p>
                <div className="author-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Bergabunglah dengan Klien Puas Kami</h2>
            <p>
              Mulai project Anda sekarang dan dapatkan hasil yang memuaskan
              seperti klien-klien kami
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Mulai Project</button>
              <button className="btn-secondary">Lihat Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
