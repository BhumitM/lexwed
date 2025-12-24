import { useState } from "react";
import { Star, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      name: "Rajesh & Priya",
      service: "Court Marriage Assistance",
      rating: 5,
      text: "Excellent service! LexWed made our court marriage process so smooth and hassle-free. The team was professional, supportive, and completed everything within the promised timeframe. Highly recommended!",
      date: "January 2025",
    },
    {
      id: "2",
      name: "Amit Kumar",
      service: "Marriage Registration",
      rating: 5,
      text: "Very professional and knowledgeable team. They explained everything clearly and helped us register our marriage without any complications. Worth every penny!",
      date: "December 2024",
    },
    {
      id: "3",
      name: "Neha & Arjun",
      service: "Arya Samaj Marriage",
      rating: 5,
      text: "Amazing experience! The advocates were very knowledgeable about Arya Samaj marriage laws. They guided us through every step and ensured all documentation was perfect. Thank you!",
      date: "November 2024",
    },
    {
      id: "4",
      name: "Mohit Sharma",
      service: "Interfaith Marriage Registration",
      rating: 5,
      text: "LexWed handled our interfaith marriage registration with sensitivity and expertise. We felt safe and supported throughout the process. Highly professional team!",
      date: "October 2024",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    rating: 5,
    text: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.service && formData.text) {
      const newReview: Review = {
        id: Date.now().toString(),
        name: formData.name,
        service: formData.service,
        rating: formData.rating,
        text: formData.text,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        }),
      };
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", service: "", rating: 5, text: "" });
      setShowForm(false);
    }
  };

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 0;

  const services = [
    "Court Marriage Assistance",
    "Marriage Registration",
    "Arya Samaj Marriage",
    "Special Marriage Act",
    "Interfaith Marriage Registration",
    "Marriage Certificate Legalization",
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-[hsl(var(--light-gray))] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4 font-serif">
            Client Reviews & Testimonials
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            See what our satisfied clients say about their experience with LexWed
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 text-center border-2 border-[hsl(var(--secondary))] border-opacity-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-4xl sm:text-5xl font-bold text-[hsl(var(--primary))]">
              {avgRating}
            </div>
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={`${
                      i < Math.floor(parseFloat(avgRating as any))
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2">
                Based on {reviews.length} reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--secondary))] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-[hsl(var(--secondary))]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[hsl(var(--primary))] text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      {review.service}
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form Toggle */}
        {!showForm ? (
          <div className="text-center">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Share Your Experience
            </Button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-6 font-serif">
              Share Your Review
            </h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Rajesh & Priya"
                  className="w-full px-4 py-2 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                  Service Used *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] bg-white"
                >
                  <option value="">Select a service...</option>
                  {services.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                  Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, rating: star }))
                      }
                      className="p-1"
                    >
                      <Star
                        size={24}
                        className={`${
                          star <= formData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        } cursor-pointer`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                  Your Review *
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  required
                  placeholder="Share your experience with LexWed..."
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:outline-none focus:border-[hsl(var(--secondary))] resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
