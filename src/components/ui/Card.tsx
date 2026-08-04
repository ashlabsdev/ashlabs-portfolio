import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[var(--primary)]
        hover:shadow-[0_0_35px_rgba(0,244,142,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}