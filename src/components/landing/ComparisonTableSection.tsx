import { X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const saasItems = [
  "You rent access. They own the code.",
  "Limited customization. Their roadmap, not yours.",
  "Same software your competitor uses.",
  "Monthly fees grow as you scale.",
  "Your data on their servers.",
];

const customItems = [
  "100% source code and IP ownership.",
  "Built around your exact workflows.",
  "Your technology is your competitive moat.",
  "One-time build. Scale without per-user fees.",
  "Your data. Your servers. Your rules.",
];

const ComparisonTableSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-14">
          <span className="section-tag">Why Custom?</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-[42px] max-w-3xl mx-auto">
            SaaS Gets You Started. Custom Gets You to Scale.
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl mt-4 text-base md:text-lg">
            SaaS TMS tools are fine for 10 trucks. But when you're aggregating carriers, serving enterprise shippers, and scaling across regions — you need software that bends to your business. With Appscrip, you own the code, control the roadmap, and build a competitive moat no SaaS can give you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* SaaS TMS card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-muted/30 p-8 md:p-10"
          >
            <div className="flex items-center gap-2.5 mb-8">
              <X className="w-5 h-5 text-destructive" />
              <h3 className="text-xl font-bold text-destructive font-heading">SaaS TMS</h3>
            </div>
            <ul className="space-y-5">
              {saasItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-4.5 h-4.5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-[15px] leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Custom TMS card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-success/20 bg-success/[0.03] p-8 md:p-10"
          >
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-5 h-5 rounded bg-success/20 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-success" />
              </div>
              <h3 className="text-xl font-bold text-success font-heading">Custom TMS (Appscrip)</h3>
            </div>
            <ul className="space-y-5">
              {customItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-4.5 h-4.5 text-success shrink-0 mt-0.5" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
