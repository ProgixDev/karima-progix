import type { Metadata } from "next";
import { CahierDocument } from "@/features/devis";

export const metadata: Metadata = { title: "Cahier des charges" };

/** The project’s functional & technical specification document. */
export default function Page() {
  return <CahierDocument />;
}
