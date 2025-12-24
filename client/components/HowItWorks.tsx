import {
  FileText,
  Users,
  FileCheck,
  Heart,
  Award,
  ChevronRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Fill Booking Form",
      description: "Share your details and service requirements",
      icon: FileText,
    },
    {
      number: 2,
      title: "Legal Review & Consultation",
      description: "Discuss your case with our legal experts",
      icon: Users,
    },
    {
      number: 3,
      title: "Document Preparation",
      description: "We prepare all necessary legal documents",
      icon: FileCheck,
    },
    {
      number: 4,
      title: "Marriage / Registration Assistance",
      description: "Complete guidance through marriage or registration",
      icon: Heart,
    },
    {
      number: 5,
      title: "Certificate Issuance Guidance",
      description: "Final support for certificate generation",
      icon: Award,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-[hsl(var(--light-gray))]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4 font-serif">
            How It Works
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Simple, transparent process from consultation to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg">
                      <Icon size={40} />
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(var(--primary))] text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] text-center mt-2 max-w-xs">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-10 left-[55%] w-[calc(200%-55%)] h-1 bg-gradient-to-r from-[hsl(var(--secondary))] to-transparent">
                      <ChevronRight className="absolute right-0 top-[-12px] text-[hsl(var(--secondary))]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border-l-4 border-[hsl(var(--secondary))]">
          <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-4">
            Why Our Process Works
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
            Our structured approach ensures nothing is overlooked. Each step is
            designed to provide maximum clarity, compliance, and peace of mind.
            We handle the complex legal matters so you can focus on what matters
            most.
          </p>
          <ul className="space-y-3 text-[hsl(var(--muted-foreground))]">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--secondary))] rounded-full"></span>
              Fully compliant with Indian marriage laws
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--secondary))] rounded-full"></span>
              All-inclusive documentation support
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--secondary))] rounded-full"></span>
              Direct access to legal professionals
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
