import { services } from "@/lib/services";
import { CheckCircle, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface ServicesSectionProps {
  onServiceClick?: (serviceId: string) => void;
}

export default function ServicesSection({ onServiceClick }: ServicesSectionProps) {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [api]);

  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-2 sm:mb-4 font-serif">
            Our Services
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Comprehensive legal assistance for all marriage scenarios
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="ml-0 -ml-4">
            {services.map((service) => (
              <CarouselItem key={service.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <div
                  className={`relative rounded-xl shadow-lg transition-all transform hover:scale-105 overflow-hidden h-full ${
                    service.isPopular
                      ? "border-4 border-[hsl(var(--secondary))]"
                      : ""
                  }`}
                >
                  {service.isPopular && (
                    <div className="absolute top-0 right-0 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-3 py-1 sm:px-4 sm:py-2 rounded-bl-lg font-bold text-xs sm:text-sm">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`p-4 sm:p-6 lg:p-8 flex flex-col h-full ${
                      service.isPopular
                        ? "bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))] bg-opacity-5"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[hsl(var(--primary))] mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-[hsl(var(--muted-foreground))] mb-4 sm:mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2 mb-4 sm:mb-6 flex-wrap">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))]">
                          {service.priceDisplay}
                        </span>
                        <span className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                          one-time
                        </span>
                      </div>

                      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                          <CheckCircle size={16} className="text-[hsl(var(--secondary))] flex-shrink-0" />
                          <span>Complete documentation</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                          <CheckCircle size={16} className="text-[hsl(var(--secondary))] flex-shrink-0" />
                          <span>Legal review included</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                          <CheckCircle size={16} className="text-[hsl(var(--secondary))] flex-shrink-0" />
                          <span>Expert consultation</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                        service.isPopular
                          ? "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:opacity-90"
                          : "bg-[hsl(var(--primary))] text-white hover:bg-opacity-90"
                      }`}
                    >
                      <BookOpen size={16} className="sm:size-18" />
                      View Details
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-16 sm:-left-12" />
          <CarouselNext className="hidden lg:flex -right-16 sm:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
