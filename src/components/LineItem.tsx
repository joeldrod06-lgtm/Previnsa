import type { ReactNode } from "react";

export function LineItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-3 h-px w-5 shrink-0 bg-brand-300/55" />
      <p className="text-[15px] leading-7 text-slate-300">{children}</p>
    </div>
  );
}
