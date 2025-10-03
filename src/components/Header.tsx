import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo">
            LifeCycle{/* purple fullstop */}
            <span style={{ color: "#8b5cf6" }}>.</span>
          </Link>
        </div>
        <nav className="nav-menu">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className={`nav-link ${
              location.pathname === "/pricing" ? "active" : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About us
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="nav-actions">
          <button className="btn-secondary">Log in</button>
          <button className="btn-primary">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
