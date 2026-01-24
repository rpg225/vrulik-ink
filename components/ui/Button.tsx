import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "dark";
};

export default function Button({
  children,
  href,
  variant = "default",
}: ButtonProps) {
  const className =
    variant === "dark"
      ? `${styles.button} ${styles.dark}`
      : styles.button;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
