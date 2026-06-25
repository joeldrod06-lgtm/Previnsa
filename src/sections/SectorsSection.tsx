import { LineItem } from "../components/LineItem";
import { SectionHeader } from "../components/SectionHeader";
import { quickPoints, sectorCards, sectors } from "../data/siteContent";

export function SectorsSection() {
  return (
    <section id="sectores" className="reveal-up reveal-delay-2 bg-slate-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <SectionHeader
              label="Sectores"
              title="Equipamiento claro para equipos reales."
              subtitle="Atendemos negocios pequeños y medianos que necesitan equiparse bien desde el inicio."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-[13px] font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300/35 hover:bg-brand-300/10"
                >
                  {sector}
                </span>
              ))}
            </div>
            <div className="mt-9 grid gap-4">
              {quickPoints.map((point) => (
                <LineItem key={point}>{point}</LineItem>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {sectorCards.map((sector, index) => (
              <article
                key={sector.title}
                className="interactive-card group rounded-[1.5rem] border border-white/10 bg-slate-950/52 p-5 duration-300 hover:border-brand-300/30 hover:bg-slate-950 hover:shadow-[0_26px_80px_rgba(0,0,0,0.26)]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-3 inline-flex rounded-full border border-brand-300/20 bg-brand-300/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-[20px] font-semibold text-white">{sector.title}</h3>
                  </div>
                  <span className="w-fit rounded-full bg-white/[0.055] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {sector.detail}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-slate-300">
                  {sector.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
