import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techStack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js / Hapi.js",
  "Isometrik AI",
  "Strapi CMS",
  "PostgreSQL",
  "Vector Search",
  "Redis Caching",
  "AWS / Docker",
  "Kubernetes",
  "Cloudflare CDN",
  "CircleCI",
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
          Built on Modern, Scalable Architecture
        </h2>

        <p className="section-subtitle mx-auto mb-12 max-w-3xl">
          Enterprise-grade infrastructure powering a global B2B freight
          marketplace with real-time dispatch, AI automation, and
          high-availability microservices.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-background border border-border px-6 py-3 rounded-full text-sm font-medium text-foreground card-shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
