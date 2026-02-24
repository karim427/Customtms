import { ArrowRight, Play, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const stats = [
    "AI Enhansed features",
    "Customizable Mobile app",
    "100% Source Code Ownership",
  ];

  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(213,52%,24%)] via-[hsl(222,47%,11%)] to-[hsl(222,47%,8%)]" />

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-10 md:pt-36 md:pb-14">
        {/* Centered vertical hero content */}
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
            🚛 Custom TMS Software
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-hero-foreground leading-[1.1] font-heading">
            Build a Custom TMS You Actually Own
          </h1>

          <p className="text-lg md:text-xl text-hero-muted max-w-xl mx-auto leading-relaxed">
            Pre-built. Fully customizable. Launch-ready in 60 days. Truck management software for freight businesses, aggregators, and fleet operators who need to own their technology — not rent it.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#book-demo"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:brightness-110 transition-all hover:scale-[1.02]"
            >
              Book a Free Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#video"
              className="inline-flex items-center gap-2 border border-hero-foreground/30 text-hero-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-hero-foreground/10 transition-all"
            >
              <Play className="w-5 h-5" /> Watch Product Tour
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
            {stats.map((s) => (
              <span key={s} className="flex items-center gap-1.5 text-hero-foreground/70 text-sm">
                <CheckCircle className="w-4 h-4 text-success" /> {s}
              </span>
            ))}
          </div>
        </div>

        {/* Video embed area */}
        <div className="max-w-4xl mx-auto mt-14" id="video">
        <div className="aspect-video rounded-2xl overflow-hidden border border-primary-foreground/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6FmE55ooiBQ"
              title="Product Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
