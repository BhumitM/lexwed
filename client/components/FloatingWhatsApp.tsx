import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in LexWed's marriage legalization services. Please share more information.";
    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/919773858006?text=${encoded}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all z-30 animate-pulse hover:animate-none"
      title="Chat on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle size={28} />
    </button>
  );
}
