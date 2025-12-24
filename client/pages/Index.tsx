import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServiceModal from "@/components/ServiceModal";
import SEOHead from "@/components/SEOHead";
import { services } from "@/lib/services";

export default function Index() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleBookFromModal = () => {
    handleCloseModal();
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      const service = services.find((s) => s.id === selectedService);
      if (service) {
        const input = bookingElement.querySelector(
          'input[name="service"]'
        ) as HTMLInputElement;
        if (input) {
          input.value = service.title;
        }
      }
      setTimeout(() => {
        bookingElement.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const currentService = services.find((s) => s.id === selectedService);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO META TAGS */}
      <SEOHead
        title="LexWed | Legal Services & Marriage Registration in India"
        description="LexWed is a trusted legal services platform in India providing expert guidance for marriage registration, court marriage, and legal documentation."
        canonical="https://www.lexwed.com/"
      >
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="eJFLOpnbGuhdA_b_osIGKqvAlxR19Ib0Pyh71ZEWM4g" />
      </SEOHead>

      <Navigation />
      <Hero />

      {/* SEO CONTENT BLOCK (CRITICAL FOR GOOGLE) */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          LexWed – Legal Services & Marriage Registration in India
        </h1>

        <p className="text-gray-700 leading-relaxed">
          LexWed is a professional legal services platform in India dedicated to
          helping couples with marriage registration, court marriage, and
          related legal documentation. Our experienced legal team ensures a
          smooth, confidential, and legally compliant process across major
          Indian states.
        </p>
      </section>

      <TrustSection />

      <ServicesSection onServiceClick={handleServiceClick} />

      <HowItWorks />

      <WhyChoose />

      <Reviews />

      <BookingForm />

      <Footer />

      <FloatingWhatsApp />

      <ServiceModal
        service={currentService || null}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBook={handleBookFromModal}
      />
    </div>
  );
}