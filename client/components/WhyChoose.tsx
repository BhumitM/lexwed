import { CheckCircle, Zap, Scale, Globe, Award, Users, Lock } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: Scale,
      title: "Legal Compliance",
      description:
        "All services fully compliant with Indian marriage laws and registration requirements across all states",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description:
        "Expedited service delivery without compromising on quality and accuracy. Quick turnaround times.",
    },
    {
      icon: Globe,
      title: "Regional Expertise",
      description:
        "Currently operating in Delhi, Haryana, and Uttar Pradesh with deep local expertise. Expanding PAN India soon.",
    },
    {
      icon: Award,
      title: "Guaranteed Results",
      description:
        "Committed to successful outcomes with transparent progress updates and dedicated support",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced advocates and legal professionals with specialized marriage law expertise",
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description:
        "Absolute confidentiality and data protection following legal and professional standards",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Couples Served" },
    { number: "15+", label: "Years of Experience" },
    { number: "99%", label: "Success Rate" },
  ];

  return (
    <section id="why-choose" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4 font-serif">
            Why Choose LexWed
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Trusted by thousands of couples across India
          </p>
        </div>

        {/* 6 Features Grid - Minimal Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      size={48}
                      className="text-[hsl(var(--secondary))]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--primary))] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats - Minimal Line Separator Design */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-12 py-16 border-y border-[hsl(var(--border))]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[hsl(var(--secondary))] mb-2">
                {stat.number}
              </div>
              <p className="text-[hsl(var(--muted-foreground))]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section - Simple List */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-[hsl(var(--primary))] mb-12 font-serif text-center">
            Our Commitment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Transparent Pricing",
                description:
                  "No hidden fees, upfront costs, complete breakdown of services",
              },
              {
                title: "Dedicated Support",
                description:
                  "Personal legal advisor for your case, available throughout the process",
              },
              {
                title: "Quick Resolution",
                description: "Fastest processing in the industry with zero delays",
              },
              {
                title: "Legal Expertise",
                description:
                  "Team of certified advocates with specialized marriage law knowledge",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle
                    size={24}
                    className="text-[hsl(var(--secondary))]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--primary))] mb-2">
                    {item.title}
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
