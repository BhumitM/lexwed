import { Mail, MessageCircle } from "lucide-react";

export default function Hero() {
  const handleWhatsApp = () => {
    const message = "I'm interested in learning more about LexWed's services.";
    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/919773858006?text=${encoded}`,
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(51, 65, 85, 0.85) 0%, rgba(51, 65, 85, 0.7) 100%), url("https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg")',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
          Legal Guidance for Marriage & Registration
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto">
          Professional, confidential, and legally compliant marriage assistance
          across India. Expert guidance at every step.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
          >
            <Mail size={20} />
            Book Legal Consultation
          </button>
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-white text-[hsl(var(--primary))] rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </button>
        </div>

        <p className="mt-8 text-gray-300 text-sm">
          ✓ 24/7 Availability | ✓ Confidential Consultation | ✓ Expert Legal Team
        </p>
      </div>
    </section>
  );
}
