import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-12 md:py-20 border-t border-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          <div className="footer-brand mb-8 md:mb-0">
            <div className="text-xl font-bold text-gray-800 mb-3">
              LifeCycle.
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              2025 © LifeCycle
              <br />
              All rights reserved.
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 md:gap-x-20 md:gap-y-0 w-full md:w-auto">
            <div className="flex flex-col gap-y-2">
              <Link
                to="/"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Linkedin
              </a>
            </div>
            <div className="flex flex-col gap-y-2">
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600 py-1"
              >
                Terms Of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
