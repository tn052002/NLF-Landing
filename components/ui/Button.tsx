import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ui.module.css";

export type ButtonVariant = "primary" | "secondary" | "text";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const buttonVariants: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  text: styles.text,
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isLinkButton(props: ButtonProps): props is ButtonAsLinkProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const { className, variant = "primary" } = props;
  const buttonClassName = cx(styles.button, buttonVariants[variant], className);

  if (isLinkButton(props)) {
    const { children, className: _className, variant: _variant, ...linkProps } = props;

    return (
      <a className={buttonClassName} {...linkProps}>
        {children}
      </a>
    );
  }

  const { children, className: _className, variant: _variant, ...buttonProps } = props;

  return (
    <button className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
