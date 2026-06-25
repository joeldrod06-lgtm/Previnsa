import type { FormEvent } from "react";

import { LineItem } from "../components/LineItem";
import { SectionHeader } from "../components/SectionHeader";
import { contactEmail, contactHighlights, whatsappUrl } from "../data/siteContent";

function getFormValue(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}

function buildQuoteMailto(data: FormData) {
  const contacto = getFormValue(data, "contacto");
  const nombre = getFormValue(data, "nombre");
  const subject = `Solicitud de cotización - ${nombre || "PREVINSA"}`;
  const body = [
    "Hola, me interesa solicitar una cotización.",
    "",
    `Nombre / Empresa: ${nombre}`,
    `Contacto: ${contacto}`,
    "",
    "Productos de interés:",
    getFormValue(data, "mensaje") || "No especificado",
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.54 2 2.08 6.45 2.08 11.95c0 1.75.46 3.46 1.33 4.97L2 22l5.22-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.49 0 9.95-4.45 9.95-9.95a9.86 9.86 0 0 0-2.93-7Zm-7.02 15.27h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.19-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.55 3.7-8.26 8.26-8.26 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.43 5.84c0 4.56-3.7 8.27-8.26 8.27Zm4.53-6.18c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.14.17-.29.19-.54.07a6.7 6.7 0 0 1-1.98-1.22 7.43 7.43 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 1.99 0 1.17.86 2.3.98 2.45.12.16 1.68 2.57 4.08 3.6.57.25 1.02.39 1.37.5.57.18 1.08.15 1.49.09.46-.07 1.47-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function ContactSection() {
  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildQuoteMailto(new FormData(event.currentTarget));
  };

  return (
    <section
      id="contacto"
      className="reveal-up reveal-delay-3 relative overflow-hidden bg-slate-950 py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <div className="order-2 lg:order-1">
            <SectionHeader
              label="Contacto"
              title="Solicita tu cotización."
              subtitle="Respondemos en menos de 24 h con precios, disponibilidad y opciones para tu equipo."
            />
            <div className="interactive-card mt-6 rounded-[1.4rem] border border-white/10 bg-slate-900 p-5 shadow-[0_26px_80px_rgba(0,0,0,0.24)] sm:mt-8 sm:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-300/70">
                Qué puedes esperar
              </p>
              <div className="mt-6 grid gap-4">
                {contactHighlights.map((highlight) => (
                  <LineItem key={highlight}>{highlight}</LineItem>
                ))}
              </div>
            </div>
            <div className="interactive-card mt-4 rounded-[1.2rem] border border-white/10 bg-slate-900 px-5 py-4 shadow-sm">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-300/70">
                Contacto directo
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 block break-all text-[17px] font-semibold text-white transition hover:text-brand-300"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="interactive-card order-1 rounded-[1.5rem] border border-white/10 bg-slate-900 p-4 shadow-[0_34px_100px_rgba(0,0,0,0.3)] sm:p-5 md:p-7 lg:order-2">
            <div className="mb-5 border-b border-white/10 pb-5 sm:mb-6 sm:pb-6">
              <div className="mb-4 inline-flex rounded-full border border-brand-300/20 bg-brand-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                Respuesta en menos de 24 h
              </div>
              <p className="text-[20px] font-semibold text-white sm:text-[22px]">
                Cuéntanos qué necesitas
              </p>
              <p className="mt-2 text-[14px] leading-7 text-slate-300 sm:text-[15px]">
                Te respondemos directo, sin formularios complicados.
              </p>
            </div>

            <form className="grid gap-3 sm:gap-4" onSubmit={handleQuoteSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Nombre y empresa
                  <input
                    required
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre o empresa"
                    className="min-h-14 rounded-2xl border border-white/10 bg-slate-950 px-4 text-[16px] font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300 focus:bg-slate-950 focus:ring-4 focus:ring-brand-300/15"
                  />
                </label>
                <label className="grid gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Teléfono o correo
                  <input
                    required
                    name="contacto"
                    type="text"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="Para responderte"
                    className="min-h-14 rounded-2xl border border-white/10 bg-slate-950 px-4 text-[16px] font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300 focus:bg-slate-950 focus:ring-4 focus:ring-brand-300/15"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                ¿Qué productos necesitas?
                <textarea
                  name="mensaje"
                  rows={4}
                  autoCapitalize="sentences"
                  autoCorrect="on"
                  placeholder="Ej: 6 cascos, guantes para 10 personas, señales de área de carga..."
                  className="min-h-[144px] resize-none rounded-2xl border border-white/10 bg-slate-950 px-4 py-3.5 text-[16px] font-medium leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300 focus:bg-slate-950 focus:ring-4 focus:ring-brand-300/15"
                />
              </label>

              <div className="flex flex-col gap-3 pt-2">
                <p className="text-[12px] leading-5 text-slate-500">
                  Solo usaremos tus datos para responderte.
                </p>
                <button
                  type="submit"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-center text-[15px] font-semibold text-white shadow-[0_20px_50px_rgba(8,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>

            <div className="mt-5 border-t border-white/10 pt-5 sm:mt-6 sm:pt-6">
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <p className="text-[14px] leading-6 text-slate-300 sm:text-[15px]">
                  ¿Prefieres respuesta inmediata?
                </p>
                <a
                  href={whatsappUrl}
                  className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/15 sm:min-h-12 sm:w-auto sm:px-5"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
