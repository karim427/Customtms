import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-14 px-4 bg-gradient-to-r from-[hsl(213,52%,24%)] to-[hsl(222,47%,11%)]">
      <div className="container mx-auto text-center space-y-5">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
          Ready to See It in Action?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
          Book a free consultation and get a personalized walkthrough of the platform built for your freight operations.
        </p>
        <a
          href="#book-demo"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all hover:scale-[1.02]"
        >
          Book a Free Demo <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
