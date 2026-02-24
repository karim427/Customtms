import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Frontend
import reactLogo from "@/assets/tech/react.svg";
import nextLogo from "@/assets/tech/nextjs.svg";

// Mobile
import swiftLogo from "@/assets/tech/swift.svg";
import kotlinLogo from "@/assets/tech/kotlin.svg";

// Backend
import nodeLogo from "@/assets/tech/nodejs.svg";
import goLogo from "@/assets/tech/golang.svg";

// Data
import pgLogo from "@/assets/tech/postgresql.svg";
import redisLogo from "@/assets/tech/redis.svg";
import elasticLogo from "@/assets/tech/elasticsearch.svg";

// Infra
import awsLogo from "@/assets/tech/aws.svg";
import dockerLogo from "@/assets/tech/docker.svg";
import k8sLogo from "@/assets/tech/kubernetes.svg";
import cloudflareLogo from "@/assets/tech/cloudflare.svg";

const techStack = [
  { name: "React.js", icon: reactLogo },
  { name: "Next.js", icon: nextLogo },

  { name: "Swift (iOS)", icon: swiftLogo },
  { name: "Kotlin (Android)", icon: kotlinLogo },

  { name: "Node.js", icon: nodeLogo },
  { name: "Go", icon: goLogo },

  { name: "PostgreSQL", icon: pgLogo },
  { name: "Redis", icon: redisLogo },
  { name: "Elasticsearch", icon: elasticLogo },

  { name: "AWS", icon: awsLogo },
  { name: "Docker", icon: dockerLogo },
  { name: "Kubernetes", icon: k8sLogo },
  { name: "Cloudflare", icon: cloudflareLogo },
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
        {/* Section Tag */}
        <span className="section-tag">Technology</span>

        {/* Title */}
        <h2 className="section-title">
          Infrastructure That Grows With Your Network
        </h2>

        {/* Subtitle (UNCHANGED) */}
        <p className="section-subtitle mx-auto mb-12">
          Cloud-agnostic architecture built on Kubernetes. Deploy on AWS, GCP,
          Azure, or keep it standalone on your own infrastructure — no vendor
          lock-in, no replatforming.
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 bg-background border border-border px-6 py-3 rounded-full card-shadow"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 h-5 object-contain"
              />
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-sm italic text-muted-foreground mt-8">
          Deploy anywhere. Your servers. Your rules. Forward this to your CTO —
          they'll approve.
        </p>
      </div>
    </section>
  );
};

export default TechStackSection;
