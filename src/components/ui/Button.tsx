import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const buttonStyles = {
  primary:
    "bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary-hover)]",

  outline:
    "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)]",

  ghost:
    "text-[var(--text)] hover:text-[var(--primary)]",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        ${buttonStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}