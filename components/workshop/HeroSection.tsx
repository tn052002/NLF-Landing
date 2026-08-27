import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import type { HeroCopy } from "@/lib/i18n";
import styles from "./HeroSection.module.css";

export function HeroSection({ copy }: { copy: HeroCopy }) {
  return (
    <Section className={styles.heroSection} variant="muted">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 className={styles.heading}>{copy.heading}</h1>
            <p className={styles.description}>{copy.description}</p>

            <div className={styles.actions}>
              <Button href="#movement-discovery">{copy.primaryCta}</Button>
              <Button href="#workshops" variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>

            <ul className={styles.trustList} aria-label="Workshop details">
              {copy.trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.mediaWrap}>
            <MediaPlaceholder className={styles.media} label={copy.mediaLabel} kind="video" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
