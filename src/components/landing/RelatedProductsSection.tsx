import { Package, Truck, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  { emoji: "📦", title: "Digital Freight Broker & Load Board", desc: "A digital load board on Web, iOS and Android with integrated TMS." },
  { emoji: "🚚", title: "White-Label Truck Booking App", desc: "A fully branded truck booking platform. Think Uber, but for freight." },
  { emoji: "🏃", title: "On-Demand Delivery Platform", desc: "Manage last-mile deliveries with a customizable delivery app." },
  { emoji: "⚡", title: "Super App Platform", desc: "Combine transport, delivery, and services in one multi-service super app." },
];

const RelatedProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-section-alt">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <span className="section-tag">More Solutions</span>
        <h2 className="section-title">More Solutions for Logistics Businesses</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((p) => (
            <div key={p.title} className="bg-background rounded-xl p-6 card-shadow text-left hover:-translate-y-1 transition-transform duration-300">
              <span className="text-3xl">{p.emoji}</span>
              <h3 className="font-bold text-primary font-heading mt-3 mb-2 text-base">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <a href="#" className="text-accent text-sm font-semibold hover:underline">Explore →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;
