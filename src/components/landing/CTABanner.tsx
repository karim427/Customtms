import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-[hsl(213,52%,24%)] to-[hsl(222,47%,11%)]">
      <div className="container mx-auto text-center space-y-8">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Ready to See It in Action?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Book a free consultation and get a personalized walkthrough of the platform built for your freight operations.
        </p>

        <a
          href="#book-demo"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-5 rounded-xl text-lg font-bold hover:brightness-110 transition-all hover:scale-[1.03]"
        >
          Book a Free Demo <ArrowRight className="w-5 h-5" />
        </a>

      </div>
    </section>
  );
};

export default CTABanner;
