import {
  type InputHTMLAttributes,
} from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {

  error?: string;

}

export default function Input({
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        bg-[var(--card)]
        px-4
        py-3
        text-[var(--text)]
        outline-none
        transition-all
        duration-300

        ${
          error
            ? "border-red-500"
            : "border-[var(--border)] focus:border-[var(--primary)]"
        }

        ${className}
      `}
    />
  );
}