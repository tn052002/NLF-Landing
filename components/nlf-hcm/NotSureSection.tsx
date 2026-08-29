import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmRiskReversalCopy } from "@/lib/i18n";
import styles from "./NotSureSection.module.css";

export function NotSureSection({ copy }: { copy: NlfHcmRiskReversalCopy }) {
  return (
    <Section className={styles.section} variant="dark">
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2>{copy.heading}</h2>
            <p className={styles.message}>{copy.primaryMessage}</p>
            <div className={styles.supporting}>
              {copy.supportingText.map((line) => (
                <p key={line}>{line}</p>
              ))}
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

          <div className={styles.policies}>
            {copy.policies.map((policy) => (
              <article className={styles.policy} key={policy.label}>
                <h3>{policy.label}</h3>
                <p>{policy.todo}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
