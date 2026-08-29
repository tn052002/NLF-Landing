import type { WorkshopExperienceItemCopy } from "@/lib/i18n";
import styles from "./WorkshopExperienceGrid.module.css";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function WorkshopExperienceGrid({ items }: { items: WorkshopExperienceItemCopy[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <figure className={cx(styles.item, styles[`item${index + 1}`])} key={item.path}>
          <div className={styles.media}>
            <span className={styles.type}>{item.type}</span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.path}>{item.path}</span>
          </div>
        </figure>
      ))}
    </div>
  );
}
