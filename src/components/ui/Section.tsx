import { type ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}