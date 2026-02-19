import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="section-padding bg-hero" id="book-demo">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-hero-foreground font-heading mb-4">
        Ready to Own the Platform That Powers Your Growth?
      </h2>
      <p className="text-lg text-hero-muted max-w-xl mx-auto mb-8">
        Tell us about your freight business. We'll show you how to launch, aggregate, and scale — with technology you fully own.
      </p>
      <a
        href="#book-demo"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 transition-all hover:scale-[1.02]"
      >
        Get Started — Book a Free Consultation <ArrowRight className="w-5 h-5" />
      </a>
      <p className="text-hero-foreground/50 text-sm mt-6">
        Or call us: +1-209-207-3634 (US) · +91-99020-19342 (India)
      </p>
    </div>
  </section>
);

export default FinalCTASection;
