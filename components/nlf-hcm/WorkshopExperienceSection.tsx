import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmWorkshopExperienceCopy } from "@/lib/i18n";
import { WorkshopExperienceGrid } from "./WorkshopExperienceGrid";
import styles from "./WorkshopExperienceSection.module.css";

export function WorkshopExperienceSection({ copy }: { copy: NlfHcmWorkshopExperienceCopy }) {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h2>{copy.heading}</h2>
          <WorkshopExperienceGrid items={copy.items} />
          <p className={styles.note}>{copy.note}</p>
        </div>
      </Container>
    </Section>
  );
}
