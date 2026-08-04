export default function TechNetwork() {
  const nodes = [
    { id: 1, top: "20%", left: "50%" },

    { id: 2, top: "40%", left: "40%" },
    { id: 3, top: "40%", left: "60%" },
  
    { id: 4, top: "60%", left: "35%" },
    { id: 5, top: "60%", left: "65%" },

    { id: 6, top: "75%", left: "30%" },
    { id: 7, top: "75%", left: "40%" },
    { id: 8, top: "75%", left: "50%" },
    { id: 9, top: "75%", left: "60%" },
    { id: 10, top: "75%", left: "70%" },
  ];

  return (
    <div className="relative h-[500px] w-full">

      {/* Horizontal */}

      {/* <div className="absolute left-[35%] top-[28%] h-px w-[50%] bg-[var(--text)]/20" />
      <div className="absolute left-[35%] top-[28%] h-px w-[50%] bg-[var(--text)]/20" />
      <div className="absolute left-[15%] top-[50%] h-px w-[50%] bg-[var(--text)]/20" />
      <div className="absolute left-[15%] top-[50%] h-px w-[50%] bg-[var(--text)]/20" />

      {/* <div className="absolute left-[25%] top-[72%] h-px w-[50%] bg-[var(--primary)]/20" /> */}

      {/* Vertical */}

      {/* <div className="absolute left-1/2 top-[1%] h-[73%] w-px -translate-x-1/2 bg-[var(--primary)]/20" />
      <div className="absolute left-1/2 top-[1%] h-[73%] w-px -translate-x-1/2 bg-[var(--primary)]/20" />  */}

      {nodes.map((node) => (
        <div
          key={node.id}
          style={{
            top: node.top,
            left: node.left,
          }}
          className="
            absolute
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--primary)]
            shadow-[0_0_20px_rgba(0,244,142,.8)]
            transition-all
            duration-300
            hover:scale-150
            hover:bg-[var(--text)]
            animate-float
          "
        />
      ))}
    </div>
  );
}