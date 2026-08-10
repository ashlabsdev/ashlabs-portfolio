interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {
  return (
    <div
      className="
        fixed
        right-6
        top-6
        z-[100]
        w-[calc(100%-3rem)]
        max-w-sm
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        shadow-2xl
        backdrop-blur-xl
        animate-in
        slide-in-from-right-5
        duration-300
      "
    >
      <div className="flex items-start gap-3">

        <div
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            ${
              type === "success"
                ? "bg-[var(--primary)] text-black"
                : "bg-red-500/15 text-red-400"
            }
          `}
        >
          {type === "success" ? "✓" : "!"}
        </div>

        <div className="flex-1">
          <p className="text-sm leading-6 text-[var(--text)]">
            {message}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="
            text-lg
            leading-none
            text-[var(--muted)]
            transition
            hover:text-[var(--text)]
          "
          aria-label="Close notification"
        >
          ×
        </button>

      </div>
    </div>
  );
}