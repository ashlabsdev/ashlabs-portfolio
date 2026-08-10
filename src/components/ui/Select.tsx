import {
    type SelectHTMLAttributes,
} from "react";

interface SelectProps
    extends SelectHTMLAttributes<HTMLSelectElement> {

    error?: string;

}

export default function Select({
    error,
    className = "",
    children,
    ...props
}: SelectProps) {
    return (
        <select
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
        cursor-pointer
        ${error ? "border-red-500" : "border-[var(--border)] focus:border-[var(--primary)]"}
        ${className}`
            }
        >
            {children}
        </select>
    );
}