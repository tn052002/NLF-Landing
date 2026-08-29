import { MediaPlaceholder } from "./MediaPlaceholder";
import styles from "./BeforeAfterPair.module.css";

export type BeforeAfterPairProps = {
  afterLabel: string;
  beforeLabel: string;
  className?: string;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function BeforeAfterPair({ afterLabel, beforeLabel, className }: BeforeAfterPairProps) {
  return (
    <div className={cx(styles.pair, className)}>
      <MediaPlaceholder className={styles.media} label={beforeLabel} kind="image" />
      <MediaPlaceholder className={styles.media} label={afterLabel} kind="image" />
    </div>
  );
}
