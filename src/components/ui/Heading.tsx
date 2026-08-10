interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function Heading({
  title,
  subtitle,
  align = "left",
}: HeadingProps) {
  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <h2 className="font-heading text-3xl font-bold md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`max-w-2xl text-[var(--muted)] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}