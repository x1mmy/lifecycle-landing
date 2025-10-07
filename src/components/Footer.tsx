import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-20 border-t border-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-start">
          <div className="footer-brand">
            <div className="text-xl font-bold text-gray-800 mb-3">
              LifeCycle.
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              2025 © LifeCycle
              <br />
              All rights reserved.
            </div>
          </div>
          <div className="flex gap-x-20">
            <div className="flex flex-col gap-y-2">
              <Link
                to="/"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Linkedin
              </a>
            </div>
            <div className="flex flex-col gap-y-2">
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors duration-300 hover:text-primary-600"
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
