import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import stanLogo from "@/assets/stan-logo.png.asset.json";

const nav = [
  { to: "/", label: "Domů" },
  { to: "/kandidati", label: "Kandidáti" },
  { to: "/hodnoceni", label: "Hodnocení 2022–2026" },
  { to: "/program", label: "Volební program" },
  { to: "/clanky", label: "Články" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={stanLogo.url} alt="STAN — Starostové a nezávislí" className="h-9 w-9" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-primary">Pro Řevnice</div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Starostové a nezávislí
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-primary hover:bg-accent/60" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Otevřít menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-2 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                inactiveProps={{ className: "text-foreground/80" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
