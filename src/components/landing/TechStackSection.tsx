import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  SiReact,
  SiNextdotjs,
  SiSwift,
  SiKotlin,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiRedis,
  SiElasticsearch,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiCloudflare,
} from "react-icons/si";

const techStack = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },

  { name: "Swift (iOS)", icon: SiSwift },
  { name: "Kotlin (Android)", icon: SiKotlin },

  { name: "Node.js", icon: SiNodedotjs },
  { name: "Go", icon: SiGo },

  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Elasticsearch", icon: SiElasticsearch },

  { name: "AWS", icon: SiAmazonaws },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Cloudflare", icon: SiCloudflare },
];

const TechStackSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-section-alt">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <span className="section-tag">Technology Stack</span>

        <h2 className="section-title">
          Built on Modern, Scalable Architecture
        </h2>

        <p className="section-subtitle mx-auto mb-12 max-w-3xl">
          Enterprise-grade infrastructure built for real-time freight
          dispatch, fleet coordination, and AI-powered load matching.
        </p>

        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex items-center gap-3 bg-background border border-border px-6 py-3 rounded-full card-shadow"
              >
                <Icon className="text-xl text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
