export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  priceDisplay: string;
  isPopular?: boolean;
}

export const services: Service[] = [
  {
    id: "court-marriage",
    title: "Court Marriage Assistance",
    description: "Complete legal assistance for court marriage proceedings across India",
    price: 9999,
    priceDisplay: "₹9,999",
  },
  {
    id: "arya-samaj-support",
    title: "Arya Samaj Marriage (Legal Support)",
    description: "Professional legal guidance for Arya Samaj marriage ceremonies",
    price: 7500,
    priceDisplay: "₹7,500",
  },
  {
    id: "arya-samaj-registration",
    title: "Arya Samaj Marriage + Registration",
    description: "Complete package with legal support and registration assistance",
    price: 13999,
    priceDisplay: "₹13,999",
    isPopular: true,
  },
  {
    id: "marriage-registration",
    title: "Marriage Registration (All Cases)",
    description: "Registration support for all types of marriages with complete documentation",
    price: 8999,
    priceDisplay: "₹8,999",
  },
];
