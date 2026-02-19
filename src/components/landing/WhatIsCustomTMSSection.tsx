import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "EST. MARKET SIZE (2024)", value: "$20B" },
  { label: "PROJECTED (2033)", value: "$45B" },
  { label: "GROWTH RATE (2025–33)", value: "12%" },
];

const WhatIsCustomTMSSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Visual with stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-muted/40 aspect-[4/3] flex items-end relative">
              {/* Warehouse-style gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted/30 to-primary/5" />

              {/* Phone mockup */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-28 md:w-36">
                <div className="bg-foreground rounded-2xl p-1.5 shadow-xl">
                  <div className="bg-background rounded-xl aspect-[9/16] flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl md:text-3xl font-bold text-accent font-heading">70.0%</span>
                      <p className="text-[10px] text-muted-foreground mt-1">Fleet Utilization</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market stats card */}
              <div className="absolute top-6 right-4 left-[40%] bg-background/95 backdrop-blur rounded-xl shadow-lg p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase font-semibold tracking-wide leading-tight">{s.label}</p>
                      <p className="text-lg md:text-2xl font-bold text-primary font-heading mt-1">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom insight cards */}
              <div className="relative z-10 flex gap-3 p-4 w-full">
                <div className="bg-background/95 backdrop-blur rounded-xl shadow-lg p-4 flex-1">
                  <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wide">Fastest Growing Region</p>
                  <p className="text-xl md:text-2xl font-bold text-primary font-heading mt-1">Asia-Pacific</p>
                  <p className="text-xs text-muted-foreground">(34.6% CAGR)</p>
                </div>
                <div className="bg-background/95 backdrop-blur rounded-xl shadow-lg p-4 flex-1">
                  <p className="text-[10px] uppercase text-accent font-semibold tracking-wide">Key Insight</p>
                  <p className="text-sm font-semibold text-foreground mt-1 leading-snug">
                    52% of freight bookings are now digital — first-mover advantage in emerging markets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary font-heading leading-tight">
              What is a Custom TMS? Why Launch Now?
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A Custom TMS is a pre-built, customizable software that lets logistics providers, brokers, and carrier networks launch their own branded dispatch marketplace — with shipper apps, dispatcher apps, driver dashboards, AI dispatch, and real-time tracking.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Digital freight platforms now handle over 52% of all freight bookings globally. The market is projected to grow from $20B in 2024 to $45B by 2033 at a 12% CAGR. Asia-Pacific is the fastest-growing region at 34.6% CAGR. Now is the time to own your platform before emerging corridors get saturated.
            </p>

            <a
              href="#book-demo"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold text-base hover:brightness-110 transition-all hover:scale-[1.02]"
            >
              Claim Your Free Market Report <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCustomTMSSection;
