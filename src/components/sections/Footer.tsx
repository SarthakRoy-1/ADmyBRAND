'use client'

import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Quick Links */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#faq" className="hover:text-white">FAQs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#calculator" className="hover:text-white">Calculator</a>
            <a href="#blog" className="hover:text-white">Blog</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-right">
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-end gap-4 text-2xl">

            <a href="https://www.linkedin.com/company/admybrand/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>

            <a href="https://www.facebook.com/admybrand" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook />
            </a>

            <a href="https://x.com/admybrand" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>

            <a href="https://www.instagram.com/admybrand/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.
      </div>
    </footer>
  );
};
