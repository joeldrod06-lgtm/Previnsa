export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col">
      <div
        className={`text-[1.25rem] font-semibold leading-none tracking-[0.16em] ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        PREV<span className={light ? "text-brand-300" : "text-brand-500"}>I</span>NSA
      </div>
      <div
        className={`mt-1 text-[0.46rem] uppercase tracking-[0.22em] ${
          light ? "text-white/58" : "text-slate-500"
        }`}
      >
        Protección / Prevención / Confianza
      </div>
    </div>
  );
}
