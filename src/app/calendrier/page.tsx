import type { Metadata } from "next";
import { CalendrierDocument } from "@/features/devis";

export const metadata: Metadata = { title: "Calendrier" };

/** The delivery calendar / sprint schedule document. */
export default function Page() {
  return <CalendrierDocument />;
}
