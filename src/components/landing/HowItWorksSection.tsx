import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Server, Palette, Rocket, TrendingUp, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    day: "Day 0",
    title: "Discovery Workshop",
    desc: "We run a focused workshop to understand your requirements, existing workflows, and scale targets. You walk away with a detailed roadmap for project execution.",
    icon: MessageSquare,
    details: ["Deep-dive into your operations", "Map your shipper & carrier workflows", "Define customization requirements", "Propose execution roadmap & timeline"],
    mockup: (
      <div className="space-y-3">
        <div className="text-xs font-semibold text-accent mb-2">Workshop Agenda</div>
        {["Business Model & Workflows", "Tech Requirements", "Integration Mapping", "Roadmap Sign-Off"].map((item, i) => (
          <div key={item} className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3 text-sm">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < 2 ? "bg-success/20 text-success" : "bg-accent/10 text-accent"}`}>
              {i < 2 ? <Check className="w-3.5 h-3.5" /> : i + 1}
            </div>
            <span className="text-foreground font-medium">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    day: "Day 15",
    title: "Pre-Built App on Dedicated Servers",
    desc: "Your production-ready TMS is set up on dedicated servers. Start using the platform alongside your existing system to manage real operations immediately.",
    icon: Server,
    details: ["Deploy on your dedicated infrastructure", "Configure core modules", "Set up user roles & permissions", "Begin parallel operations testing"],
    mockup: (
      <div className="space-y-3">
        <div className="text-xs font-semibold text-accent mb-2">Deployment Status</div>
        <div className="bg-muted rounded-lg p-4 space-y-3">
          {[{ label: "Server Setup", pct: 100 }, { label: "App Deployment", pct: 100 }, { label: "Data Migration", pct: 85 }, { label: "User Setup", pct: 60 }].map(s => (
            <div key={s.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-foreground">{s.label}</span>
                <span className="text-muted-foreground">{s.pct}%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    day: "Day 45",
    title: "Customize & White Label",
    desc: "We customize the platform to your exact workflows, apply your branding, and integrate with your existing tools. Your TMS, your brand, your identity.",
    icon: Palette,
    details: ["Apply your brand colors, logo & identity", "Customize workflows to match operations", "Integrate with existing tools & systems", "User acceptance testing"],
    mockup: (
      <div className="space-y-3">
        <div className="text-xs font-semibold text-accent mb-2">White Label Progress</div>
        <div className="bg-muted rounded-lg p-4 space-y-3">
          {["Brand Assets Applied", "Custom Workflows Configured", "Third-Party Integrations", "UAT Sign-Off"].map((item, i) => (
            <div key={item} className="flex items-center gap-3 text-sm">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i < 3 ? "bg-success/20" : "bg-muted border border-border"}`}>
                {i < 3 && <Check className="w-3 h-3 text-success" />}
              </div>
              <span className={`font-medium ${i < 3 ? "text-foreground" : "text-muted-foreground"}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    day: "Day 60",
    title: "Go Live on App Stores",
    desc: "Your branded native apps go live on the Apple App Store and Google Play Store. We handle the submission process and ensure a smooth launch.",
    icon: Rocket,
    details: ["App Store submission & review", "Google Play Store publishing", "Launch monitoring & support", "Post-launch optimization"],
    mockup: (
      <div className="space-y-3">
        <div className="text-xs font-semibold text-accent mb-2">Launch Checklist</div>
        <div className="bg-muted rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between bg-background rounded-lg p-3 border border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-xs font-bold text-primary">iOS</div>
              <span className="text-sm font-medium text-foreground">App Store</span>
            </div>
            <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">Ready</span>
          </div>
          <div className="flex items-center justify-between bg-background rounded-lg p-3 border border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center text-xs font-bold text-success">▶</div>
              <span className="text-sm font-medium text-foreground">Google Play</span>
            </div>
            <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">Ready</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    day: "Day 60+",
    title: "AI-First Marketing & Growth",
    desc: "Post-launch, we help you grow your two-sided marketplace with AI-first marketing — acquiring shippers, carriers, and brokers to build network effects.",
    icon: TrendingUp,
    details: ["AI-powered shipper acquisition campaigns", "Carrier & broker onboarding automation", "Marketplace growth analytics", "Ongoing platform optimization"],
    mockup: (
      <div className="space-y-3">
        <div className="text-xs font-semibold text-accent mb-2">Growth Metrics</div>
        <div className="bg-muted rounded-lg p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {[{ n: "1,240", l: "Shippers", trend: "+23%" }, { n: "860", l: "Carriers", trend: "+18%" }].map(s => (
              <div key={s.l} className="bg-background rounded-lg p-3 border border-border text-center">
                <div className="text-lg font-bold text-primary">{s.n}</div>
                <div className="text-[10px] text-muted-foreground">{s.l}</div>
                <span className="text-[10px] text-success font-medium">{s.trend}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-1 items-end h-12">
            {[20, 35, 30, 45, 55, 50, 65, 60, 75, 70, 85, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-accent/40 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="text-[10px] text-muted-foreground text-center mt-1">Monthly active users — trending up</div>
        </div>
      </div>
    ),
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" id="how-it-works">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <span className="section-tag">The Process</span>
          <h2 className="section-title">From Idea to Launch in 60 days</h2>
          <p className="section-subtitle mx-auto">
            A proven process that takes you from idea to a live, branded TMS on the app stores — with AI-first marketing to grow your marketplace.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline navigation */}
          <div className="relative mb-12">
            {/* Connection line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-border" />
            <div className="hidden md:block absolute top-5 left-0 h-0.5 bg-accent transition-all duration-500" style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }} />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {steps.map((step, i) => {
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <button
                    key={step.day}
                    onClick={() => setActiveStep(i)}
                    className={`relative flex flex-col items-center text-center group transition-all duration-300 ${isActive ? "scale-105" : "hover:scale-[1.02]"}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 mb-3 transition-all duration-300 ${
                      isActive ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25" :
                      isPast ? "bg-accent/20 text-accent" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                    <div className={`text-xs font-bold font-heading mb-1 transition-colors ${isActive ? "text-accent" : "text-primary"}`}>
                      {step.day}
                    </div>
                    <div className={`text-[11px] leading-tight transition-colors ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-6 h-6 text-accent" />;
                    })()}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-accent">{steps[activeStep].day}</div>
                    <h3 className="text-xl font-bold text-primary font-heading">{steps[activeStep].title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{steps[activeStep].desc}</p>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((d, i) => (
                    <motion.li
                      key={d}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-foreground">{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border border-border rounded-2xl p-6">
                {steps[activeStep].mockup}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all hover:scale-[1.02]"
          >
            Start the Process → Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
