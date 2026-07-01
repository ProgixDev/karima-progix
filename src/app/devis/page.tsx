import type { Metadata } from "next";
import { DevisDocument } from "@/features/devis";

export const metadata: Metadata = { title: "Devis contractuel" };

/** The password-gated “Devis contractuel” document. */
export default function Page() {
  return <DevisDocument />;
}
