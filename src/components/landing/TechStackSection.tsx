import { Shield, Users, Zap, Code, Cloud, Container, Server, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techBadges = [
  { label: "Native iOS (Swift)", category: "mobile" },
  { label: "Native Android (Kotlin)", category: "mobile" },
  { label: "Node.js", category: "backend" },
  { label: "GoLang", category: "backend" },
  { label: "MongoDB", category: "db" },
  { label: "Cassandra", category: "db" },
  { label: "Redis", category: "db" },
  { label: "Kubernetes", category: "infra" },
  { label: "Docker", category: "infra" },
];

const reassurance = [
  { icon: Shield, label: "99.9% Uptime SLA" },
  { icon: Users, label: "10K+ Concurrent Users" },
  { icon: Zap, label: "Sub-Second Tracking" },
  { icon: Code, label: "API-First Architecture" },
  { icon: Cloud, label: "Cloud Agnostic" },
  { icon: Container, label: "Kubernetes Native" },
];

const TechStackSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-section-alt">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <span className="section-tag">Technology</span>
        <h2 className="section-title">Infrastructure That Grows With Your Network</h2>
        <p className="section-subtitle mx-auto mb-10">
          Cloud-agnostic architecture built on Kubernetes. Deploy on AWS, GCP, Azure, or keep it standalone on your own infrastructure — no vendor lock-in, no replatforming.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techBadges.map((t) => (
            <span key={t.label} className="bg-background border border-border text-foreground px-4 py-2 rounded-full text-sm font-medium card-shadow">
              {t.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {reassurance.map((r) => (
            <div key={r.label} className="bg-background rounded-xl p-5 card-shadow">
              <r.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-sm font-semibold text-primary">{r.label}</div>
            </div>
          ))}
        </div>

        <p className="text-sm italic text-muted-foreground mt-8">Deploy anywhere. Your servers. Your rules. Forward this to your CTO — they'll approve.</p>
      </div>
    </section>
  );
};

export default TechStackSection;
