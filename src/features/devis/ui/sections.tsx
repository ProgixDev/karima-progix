import { cn } from "@/lib/utils";
import { BadgeHeading, InfoBox, Pill, SectionHeader, Strong, SubHeading } from "./primitives";
import { incl1, incl2, incl3, investment, payments, phases, trust } from "./content";
import styles from "./devis.module.css";

/** A styled reference to another document in the set. */
function DocRef({ children }: { children: React.ReactNode }) {
  return <span className={styles.link}>{children}</span>;
}

function CheckList({ items }: { items: ReadonlyArray<{ b: string; t: string }> }) {
  return (
    <div className={styles.checkGrid}>
      {items.map((i) => (
        <div key={i.b} className={styles.check}>
          <span className={styles.checkMark} aria-hidden="true">
            ✓
          </span>
          <span>
            <Strong>{i.b}</Strong>
            {i.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Guaranteed acquisition objectives (obligation de résultat). */
const objectives = [
  {
    tag: "UTILISATEURS",
    when: "Coût d’acquisition",
    desc: "moyen par utilisateur acquis",
    amount: "≤ 0,25 €",
  },
  {
    tag: "CHAUFFEURS",
    when: "Coût d’acquisition",
    desc: "moyen par chauffeur inscrit",
    amount: "≤ 0,20 €",
  },
  {
    tag: "CONVERSION",
    when: "Utilisateurs actifs",
    desc: "téléchargement → utilisateur actif",
    amount: "≥ 20 %",
  },
] as const;

/** Illustrative delay-compensation rows: retard → part du délai → montant. */
const delayRows = [
  { d: "5 jours", frac: "1 / 18", amount: "311 €" },
  { d: "15 jours", frac: "1 / 6", amount: "933 €" },
  { d: "30 jours", frac: "1 / 3", amount: "1 867 €" },
] as const;

/** Sections 01–08 of the devis (section 09, the signature block, is separate). */
export function BodySections() {
  return (
    <>
      {/* 01 — OBJET */}
      <section id="s1" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="01 — OBJET" title="Objet du devis" />
          <p className={styles.pLead}>
            Le présent devis contractuel (le « Devis ») définit les modalités selon lesquelles{" "}
            <Strong>Progix Inc.</Strong> (le « Prestataire ») s’engage à concevoir, développer et
            livrer <Strong>Trajeo</Strong> (l’« Application »), une plateforme mobile de mise en
            relation entre <Strong>passagers et chauffeurs</Strong>, pour le compte du client
            signataire (le « Client »).
          </p>
          <p className={styles.p}>
            Il précise les prestations incluses, l’investissement et son échéancier,
            l’accompagnement marketing premium et les objectifs garantis, ainsi que les engagements
            respectifs des Parties. Le périmètre fonctionnel et technique détaillé fait l’objet du{" "}
            <DocRef>cahier des charges</DocRef> associé, qui complète le présent Devis. La signature
            du Devis vaut acceptation de l’ensemble de ses termes et engagement ferme.
          </p>
          <div className={styles.trust}>
            {trust.map((t) => (
              <div key={t.l} className={styles.trustCell}>
                <div className={styles.trustNum}>{t.n}</div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Un partenaire, pas un simple prestataire">
            Un freelance exécute une commande. Une ESN facture 15 000 à 20 000 €. Progix se situe
            entre les deux : l’expertise d’une équipe senior et un accompagnement business complet,
            au prix d’un lancement.
          </InfoBox>
        </div>
      </section>

      {/* 02 — PRESTATIONS */}
      <section id="s2" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="02 — PRESTATIONS"
            title="Tout ce qui est inclus"
            lead="Une prestation complète, de la conception jusqu’à la mise en marché et au lancement commercial. Rien à gérer en plus."
          />
          <SubHeading first>Conception & développement</SubHeading>
          <CheckList items={incl1} />
          <SubHeading>API, infrastructure & mise en ligne</SubHeading>
          <CheckList items={incl2} />
          <SubHeading>Lancement & accompagnement premium</SubHeading>
          <CheckList items={incl3} />
        </div>
      </section>

      {/* 03 — INVESTISSEMENT */}
      <section id="s3" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="03 — INVESTISSEMENT"
            title="Votre investissement"
            lead="Décomposition transparente, poste par poste. Un forfait fixe de 5 600 €, réglé mensuellement, tout compris — accompagnement marketing premium inclus."
          />
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Composante de la prestation</th>
                  <th className={styles.thRight}>Montant</th>
                </tr>
              </thead>
              <tbody>
                {investment.map((row, idx) => (
                  <tr key={idx} className={row.alt ? styles.tableAlt : undefined}>
                    <td>
                      {"strong" in row && row.strong ? (
                        <>
                          <Strong>{row.strong}</Strong>
                          {row.text}
                        </>
                      ) : (
                        row.text
                      )}
                    </td>
                    <td className={styles.tableNum}>{row.amount}</td>
                  </tr>
                ))}
                <tr className={styles.tableTotal}>
                  <td>
                    <strong>Total — forfait, tout compris</strong>
                  </td>
                  <td className={styles.tableTotalAmount}>5 600 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cn(styles.totalPanel, styles.lift)}>
            <div className={styles.totalPanelInner}>
              <span className={styles.totalArrow} aria-hidden="true">
                —
              </span>
              <div className={styles.totalEyebrow}>Montant total · forfait fixe</div>
              <div className={styles.totalValue}>5 600 €</div>
              <div className={styles.totalNote}>
                Soit <Strong>933 € / mois pendant 6 mois</Strong>. Prix ferme, marketing premium
                inclus. Aucun coût caché.
              </div>
            </div>
          </div>
          <InfoBox icon="€" title="Aucune taxe applicable">
            Progix étant une entreprise <Strong>canadienne</Strong> et le Client étant établi en{" "}
            <Strong>France</Strong>, la prestation n’est pas assujettie à la TVA ni à aucune taxe de
            vente (service transfrontalier — autoliquidation par le preneur le cas échéant).{" "}
            <Strong>Le montant de 5 600 € correspond au montant net à payer.</Strong>
          </InfoBox>
          <SubHeading>Échéancier de paiement — mensuel</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {payments.map((p) => (
              <div key={p.pct} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.pct}</div>
                <div className={styles.payWhen}>{p.when}</div>
                <div className={styles.payDesc}>{p.desc}</div>
                <div className={styles.payAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", margin: 0, lineHeight: 1.6 }}>
            Paiement mensuel d’environ <Strong>933 € sur 6 mois</Strong> par <Strong>Stripe</Strong>{" "}
            ou <Strong>virement bancaire</Strong>, en euros. Aucun travail de développement ne
            débute avant réception du premier versement. La monétisation de l’Application repose sur
            une <Strong>commission ou un abonnement</Strong>, dont les modalités seront retenues
            avec le Client.
          </p>
        </div>
      </section>

      {/* 04 — MARKETING PREMIUM */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — MARKETING PREMIUM"
            title="Accompagnement marketing premium — inclus"
            lead="Une prise en charge complète du lancement. Progix réalise l’intégralité des campagnes : le Client n’a aucune campagne à gérer lui-même."
          />
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  1
                </span>
                Stratégie & positionnement
              </h3>
              <p className={styles.cardText}>
                Définition de la <Strong>stratégie marketing</Strong> et du positionnement de
                l’Application sur son marché.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  2
                </span>
                Création complète
              </h3>
              <p className={styles.cardText}>
                <Strong>Vidéos UGC</Strong>, écriture des scripts, créatifs publicitaires et visuels
                — entièrement produits par Progix.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  3
                </span>
                Gestion des campagnes
              </h3>
              <p className={styles.cardText}>
                Paramétrage et gestion des campagnes <Strong>Meta Ads</Strong>,{" "}
                <Strong>Google Ads</Strong> et <Strong>Apple Search Ads</Strong>.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  4
                </span>
                Optimisation & reporting
              </h3>
              <p className={styles.cardText}>
                <Strong>Optimisation quotidienne</Strong>, analyse des KPIs, réunion hebdomadaire et
                reporting continu.
              </p>
            </div>
          </div>
          <SubHeading>Objectifs garantis — obligation de résultat</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {objectives.map((o) => (
              <div key={o.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{o.tag}</div>
                <div className={styles.payWhen}>{o.when}</div>
                <div className={styles.payDesc}>{o.desc}</div>
                <div className={styles.payAmount}>{o.amount}</div>
              </div>
            ))}
          </div>
          <InfoBox variant="ok" icon="★" title="Garantie de performance">
            Sous réserve que le Client respecte les recommandations et valide les éléments
            nécessaires, Progix prend une <Strong>obligation de résultat</Strong>. Si les objectifs
            contractuels ne sont pas atteints, Progix{" "}
            <Strong>poursuit les campagnes à ses frais</Strong> et prend en charge les dépenses
            supplémentaires jusqu’à atteindre un coût d’acquisition utilisateur ≤ 0,25 €, un coût
            d’acquisition chauffeur ≤ 0,20 € et un taux de conversion ≥ 20 %.{" "}
            <Strong>
              Le Client n’a aucun coût publicitaire supplémentaire lié à l’atteinte de ces
              objectifs.
            </Strong>
          </InfoBox>
          <p className={styles.note}>
            Le Client prévoit un <Strong>budget publicitaire minimum de 1 000 €</Strong>, utilisé
            pour les campagnes publicitaires. Ce budget média est <Strong>distinct</Strong> du
            montant du présent devis.
          </p>
        </div>
      </section>

      {/* 05 — APRÈS-LIVRAISON */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="05 — APRÈS-LIVRAISON" title="Support, maintenance & propriété" />
          <InfoBox variant="ok" icon="★" title="Vous êtes propriétaire à 100 %">
            Le Client est propriétaire de l’intégralité de l’Application. La propriété
            intellectuelle est <Strong>transférée progressivement à mesure des paiements</Strong> :
            chaque mensualité réglée transfère la portion correspondante des travaux. À la livraison
            finale, une documentation technique complète est remise — l’Application peut être
            reprise par tout développeur de votre choix. <Strong>Aucun verrouillage.</Strong>
          </InfoBox>
          <SubHeading>Support inclus — 90 jours</SubHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Correction des bugs et ajustements mineurs (hors nouvelles fonctionnalités).
            </li>
            <li className={styles.arrowItem}>
              Temps de réponse sous <Strong>24 heures</Strong> + point de suivi hebdomadaire.
            </li>
          </ul>
          <SubHeading>
            Au-delà des 90 jours <Pill>Optionnel</Pill>
          </SubHeading>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  ♲
                </span>
                Maintenance mensuelle
              </h3>
              <p className={styles.cardText}>
                <Strong>90 € / mois</Strong> — support continu, correction de bugs et petites
                corrections, disponibilité étendue grâce à l’équipe sur plusieurs fuseaux horaires.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  +
                </span>
                Évolutions & nouvelles fonctionnalités
              </h3>
              <p className={styles.cardText}>
                <Strong>80 $ / heure</Strong> — pour toute évolution postérieure de l’Application
                (paiement en ligne intégré, modules spécifiques, fonctionnalités additionnelles…).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — DÉLAI */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="06 — DÉLAI"
            title="Délai, production & compensation"
            lead="Projet livré sur 90 jours à compter de la date de démarrage : 60 jours de développement puis 30 jours de production (publication et validation sur les stores). Réalisation itérative, avec validation du Client à chaque étape clé."
          />
          <div className={styles.grid3} style={{ margin: "16px 0" }}>
            {phases.map((p) => (
              <div key={p.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.tag}</div>
                <div className={styles.payWhen}>{p.title}</div>
                <div className={styles.phaseDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="La livraison au sens du contrat">
            La livraison est considérée comme{" "}
            <Strong>
              terminée uniquement lorsque l’Application est validée et disponible sur les stores
            </Strong>
            . La phase de production (30 j) couvre la publication sur l’<Strong>App Store</Strong>{" "}
            et le <Strong>Google Play Store</Strong>, la gestion des reviews Apple et Google, les
            correctifs demandés et la{" "}
            <Strong>période de test obligatoire de Google Play (14 jours)</Strong>, corrections
            éventuelles comprises.
          </InfoBox>
          <BadgeHeading badge="§">Compensation de retard (proportionnelle)</BadgeHeading>
          <p className={styles.p}>
            Si le délai contractuel de <Strong>90 jours</Strong> est dépassé pour une raison
            imputable au Prestataire, une compensation financière <Strong>proportionnelle</Strong>{" "}
            est accordée au Client, calculée sur le montant du devis :{" "}
            <Strong>(jours de retard ÷ 90) × 5 600 €</Strong>. Ainsi, 15 jours de retard donnent
            droit à 15/90 du montant, soit une compensation de 933 €.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Retard imputable à Progix</th>
                  <th className={styles.thRight}>Part du délai (/90 j)</th>
                  <th className={styles.thRight}>Compensation</th>
                </tr>
              </thead>
              <tbody>
                {delayRows.map((r, idx) => (
                  <tr key={r.d} className={idx % 2 === 1 ? styles.tableAlt : undefined}>
                    <td>{r.d}</td>
                    <td className={styles.tableNum}>{r.frac}</td>
                    <td className={styles.tableNum}>{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            Cette compensation ne s’applique <Strong>pas</Strong> lorsque le retard est causé par :
            Apple, Google, les délais de validation des stores, les demandes de modification du
            Client, ses retards de réponse ou de validation, ou tout autre événement indépendant du
            contrôle de Progix.
          </p>
        </div>
      </section>

      {/* 07 — ENGAGEMENTS */}
      <section id="s7" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="07 — ENGAGEMENTS" title="Engagements du Client" />
          <BadgeHeading badge="A" first>
            Ce que le Client fournit
          </BadgeHeading>
          <p className={styles.p}>
            Pour permettre la tenue du délai, la qualité de la livraison et l’atteinte des objectifs
            garantis, le Client s’engage à :
          </p>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Fournir en temps utile les <Strong>contenus, informations et validations</Strong>{" "}
              nécessaires à l’avancement.
            </li>
            <li className={styles.arrowItem}>
              Créer les comptes <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois) et fournir les accès — Progix
              accompagne la création et publie pour le Client.
            </li>
            <li className={styles.arrowItem}>
              Créer un compte <Strong>Stripe</Strong> et fournir un accès développeur pour les
              paiements le cas échéant.
            </li>
            <li className={styles.arrowItem}>
              Prévoir le <Strong>budget publicitaire minimum</Strong> de 1 000 € pour les campagnes.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Valider les éléments nécessaires</Strong> et respecter les recommandations —
              condition de l’obligation de résultat marketing.
            </li>
          </ul>
          <BadgeHeading badge="B">Retards imputables au Client</BadgeHeading>
          <p className={styles.p}>
            Les retards liés à l’absence de validation, de contenu ou d’accès, ou aux demandes de
            modification du Client, ne sont pas pris en compte dans le calcul de la compensation de
            retard (section 06) et peuvent décaler la date de livraison d’autant.
          </p>
        </div>
      </section>

      {/* 08 — DISPOSITIONS */}
      <section id="s8" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="08 — DISPOSITIONS" title="Dispositions générales" />
          <BadgeHeading badge="1" first>
            Droit applicable & juridiction
          </BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est régi par les lois de la province de Québec et les lois fédérales du
            Canada applicables. Tout litige est soumis à la compétence exclusive des tribunaux de la
            province de Québec, district de Montréal.
          </p>
          <BadgeHeading badge="2">Intégralité de l’entente</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis, complété par le <DocRef>cahier des charges</DocRef> associé, constitue
            l’intégralité de l’entente entre les Parties relativement à son objet et remplace toute
            entente ou communication antérieure.
          </p>
          <BadgeHeading badge="3">Modifications</BadgeHeading>
          <p className={styles.p}>
            Toute modification du présent Devis ou du périmètre convenu doit faire l’objet d’un
            écrit signé par les deux Parties.
          </p>
          <BadgeHeading badge="4">Divisibilité</BadgeHeading>
          <p className={styles.p}>
            Si une disposition du présent Devis est jugée invalide ou inapplicable, les autres
            dispositions demeurent en vigueur et de plein effet.
          </p>
        </div>
      </section>
    </>
  );
}
