import { Shield, FileCheck, Lock, Briefcase } from "lucide-react";

export default function TrustSection() {
  const trustPoints = [
    {
      icon: Briefcase,
      title: "Experienced Legal Professionals",
      description: "Team of certified lawyers with 15+ years of experience in marriage law",
    },
    {
      icon: FileCheck,
      title: "Transparent Professional Fees",
      description: "Clear, upfront pricing with no hidden charges or surprise costs",
    },
    {
      icon: Lock,
      title: "Confidential Consultation",
      description: "100% private and secure consultations following legal confidentiality standards",
    },
    {
      icon: Shield,
      title: "End-to-End Legal Support",
      description: "Complete assistance from documentation to registration and beyond",
    },
  ];

  return (
    <section id="trust" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4 font-serif">
            What Makes Us Different
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Quality service built on trust and professional excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    size={44}
                    className="text-[hsl(var(--secondary))]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[hsl(var(--primary))] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
