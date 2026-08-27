import styles from "./ui.module.css";

export type MediaKind = "image" | "video" | "portrait" | "workshop footage" | "movement demo";

export type MediaPlaceholderProps = {
  className?: string;
  kind?: MediaKind;
  label?: string;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MediaPlaceholder({ label, kind = "image", className }: MediaPlaceholderProps) {
  const placeholderLabel = label ?? kind;

  return (
    <div className={cx(styles.mediaPlaceholder, className)} role="img" aria-label={`${placeholderLabel} placeholder`}>
      <span className={styles.mediaLabel}>[ {placeholderLabel} ]</span>
    </div>
  );
}
