import { notFound } from "next/navigation";
import { BeforeAfterProofSection } from "@/components/nlf-hcm/BeforeAfterProofSection";
import { FeaturedTestimonialSection } from "@/components/nlf-hcm/FeaturedTestimonialSection";
import { FinalCtaSection } from "@/components/nlf-hcm/FinalCtaSection";
import { Footer } from "@/components/nlf-hcm/Footer";
import { FundamentalWorkshopSection } from "@/components/nlf-hcm/FundamentalWorkshopSection";
import { IncludedSection } from "@/components/nlf-hcm/IncludedSection";
import { NlfHcmHeader } from "@/components/nlf-hcm/NlfHcmHeader";
import { NotSureSection } from "@/components/nlf-hcm/NotSureSection";
import { ProofHeroSection } from "@/components/nlf-hcm/ProofHeroSection";
import { ProofWallSection } from "@/components/nlf-hcm/ProofWallSection";
import { RegistrationFrame } from "@/components/nlf-hcm/RegistrationFrame";
import { TeamSection } from "@/components/nlf-hcm/TeamSection";
import { WhatIsNlfSection } from "@/components/nlf-hcm/WhatIsNlfSection";
import { WorkshopExperienceSection } from "@/components/nlf-hcm/WorkshopExperienceSection";
import { isLocale, nlfHcmCopy } from "@/lib/i18n";

export default async function NlfHcmPage({ params }: PageProps<"/[locale]/nlf-hcm">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = nlfHcmCopy[locale];

  return (
    <main>
      <NlfHcmHeader copy={copy.header} />
      <ProofHeroSection copy={copy.proofHero} />
      <BeforeAfterProofSection copy={copy.beforeAfterProof} />
      <FeaturedTestimonialSection copy={copy.featuredTestimonial} />
      <WhatIsNlfSection copy={copy.whatIsNlf} />
      <WorkshopExperienceSection copy={copy.workshopExperience} />
      <FundamentalWorkshopSection copy={copy.fundamentalWorkshop} />
      <IncludedSection copy={copy.included} />
      <TeamSection copy={copy.team} />
      <ProofWallSection copy={copy.proofWall} />
      <NotSureSection copy={copy.notSure} />
      <FinalCtaSection copy={copy.finalCta} />
      <Footer copy={copy.footer} />
      <RegistrationFrame copy={copy.registration} />
    </main>
  );
}
