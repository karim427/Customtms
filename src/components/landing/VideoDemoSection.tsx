import { Play, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VideoDemoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" id="video">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="section-title">See Your Custom TMS in Action</h2>
        <p className="section-subtitle mx-auto mb-10">
          Watch a 90-second walkthrough — from dispatch to delivery.
        </p>

        <div className="max-w-3xl mx-auto aspect-video bg-hero rounded-2xl flex flex-col items-center justify-center relative overflow-hidden cursor-pointer group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-hero" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-accent-foreground ml-1" />
            </div>
            <p className="text-hero-foreground/60 text-sm mt-4">Product Walkthrough — 1:30</p>
          </div>
        </div>

        <a
          href="#book-demo"
          className="inline-flex items-center gap-2 mt-8 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all hover:scale-[1.02]"
        >
          Book a Live Demo <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default VideoDemoSection;
