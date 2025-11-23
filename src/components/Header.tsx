import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-white/50 backdrop-blur-sm shadow-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center py-5">
          <motion.div
            className="flex items-center space-x-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="nav-brand">
              <Link to="/" className="text-2xl font-bold text-gray-900 font-display">
                LifeCycle
                <span className="text-primary-500">.</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { path: "/", label: "Home" },
                { path: "/pricing", label: "Pricing" },
                { path: "/about", label: "About us" },
                { path: "/contact", label: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`font-medium transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? "text-primary-600"
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                        layoutId="navUnderline"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="https://app.lifecycle.cloud/login"
                className="text-gray-700 font-semibold transition-colors duration-300 hover:text-primary-600"
              >
                Log in
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40"
              >
                Sign up
              </Link>
            </motion.div>
          </motion.div>

          <motion.button
            className="md:hidden bg-none border-none cursor-pointer p-2 z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col w-6 h-5 justify-between">
              <motion.span
                className="block h-0.5 w-full bg-gray-800 rounded-sm"
                animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-full bg-gray-800 rounded-sm"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-full bg-gray-800 rounded-sm"
                animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Header with Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="text-xl font-bold text-gray-900 font-display">
                  LifeCycle<span className="text-primary-500">.</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col px-6 py-8">
                {[
                  { path: "/", label: "Home" },
                  { path: "/pricing", label: "Pricing" },
                  { path: "/about", label: "About us" },
                  { path: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-xl font-bold transition-all duration-300 py-4 px-4 rounded-xl mb-2 block ${
                        location.pathname === item.path
                          ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
                          : "text-gray-800 hover:text-primary-600 hover:bg-gray-50"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer Actions */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gradient-to-b from-transparent to-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/"
                    className="w-full bg-transparent text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 hover:bg-primary-600 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/30"
                    onClick={closeMobileMenu}
                  >
                    Sign up
                  </Link>
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
