import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { val: "150+", label: "Apps Launched" },
    { val: "12+", label: "Years in Business" },
    { val: "4.8/5", label: "Clutch Rating" },
  ];

  const testimonials = [
    {
      quote:
        "We went from idea to live platform in under 90 days. Appscrip gave us a TMS that works exactly how our business operates.",
      name: "James K.",
      role: "Freight Aggregator, USA 🇺🇸",
    },
    {
      quote:
        "The source code ownership was the deciding factor. Appscrip was the only one that gave us a pre-built base we could fully own.",
      name: "Ahmed R.",
      role: "Fleet Operator, UAE 🇦🇪",
    },
    {
      quote:
        "I'm a non-tech founder. Their team understood our business first, then built the tech around it. Our driver app is a game-changer.",
      name: "Priya S.",
      role: "Logistics Startup, Singapore 🇸🇬",
    },
  ];

  return (
    <section className="section-padding bg-section-alt" id="social-proof">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <span className="section-tag">Trusted Worldwide</span>
        <h2 className="section-title">
          Powering Businesses Across Countries
        </h2>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background rounded-2xl p-8 w-full sm:w-[280px] text-center shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary font-heading">
                {s.val}
              </div>
              <div className="text-sm text-muted-foreground mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-2xl p-6 md:p-8 text-left shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-muted-foreground italic text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div>
                <div className="font-semibold text-foreground text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
