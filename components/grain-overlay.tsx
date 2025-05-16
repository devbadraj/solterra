export function GrainOverlay() {
  return (
    <>
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: 'contrast(200%) brightness(150%)',
          mixBlendMode: 'overlay'
        }}
      />
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
    </>
  );
}