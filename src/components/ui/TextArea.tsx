import {
  type TextareaHTMLAttributes,
} from "react";

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {

  error?: string;

}

export default function TextArea({
  error,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <textarea
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
        resize-none

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