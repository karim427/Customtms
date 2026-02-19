import { Smartphone, Package, Users, Truck, MapPin, FileText, Receipt, BarChart3, Check, Building2, Navigation, Camera, DollarSign, Bell, Shield, UserPlus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import shipperAppImage from "@/assets/images/shipperapp.webp";
import carrierAppImage from "@/assets/images/carrierapp.webp";
import fleetAppImage from "@/assets/images/fleetapp.webp";

const apps = [
  {
    accentColor: "text-secondary",
    tagBg: "bg-secondary/10 text-secondary",
    label: "Shipper Mobile App",
    title: "Shipper App — Book, Track & Pay On the Go",
    body: "A native iOS & Android app for shippers to self-serve — book loads, track shipments in real-time, and manage invoices. Fewer calls to dispatch, faster bookings, better visibility.",
    bullets: [
      { heading: "Self-Serve Load Booking", desc: "Shippers book loads and get instant rate estimates from their phone" },
      { heading: "Live GPS Tracking", desc: "Real-time shipment visibility with ETA updates and push notifications" },
      { heading: "Digital POD & Documents", desc: "Proof of delivery, BOL, and invoices — all accessible on mobile" },
      { heading: "In-App Payments", desc: "Pay invoices, view billing history, and manage payment methods" },
    ],
    mockup: (
      <div className=" mx-auto">
        <img
          src={shipperAppImage}
          alt="Shipper Mobile App"
          className="w-full rounded-2xl"
        />
      </div>
    ),
  },
  {
    accentColor: "text-accent",
    tagBg: "bg-accent/10 text-accent",
    label: "Owner Operator (Carrier) App",
    title: "Carrier App — Built for Single-Truck Operators",
    body: "A native mobile app for owner-operators to find loads, navigate, upload documents, and track earnings. Built for drivers on the road — not desk workers.",
    bullets: [
      { heading: "One-Tap Load Accept", desc: "Browse and accept loads instantly — matched to your preferences" },
      { heading: "Truck-Optimized Navigation", desc: "GPS routing built for commercial vehicles with live traffic" },
      { heading: "In-App Document Capture", desc: "BOL, POD, scale tickets — snap a photo and you're done" },
      { heading: "Earnings & Settlements", desc: "Weekly earnings, settlement breakdown, and payout history" },
    ],
    mockup: (
      <div className="mx-auto">
        <img
          src={carrierAppImage}
          alt="Carrier App"
          className="w-full rounded-2xl"
        />
      </div>
    ),
  },
  {
    accentColor: "text-success",
    tagBg: "bg-success/10 text-success",
    label: "Fleet Operator App (Multi-Truck)",
    title: "Fleet App — Manage Multiple Trucks from Your Phone",
    body: "For operators running more than one truck. Assign drivers, track your fleet, monitor earnings across vehicles, and manage sub-carriers — all from a native mobile app.",
    bullets: [
      { heading: "Multi-Truck Dashboard", desc: "See all your trucks, drivers, and active loads in one view" },
      { heading: "Driver Assignment & Dispatch", desc: "Assign loads to specific drivers based on location and availability" },
      { heading: "Fleet Earnings & Analytics", desc: "Revenue, costs, and utilization across your entire fleet" },
      { heading: "Sub-Carrier Onboarding", desc: "Add and manage sub-carriers with compliance tracking" },
    ],
    mockup: (
      <div className=" mx-auto">
        <img
          src={fleetAppImage}
          alt="Fleet Operator App"
          className="w-full rounded-2xl"
        />
      </div>
    ),
  },
];

const AppShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-section-alt" id="platform">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <span className="section-tag">Mobile Platform</span>
          <h2 className="section-title">Native iOS & Android Apps for Every Stakeholder</h2>
          <p className="section-subtitle mx-auto">Fleet management happens in the field. Our native mobile apps ensure shippers, carriers, and fleet operators stay connected — from anywhere.</p>
        </div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {apps.map((c, i) => {
            const reversed = i % 2 !== 0;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center`}
              >
                <div className={`space-y-6 ${reversed ? "lg:order-2" : ""}`}>
                  <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${c.tagBg}`}>
                    {c.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {c.body}
                  </p>
                  <ul className="space-y-4 pt-2">
                    {c.bullets.map((b) => (
                      <li key={b.heading} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${c.accentColor} shrink-0 mt-0.5`} />
                        <div>
                          <div className="text-sm font-bold text-foreground">{b.heading}</div>
                          <div className="text-sm text-muted-foreground">{b.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${reversed ? "lg:order-1" : ""}`}>
                  {c.mockup}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
