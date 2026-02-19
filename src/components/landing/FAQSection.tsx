import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Do I own the source code and intellectual property?", a: "Yes, 100%. The source code and all IP rights are transferred to you. It becomes a business asset — useful for fundraising, partnerships, and long-term valuation. Host on your servers, modify, and scale independently." },
  { q: "When does a custom-built TMS make sense?", a: "When your business depends on carrier aggregation, multi-region expansion, or workflows unique to your model. If you've outgrown basic tools and need technology as core business infrastructure — custom becomes the right foundation." },
  { q: "How long does it take to launch?", a: "Approximately 60 days for standard deployment. This includes customization, branding, testing, and deployment. Our pre-built base significantly reduces time compared to building from scratch." },
  { q: "Can I customize it to my specific workflows?", a: "Absolutely. Custom load types, carrier onboarding workflows, billing rules, third-party integrations — we build it to match how you operate." },
  { q: "What tech stack is it built on?", a: "React Native, Node.js, MongoDB, PostgreSQL, AWS, Apache Spark, and Here Maps. Modern, scalable, and well-supported." },
  { q: "Do you provide a driver app and shipper app?", a: "Yes. Three interfaces included: shipper portal (web + mobile), driver/carrier app (iOS + Android), and dispatcher web dashboard. All fully customizable." },
  { q: "How much does a custom TMS cost?", a: "Pricing depends on customization level. We offer flexible payment plans including monthly options. Contact us for a detailed estimate." },
  { q: "Can it handle thousands of loads per day?", a: "Yes. Cloud-native architecture with horizontal scaling. Analytics powered by Apache Spark. 50 loads/day or 5,000 — it performs." },
  { q: "Do you offer ongoing support?", a: "Yes. Post-launch support and maintenance packages for updates, security, and feature enhancements as your business grows." },
  { q: "Can it integrate with my ERP or accounting system?", a: "Yes. API-first architecture integrates with QuickBooks, SAP, Tally, and custom ERPs. Integration handled as part of customization." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" id="faq">
      <div
        ref={ref}
        className={`container mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Got Questions? We've Got Answers.</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50">
              <AccordionTrigger className="text-left font-semibold text-primary font-heading text-base hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* FAQ Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQSection;
