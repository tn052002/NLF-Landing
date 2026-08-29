import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { RecognitionCopy } from "@/lib/i18n";
import styles from "./RecognitionSection.module.css";

const markers = ["01", "02", "03", "04", "05"];

export function RecognitionSection({ copy }: { copy: RecognitionCopy }) {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.heading}>{copy.heading}</h2>

          <ul className={styles.grid} aria-label={copy.heading}>
            {copy.items.map((item, index) => (
              <li className={styles.item} key={item}>
                <span className={styles.marker} aria-hidden="true">
                  {markers[index]}
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <p className={styles.question}>{copy.question}</p>
        </div>
      </Container>
    </Section>
  );
}
