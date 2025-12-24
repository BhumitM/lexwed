import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Refund() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Refund Policy - LexWed Legal Services"
        description="Transparent refund policy for LexWed services. Understand our service delivery guarantee and refund terms."
        keywords="refund policy, money back guarantee, service guarantee, refund terms"
        canonical="https://www.lexwed.com/refund-policy"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))] bg-opacity-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[hsl(var(--primary))] mb-3 sm:mb-6 font-serif">
            Refund Policy
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-[hsl(var(--muted-foreground))]">
            Fair and transparent refund terms
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
              1. Our Refund Philosophy
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              LexWed believes in fair and transparent pricing. Our services are delivered based on actual work performed - legal research, documentation preparation, court submissions, and expert guidance. We offer refunds only in specific circumstances where we cannot deliver the promised service.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              2. Non-Refundable Services
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              <strong>The following services are non-refundable:</strong>
            </p>
            <ul className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed space-y-2">
              <li>• Consultations conducted (knowledge transferred)</li>
              <li>• Documents prepared and delivered</li>
              <li>• Legal research and case analysis</li>
              <li>• Court filing and submission services (filing fees paid)</li>
              <li>• Work initiated at client's request</li>
              <li>• Cases withdrawn by client after work begins</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              3. Conditional Refund - Service Non-Delivery
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              Refunds are available ONLY if:
            </p>
            <ul className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed space-y-2">
              <li>• Service is cancelled within 48 hours of booking (if no work has been initiated)</li>
              <li>• We are unable to provide the service due to legal or jurisdictional reasons</li>
              <li>• Service is cancelled due to our operational failure (documented)</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              4. Non-Refundable Circumstances
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              <strong>Refunds will NOT be provided for:</strong>
            </p>
            <ul className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed space-y-2">
              <li>• Unfavorable court decisions or application rejections (not our fault)</li>
              <li>• Client-initiated cancellations after work commencement</li>
              <li>• Incomplete information or documentation provided by client</li>
              <li>• Client's failure to comply with advice or instructions</li>
              <li>• Marriage registration declined due to applicant's legal eligibility issues</li>
              <li>• Client dissatisfaction with process or timeline</li>
              <li>• Court or government delays beyond our control</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              5. Court & Government Fees
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              Court filing fees, government charges, and statutory fees are NON-REFUNDABLE as they are paid directly to government authorities. We can only refund our service fee if service is not delivered, not government charges.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              6. Refund Request Process
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              <strong>Step 1:</strong> Submit refund request within 7 days of service purchase
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              <strong>Step 2:</strong> Provide detailed reason with supporting documentation
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm sm:text-base leading-relaxed">
              <strong>Step 3:</strong> Our team reviews the request within 5-7 business days
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              <strong>Step 4:</strong> If approved, refund is processed within 10-15 business days to original payment method
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              7. Refund Deductions
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              If a refund is approved, the following are deducted:
            </p>
            <ul className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed space-y-2">
              <li>• Government and court fees already paid</li>
              <li>• Administrative costs incurred</li>
              <li>• Work completed before cancellation (hourly rate: ₹500/hour)</li>
              <li>• Payment processing fees (2-3% as per payment gateway charges)</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              8. No Refund for Service Quality Dissatisfaction
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              If you believe the service quality was below expectations, we offer FREE re-consultation or revision of documents. However, this does not include monetary refunds. We stand behind our work with 100% service quality guarantee.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              9. Payment Method & Timeline
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              Approved refunds are processed to your original payment method. Bank transfers typically take 5-10 business days depending on your bank. Card refunds may take 10-15 business days to appear on your statement.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              10. Contact for Refund Requests
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-2 text-sm sm:text-base leading-relaxed">
              Send refund requests to:
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-2 text-sm sm:text-base leading-relaxed">
              <strong>Email:</strong> contact@lexwed.com
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-2 text-sm sm:text-base leading-relaxed">
              <strong>Phone:</strong> +91 97738 58006
            </p>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              <strong>Include:</strong> Booking ID, transaction details, and reason for refund
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))] mt-8 mb-4 font-serif">
              11. Disputes & Appeals
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm sm:text-base leading-relaxed">
              If you disagree with our refund decision, you have the right to file a complaint with the Digital Personal Data Protection Authority or pursue legal remedies available under Indian law.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 mt-8">
              <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                <strong>Our Commitment:</strong> We deliver high-quality legal services. If we cannot provide the service you paid for, we ensure fair refunds with transparent deductions. We believe in building trust through honest dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
