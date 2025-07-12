import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Beranda" },
    { id: "services", label: "Layanan" },
    { id: "pricing", label: "Harga" },
    { id: "testimonials", label: "Testimoni" },
    { id: "contact", label: "Kontak" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Joki Coding</h2>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
