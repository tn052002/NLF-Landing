import type { ProofWallItemCopy } from "@/lib/i18n";
import styles from "./ProofWall.module.css";

const sizeClasses: Record<ProofWallItemCopy["size"], string> = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
  tall: styles.tall,
  wide: styles.wide,
};

const kindLabels: Record<ProofWallItemCopy["kind"], string> = {
  beforeAfter: "Before / After",
  quote: "Quote",
  still: "Still",
  video: "Video",
  workshop: "Workshop",
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ProofTile({ item }: { item: ProofWallItemCopy }) {
  if (item.kind === "quote") {
    return (
      <figure className={cx(styles.tile, styles.quoteTile, sizeClasses[item.size])}>
        <figcaption>{item.label}</figcaption>
        <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
      </figure>
    );
  }

  if (item.kind === "beforeAfter") {
    return (
      <figure className={cx(styles.tile, styles.beforeAfterTile, sizeClasses[item.size])}>
        <div className={styles.beforeAfter}>
          <span>Before</span>
          <span>After</span>
        </div>
        <figcaption>
          <span>{kindLabels[item.kind]}</span>
          <strong>{item.label}</strong>
          {item.detail ? <small>{item.detail}</small> : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={cx(styles.tile, styles.mediaTile, styles[item.kind], sizeClasses[item.size])}>
      <figcaption>
        <span>{kindLabels[item.kind]}</span>
        <strong>{item.label}</strong>
        {item.detail ? <small>{item.detail}</small> : null}
      </figcaption>
    </figure>
  );
}

export function ProofWall({ items }: { items: ProofWallItemCopy[] }) {
  return (
    <div className={styles.wall}>
      {items.map((item, index) => (
        <ProofTile item={item} key={`${item.kind}-${item.label}-${index}`} />
      ))}
    </div>
  );
}
