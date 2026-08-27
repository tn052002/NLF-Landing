import { Container } from "@/components/ui/Container";
import type { WorkshopCopy } from "@/lib/i18n";
import styles from "./WorkshopHeader.module.css";

const phoneNumber = "(555) 123-4567";
const phoneHref = "tel:+15551234567";

function PhoneIcon() {
  return (
    <svg className={styles.phoneIcon} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.1 5.4 9.5 8c.3.6.2 1.3-.3 1.8l-.8.8c.8 1.6 2.1 3 3.2 3.9 1.1 1 2.6 1.8 4.1 2.3l.7-1c.4-.5 1.1-.8 1.8-.5l2.8 1.1c.7.3 1.1 1 .9 1.8-.3 1.2-.8 2.1-1.6 2.7-.8.6-1.9.7-3.2.4-2.8-.7-5.7-2.3-8.3-4.7C6.1 14.2 4.3 11.3 3.4 8.6 3 7.3 3 6.2 3.6 5.4c.6-.8 1.5-1.4 2.6-1.7.8-.2 1.6.1 1.9.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function WorkshopHeader({ copy }: { copy: WorkshopCopy["header"] }) {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav} aria-label="Workshop navigation">
          <a className={styles.brand} href={copy.brandHref} aria-label={copy.ariaLabel}>
            <span className={styles.logo}>NLF</span>
            <span className={styles.tagline}>{copy.tagline}</span>
          </a>

          <a className={styles.contact} href={phoneHref}>
            <span className={styles.iconWrap}>
              <PhoneIcon />
            </span>
            <span className={styles.contactText}>
              <span className={styles.question}>{copy.question}</span>
              <span className={styles.phoneNumber}>{phoneNumber}</span>
            </span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
