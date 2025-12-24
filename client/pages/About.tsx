import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Award, Users, Target, Heart } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2017",
      title: "Founded",
      description:
        "LexWed started as an offline legal consultancy focused on marriage law and registration in Delhi, Haryana, and Uttar Pradesh",
    },
    {
      year: "2017-2024",
      title: "7 Years of Offline Service",
      description: "Served thousands of couples across Delhi, Haryana, and UP with trusted offline legal consultations and guidance",
    },
    {
      year: "2025",
      title: "Digital Platform Launch",
      description: "Launched online platform to extend our trusted services to more couples while maintaining our commitment to quality legal guidance",
    },
    {
      year: "2025+",
      title: "Growing Trusted Brand",
      description: "Now bringing our 7 years of expertise online while continuing to serve our core markets with the same dedication and professionalism",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to highest standards in legal service delivery",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Understanding and empathy for couples at every stage",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Clear communication and honest disclosure in all matters",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Ethical practices and professional integrity always",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="About LexWed - Marriage Legal Services Provider in India"
        description="Learn about LexWed's 7+ years of experience in marriage legalization and registration services. Founded in 2017, serving Delhi, Haryana, and Uttar Pradesh with trusted legal expertise."
        keywords="about marriage legal services, marriage law expertise, professional advocates, legal consultation, marriage registration services"
        canonical="https://www.lexwed.com/about"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))] bg-opacity-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[hsl(var(--primary))] mb-3 sm:mb-6 font-serif">
            About LexWed
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl">
            India's most trusted platform for marriage legalization and
            registration with a decade of legal expertise
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[hsl(var(--primary))] mb-4 font-serif">
                Our Mission
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                To make marriage legalization simple, transparent, and accessible
                to every couple in India. We believe in providing professional
                legal guidance without the complexity and confusion.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Our mission is to ensure that every couple can legally secure their
                marriage with confidence, privacy, and expert support, regardless
                of their background or location.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[hsl(var(--primary))] mb-4 font-serif">
                Our Vision
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                To be the most trusted legal partner for marriage-related services
                across India, known for our expertise, integrity, and client-centric
                approach.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We envision a future where every marriage is legally recognized,
                documented, and protected through accessible, affordable legal
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-[hsl(var(--light-gray))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-[hsl(var(--primary))] mb-8 sm:mb-12 text-center font-serif">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[hsl(var(--secondary))] bg-opacity-20 rounded-full mb-4">
                    <Icon
                      size={32}
                      className="text-[hsl(var(--secondary))]"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-[hsl(var(--primary))] mb-8 sm:mb-12 text-center font-serif">
            Our Journey
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[hsl(var(--secondary))] to-[hsl(var(--secondary))] bg-opacity-20"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[hsl(var(--secondary))]">
                      <p className="text-sm font-semibold text-[hsl(var(--secondary))] mb-2">
                        {milestone.year}
                      </p>
                      <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:flex"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 bg-[hsl(var(--light-gray))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-[hsl(var(--primary))] mb-4 sm:mb-6 text-center font-serif">
            Our Leadership Team
          </h2>
          <p className="text-center text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mb-8 sm:mb-12 max-w-2xl mx-auto">
            Experienced legal professionals dedicated to your success
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Adv. Pawan Siwach",
                role: "Founder & Senior Advocate",
                expertise: "Marriage Law, Family Law",
              },
              {
                name: "Adv. Deepak Malik",
                role: "Head of Operations",
                expertise: "Registration Law, Documentation",
              },
              {
                name: "Adv. Nitesh Chhikara",
                role: "Senior Legal Consultant",
                expertise: "Court Marriage, Legal Compliance",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--secondary))] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[hsl(var(--secondary))] mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
