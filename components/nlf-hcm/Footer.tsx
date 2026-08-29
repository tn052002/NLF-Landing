import { Container } from "@/components/ui/Container";
import type { NlfHcmFooterCopy } from "@/lib/i18n";
import styles from "./Footer.module.css";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect height="15" rx="4" width="15" x="4.5" y="4.5" />
      <circle cx="12" cy="12" r="3.3" />
      <circle cx="16.8" cy="7.4" r="0.8" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14.2 8.5h2.4V5h-2.9c-3 0-4.6 1.8-4.6 4.7v2.1H6.8v3.5h2.3V21h3.8v-5.7h3.1l0.5-3.5h-3.6V10c0-1 0.4-1.5 1.3-1.5Z" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.2 5.1h13.6c1.2 0 2.2 1 2.2 2.2v7.9c0 1.2-1 2.2-2.2 2.2h-5.9l-4.1 2.8 0.9-2.8H5.2c-1.2 0-2.2-1-2.2-2.2V7.3c0-1.2 1-2.2 2.2-2.2Z" />
      <path d="M7.1 9.1h4.1l-4.2 5.8h4.5" />
      <path d="M13 9.1v5.8" />
      <path d="M15.1 11.3c0-1.3 0.8-2.2 2-2.2s2 0.9 2 2.2v1.4c0 1.3-0.8 2.2-2 2.2s-2-0.9-2-2.2v-1.4Z" />
    </svg>
  );
}

function FooterIcon({ label }: { label: string }) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("instagram")) {
    return <InstagramIcon />;
  }

  if (normalizedLabel.includes("facebook")) {
    return <FacebookIcon />;
  }

  return <ZaloIcon />;
}

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
              <a href={link.href} key={link.label} aria-label={link.label} title={link.label}>
                <FooterIcon label={link.label} />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
