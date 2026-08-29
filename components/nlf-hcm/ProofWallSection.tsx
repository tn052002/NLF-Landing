import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmProofWallCopy } from "@/lib/i18n";
import { ProofWall } from "./ProofWall";
import styles from "./ProofWallSection.module.css";

export function ProofWallSection({ copy }: { copy: NlfHcmProofWallCopy }) {
  return (
    <Section className={styles.section} variant="dark">
      <Container>
        <div className={styles.content}>
          <div className={styles.header}>
            <p>{copy.subheadline}</p>
            <h2>{copy.heading}</h2>
          </div>
          <ProofWall items={copy.items} />
        </div>
      </Container>
    </Section>
  );
}
