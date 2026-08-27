import { notFound } from "next/navigation";
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
import { isLocale, workshopCopy } from "@/lib/i18n";

export default async function WorkshopPage({ params }: PageProps<"/[locale]/workshop">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = workshopCopy[locale];

  return (
    <main>
      <WorkshopHeader copy={copy.header} />
      <HeroSection copy={copy.sections.hero} />
      <RecognitionSection copy={copy.sections.recognition} />
      <BeliefShiftSection copy={copy.sections.beliefShift} />
      <TryItSection copy={copy.sections.tryIt} />
      <MovementDiscoverySection copy={copy.sections.movementDiscovery} />
      <TestimonialsSection copy={copy.sections.testimonials} />
      <WhatIsNLFSection copy={copy.sections.whatIsNlf} />
      <PracticeSection copy={copy.sections.practice} />
      <FundamentalSection copy={copy.sections.fundamental} />
      <AudienceSection copy={copy.sections.audience} />
      <TeamSection copy={copy.sections.team} />
      <WorkshopsSection copy={copy.sections.workshops} />
      <FAQSection copy={copy.sections.faq} />
      <FinalCTASection copy={copy.sections.finalCta} />
    </main>
  );
}
