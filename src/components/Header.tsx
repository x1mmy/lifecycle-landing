import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-gray-200 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <div className="nav-brand">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                LifeCycle{/* purple fullstop */}
                <span className="text-purple-500">.</span>
              </Link>
            </div>
            <nav
              className={`hidden md:flex items-center space-x-8 ${
                isMobileMenuOpen ? "mobile-open" : ""
              }`}
            >
              <Link
                to="/"
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === "/"
                    ? "text-primary-600"
                    : "text-gray-800 hover:text-primary-600"
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === "/pricing"
                    ? "text-primary-600"
                    : "text-gray-800 hover:text-primary-600"
                }`}
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === "/about"
                    ? "text-primary-600"
                    : "text-gray-800 hover:text-primary-600"
                }`}
                onClick={closeMobileMenu}
              >
                About us
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === "/contact"
                    ? "text-primary-600"
                    : "text-gray-800 hover:text-primary-600"
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-800 font-medium transition-colors duration-300 hover:text-primary-600"
            >
              Log in
            </Link>
            <Link
              to="/contact"
              className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
            >
              Sign up
            </Link>
          </div>
          <button
            className={`md:hidden bg-none border-none cursor-pointer p-2 z-50 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div
              className={`flex flex-col w-6 h-4.5 relative transition-all duration-300 ${
                isMobileMenuOpen ? "open" : ""
              }`}
            >
              <span
                className={`block h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "mb-1.5"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <div className="text-xl font-bold text-gray-800">
              LifeCycle<span className="text-purple-500">.</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col px-6 py-8">
            <Link
              to="/"
              className={`text-xl font-semibold transition-all duration-300 py-4 px-4 rounded-lg mb-2 ${
                location.pathname === "/"
                  ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
                  : "text-gray-800 hover:text-primary-600 hover:bg-gray-50"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className={`text-xl font-semibold transition-all duration-300 py-4 px-4 rounded-lg mb-2 ${
                location.pathname === "/pricing"
                  ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
                  : "text-gray-800 hover:text-primary-600 hover:bg-gray-50"
              }`}
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`text-xl font-semibold transition-all duration-300 py-4 px-4 rounded-lg mb-2 ${
                location.pathname === "/about"
                  ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
                  : "text-gray-800 hover:text-primary-600 hover:bg-gray-50"
              }`}
              onClick={closeMobileMenu}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className={`text-xl font-semibold transition-all duration-300 py-4 px-4 rounded-lg mb-2 ${
                location.pathname === "/contact"
                  ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
                  : "text-gray-800 hover:text-primary-600 hover:bg-gray-50"
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>

          {/* Footer Actions */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="w-full bg-transparent text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-primary-600 hover:text-white"
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
              <Link
                to="/contact"
                className="w-full bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-primary-700"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
