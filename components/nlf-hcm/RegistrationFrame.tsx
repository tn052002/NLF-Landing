"use client";

import { useEffect, useState } from "react";
import type { NlfHcmRegistrationCopy } from "@/lib/i18n";
import { RegistrationForm } from "./RegistrationForm";
import styles from "./RegistrationFrame.module.css";

export function RegistrationFrame({ copy }: { copy: NlfHcmRegistrationCopy }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function syncFromHash() {
      setIsOpen(window.location.hash === "#register");
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeFrame();
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function closeFrame() {
    const url = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", url);
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <section className={styles.frame} id="register" aria-labelledby="registration-title">
      <button className={styles.backdrop} onClick={closeFrame} type="button" aria-label={copy.closeLabel} />
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="registration-title">
        <button className={styles.close} onClick={closeFrame} type="button" aria-label={copy.closeLabel}>
          ×
        </button>
        <div className={styles.header}>
          <p>NLF</p>
          <h2 id="registration-title">{copy.heading}</h2>
        </div>
        <RegistrationForm copy={copy} />
      </div>
    </section>
  );
}
