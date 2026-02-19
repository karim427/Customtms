import StickyHeader from "@/components/landing/StickyHeader";
import HeroSection from "@/components/landing/HeroSection";
import ClientLogosSection from "@/components/landing/ClientLogosSection";
import WhyCustomSection from "@/components/landing/WhyCustomSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import CoreModulesSection from "@/components/landing/CoreModulesSection";
import AppShowcaseSection from "@/components/landing/AppShowcaseSection";
import TechStackSection from "@/components/landing/TechStackSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import RelatedProductsSection from "@/components/landing/RelatedProductsSection";
import WhatIsCustomTMSSection from "@/components/landing/WhatIsCustomTMSSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import CTABanner from "@/components/landing/CTABanner";
import ComparisonTableSection from "@/components/landing/ComparisonTableSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <main>
        <HeroSection />
        <ClientLogosSection />
        <SocialProofSection />
        <WhyCustomSection />
        <CTABanner />
        <CoreModulesSection />
        <AppShowcaseSection />
        <TechStackSection />
        <CTABanner />
        <HowItWorksSection />
        <ComparisonTableSection />
        <WhatIsCustomTMSSection />
        <RelatedProductsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
