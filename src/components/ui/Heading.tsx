interface HeadingProps {
  title: string;
  subtitle?: string;
}

export default function Heading({
  title,
  subtitle,
}: HeadingProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-['Space_Grotesk'] text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}