import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import heroImage from "./PrevinsaH.png";

const contactEmail = "contacto@previnsa.com";
const whatsappUrl = "https://wa.me/520000000000";

const serviceProducts = [
  {
    category: "EPP",
    title: "Cascos industriales",
    description:
      "Protección craneal tipo II para uso diario en taller, almacén y operación.",
    href: "#contacto",
    icon: "shield",
  },
  {
    category: "Visión",
    title: "Lentes de seguridad",
    description:
      "Protección contra impactos, UV y salpicaduras para entornos exigentes.",
    href: "#contacto",
    icon: "eye",
  },
  {
    category: "Señalización",
    title: "Señales preventivas",
    description:
      "Alta visibilidad para interiores y exteriores con materiales resistentes.",
    href: "#contacto",
    icon: "alert",
  },
  {
    category: "Manos",
    title: "Guantes de protección",
    description:
      "Opciones para maniobra general, abrasión, corte y trabajo operativo.",
    href: "#contacto",
    icon: "glove",
  },
  {
    category: "Alta visibilidad",
    title: "Chalecos reflejantes",
    description:
      "Mayor visibilidad en patio, vialidad, carga y operación nocturna.",
    href: "#contacto",
    icon: "vest",
  },
  {
    category: "Orden visual",
    title: "Material preventivo",
    description:
      "Apoyos para rutas, zonas, obligaciones y mensajes clave de seguridad.",
    href: "#contacto",
    icon: "grid",
  },
];

const sectors = [
  "Talleres",
  "Almacenes",
  "Manufactura",
  "Construcción",
  "Logística",
  "Servicios técnicos",
];

const pills = [
  "Atención cercana",
  "Imagen profesional",
  "Respuesta ágil",
  "Prevenimos. Protegemos. Cumplimos.",
];

const quickPoints = [
  "Atención directa para negocios pequeños y medianos",
  "Imagen profesional desde el primer contacto",
];

function BrandLogo({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  const nameColor = light ? "text-white" : "text-brand-700";
  const accentColor = light ? "text-brand-300" : "text-brand-500";
  const tagColor = light ? "text-brand-100/85" : "text-muted";

  return (
    <div className="flex flex-col">
      <div
        className={`${compact ? "text-[1.1rem] md:text-[1.25rem]" : "text-[2rem] md:text-[2.4rem]"} ${nameColor} font-bold leading-none tracking-[0.18em]`}
        style={{ fontFamily: "Georgia, serif" }}
      >
        PREV<span className={accentColor}>I</span>NSA
      </div>
      <div
        className={`${compact ? "text-[0.42rem]" : "text-[0.56rem]"} ${tagColor} mt-1.5 uppercase tracking-[0.28em]`}
      >
        Protección · Prevención · Confianza
      </div>
    </div>
  );
}

function IconBadge() {
  return (
    <span className="inline-block h-3 w-3 rounded-full border border-brand-500/70 bg-brand-500/10" />
  );
}

function ProductIcon({ kind }: { kind: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  switch (kind) {
    case "eye":
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11 text-brand-500" aria-hidden="true">
          <path {...common} d="M2.5 12s3.6-6 9.5-6 9.5 6 9.5 6-3.6 6-9.5 6-9.5-6-9.5-6Z" />
          <circle {...common} cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "alert":
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11 text-brand-500" aria-hidden="true">
          <path {...common} d="M12 4.2 20 18a1.4 1.4 0 0 1-1.2 2H5.2A1.4 1.4 0 0 1 4 18l8-13.8Z" />
          <path {...common} d="M12 9v4.6" />
          <path {...common} d="M12 17.2h.01" />
        </svg>
      );
    case "glove":
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11 text-brand-500" aria-hidden="true">
          <path {...common} d="M8.5 11.5V6.8a1.2 1.2 0 1 1 2.4 0v3.5" />
          <path {...common} d="M10.9 10.3V5.7a1.2 1.2 0 1 1 2.4 0v4" />
          <path {...common} d="M13.3 10V6.3a1.2 1.2 0 1 1 2.4 0v4.5" />
          <path {...common} d="M8.4 11.6 6.8 10a1.5 1.5 0 0 0-2.1 2.1l2.8 2.8c.7.7 1.6 1.1 2.6 1.1h4a3 3 0 0 0 2.2-1l1.8-2a3.2 3.2 0 0 0 .8-2.1V9.8a1.2 1.2 0 1 0-2.4 0" />
        </svg>
      );
    case "vest":
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11 text-brand-500" aria-hidden="true">
          <path {...common} d="M9 4h6l1.4 3.2 2.6 2.1-2 10.7H7L5 9.3l2.6-2.1Z" />
          <path {...common} d="M10.2 4 12 8l1.8-4" />
          <path {...common} d="M9.4 13h5.2" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11 text-brand-500" aria-hidden="true">
          <rect {...common} x="4" y="4" width="6" height="6" rx="1.2" />
          <rect {...common} x="14" y="4" width="6" height="6" rx="1.2" />
          <rect {...common} x="4" y="14" width="6" height="6" rx="1.2" />
          <rect {...common} x="14" y="14" width="6" height="6" rx="1.2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-11 w-11 text-brand-500" aria-hidden="true">
          <path {...common} d="M12 4.5 6 7v4.3c0 4 2.6 7 6 8.2 3.4-1.2 6-4.2 6-8.2V7l-6-2.5Z" />
          <path {...common} d="m9.6 12 1.6 1.7 3.2-3.4" />
        </svg>
      );
  }
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-[620px]">
      <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-[#8c8881]">
        {label}
      </p>
      <h2 className="mb-4 text-[24px] font-semibold leading-tight text-[#f3f1ec] md:text-[30px]">
        {title}
      </h2>
      <p className="text-[15px] leading-8 text-[#b9b3ab]">{subtitle}</p>
    </div>
  );
}

function App() {
  const servicesViewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, serviceProducts.length - visibleCount);

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setActiveIndex(clamped);
    const el = servicesViewportRef.current;
    if (!el) return;
    const card = el.querySelector("[data-service-card]") as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 16;
    el.scrollTo({ left: clamped * (cardWidth + gap), behavior: "smooth" });
  };

  const scrollServices = (dir: 1 | -1) => {
    const next = activeIndex + dir;
    if (next < 0) scrollTo(maxIndex);
    else if (next > maxIndex) scrollTo(0);
    else scrollTo(next);
  };

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const contacto = value("contacto");
    const nombre = value("nombre");
    const subject = `Solicitud de cotización - ${nombre || "PREVINSA"}`;
    const body = [
      "Hola, me interesa solicitar una cotización.",
      "",
      `Nombre / Empresa: ${nombre}`,
      `Contacto: ${contacto}`,
      "",
      "Productos de interés:",
      value("mensaje") || "No especificado",
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#1f1f1d] text-white">

      {/* ── NAV ── */}
      <section className="bg-brand-700">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <header className="flex flex-col items-start gap-4 py-5 sm:min-h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
            <a href="#inicio" className="shrink-0">
              <BrandLogo light compact />
            </a>
            <div className="flex w-full items-center gap-5 sm:w-auto md:gap-7">
              <nav className="hidden items-center gap-8 md:flex">
                <a className="text-[15px] font-semibold text-brand-100 transition hover:text-white" href="#servicios">Servicios</a>
                <a className="text-[15px] font-semibold text-brand-100 transition hover:text-white" href="#sectores">Sectores</a>
                <a className="text-[15px] font-semibold text-brand-100 transition hover:text-white" href="#contacto">Contacto</a>
              </nav>
              <a
                href="#contacto"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 px-4 py-2.5 text-center text-[14px] font-semibold text-white transition hover:border-white/40 hover:bg-white/5 sm:w-auto md:px-5 md:py-3 md:text-[15px]"
              >
                Solicitar cotización
              </a>
            </div>
          </header>
        </div>

        {/* ── HERO ── */}
        <div id="inicio" className="relative overflow-hidden">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 right-[-58%] h-full w-[190%] max-w-none object-cover object-[57%_center] opacity-55 md:right-[-55%] md:w-[172%] md:object-[58%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,68,124,0.93)_0%,rgba(12,68,124,0.86)_34%,rgba(12,68,124,0.66)_56%,rgba(12,68,124,0.28)_78%,rgba(12,68,124,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_48%,rgba(255,255,255,0.05),transparent_24%)]" />

          <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-14 sm:pb-16 sm:pt-16 md:px-8 md:pb-24 md:pt-20">
            <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-brand-100/70 sm:mb-10 sm:tracking-[0.34em] md:text-[13px]">
              Seguridad industrial
            </p>
            <h1 className="max-w-[700px] text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[44px] md:text-[64px] md:tracking-[-0.04em]">
              Protección seria para
              <br />
              <span className="text-brand-300">quienes hacen la industria.</span>
            </h1>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.7] text-brand-300 sm:text-[18px] md:text-[20px]">
              Equipo de protección, señalización y atención cercana para empresas
              y talleres que necesitan arrancar con buena imagen y cumplir norma.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#contacto" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                Pedir información
              </a>
              <a href="#servicios" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLS ── */}
      <section className="border-y border-white/8 bg-[linear-gradient(90deg,#12477f,#0c447c)]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 md:px-8">
          {pills.map((pill) => (
            <div key={pill} className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.035] px-3 py-1.5 text-[13px] font-semibold text-brand-100">
              <IconBadge />
              <span>{pill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="bg-[linear-gradient(180deg,#2b2a27_0%,#242320_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <SectionHeader
              label="Servicios"
              title="Productos visibles y fáciles de cotizar."
              subtitle="Una presentación clara de qué hace el negocio y cómo puede ayudar, sin saturar al visitante."
            />
            <div className="rounded-[20px] border border-white/8 bg-[#252421] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-300/70">Formato</p>
              <p className="mt-3 text-[15px] leading-7 text-[#c8c1b8]">
                Presentación simple, útil y creíble para una empresa que va empezando.
              </p>
            </div>
          </div>

          {/* Controles + indicadores */}
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between gap-3">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir al producto ${i + 1}`}
                    onClick={() => scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex
                        ? "w-6 bg-brand-300"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Flechas */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Producto anterior"
                  onClick={() => scrollServices(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[20px] leading-none text-white transition hover:border-brand-300/35 hover:bg-brand-300/10 disabled:opacity-30"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  aria-label="Siguiente producto"
                  onClick={() => scrollServices(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[20px] leading-none text-white transition hover:border-brand-300/35 hover:bg-brand-300/10"
                >
                  &#8250;
                </button>
              </div>
            </div>

            {/* Carrusel */}
            <div
              ref={servicesViewportRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-hidden scroll-smooth pb-1"
              style={{ scrollbarWidth: "none" }}
            >
              {serviceProducts.map((product) => (
                <article
                  key={product.title}
                  data-service-card
                  className="w-full min-w-[100%] shrink-0 snap-start overflow-hidden rounded-[16px] border border-white/10 bg-[#302f2c] transition hover:-translate-y-1 hover:border-brand-300/30 md:min-w-[calc((100%-1rem)/2)] xl:min-w-[calc((100%-2rem)/3)]"
                >
                  <div className="border-b border-white/6 bg-[#16283b] px-4 py-4">
                    <span className="inline-flex rounded-md bg-brand-700/70 px-2.5 py-1 text-[11px] font-semibold text-brand-100">
                      {product.category}
                    </span>
                    <div className="flex min-h-[120px] items-center justify-center">
                      <ProductIcon kind={product.icon} />
                    </div>
                  </div>
                  <div className="px-4 pb-5 pt-4">
                    <h3 className="text-[18px] font-semibold text-[#f2efea]">{product.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#c4bfb7]">{product.description}</p>
                    <a
                      href={product.href}
                      className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-300 transition hover:text-brand-100"
                    >
                      <span aria-hidden="true">→</span>
                      Ver detalles
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORES ── */}
      <section
        id="sectores"
        className="border-t border-white/6 bg-[linear-gradient(180deg,#242320_0%,#2a2926_100%)] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <SectionHeader
              label="Sectores"
              title="¿Con quién trabajamos?"
              subtitle="Atendemos negocios pequeños y medianos que necesitan equiparse bien desde el inicio."
            />
            <div>
              <div className="flex flex-wrap gap-4">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-white/10 bg-[#e6f1fb] px-5 py-2.5 text-[14px] font-medium text-brand-700 transition hover:-translate-y-0.5"
                  >
                    {sector}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {quickPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[16px] border border-white/8 bg-white/[0.035] px-5 py-4 text-[14px] leading-7 text-[#c5beb5]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section
        id="contacto"
        className="border-t border-white/6 bg-[#2a2926] py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
            <SectionHeader
              label="Contacto"
              title="Solicita tu cotización."
              subtitle="Respondemos en menos de 24 h con precios y disponibilidad."
            />

            <div className="rounded-[16px] border border-white/10 bg-[#252421] p-5 shadow-[0_18px_50px_rgba(6,28,52,0.16)]">
              {/* Encabezado tarjeta */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-[15px] font-semibold text-[#f2efea]">Cuéntanos qué necesitas</p>
                  <p className="mt-0.5 text-[13px] text-[#bdb6ae]">Te respondemos directo, sin formularios complicados.</p>
                </div>
                <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-brand-400" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4.5 6 7v4.3c0 4 2.6 7 6 8.2 3.4-1.2 6-4.2 6-8.2V7l-6-2.5Z" />
                  <path d="m9.6 12 1.6 1.7 3.2-3.4" />
                </svg>
              </div>

              <form className="grid gap-3" onSubmit={handleQuoteSubmit}>
                <div className="grid grid-cols-2 gap-3">
                  <label className="grid gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8c8881]">
                    Nombre y empresa
                    <input
                      required
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre o empresa"
                      className="min-h-10 rounded-md border border-white/10 bg-white/[0.055] px-3 text-[13px] font-medium text-white outline-none transition placeholder:text-white/30 focus:border-brand-300/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-300/20"
                    />
                  </label>
                  <label className="grid gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8c8881]">
                    Teléfono o correo
                    <input
                      required
                      name="contacto"
                      type="text"
                      autoComplete="email"
                      placeholder="Para responderte"
                      className="min-h-10 rounded-md border border-white/10 bg-white/[0.055] px-3 text-[13px] font-medium text-white outline-none transition placeholder:text-white/30 focus:border-brand-300/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-300/20"
                    />
                  </label>
                </div>

                <label className="grid gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8c8881]">
                  ¿Qué productos necesitas?
                  <textarea
                    name="mensaje"
                    rows={3}
                    autoCapitalize="sentences"
                    autoCorrect="on"
                    placeholder="Ej: 6 cascos, guantes para 10 personas, señales de área de carga…"
                    className="resize-none rounded-md border border-white/10 bg-white/[0.055] px-3 py-2.5 text-[13px] font-medium leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-brand-300/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-300/20"
                  />
                </label>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-1.5 text-[11px] text-white/35">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Solo para contactarte
                  </p>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-brand-500 px-5 py-2 text-center text-[13px] font-semibold text-white transition hover:bg-brand-400 sm:w-auto"
                  >
                    Enviar solicitud
                  </button>
                </div>
              </form>

              {/* WhatsApp secundario */}
              <div className="mt-4 border-t border-white/8 pt-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[13px] text-[#bdb6ae]">¿Prefieres respuesta inmediata?</p>
                  <a
                    href={whatsappUrl}
                    className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-white/8 sm:w-auto"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brand-700 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="text-[18px] font-bold tracking-[0.16em] text-white" style={{ fontFamily: "Georgia, serif" }}>
            PREV<span className="text-brand-300">I</span>NSA
          </div>
          <div className="text-[12px] text-brand-100/45">
            © 2026 PREVINSA · Seguridad Industrial
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;