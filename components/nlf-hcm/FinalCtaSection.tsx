import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { NlfHcmFinalCtaCopy } from "@/lib/i18n";
import styles from "./FinalCtaSection.module.css";

export function FinalCtaSection({ copy }: { copy: NlfHcmFinalCtaCopy }) {
  return (
    <section className={styles.section} id="contact" aria-label={copy.heading}>
      <div className={styles.image} aria-label={copy.imageLabel}>
        <span>[ {copy.imageLabel} ]</span>
      </div>

      <Container className={styles.container}>
        <div className={styles.panel}>
          <h2>{copy.heading}</h2>
          <p className={styles.subcopy}>{copy.subcopy}</p>
          <div className={styles.meta}>
            <p>{copy.program}</p>
            <p>{copy.city}</p>
            <p>{copy.dates}</p>
          </div>
          <div className={styles.actions}>
            <Button className={styles.primaryCta} href="#register">
              {copy.primaryCta}
            </Button>
            <Button className={styles.secondaryCta} href="#contact" variant="secondary">
              {copy.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
