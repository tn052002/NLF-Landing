import type { ReactNode } from "react";
import styles from "./ui.module.css";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cx(styles.container, className)}>{children}</div>;
}
