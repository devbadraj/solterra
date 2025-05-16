interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowText({ children, className = '' }: GlowTextProps) {
  return (
    <span className={`drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] ${className}`}>
      {children}
    </span>
  );
}