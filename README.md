# jasa Coding - Website Profesional

Website modern dan responsif untuk layanan jasa coding profesional. Dibuat dengan React dan Vite untuk performa yang optimal.

## 🚀 Fitur

- **Design Modern**: Interface yang menarik dengan gradien dan animasi
- **Responsive**: Optimal di semua perangkat (desktop, tablet, mobile)
- **Multi-page**: 5 halaman lengkap (Beranda, Layanan, Harga, Testimoni, Kontak)
- **Interactive**: Navigasi smooth dan form yang fungsional
- **Fast Loading**: Optimized dengan Vite untuk loading cepat

## 📱 Halaman yang Tersedia

### 1. Beranda (Home)

- Hero section dengan animasi code
- Fitur-fitur unggulan
- Preview layanan
- Call-to-action

### 2. Layanan (Services)

- 6 jenis layanan lengkap
- Proses kerja step-by-step
- Teknologi yang digunakan
- Detail fitur setiap layanan

### 3. Harga (Pricing)

- 3 paket website development
- 2 paket mobile app development
- Layanan tambahan
- FAQ section

### 4. Testimoni (Testimonials)

- Testimoni klien dengan rating
- Filter berdasarkan jenis layanan
- Statistik perusahaan
- Featured testimonial

### 5. Kontak (Contact)

- Form kontak lengkap
- Informasi kontak detail
- Lokasi kantor
- Social media links

## 🛠️ Teknologi yang Digunakan

- **React 19** - Framework JavaScript modern
- **Vite** - Build tool cepat
- **CSS3** - Styling modern dengan Flexbox dan Grid
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Instalasi

1. Clone repository ini:

```bash
git clone <repository-url>
cd jasa-coding
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka browser dan kunjungi `http://localhost:5173`

## 🏗️ Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   └── Navbar.css
├── pages/
│   ├── Home.jsx            # Halaman beranda
│   ├── Home.css
│   ├── Services.jsx        # Halaman layanan
│   ├── Services.css
│   ├── Pricing.jsx         # Halaman harga
│   ├── Pricing.css
│   ├── Contact.jsx         # Halaman kontak
│   ├── Contact.css
│   ├── Testimonials.jsx    # Halaman testimoni
│   └── Testimonials.css
├── App.jsx                 # Main component
├── App.css                 # Global styles
├── main.jsx               # Entry point
└── index.css              # Base styles
```

## 🎨 Design System

### Colors

- **Primary**: `#667eea` (Blue gradient)
- **Secondary**: `#764ba2` (Purple gradient)
- **Accent**: `#ffd700` (Gold)
- **Text Primary**: `#333`
- **Text Secondary**: `#666`
- **Background**: `#f8f9fa`

### Typography

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold (700)
- **Body**: Regular (400)

### Components

- **Buttons**: Rounded with hover effects
- **Cards**: Shadow with border radius
- **Forms**: Clean design with focus states
- **Navigation**: Fixed header with mobile menu

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🚀 Deployment

### Build untuk Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📋 Scripts Available

- `npm run dev` - Development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - ESLint checking

## 🔧 Customization

### Mengubah Warna

Edit file `src/index.css` dan ubah CSS custom properties:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ffd700;
}
```

### Mengubah Konten

- Edit file JSX di folder `src/pages/`
- Update informasi kontak di `Contact.jsx`
- Modifikasi layanan di `Services.jsx`
- Sesuaikan harga di `Pricing.jsx`

## 📞 Kontak

Untuk pertanyaan atau dukungan:

- Email: info@jasacoding.com
- Phone: +62 21 1234 5678
- WhatsApp: +62 812 3456 7890

## 📄 License

Project ini dibuat untuk jasa Coding. Semua hak cipta dilindungi.

---

**Dibuat dengan ❤️ untuk layanan coding profesional**
