import { Shield, Users, Zap, Code, Cloud, Container } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const topRowTech = [
  { label: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { label: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },

  // ✅ Isometrik inserted here
  { label: "Isometrik", icon: "/icons/isometrik.svg" },

  { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachecassandra/apachecassandra-original.svg" },
  { label: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

const bottomRowTech = [
  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
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
        className={`container mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="section-tag">Technology Stack</span>

        <h2 className="section-title">
          Built on a Scalable Logistics Architecture
        </h2>

        <p className="section-subtitle mx-auto mb-12">
          Cloud-agnostic architecture built on Kubernetes. Deploy on AWS, GCP,
          Azure, or your own infrastructure — no vendor lock-in.
        </p>

        {/* Top Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 max-w-6xl mx-auto">
          {topRowTech.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-3 px-6 py-3 bg-background rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.label}
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium text-primary">
                {tech.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Row (Docker + Kubernetes centered) */}
        <div className="flex justify-center gap-6 mb-16">
          {bottomRowTech.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-3 px-6 py-3 bg-background rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.label}
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium text-primary">
                {tech.label}
              </span>
            </div>
          ))}
        </div>

        {/* Reassurance Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {reassurance.map((r) => (
            <div
              key={r.label}
              className="bg-background rounded-xl p-5 card-shadow"
            >
              <r.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-sm font-semibold text-primary">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm italic text-muted-foreground mt-8">
          Deploy anywhere. Your servers. Your rules.
        </p>
      </div>
    </section>
  );
};

export default TechStackSection;