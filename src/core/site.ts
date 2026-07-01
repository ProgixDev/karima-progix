/**
 * Central site config — the single source for metadata, robots, sitemap, and
 * manifest. Replace name/description and set NEXT_PUBLIC_SITE_URL per app (it
 * drives canonical + Open Graph URLs).
 */
export const site = {
  name: "Progix — Trajeo",
  shortName: "Trajeo",
  description:
    "Devis contractuel Progix : développement de Trajeo — application mobile de mise en relation entre passagers et chauffeurs (mobilité à la demande) : réservation de trajets, géolocalisation et suivi de course, estimation de prix, profils vérifiés et notation, back-office, landing page, API, infrastructure cloud et accompagnement marketing premium jusqu’à la mise en marché.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
} as const;
