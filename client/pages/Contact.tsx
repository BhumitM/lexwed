import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 97738 58006", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@lexwed.com", "Response within 2 hours"],
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: ["Delhi, Haryana, Uttar Pradesh", "Coming PAN India soon"],
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Monday - Sunday", "9:00 AM - 10:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Contact LexWed | Expert Legal Guidance for Marriage Registration"
        description="Reach out to LexWed for trusted legal guidance on marriage registration, court marriage, and related services. Available 24/7 across Delhi, Haryana, and Uttar Pradesh."
        keywords="LexWed contact, marriage legal services, court marriage inquiry, legal consultation, marriage registration support"
        canonical="https://www.lexwed.com/contact"
        ogTitle="Contact LexWed - Expert Marriage Legal Services in India"
        ogDescription="Connect with LexWed for professional legal guidance on marriage registration and legalization services. Fast response and trusted expertise since 2017."
        ogUrl="https://www.lexwed.com/contact"
        ogType="website"
        twitterCard="summary_large_image"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))] bg-opacity-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--primary))] mb-6 font-serif">
            Get in Touch
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl">
            Have questions? Our legal team is here to help and guide you through
            your marriage legalization journey
          </p>
        </div>
      </section>

      {/* Contact Info - Minimal Design */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={44} className="text-[hsl(var(--secondary))]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--primary))] mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-[hsl(var(--light-gray))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[hsl(var(--primary))] mb-8 font-serif">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-800">
                    Thank you for reaching out. We'll get back to you within 2
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors bg-white"
                      placeholder="+91 10-digit number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="service_inquiry">Service Inquiry</option>
                      <option value="pricing_question">Pricing Question</option>
                      <option value="technical_issue">Technical Issue</option>
                      <option value="general_feedback">General Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors bg-white resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-[hsl(var(--primary))] mb-8 font-serif">
                Why Contact Us?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-2">
                    Personalized Consultation
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    Every case is unique. Our legal experts provide personalized
                    guidance based on your specific situation and requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-2">
                    Quick Response Time
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    We respond to all inquiries within 2 hours during business
                    hours. Your questions are important to us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    Talk directly with our legal professionals who have handled
                    thousands of marriage cases across India.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-2">
                    Confidential & Secure
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    Your information is completely confidential and protected by
                    attorney-client privilege and data protection laws.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-[hsl(var(--secondary))]">
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    <strong>Emergency Support:</strong> For urgent matters, call
                    us directly at +91 97738 58006. We maintain 24/7 availability
                    for critical legal issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
