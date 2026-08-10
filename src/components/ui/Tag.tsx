interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <span
      className="
        inline-flex
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--surface)]
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-300
        hover:border-[var(--primary)]
        hover:text-[var(--primary)]
      "
    >
      {text}
    </span>
  );
}