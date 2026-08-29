import { Button } from "@/components/ui/Button";
import type { NlfHcmFinalCtaCopy } from "@/lib/i18n";
import styles from "./StickyBottomCta.module.css";

export function StickyBottomCta({ copy }: { copy: NlfHcmFinalCtaCopy }) {
  return (
    <aside className={styles.bar} aria-label={copy.primaryCta}>
      <Button className={styles.primary} href="#register">
        {copy.primaryCta}
      </Button>
      <Button className={styles.secondary} href="#contact" variant="secondary">
        {copy.secondaryCta}
      </Button>
    </aside>
  );
}
