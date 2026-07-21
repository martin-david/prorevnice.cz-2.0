import { Link } from "@tanstack/react-router";
import stanLogo from "@/assets/stan-logo.png.asset.json";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={stanLogo.url} alt="" className="h-8 w-8" />
            <div>
              <div className="font-display text-base font-semibold text-primary">Pro Řevnice</div>
              <div className="text-xs text-muted-foreground">Starostové a nezávislí</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Otevřená a odpovědná politika pro Řevnice. Kandidátka STAN do zastupitelstva města.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground">Navigace</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/kandidati" className="text-muted-foreground hover:text-primary">Kandidáti</Link></li>
            <li><Link to="/hodnoceni" className="text-muted-foreground hover:text-primary">Hodnocení 2022–2026</Link></li>
            <li><Link to="/program" className="text-muted-foreground hover:text-primary">Volební program</Link></li>
            <li><Link to="/clanky" className="text-muted-foreground hover:text-primary">Články</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground">Sledujte nás</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://www.facebook.com/prorevnice/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Facebook — Pro Řevnice
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {year} Pro Řevnice · Starostové a nezávislí
        </div>
      </div>
    </footer>
  );
}
