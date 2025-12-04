import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>CleanPro</h2>

      {/* Hamburger Menu Button - Mobile Only */}
      <button 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "var(--text)"
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="/booking" onClick={() => setMenuOpen(false)}>Book</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;