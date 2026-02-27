import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    emoji: "📦",
    title: "Transport Management System",
    description: "Real-time TMS for smart dispatch, routing, and tracking.",
    link: "https://appscrip.com/transportation-management-system/",
  },
  {
    emoji: "🚚",
    title: "White-Label Truck Booking App",
    description: "A fully branded truck booking platform. Think Uber, but for freight.",
    link: "https://appscrip.com/white-label-truck-booking-app-development/",
  },
  {
    emoji: "🏃",
    title: "On-Demand Delivery Platform",
    description: "Manage last-mile deliveries with a customizable delivery app.",
    link: "https://appscrip.com/on-demand-services-marketplace/",
  },
  {
    emoji: "⚡",
    title: "Super App Platform",
    description: "Combine transport, delivery, and services in one multi-service super app.",
    link: "https://appscrip.com/super-app-development/",
  },
];

const RelatedProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-section-alt">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="section-tag">More Solutions</span>
        <h2 className="section-title">
          More Solutions for Logistics Businesses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-background rounded-xl p-6 card-shadow text-left hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-3xl">{product.emoji}</span>

              <h3 className="font-bold text-primary font-heading mt-3 mb-2 text-base">
                {product.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {product.description}
              </p>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-semibold hover:underline"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;