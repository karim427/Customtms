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
        "Appscrip has standout strengths, including its highly capable iOS and back-end teams, strong leadership, and a solid foundation, making it a reliable technology partner.",
      name: "Scott",
      role: "Founder, Fero, USA 🇺🇸",
    },
    {
      quote:
        "Appscrip's truck management app has streamlined my freight business with its ease of use and innovation. Their reliability and focus on industry trends set them apart.",
      name: "Mlog.",
      role: "Founder, Mlog, USA 🇺🇸",
    },
    {
      quote:
        "Working with Appscrip on a cargo shipping app has been great. Their responsive team and skilled developers made the process smooth and effective. I look forward to continuing our partnership!",
      name: "Alexi",
      role: "Founder, Loadsonar",
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
