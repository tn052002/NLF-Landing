import type { ReactNode } from "react";
import styles from "./ui.module.css";

export type SectionVariant = "default" | "muted" | "dark";

export type SectionProps = {
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
};

const sectionVariants: Record<SectionVariant, string> = {
  default: styles.sectionDefault,
  muted: styles.sectionMuted,
  dark: styles.sectionDark,
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({ children, className, variant = "default" }: SectionProps) {
  return <section className={cx(styles.section, sectionVariants[variant], className)}>{children}</section>;
}
