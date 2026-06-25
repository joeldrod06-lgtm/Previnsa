import { BrandLogo } from "../components/BrandLogo";
import heroImage from "../PrevinsaH.png";

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Sectores" },
  { href: "#contacto", label: "Contacto" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="hero-float absolute inset-y-0 right-[-56%] h-full w-[180%] max-w-none object-cover object-[58%_center] opacity-64 sm:right-[-44%] md:right-[-28%] md:w-[132%] lg:right-0 lg:w-[70%] lg:object-[40%_center] lg:[--hero-zoom:1.14] xl:object-[36%_center] xl:[--hero-zoom:1.2]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,20,38,0.99)_0%,rgba(7,30,56,0.94)_42%,rgba(7,30,56,0.66)_68%,rgba(7,30,56,0.22)_100%)]" />
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,transparent_20%,rgba(0,0,0,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-slate-950" />

      <div className="absolute inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <header className="flex min-h-20 items-center justify-between gap-5">
            <a href="#inicio" aria-label="Ir al inicio">
              <BrandLogo light />
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="text-[14px] font-medium text-white/68 transition hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacto"
              className="inline-flex shrink-0 items-center justify-center text-center rounded-full bg-brand-500 px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-400 sm:px-5"
            >
              Solicitar cotización
            </a>
          </header>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-36 sm:px-6 md:pb-36 md:pt-44 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="reveal-up max-w-4xl text-[44px] font-semibold leading-[0.98] tracking-normal text-white sm:text-[64px] md:text-[84px]">
            Protección seria para quienes hacen la industria.
          </h1>
          <p className="reveal-up reveal-delay-1 mt-7 max-w-2xl text-[18px] leading-8 text-white/72 md:text-[21px] md:leading-9">
            Equipo de protección, señalización y atención cercana para empresas
            y talleres que necesitan verse profesionales, operar seguros y cumplir.
          </p>
          <div className="reveal-up reveal-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="cta-pulse inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_24px_60px_rgba(55,138,221,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              Pedir información
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/7 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/12"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
