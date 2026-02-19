import { X, Check, Shield, TrendingUp, Server, Layers, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const WhyCustomSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const limitationItems = [
    { icon: Layers, text: "Growing beyond what off-the-shelf tools were designed for." },
    { icon: TrendingUp, text: "Aggregating carriers across regions with different workflows." },
    { icon: Server, text: "Needing to own the tech that runs your core operations." },
    { icon: DollarSign, text: "Per-user fees eating into margins as your network scales." },
    { icon: Shield, text: "Relying on someone else's roadmap for mission-critical software." },
  ];

  const customItems = [
    { icon: Shield, text: "100% source code and IP ownership — a real business asset." },
    { icon: Layers, text: "Built around your exact carrier aggregation workflows." },
    { icon: TrendingUp, text: "Your technology becomes your competitive moat and valuation driver." },
    { icon: DollarSign, text: "One-time investment. Scale your network without rising fees." },
    { icon: Server, text: "Your data. Your servers. Your infrastructure. Your rules." },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section className="py-20 md:py-28 bg-background" id="why-custom">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <span className="section-tag">Why Custom?</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-[42px] max-w-3xl mx-auto">
            When Custom-Built TMS Makes Sense
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl mt-4 text-base md:text-lg">
            If your business depends on aggregating carriers, expanding across regions, and owning your operational technology — a custom-built TMS becomes the right foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left — Limitations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="rounded-2xl border border-border bg-muted/30 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">
                You've Outgrown Basic Tools When...
              </h3>
            </div>
            <ul className="space-y-4">
              {limitationItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center shrink-0 mt-0.5 group-hover:border-muted-foreground/40 transition-colors">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground text-[15px] leading-relaxed pt-1.5">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Custom TMS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="rounded-2xl border border-accent/20 bg-accent/5 p-8 md:p-10 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary font-heading">
                Custom TMS by Appscrip
              </h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {customItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariantsRight}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-background border border-accent/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent/50 transition-colors">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground text-[15px] leading-relaxed pt-1.5">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCustomSection;
