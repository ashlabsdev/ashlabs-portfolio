import { type ReactNode } from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export default function FormField({
  label,
  required,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">

      <label className="block text-sm font-medium text-[var(--text)]">

        {label}

        {required && (
          <span className="ml-1 text-red-400">*</span>
        )}

      </label>

      {children}

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}