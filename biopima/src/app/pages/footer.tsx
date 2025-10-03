import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      id="contacts"
      className="bg-green-950 text-gray-100 py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full max-w-full overflow-hidden"
      style={{
        boxSizing: 'border-box',
      }}
    >
      <div
        className="
          container
          mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-y-10 gap-x-8 items-start
          md:flex md:flex-col
          lg:flex lg:flex-row lg:justify-between
          text-gray-300
        "
      >
        <div className="flex flex-col space-y-1.5 mt-[-13.5px]">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/Group 92.png"
              alt="BioPima Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl sm:text-3xl font-bold text-white select-none">BioPima</span>
          </div>
          <p className="leading-relaxed max-w-xs sm:max-w-sm text-sm sm:text-base">
            Smart IoT solutions for sustainable biogas management.
          </p>
          <div className="flex space-x-3">
            <Link
              href="https://facebook.com/biopima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-100 transition"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="https://instagram.com/biopima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-100 transition"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://linkedin.com/company/biopima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-100 transition"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>
        <nav aria-label="Product links" className="flex flex-col space-y-2">
          <h3 className="font-bold text-white mb-2">Product</h3>
          <Link href="#features" className="hover:text-gray-100 transition text-sm sm:text-base">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-gray-100 transition text-sm sm:text-base">
            Pricing
          </Link>
          <Link href="#installation" className="hover:text-gray-100 transition text-sm sm:text-base">
            Installation
          </Link>
          <Link href="#support" className="hover:text-gray-100 transition text-sm sm:text-base">
            Support
          </Link>
        </nav>
        <nav aria-label="Company links" className="flex flex-col space-y-2">
          <h3 className="font-bold text-white mb-2">Company</h3>
          <Link href="#about" className="hover:text-gray-100 transition text-sm sm:text-base">
            About Us
          </Link>
          <Link href="#how-it-works" className="hover:text-gray-100 transition text-sm sm:text-base">
            How It Works
          </Link>
          <Link href="#faqs" className="hover:text-gray-100 transition text-sm sm:text-base">
            FAQs
          </Link>
          <Link href="#testimonials" className="hover:text-gray-100 transition text-sm sm:text-base">
            Testimonials
          </Link>
        </nav>
        <section aria-label="Contact info" className="flex flex-col space-y-4">
          <h3 className="font-bold text-white mb-2">Contact Info</h3>
          <div className="flex items-center space-x-3">
            <FaEnvelope size={16} />
            <a
              href="mailto:info@biopima.com"
              className="text-xs sm:text-base hover:text-gray-100 transition"
            >
              info@biopima.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt size={16} />
            <a
              href="tel:+25401234567"
              className="text-xs sm:text-base hover:text-gray-100 transition"
            >
              +254 01 234-567
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt size={16} />
            <span className="text-xs sm:text-base">Nairobi, Kenya</span>
          </div>
        </section>
      </div>
      <div className="border-t border-green-800 mt-10 pt-6 text-center text-gray-400 text-xs sm:text-sm select-none">
        <span className="text-xl mr-1">© 2025 BioPima. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
