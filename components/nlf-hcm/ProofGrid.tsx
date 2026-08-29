import { BeforeAfterPair } from "@/components/ui/BeforeAfterPair";
import type { ProofItemCopy } from "@/lib/i18n";
import styles from "./ProofGrid.module.css";

export function ProofGrid({ items }: { items: ProofItemCopy[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article className={styles.item} key={`${item.label}-${item.age}`}>
          <BeforeAfterPair afterLabel={item.afterLabel} beforeLabel={item.beforeLabel} className={styles.pair} />
          <div className={styles.copy}>
            <p className={styles.meta}>
              <span>{item.label}</span>
              <span>{item.age}</span>
            </p>
            <p className={styles.note}>{item.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
