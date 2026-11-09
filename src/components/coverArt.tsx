type CoverArtProps = {
  title: string;
  color: string;
  accent: string;
  rounded?: "none" | "md" | "full";
  className?: string;
  showInitial?: boolean;
};

const radiusClasses = {
  none: "rounded-none",
  md: "rounded-md",
  full: "rounded-full",
};

export function CoverArt({
  title,
  color,
  accent,
  rounded = "md",
  className = "aspect-square w-full",
  showInitial = true,
}: CoverArtProps) {
  const initial = title.charAt(0).toUpperCase();

  return (
    <div
      className={`relative overflow-hidden shadow-lg ${radiusClasses[rounded]} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${accent} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, white, transparent 55%)",
        }}
      />
      {showInitial ? (
        <span className="pointer-events-none absolute inset-0 flex items-end p-[12%] text-[clamp(0.9rem,18%,2.75rem)] font-black leading-none text-white/90 drop-shadow">
          {initial}
        </span>
      ) : null}
    </div>
  );
}
