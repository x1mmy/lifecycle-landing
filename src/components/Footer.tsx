import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 border-t border-gray-200 mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Brand Section */}
          <motion.div className="footer-brand mb-8 md:mb-0 max-w-md" variants={fadeInUpVariants}>
            <div className="text-2xl font-bold text-gray-900 mb-4 font-display">
              LifeCycle<span className="text-primary-500">.</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Smart inventory management for modern businesses. Never let products expire again.
            </p>
            <motion.a
              href="mailto:team@lifecycle.cloud"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-300 font-semibold"
              whileHover={{ x: 5 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              team@lifecycle.cloud
            </motion.a>
            <div className="text-sm text-gray-500 mt-6">
              © 2025 LifeCycle. All rights reserved.
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 md:gap-x-20 md:gap-y-0">
            {/* Navigation Links */}
            <motion.div className="flex flex-col gap-y-3" variants={fadeInUpVariants}>
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Navigation</h3>
              {[
                { to: "/", label: "Home" },
                { to: "/pricing", label: "Pricing" },
                { to: "/about", label: "About us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.div key={link.to} whileHover={{ x: 5 }}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-primary-600 py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex flex-col gap-y-3" variants={fadeInUpVariants}>
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Social</h3>
              {[
                { href: "#", label: "Facebook" },
                { href: "#", label: "Instagram" },
                { href: "#", label: "Twitter" },
                { href: "#", label: "LinkedIn" },
              ].map((link) => (
                <motion.div key={link.label} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-primary-600 py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div className="flex flex-col gap-y-3" variants={fadeInUpVariants}>
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Legal</h3>
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Cookie Policy" },
                { href: "#", label: "GDPR" },
              ].map((link) => (
                <motion.div key={link.label} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-primary-600 py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 text-center sm:text-left">
              Built with care for businesses that care about their inventory.
            </div>
            <div className="flex items-center gap-6">
              {/* Social Icons */}
              {[
                { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
                { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Facebook" },
                { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
