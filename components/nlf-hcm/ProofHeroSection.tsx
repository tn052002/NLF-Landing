import { Button } from "@/components/ui/Button";
import { BeforeAfterPair } from "@/components/ui/BeforeAfterPair";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmProofHeroCopy } from "@/lib/i18n";
import styles from "./ProofHeroSection.module.css";

export function ProofHeroSection({ copy }: { copy: NlfHcmProofHeroCopy }) {
  return (
    <Section className={styles.section} id="top" variant="dark">
      <Container>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h1 className={styles.heading}>{copy.heading}</h1>
            <p className={styles.subheading}>{copy.subheading}</p>
          </div>

          <BeforeAfterPair afterLabel={copy.afterLabel} beforeLabel={copy.beforeLabel} />

          <div className={styles.footer}>
            <p className={styles.proof}>{copy.proofLabel}</p>
            <Button className={styles.cta} href="#fundamental-workshop">
              {copy.cta}
            </Button>
            <p className={styles.location}>{copy.location}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
