import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmIncludedCopy } from "@/lib/i18n";
import { IncludedList } from "./IncludedList";
import styles from "./IncludedSection.module.css";

export function IncludedSection({ copy }: { copy: NlfHcmIncludedCopy }) {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <h2>{copy.heading}</h2>
            <IncludedList items={copy.items} />
          </div>

          <figure className={styles.image} aria-label={copy.imageLabel}>
            <span>[ {copy.imageLabel} ]</span>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
