import { X, CheckCircle, Clock, IndianRupee } from "lucide-react";
import { Service } from "@/lib/services";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}

const serviceDetails: Record<
  string,
  {
    description: string;
    timeline: string;
    includes: string[];
    notIncludes: string[];
  }
> = {
  "court-marriage": {
    description:
      "Our court marriage assistance provides complete legal support for marriage registration under the Special Marriage Act, 1954. We guide you through every step of the process, from document preparation to final registration and certificate issuance.",
    timeline: "30-45 days",
    includes: [
      "Complete legal consultation",
      "Document preparation and verification",
      "Application filing with court",
      "Witness arrangement if needed",
      "Court hearing representation",
      "Marriage certificate issuance guidance",
      "Post-registration support",
    ],
    notIncludes: [
      "Court fees (₹50-100)",
      "Travel and miscellaneous expenses",
    ],
  },
  "arya-samaj-support": {
    description:
      "Legal support for Arya Samaj marriages recognized across India. We ensure your marriage is conducted legally and all necessary documentation is in place for future registration and legal recognition.",
    timeline: "7-14 days",
    includes: [
      "Legal compliance review",
      "Arya Samaj ceremony guidance",
      "Marriage certificate from Arya Samaj",
      "Documentation assistance",
      "Legal advice and consultation",
      "Follow-up registration support",
    ],
    notIncludes: [
      "Arya Samaj ceremony fees (typically ₹500-2000)",
      "Priest or ceremonial charges",
    ],
  },
  "arya-samaj-registration": {
    description:
      "Complete package combining Arya Samaj marriage ceremony with official government registration. This is the most comprehensive service ensuring your marriage is legally recognized by all authorities.",
    timeline: "21-30 days",
    includes: [
      "Legal compliance review",
      "Arya Samaj ceremony support",
      "Arya Samaj marriage certificate",
      "Government registration filing",
      "All documentation and forms",
      "Court or registration office representation",
      "Official marriage certificate",
      "Legal recognition across India",
    ],
    notIncludes: [
      "Arya Samaj ceremony fees",
      "Court/registration office fees",
    ],
  },
  "marriage-registration": {
    description:
      "Official marriage registration under relevant laws (Hindu Marriage Act, Special Marriage Act, or personal law). We handle all paperwork and registration with the government to provide you with an official marriage certificate.",
    timeline: "14-21 days",
    includes: [
      "Document verification",
      "Registration form preparation",
      "Application filing",
      "Follow-up with registration office",
      "Marriage certificate acquisition",
      "Multi-certified copies",
      "Guidance on usage of certificate",
    ],
    notIncludes: [
      "Government registration fees",
      "Additional certified copy charges",
    ],
  },
};

export default function ServiceModal({
  service,
  isOpen,
  onClose,
  onBook,
}: ServiceModalProps) {
  if (!isOpen || !service) return null;

  const details = serviceDetails[service.id];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full my-8">
        <div className="sticky top-0 bg-white border-b-2 border-[hsl(var(--border))] p-6 flex justify-between items-start rounded-t-xl">
          <div>
            <h2 className="text-3xl font-bold text-[hsl(var(--primary))] font-serif">
              {service.title}
            </h2>
            {service.isPopular && (
              <span className="inline-block mt-2 px-3 py-1 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-full text-sm font-semibold">
                Most Popular
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-300px)]">
          {/* Price */}
          <div className="flex items-baseline gap-3 pb-6 border-b border-[hsl(var(--border))]">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[hsl(var(--secondary))]">
                {service.priceDisplay}
              </span>
              <span className="text-[hsl(var(--muted-foreground))]">
                one-time fee
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-3">
              About This Service
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              {details.description}
            </p>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-3 bg-[hsl(var(--light-gray))] p-4 rounded-lg">
            <Clock className="text-[hsl(var(--secondary))]" size={24} />
            <div>
              <p className="text-sm font-semibold text-[hsl(var(--muted-foreground))]">
                Typical Timeline
              </p>
              <p className="text-lg font-bold text-[hsl(var(--primary))]">
                {details.timeline}
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-4">
              What's Included
            </h3>
            <ul className="space-y-3">
              {details.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[hsl(var(--secondary))] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[hsl(var(--muted-foreground))]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          {details.notIncludes.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">
                Additional Costs (Not Included)
              </p>
              <ul className="space-y-2">
                {details.notIncludes.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-blue-800 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ */}
          <div>
            <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[hsl(var(--primary))] mb-2">
                  Is this service legally valid?
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Yes, all our services comply with Indian marriage laws and produce legally recognized certificates accepted by all government authorities.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[hsl(var(--primary))] mb-2">
                  Can I start the process immediately?
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Yes, after your consultation and fee payment, we begin documentation immediately. Most cases complete within the stated timeline.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[hsl(var(--primary))] mb-2">
                  Is there a refund if I'm not satisfied?
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Our success rate is 99%. If the service doesn't meet our standards, we offer alternatives at no extra cost. Check our refund policy for details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-[hsl(var(--border))] p-6 flex gap-3 rounded-b-xl">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg font-semibold hover:bg-[hsl(var(--primary))] hover:text-white transition-all"
          >
            Close
          </button>
          <button
            onClick={onBook}
            className="flex-1 px-6 py-3 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <IndianRupee size={18} />
            Book Now - {service.priceDisplay}
          </button>
        </div>
      </div>
    </div>
  );
}
