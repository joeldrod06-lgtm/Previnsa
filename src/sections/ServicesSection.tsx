import { SectionHeader } from "../components/SectionHeader";
import { serviceProducts } from "../data/siteContent";
import { useServiceCarousel } from "../hooks/useServiceCarousel";

export function ServicesSection() {
  const {
    activeIndex,
    maxIndex,
    scrollServices,
    scrollTo,
    servicesViewportRef,
  } = useServiceCarousel(serviceProducts.length);

  return (
    <section id="servicios" className="reveal-up reveal-delay-1 bg-slate-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Servicios"
          title="Productos visibles y fáciles de cotizar."
          subtitle="Una presentación clara de qué hace el negocio y cómo puede ayudar, sin saturar al visitante."
        />

        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ir al producto ${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-7 bg-brand-300"
                      : "w-2 bg-white/18 hover:bg-white/42"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Producto anterior"
                onClick={() => scrollServices(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-[20px] leading-none text-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-300/10 hover:shadow-md"
              >
                {"<"}
              </button>
              <button
                type="button"
                aria-label="Siguiente producto"
                onClick={() => scrollServices(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-[20px] leading-none text-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-300/10 hover:shadow-md"
              >
                {">"}
              </button>
            </div>
          </div>

          <div
            ref={servicesViewportRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 md:overflow-x-hidden"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {serviceProducts.map((product, index) => (
              <article
                key={product.title}
                data-service-card
                className="interactive-card group flex min-h-[350px] min-w-0 shrink-0 basis-full snap-start flex-col overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-900 shadow-[0_22px_70px_rgba(0,0,0,0.25)] duration-300 hover:border-brand-300/30 hover:shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:basis-[calc(50%_-_0.625rem)] xl:basis-[calc(33.333%_-_0.834rem)]"
              >
                <div className="border-b border-white/10 bg-slate-800/72 p-6">
                  <div className="flex items-start justify-between gap-5">
                    <span className="inline-flex rounded-full border border-brand-300/18 bg-brand-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100">
                      {product.category}
                    </span>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[22px] font-semibold text-white">{product.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-300">
                    {product.description}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-5 text-[12px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                    Cotización por necesidad
                  </div>
                  <a
                    href={product.href}
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-semibold text-brand-300 transition hover:text-brand-100"
                  >
                    Ver detalles <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
