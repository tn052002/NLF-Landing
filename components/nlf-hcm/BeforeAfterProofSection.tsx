"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmBeforeAfterProofCopy } from "@/lib/i18n";
import { ProofGrid } from "./ProofGrid";
import styles from "./BeforeAfterProofSection.module.css";

export function BeforeAfterProofSection({ copy }: { copy: NlfHcmBeforeAfterProofCopy }) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <Section className={styles.section} variant="muted">
      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2>{copy.heading}</h2>
            <p>{copy.subcopy}</p>
          </header>

          <ProofGrid items={copy.items} />

          <Button onClick={() => setIsOpen(true)} type="button">
            {copy.cta}
          </Button>
        </div>
      </Container>

      {isOpen ? (
        <div className={styles.modal} role="presentation">
          <button className={styles.backdrop} onClick={() => setIsOpen(false)} type="button">
            <span className={styles.srOnly}>{copy.modalClose}</span>
          </button>
          <div aria-labelledby={titleId} aria-modal="true" className={styles.frame} role="dialog">
            <div className={styles.frameHeader}>
              <h3 id={titleId}>{copy.modalTitle}</h3>
              <button className={styles.close} onClick={() => setIsOpen(false)} type="button">
                {copy.modalClose}
              </button>
            </div>
            <ProofGrid items={copy.items} />
          </div>
        </div>
      ) : null}
    </Section>
  );
}
