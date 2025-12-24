import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSearchParams } from "react-router-dom";

export default function Legal() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "privacy";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[hsl(var(--primary))] mb-8 font-serif">
            {page === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
          </h1>

          <div className="prose max-w-none">
            <div className="text-[hsl(var(--muted-foreground))] leading-relaxed space-y-6">
              {page === "privacy" ? (
                <>
                  <p>
                    <strong>Effective Date:</strong> January 1, 2024
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    1. Information We Collect
                  </h2>
                  <p>
                    We collect information you provide directly, such as your name,
                    email, phone number, and documents related to your marriage
                    legalization case.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    2. How We Use Your Information
                  </h2>
                  <p>
                    We use your information to:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Provide legal services and consultations</li>
                    <li>Prepare legal documents and applications</li>
                    <li>Communicate about your case</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    3. Data Security
                  </h2>
                  <p>
                    We implement industry-standard security measures to protect your
                    personal information from unauthorized access, alteration, or
                    disclosure.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    4. Attorney-Client Privilege
                  </h2>
                  <p>
                    All communications between you and our legal team are protected
                    by attorney-client privilege and confidentiality laws.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    5. Third-Party Disclosure
                  </h2>
                  <p>
                    We never share your personal information with third parties
                    without your explicit consent, except as required by law or to
                    complete your legal services.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    6. Your Rights
                  </h2>
                  <p>
                    You have the right to access, correct, or delete your personal
                    information. Contact us to exercise these rights.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    7. Changes to This Policy
                  </h2>
                  <p>
                    We may update this privacy policy periodically. We encourage you
                    to review this policy regularly for changes.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    8. Contact Us
                  </h2>
                  <p>
                    If you have questions about our privacy practices, please contact
                    us at contact@lexwed.com or +91 97738 58006.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Effective Date:</strong> January 1, 2024
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By using LexWed's services, you agree to be bound by these Terms
                    & Conditions and all applicable laws and regulations.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    2. Service Description
                  </h2>
                  <p>
                    LexWed provides legal consultation and assistance for marriage
                    registration and related services in India. Our services are
                    provided by qualified legal professionals.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    3. Eligibility
                  </h2>
                  <p>
                    To use our services, you must be 18 years or older and legally
                    able to enter into contracts in India.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    4. Payment Terms
                  </h2>
                  <p>
                    Payment is due upon service agreement. All fees are non-refundable
                    except as specified in our Refund Policy. Additional government
                    fees are the client's responsibility.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    While we strive to provide accurate legal guidance, we cannot
                    guarantee specific outcomes. Legal proceedings may be subject to
                    court discretion.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    6. Disclaimer
                  </h2>
                  <p>
                    This website and services are provided "as is" without warranties.
                    Results vary based on individual circumstances and applicable laws.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    7. Governing Law
                  </h2>
                  <p>
                    These terms are governed by the laws of India. Any disputes shall
                    be resolved in courts of Delhi.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    8. Changes to Terms
                  </h2>
                  <p>
                    We reserve the right to modify these terms at any time. Continued
                    use of our services indicates acceptance of modified terms.
                  </p>

                  <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mt-8">
                    9. Contact Information
                  </h2>
                  <p>
                    For questions regarding these terms, contact us at
                    contact@lexwed.com or +91 97738 58006.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
