import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { BodySections } from "./sections";
import { SignatureSection } from "./signature-section";
import styles from "./devis.module.css";

/**
 * Full "Devis contractuel" document — header, hero cover, the nine content
 * sections (the last being the interactive signature block), and the footer.
 * A Server Component that composes client leaves (header, FAB, signature,
 * scroll-reveal) at the edges.
 */
export function DevisDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader />
      <main className={styles.main}>
        <DownloadFab />
        <Cover />
        <BodySections />
        <SignatureSection />
        <Footer
          heading="Construisons Trajeo"
          text="Un prix fixe, une équipe senior, votre propriété à 100 % et un marketing premium jusqu’au lancement. Il ne reste qu’à signer."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}
