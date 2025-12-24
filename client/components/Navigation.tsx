import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    // If we're on the home page, scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[hsl(var(--primary))]">
              Lex<span className="text-[hsl(var(--secondary))]">Wed</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Home
            </button>
            <Link
              to="/about"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium whitespace-nowrap"
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Services
            </button>
            <Link
              to="/faqs"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium whitespace-nowrap"
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Contact
            </Link>
            <button
              onClick={() => scrollToSection("booking")}
              className="px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[hsl(var(--foreground))]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium text-left"
            >
              Home
            </button>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium"
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium text-left"
            >
              Services
            </button>
            <Link
              to="/faqs"
              onClick={() => setIsOpen(false)}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium"
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <button
              onClick={() => scrollToSection("booking")}
              className="px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-lg font-medium hover:opacity-90 transition-opacity text-left"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
