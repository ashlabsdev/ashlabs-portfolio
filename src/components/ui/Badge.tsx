interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#00F48E]/20 bg-[#00F48E]/5 px-4 py-2 text-sm font-medium text-[#00F48E]">
      <span className="h-2 w-2 rounded-full bg-[#00F48E]" />
      {text}
    </div>
  );
}