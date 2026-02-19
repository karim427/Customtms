
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Truck, Package, Users, Building2, Settings, Mic, Mail, Phone, Bot, Check, Map, type LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import addressBookImage from "@/assets/images/address-book.webp";
import assignLoadsImage from "@/assets/images/assign-loads.webp";
import centralDashboardImage from "@/assets/images/central-dashboard.webp";
import leadCreationImage from "@/assets/images/lead-creation.webp";
import digitalPodImage from "@/assets/images/digitalpod.webp";
import selfServiceImage from "@/assets/images/self-service.webp";
import liveShipmentImage from "@/assets/images/live-shipment.webp";
import creditlineImage from "@/assets/images/creditline.webp";
import truckOptimizationImage from "@/assets/images/truck-optimzation.webp";
import docCaptureImage from "@/assets/images/doc-capture.webp";
import earningsImage from "@/assets/images/earnings.webp";
import loadAcceptImage from "@/assets/images/load-accept.webp";
import multiTruckDashboardImage from "@/assets/images/multitruchdashboard.webp";
import loadBoardAccessImage from "@/assets/images/loadboardaccess.webp";
import driverAssignImage from "@/assets/images/driverassign.webp";
import documentUploadImage from "@/assets/images/document upload.webp";
import dynamicPriceImage from "@/assets/images/dynamicprice.webp";
import zoneConfigImage from "@/assets/images/zoneconfig.webp";
import userRoleImage from "@/assets/images/userrole.webp";

interface Feature {
  title: string;
  desc: string;
}

interface Module {
  icon: LucideIcon;
  name: string;
  tagline: string;
  features: Feature[];
}

const modules: Module[] = [
  {
    icon: Truck,
    name: "Fleet Management",
    tagline: "Manage vehicles, drivers, and fleet performance in one system.",
    features: [
      { title: "Load Creation", desc: "Create single or multi-stop loads by selecting customers and adding multiple delivery stops." },
      { title: "Control Centre Dashboard", desc: "Track active loads, driver status, and live locations in one unified view." },
      { title: "Address Book Management", desc: " Manage shipper locations with type classification and delivery time restrictions." },
      { title: "Assign & Reassign Loads", desc: "Quickly unassign and reassign loads to keep dispatch running smoothly." },
    ],
  },
  {
    icon: Package,
    name: "For Shippers",
    tagline: " Post loads, track shipments, and manage payments easily.",
    features: [
      { title: "Self-Serve Load Booking", desc: "Create single or multi-stop loads instantly without contacting dispatch." },
      { title: "Live Shipment Tracking", desc: "Track shipments in real time with full visibility into load status." },
      { title: "Digital POD & Documents", desc: "Access proof of pickup and proof of delivery directly from the load details page." },
      { title: "Credit Line & Payments", desc: "View your credit line, monitor limits, and make payments when required." },
    ],
  },
  {
    icon: Users,
    name: "For Carriers (Owner Operators)",
    tagline: "Accept loads, navigate routes, and track earnings seamlessly.",
    features: [
      { title: "One-Tap Load Accept", desc: " Accept loads instantly from the mobile app - no paperwork, no delays" },
      { title: "Truck-Optimized Navigation", desc: "Built-in navigation designed for truck routes, restrictions, and compliance." },
      { title: "In-App Document Capture", desc: "Upload PODs, invoices, and documents directly from the app." },
      { title: "Earnings Dashboard", desc: "Track load payments, completed trips, and real-time earnings in one place." },
    ],
  },
  {
    icon: Building2,
    name: "For Fleet Operators (More Than 1 Truck)",
    tagline: "Dispatch trucks and optimize fleet operations efficiently.",
    features: [
      { title: "Multi-Truck Dashboard", desc: "View all trucks, drivers, and active loads in one real-time dashboard." },
      { title: "Driver Assignment", desc: "Select and assign the right driver to a load from your available drivers list." },
      { title: "Load Board Access", desc: "View, accept, or bid on available loads directly from the load board." },
      { title: "Document Upload", desc: "Upload POD or POP from the portal if the driver is unable to submit it." },
    ],
  },
  {
    icon: Settings,
    name: "Admin Panel To Manage Product",
    tagline: "Control users, pricing, regions, and platform analytics centrally.",
    features: [
      { title: "User & Role Management", desc: "Manage shippers, carriers, drivers, and admins with granular permissions." },
      { title: "Dynamic Pricing Engine", desc: "Set custom rates, margins, and pricing rules by route, region, or load type." },
      { title: "Region & Zone Config", desc: "Define service areas, delivery zones, and operational boundaries." },
    ],
  },
];

// AI Features data
const aiFeatures = [
  {
    icon: Phone,
    title: "Voice AI — Carrier Outreach",
    desc: "AI automatically calls carriers when a load matches their preferences. No manual dispatching needed.",
    benefits: ["Auto-matches loads to carrier preferences", "Places calls 24/7 without human intervention", "Increases carrier acceptance rates by 3x", "Reduces dispatcher workload significantly"],
  },
  {
    icon: Mic,
    title: "Voice AI — Shipper Load Posting",
    desc: "Shippers call a dedicated number and post loads by speaking directly to Voice AI. No app or portal needed.",
    benefits: ["Shippers post loads via phone call", "AI extracts origin, destination, weight, and timeline", "Instant load creation in the system", "Works for non-tech-savvy shippers"],
  },
  {
    icon: Mail,
    title: "Email AI — Inbox Integration",
    desc: "Integrates with Outlook, Gmail, Zoho, and more. Processes shipping requests from email and creates loads automatically.",
    benefits: ["Connects to Outlook, Gmail, Zoho & more", "Parses shipping requests from emails", "Creates loads directly — zero manual entry", "Processes attachments and rate confirmations"],
  },
];

const FeatureMockup = ({ moduleIndex, featureIndex }: { moduleIndex: number; featureIndex: number }) => {
  const mockups: Record<string, React.ReactNode[]> = {
    "0": [
      <div>
        <img
          src={leadCreationImage}
          alt="Fleet Management - Load Creation screen"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={centralDashboardImage}
          alt="Fleet Management - Control Centre Dashboard"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={addressBookImage}
          alt="Fleet Management - Address Book Management"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={assignLoadsImage}
          alt="Fleet Management - Assign & Reassign Loads"
          className="w-full rounded-lg"
        />
      </div>,
    ],
    "1": [
      <div>
        <img
          src={selfServiceImage}
          alt="Shippers - Self-Serve Load Booking"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={liveShipmentImage}
          alt="Shippers - Live Shipment Tracking"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={digitalPodImage}
          alt="Shippers - Digital POD & Documents"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={creditlineImage}
          alt="Shippers - Credit Line & Payments"
          className="w-full rounded-lg"
        />
      </div>,
    ],
    "2": [
      <div>
        <img
          src={loadAcceptImage}
          alt="Carriers - One-Tap Load Accept"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={truckOptimizationImage}
          alt="Carriers - Truck-Optimized Navigation"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={docCaptureImage}
          alt="Carriers - In-App Document Capture"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={earningsImage}
          alt="Carriers - Earnings Dashboard"
          className="w-full rounded-lg"
        />
      </div>,
    ],
    "3": [
      <div>
        <img
          src={multiTruckDashboardImage}
          alt="Fleet Operators - Multi-Truck Dashboard"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={driverAssignImage}
          alt="Fleet Operators - Driver Assignment"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={loadBoardAccessImage}
          alt="Fleet Operators - Load Board Access"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={documentUploadImage}
          alt="Fleet Operators - Document Upload"
          className="w-full rounded-lg"
        />
      </div>,
    ],
    "4": [
      <div>
        <img
          src={userRoleImage}
          alt="Admin Panel - User & Role Management"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={dynamicPriceImage}
          alt="Admin Panel - Dynamic Pricing Engine"
          className="w-full rounded-lg"
        />
      </div>,
      <div>
        <img
          src={zoneConfigImage}
          alt="Admin Panel - Region & Zone Config"
          className="w-full rounded-lg"
        />
      </div>,
      <div className="space-y-3">
        <span className="text-sm font-semibold text-primary font-heading">Platform Analytics</span>
        <div className="bg-background rounded-lg p-3 border border-border">
          <div className="grid grid-cols-2 gap-2">
            {[{ n: "$124K", l: "GMV", c: "text-success" }, { n: "94%", l: "On-Time", c: "text-secondary" }, { n: "847", l: "Loads/mo", c: "text-accent" }, { n: "4.8", l: "Rating", c: "text-primary" }].map(s => (
              <div key={s.l} className="bg-muted rounded-lg p-2 text-center">
                <div className={`text-sm font-bold ${s.c}`}>{s.n}</div>
                <div className="text-[10px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>,
    ],
  };

  return mockups[String(moduleIndex)]?.[featureIndex] || null;
};

const ModuleBlock = ({ module, moduleIndex }: { module: Module; moduleIndex: number }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const reversed = moduleIndex % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className={`grid lg:grid-cols-2 gap-8 items-start ${reversed ? "lg:grid-flow-dense" : ""}`}>
        <div className={`space-y-4 ${reversed ? "lg:col-start-2" : ""}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <module.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary font-heading">{module.name}</h3>
              <p className="text-sm text-muted-foreground">{module.tagline}</p>
            </div>
          </div>

          <div className="space-y-2">
            {module.features.map((feature, fi) => {
              const isActive = fi === activeFeature;
              return (
                <button
                  key={feature.title}
                  onClick={() => setActiveFeature(fi)}
                  className={`w-full text-left rounded-xl px-5 py-4 transition-all duration-200 border ${
                    isActive
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-transparent hover:bg-muted/50"
                  }`}
                >
                  <div className={`text-sm font-bold font-heading ${isActive ? "text-primary" : "text-foreground"}`}>
                    {feature.title}
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-xs text-muted-foreground mt-1 leading-relaxed"
                    >
                      {feature.desc}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4">
            <button className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all">
              <Play className="w-4 h-4" /> View Demo
            </button>
          </div>
        </div>

        <div className={`bg-primary/5 border border-border rounded-2xl p-6 md:p-8 ${reversed ? "lg:col-start-1" : ""}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${moduleIndex}-${activeFeature}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <FeatureMockup moduleIndex={moduleIndex} featureIndex={activeFeature} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </motion.div>
  );
};

const CoreModulesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" id="features">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <span className="section-tag">Core Modules</span>
          <h2 className="section-title">Everything You Need to Aggregate, Operate, and Scale</h2>
          <p className="section-subtitle mx-auto">
            Each module is built for network-based freight businesses. Here's how they drive efficiency, cut costs, and support platform-led growth.
          </p>
        </div>

        <div className="space-y-20">
          {modules.map((module, i) => (
            <ModuleBlock key={module.name} module={module} moduleIndex={i} />
          ))}
        </div>

        {/* AI-First Features Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="section-tag">AI-First TMS</span>
            <h2 className="section-title">AI That Works While You Sleep</h2>
            <p className="section-subtitle mx-auto">
              Voice AI and Email AI automate carrier outreach, load posting, and email processing — so your team focuses on growing the network, not managing it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aiFeatures.map((ai, i) => (
              <motion.div
                key={ai.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-hero rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <ai.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-hero-foreground font-heading mb-2">{ai.title}</h3>
                <p className="text-sm text-hero-muted mb-4 leading-relaxed">{ai.desc}</p>
                <ul className="space-y-2">
                  {ai.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-hero-muted">
                      <Bot className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
          >
            View All Features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreModulesSection;
