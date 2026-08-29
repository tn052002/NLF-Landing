import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmWorkshopOfferCopy } from "@/lib/i18n";
import { WorkshopOffer } from "./WorkshopOffer";
import styles from "./FundamentalWorkshopSection.module.css";

export function FundamentalWorkshopSection({ copy }: { copy: NlfHcmWorkshopOfferCopy }) {
  return (
    <Section className={styles.section} id="fundamental-workshop" variant="dark">
      <Container>
        <WorkshopOffer copy={copy} />
      </Container>
    </Section>
  );
}
