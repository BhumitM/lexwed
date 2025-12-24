import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Service & Process",
      questions: [
        {
          q: "What is the difference between Arya Samaj and Court Marriage?",
          a: "Court Marriage is legal marriage registration under the Special Marriage Act 1954, recognized by the government. Arya Samaj Marriage is a Hindu religious ceremony performed by Arya Samaj that is also legally recognized. Court Marriage takes longer but is more formal, while Arya Samaj is quicker and follows Hindu traditions.",
        },
        {
          q: "How long does the process take?",
          a: "Timeline varies by service: Arya Samaj Marriage takes 7-14 days, Court Marriage takes 30-45 days, Registration typically takes 14-21 days. Our experienced team works to meet these timelines while maintaining quality.",
        },
        {
          q: "What documents do I need for marriage registration?",
          a: "Basic requirements include Aadhaar/PAN, birth certificate, address proof, photos, and affidavit. For court marriage, additional documents like divorce decrees (if applicable) may be needed. Our team guides you through all requirements.",
        },
        {
          q: "Can we do this if we are from different religions?",
          a: "Yes, absolutely. The Special Marriage Act allows marriage between people of any religion or caste. This is the most common route for inter-religious marriages. Our team specializes in such cases.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "Are there any hidden charges?",
          a: "No, we believe in complete transparency. Our quoted price includes all our legal services. Government fees and miscellaneous expenses are clearly mentioned separately.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major payment methods including credit cards, debit cards, net banking, UPI, and bank transfers. Payment is processed through secure gateways.",
        },
        {
          q: "Is there a refund policy?",
          a: "Yes, our refund policy covers cases where the service is not completed as promised due to our fault. Check our full refund policy on the website for detailed terms.",
        },
        {
          q: "Do you offer payment plans or EMI?",
          a: "For larger packages, we can discuss payment arrangements. Contact us directly to discuss options suitable for your budget.",
        },
      ],
    },
    {
      category: "Legal & Validity",
      questions: [
        {
          q: "Is the marriage certificate legally valid across India?",
          a: "Yes, marriage certificates issued through our services are recognized by all government authorities, banks, courts, and institutions across India. They are valid for all legal purposes including passport, immigration, and property registration.",
        },
        {
          q: "What if one partner is below 18 years old?",
          a: "Indian law requires both partners to be 18+ for marriage. We cannot assist with underage marriages as they violate Indian law.",
        },
        {
          q: "Is our marriage information kept confidential?",
          a: "Yes, absolute confidentiality is maintained. Your personal information and marriage details are protected under attorney-client privilege and data protection laws.",
        },
        {
          q: "Can the certificate be used for visa/immigration purposes?",
          a: "Yes, our marriage certificates are recognized by all embassies and immigration authorities for visa, green card, and immigration applications.",
        },
      ],
    },
    {
      category: "Post-Service",
      questions: [
        {
          q: "How do I get additional certified copies of the marriage certificate?",
          a: "We guide you through the process or can arrange certified copies from the registration office. Cost is minimal (₹20-50 per copy) and processed in 1-2 days.",
        },
        {
          q: "What if there's an error in the certificate?",
          a: "We handle corrections through the registration office. Minor corrections are free; major changes may have a small fee. We manage the entire correction process.",
        },
        {
          q: "Do you provide support after the service is completed?",
          a: "Yes, we provide 6 months of post-service support including guidance on using the certificate, corrections, and answering any legal questions.",
        },
        {
          q: "Can I use the certificate immediately after issuance?",
          a: "Yes, the certificate is valid immediately upon issuance. You can use it for all purposes right away - passport, visas, loans, property purchase, etc.",
        },
      ],
    },
    {
      category: "Specific Situations",
      questions: [
        {
          q: "What if I'm already in a registered marriage?",
          a: "If you're registering an existing marriage, we guide you through the legal registration process. If you're married under personal law, we handle conversion to Special Marriage Act if needed.",
        },
        {
          q: "Can we get married if one partner has been divorced?",
          a: "Yes, absolutely. Divorced individuals can remarry. You'll need the divorce decree or legal separation order, which we'll review and include in the registration.",
        },
        {
          q: "What about NRI marriages?",
          a: "We handle NRI marriages where one or both partners are Non-Resident Indians. Consent letters and power of attorney can be arranged for overseas partners.",
        },
        {
          q: "Can we register a marriage done abroad?",
          a: "Yes, foreign marriages can be registered in India. We guide you through the process including document translation and legal validation.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="FAQs - Marriage Registration & Legal Services | LexWed"
        description="Frequently asked questions about marriage registration, court marriage, legal procedures, and services offered by LexWed."
        keywords="frequently asked questions, marriage registration faq, court marriage questions, legal services faq"
        canonical="https://www.lexwed.com/faqs"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))] bg-opacity-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--primary))] mb-6 font-serif">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl">
            Find answers to common questions about our marriage legalization
            services
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, qIndex) => {
                  const globalIndex = sectionIndex * 10 + qIndex;
                  return (
                    <div
                      key={qIndex}
                      className="border-2 border-[hsl(var(--border))] rounded-lg overflow-hidden hover:border-[hsl(var(--secondary))] transition-colors"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(
                            openIndex === globalIndex ? null : globalIndex
                          )
                        }
                        className="w-full px-6 py-4 flex items-start justify-between hover:bg-[hsl(var(--light-gray))] transition-colors"
                      >
                        <span className="text-left font-semibold text-[hsl(var(--primary))]">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={24}
                          className={`flex-shrink-0 text-[hsl(var(--secondary))] transition-transform ${
                            openIndex === globalIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openIndex === globalIndex && (
                        <div className="px-6 py-4 bg-[hsl(var(--light-gray))] border-t-2 border-[hsl(var(--border))]">
                          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[hsl(var(--light-gray))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[hsl(var(--primary))] mb-4 font-serif">
            Still Have Questions?
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mb-8">
            Our legal team is ready to help. Contact us directly for personalized guidance.
          </p>
          <button
            onClick={() => {
              const booking = document.getElementById("booking");
              if (booking) {
                booking.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-3 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
