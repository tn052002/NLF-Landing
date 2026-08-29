import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmExplanationCopy } from "@/lib/i18n";
import styles from "./WhatIsNlfSection.module.css";
import { VideoPlayer } from "./VideoPlayer";

export function WhatIsNlfSection({ copy }: { copy: NlfHcmExplanationCopy }) {
  return (
    <Section className={styles.section} variant="dark">
      <Container>
        <div className={styles.content}>
          <div className={styles.copy}>
            {/* <p className={styles.eyebrow}>NLF</p> */}
            <h2>{copy.heading}</h2>
            <p className={styles.subheadline}>{copy.subheadline}</p>
            <div className={styles.body}>
              {copy.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* <svg className={styles.wave} aria-hidden="true" viewBox="0 0 320 40">
            <path d="M8 24c44-22 78-22 122 0s78 22 122 0 52-20 60-14" />
          </svg> */}

          <div className={styles.mediaWrap}>
            <VideoPlayer label={copy.videoLabel} />
            <p className={styles.quote}>&ldquo;{copy.quote}&rdquo;</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
