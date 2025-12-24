import { useState } from "react";
import { services } from "@/lib/services";
import { MessageCircle, Loader } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleContinueWhatsApp = () => {
    const selectedService = services.find((s) => s.title === formData.service);
    const message = `Hello, I'm interested in the "${formData.service}" service (${selectedService?.priceDisplay}). I'm from ${formData.city}. Please provide more details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919773858006?text=${encoded}`, "_blank");
    setSubmitted(false);
    setFormData({ name: "", phone: "", city: "", service: "" });
  };

  return (
    <section id="booking" className="py-12 sm:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2 sm:mb-4 font-serif">
            Book Your Consultation
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-[hsl(var(--muted-foreground))]">
            Fill in your details and we'll connect with you shortly
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-[hsl(var(--light-gray))] rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg"
          >
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="10-digit mobile number"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Your city name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors"
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <label className="block text-xs sm:text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                Select Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors bg-white"
              >
                <option value="">Choose a service...</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title} - {service.priceDisplay}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Processing...
                </>
              ) : (
                "Continue"
              )}
            </button>

            <p className="text-center text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mt-4">
              Your information is secure and confidential
            </p>
          </form>
        ) : (
          <div className="bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--secondary))] bg-opacity-10 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-[hsl(var(--secondary))] shadow-lg text-center">
            <div className="mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-white sm:size-32" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--primary))] mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mb-6">
                We've received your details. Continue on WhatsApp to discuss your
                requirements with our legal experts.
              </p>

              <div className="bg-white rounded-lg p-3 sm:p-4 mb-6 text-left">
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mb-2">
                  <strong>Name:</strong> {formData.name}
                </p>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mb-2">
                  <strong>Phone:</strong> {formData.phone}
                </p>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mb-2">
                  <strong>City:</strong> {formData.city}
                </p>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                  <strong>Service:</strong> {formData.service}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <button
                onClick={handleContinueWhatsApp}
                className="w-full bg-green-500 text-white py-3 sm:py-4 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="sm:size-24" />
                Continue on WhatsApp
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", phone: "", city: "", service: "" });
                }}
                className="w-full bg-[hsl(var(--primary))] text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition-all"
              >
                Edit Details
              </button>
            </div>

            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-4">
              You can also call us directly or reply to our message
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
