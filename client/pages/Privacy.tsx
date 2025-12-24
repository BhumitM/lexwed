import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <>
        <SEOHead
          title="Privacy Policy | LexWed - Marriage Legal Services in India"
          description="Read LexWed's Privacy Policy, compliant with the Digital Personal Data Protection Act 2023. Learn how we collect, use, and protect personal data for marriage registration and legal services."
          keywords="LexWed privacy policy, data protection, DPDP Act, marriage registration, personal information, legal services India"
          canonical="https://www.lexwed.com/privacy-policy"
          ogTitle="Privacy Policy | LexWed - Trusted Marriage Legal Services"
          ogDescription="Understand how LexWed safeguards your personal data while providing marriage registration and legal services. Compliant with DPDP Act 2023."
          ogUrl="https://www.lexwed.com/privacy-policy"
          ogType="website"
          twitterCard="summary_large_image"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivacyPolicy",
              "name": "LexWed Privacy Policy",
              "url": "https://www.lexwed.com/privacy-policy",
              "datePublished": "2025-01-01",
              "publisher": {
                "@type": "Organization",
                "name": "LexWed",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.lexwed.com/logo.png"
                }
              },
              "description": "LexWed Privacy Policy explaining how personal data is collected, used, and protected in accordance with the DPDP Act 2023."
            })
          }}
        />
      </>
      <Navigation />

      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))] bg-opacity-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[hsl(var(--primary))] mb-3 sm:mb-6 font-serif">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-[hsl(var(--muted-foreground))]">
            Protecting your personal information is our priority
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm sm:prose max-w-none">
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              <strong>Last Updated: January 2025</strong>
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              1. Introduction
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              LexWed ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable Indian laws.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              2. Information We Collect
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              <strong>Personal Data:</strong> Name, email address, phone number, city, and service preferences collected through our booking form.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              <strong>Legal Information:</strong> Details related to your marriage registration, documentation, and case particulars shared during consultation.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              <strong>Device Data:</strong> IP address, browser type, pages visited (collected via standard web analytics).
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              3. How We Use Your Data
            </h2>
            <ul className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed space-y-2">
              <li>• To provide legal consultation and marriage registration services</li>
              <li>• To respond to your inquiries and provide customer support</li>
              <li>• To send updates about your case or service status</li>
              <li>• To comply with legal and regulatory obligations</li>
              <li>• To improve our services and website functionality</li>
              <li>• To protect against fraud and legal liability</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              4. Legal Basis for Processing
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              We process your personal data based on:
            </p>
            <ul className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed space-y-2">
              <li>• Your explicit consent (DPDP Act, 2023)</li>
              <li>• Performance of contract for service delivery</li>
              <li>• Compliance with legal obligations</li>
              <li>• Legitimate interests in operating our business</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              5. Data Security
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is transmitted over encrypted connections (SSL/TLS).
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              6. Data Retention
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              We retain your personal data for as long as necessary to provide services and comply with legal obligations (typically 7 years for legal matters). You may request deletion of your data subject to legal and regulatory requirements.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              7. Your Rights
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              Under the DPDP Act, 2023, you have the right to:
            </p>
            <ul className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed space-y-2">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate or incomplete data</li>
              <li>• Request deletion (right to be forgotten)</li>
              <li>• Withdraw consent at any time</li>
              <li>• Grievance redressal within 30 days</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              8. Third-Party Sharing
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              We do not sell, trade, or rent your personal information. We only share data with government authorities and courts as required by law or when necessary for legal proceedings.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              9. Cookies
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              We use cookies to enhance your browsing experience and analyze website usage. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              10. Contact Us
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-2 text-sm sm:text-base leading-relaxed">
              For privacy-related queries or to exercise your rights:
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-2 text-sm sm:text-base leading-relaxed">
              <strong>Email:</strong> contact@lexwed.com
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              <strong>Phone:</strong> +91 97738 58006
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 mt-8">
              <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                We comply with the Digital Personal Data Protection Act, 2023 and other applicable Indian data protection laws. This policy is subject to change, and we will notify you of any significant updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
