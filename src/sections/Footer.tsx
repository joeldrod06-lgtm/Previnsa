import { BrandLogo } from "../components/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <BrandLogo light />
        <div className="text-[12px] text-white/42">
          2026 PREVINSA / Seguridad Industrial
        </div>
      </div>
    </footer>
  );
}
