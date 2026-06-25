type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle: string;
};

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-300/70">
        {label}
      </p>
      <h2 className="text-[34px] font-semibold leading-[1.02] text-white sm:text-[44px] md:text-[56px]">
        {title}
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-slate-300 md:text-[19px]">
        {subtitle}
      </p>
    </div>
  );
}
