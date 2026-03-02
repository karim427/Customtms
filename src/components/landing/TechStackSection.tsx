import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techStack = [
  { label: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { label: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { label: "Isometrik", icon: "/icons/isometrik.svg" },
  { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachecassandra/apachecassandra-original.svg" },
  { label: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
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

        <p className="section-subtitle mx-auto mb-16 max-w-2xl">
          Enterprise-grade technology powering a high-performance logistics platform.
        </p>

        {/* PROPER GRID ALIGNMENT */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-background rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.label}
                className="w-7 h-7 object-contain"
              />
              <span className="text-base font-semibold text-primary">
                {tech.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-sm italic text-muted-foreground mt-14">
          Deploy anywhere. Your servers. Your rules.
        </p>
      </div>
    </section>
  );
};

export default TechStackSection;