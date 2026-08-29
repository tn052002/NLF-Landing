import { Container } from "@/components/ui/Container";
import type { NlfHcmHeaderCopy } from "@/lib/i18n";
import styles from "./NlfHcmHeader.module.css";

export function NlfHcmHeader({ copy }: { copy: NlfHcmHeaderCopy }) {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav} aria-label="NLF HCM">
          <a className={styles.logo} href="#top" aria-label={copy.logoLabel}>
            {copy.logoLabel}
          </a>
          <a className={styles.cta} href="#contact">
            {copy.cta}
          </a>
        </nav>
      </Container>
    </header>
  );
}
