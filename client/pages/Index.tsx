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
      <SEOHead
        title="LexWed - Marriage Registration & Legal Services in Delhi, Haryana, UP"
        description="Expert legal guidance for marriage registration, court marriage, and legalization. 7+ years experience serving thousands of couples. Fast, confidential, and affordable services across Delhi, Haryana, and Uttar Pradesh."
        keywords="marriage registration Delhi, court marriage Haryana, marriage assistance UP, legal services, marriage certificate, Arya Samaj marriage, marriage registration online"
        canonical="https://www.lexwed.com/"
      />
      <Navigation />
      <Hero />
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
