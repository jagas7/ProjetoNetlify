import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  text?: string;
  children?: ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export default function Button({
  text,
  children,
  href,
  secondary = false,
  className = "",
  onClick,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const classes = `btn ${secondary ? "btn-secondary" : "btn-primary"} ${className}`.trim();
  const content = children ?? text;

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
