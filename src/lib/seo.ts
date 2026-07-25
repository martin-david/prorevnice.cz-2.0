/** Base URL of the deployed site, used to build absolute canonical/OG URLs. */
export const SITE_URL = "https://prorevnice.cz";

/** Builds an absolute URL for a given site path (e.g. "/kandidati/foo"). */
export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
