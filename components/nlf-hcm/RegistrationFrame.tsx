import type { NlfHcmRegistrationCopy } from "@/lib/i18n";
import { RegistrationForm } from "./RegistrationForm";
import styles from "./RegistrationFrame.module.css";

export function RegistrationFrame({ copy }: { copy: NlfHcmRegistrationCopy }) {
  return (
    <section className={styles.frame} id="register" aria-labelledby="registration-title">
      <a className={styles.backdrop} href="#top" aria-label={copy.closeLabel} />
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="registration-title">
        <a className={styles.close} href="#top" aria-label={copy.closeLabel}>
          ×
        </a>
        <div className={styles.header}>
          <p>NLF</p>
          <h2 id="registration-title">{copy.heading}</h2>
        </div>
        <RegistrationForm copy={copy} />
      </div>
    </section>
  );
}
