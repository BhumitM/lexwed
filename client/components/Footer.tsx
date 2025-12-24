import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--primary))] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Lex<span className="text-[hsl(var(--secondary))]">Wed</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Professional legal services for marriage and registration across
              India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/about" className="hover:text-[hsl(var(--secondary))] transition">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#services" className="hover:text-[hsl(var(--secondary))] transition">
                  Services
                </a>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[hsl(var(--secondary))] transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[hsl(var(--secondary))] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 97738 58006</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@lexwed.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Delhi, Haryana, Uttar Pradesh<br /><span className="text-xs">Coming PAN India soon</span></span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal & Policies</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-[hsl(var(--secondary))] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-[hsl(var(--secondary))] transition">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-[hsl(var(--secondary))] transition">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-[hsl(var(--secondary))] transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-700 pt-12 mb-8">
          <div className="flex items-start gap-3 mb-6">
            <Shield size={20} className="text-[hsl(var(--secondary))] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold mb-2">Legal Disclaimer</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                LexWed provides professional legal services for marriage
                registration and documentation assistance across India. Our
                services are based on current Indian laws and regulations. We
                maintain complete confidentiality of all client information as
                per legal and professional standards. This website and services
                are not a substitute for individual legal advice. Please
                consult qualified legal professionals for specific legal matters.
                All information provided is accurate to the best of our
                knowledge. LexWed reserves the right to update terms and
                services.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-sm text-gray-300">
            <p className="mb-2">
              <strong>Privacy Note:</strong> Your personal information is
              encrypted and secure. We never share client details with third
              parties without consent.
            </p>
            <p>
              <strong>Data Protection:</strong> All consultations are conducted
              under attorney-client privilege and professional confidentiality.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} LexWed. All rights reserved. | Professional
            Legal Services
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[hsl(var(--secondary))] transition">
              Twitter
            </a>
            <a href="#" className="hover:text-[hsl(var(--secondary))] transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[hsl(var(--secondary))] transition">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
