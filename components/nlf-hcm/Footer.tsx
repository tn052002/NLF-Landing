import { Container } from "@/components/ui/Container";
import type { NlfHcmFooterCopy } from "@/lib/i18n";
import styles from "./Footer.module.css";

export function Footer({ copy }: { copy: NlfHcmFooterCopy }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <a className={styles.logo} href="#top" aria-label={copy.logoLabel}>
            {copy.logoLabel}
          </a>
          <nav className={styles.nav} aria-label="Footer">
            {copy.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
