import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 text-[#102c2e] p-2">
      <hr />
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-400 pb-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold">
            <span className="text-blue-700">DVL</span>{" "}
            <span className="text-pink-500">ARCHITECT</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Dreams give us hope. Vision gives us clarity. Together, they guide the rhythm of life.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 m-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-sky-500 hover:text-white transition">
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-pink-500 hover:text-white transition">
              <FaInstagram />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-red-600 hover:text-white transition">
              <FaYoutube />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-blue-700 hover:text-white transition">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center mt-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} DVL Architect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
