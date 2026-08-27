import type { ReactNode } from "react";
import styles from "./ui.module.css";

export type SectionHeaderProps = {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  className?: string;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionHeader({ eyebrow, heading, description, className }: SectionHeaderProps) {
  return (
    <header className={cx(styles.sectionHeader, className)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{heading}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
