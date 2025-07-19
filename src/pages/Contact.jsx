import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Hubungi Kami</h1>
          <p>Siap membantu mewujudkan ide project Anda menjadi kenyataan</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan email Anda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Masukkan nomor telepon Anda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Jenis Layanan</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Pilih layanan</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="software">Custom Software</option>
                    <option value="design">UI/UX Design</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Jelaskan project atau kebutuhan Anda"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Informasi Kontak</h2>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Alamat</h3>
                    <p>
                      Jl. Sudirman No. 123
                      <br />
                      Jakarta Pusat, 12345
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@jasacoding.com</p>
                    <p>support@jasacoding.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Telepon</h3>
                    <p>+62 21 1234 5678</p>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-content">
                    <h3>Jam Kerja</h3>
                    <p>Senin - Jumat: 09:00 - 18:00</p>
                    <p>Sabtu: 09:00 - 15:00</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h3>Ikuti Kami</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    📘 Facebook
                  </a>
                  <a href="#" className="social-link">
                    📷 Instagram
                  </a>
                  <a href="#" className="social-link">
                    🐦 Twitter
                  </a>
                  <a href="#" className="social-link">
                    💼 LinkedIn
                  </a>
                  <a href="#" className="social-link">
                    📺 YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Lokasi Kami</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>📍 Jasa Coding Office</h3>
                <p>Jl. Sudirman No. 123, Jakarta Pusat</p>
                <p>Gedung Menara Sudirman Lt. 15</p>
                <button className="btn-directions">
                  Dapatkan Petunjuk Arah
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Pertanyaan Umum</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Berapa lama waktu respons untuk email?</h3>
              <p>
                Kami akan merespons email Anda dalam waktu maksimal 24 jam pada
                hari kerja.
              </p>
            </div>
            <div className="faq-item">
              <h3>Apakah tersedia konsultasi gratis?</h3>
              <p>
                Ya, kami menyediakan konsultasi gratis selama 30 menit untuk
                membahas project Anda.
              </p>
            </div>
            <div className="faq-item">
              <h3>Bagaimana cara memulai project?</h3>
              <p>
                Hubungi kami melalui form di atas atau telepon, lalu kami akan
                mengatur jadwal meeting untuk diskusi detail.
              </p>
            </div>
            <div className="faq-item">
              <h3>Apakah ada layanan emergency?</h3>
              <p>
                Untuk klien yang sudah menggunakan layanan maintenance, kami
                menyediakan layanan emergency 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
