import { AudienceSection } from "@/components/workshop/AudienceSection";
import { BeliefShiftSection } from "@/components/workshop/BeliefShiftSection";
import { FAQSection } from "@/components/workshop/FAQSection";
import { FinalCTASection } from "@/components/workshop/FinalCTASection";
import { FundamentalSection } from "@/components/workshop/FundamentalSection";
import { HeroSection } from "@/components/workshop/HeroSection";
import { MovementDiscoverySection } from "@/components/workshop/MovementDiscoverySection";
import { PracticeSection } from "@/components/workshop/PracticeSection";
import { RecognitionSection } from "@/components/workshop/RecognitionSection";
import { TeamSection } from "@/components/workshop/TeamSection";
import { TestimonialsSection } from "@/components/workshop/TestimonialsSection";
import { TryItSection } from "@/components/workshop/TryItSection";
import { WhatIsNLFSection } from "@/components/workshop/WhatIsNLFSection";
import { WorkshopHeader } from "@/components/workshop/WorkshopHeader";
import { WorkshopsSection } from "@/components/workshop/WorkshopsSection";

export default function WorkshopPage() {
  return (
    <main>
      <WorkshopHeader />
      <HeroSection />
      <RecognitionSection />
      <BeliefShiftSection />
      <TryItSection />
      <MovementDiscoverySection />
      <TestimonialsSection />
      <WhatIsNLFSection />
      <PracticeSection />
      <FundamentalSection />
      <AudienceSection />
      <TeamSection />
      <WorkshopsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
