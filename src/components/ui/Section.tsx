// import { type ReactNode } from "react";
// import Container from "./Container";

// interface SectionProps {
//   children: ReactNode;
// }

// export default function Section({
//   children,
// }: SectionProps) {
//   return (
//     <section className="py-20">
//       <Container>{children}</Container>
//     </section>
//   );
// }
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