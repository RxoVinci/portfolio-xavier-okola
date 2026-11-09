import type { Metadata } from "next"
import TitrePage from "@/components/titre-page"
import Section from "@/components/section"
import CarteCompetence from "@/components/carte-competence"
import LigneParcours from "@/components/ligne-parcours"
import Accordeon from "@/components/accordeon"
import Bouton from "@/components/bouton"
import { PROFIL } from "@/data/profil"
import { PARCOURS } from "@/data/parcours"
import { COMPETENCES, LANGUES } from "@/data/competences"
import { QUESTIONS } from "@/data/questions"

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours, compétences et expériences de Xavier Okola.",
}

export default function APropos() {
  return (
    <>
      <TitrePage surtitre="À propos" titre={`${PROFIL.prenom} ${PROFIL.nom}`} texte={PROFIL.accroche} />

      <div className="grid gap-10 pb-16 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-creme/85">
          J&apos;ai commencé par créer du contenu : à 16 ans, je lançais mon propre média rap. J&apos;y ai appris à
          raconter une histoire, à construire une audience et à travailler avec des artistes.
        </p>
        <p className="text-lg leading-relaxed text-creme/85">
          Aujourd&apos;hui, je relie ces deux mondes : le code et la création. À l&apos;IIM, j&apos;apprends le
          développement, le design et l&apos;audiovisuel, et avec Prok Agency je mets tout ça au service de vrais
          projets.
        </p>
      </div>

      <Section titre="Compétences">
        <div className="grid gap-6 md:grid-cols-2">
          {COMPETENCES.map((competence) => (
            <CarteCompetence key={competence.domaine} competence={competence} />
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-brume">
          {LANGUES.map((langue) => (
            <li key={langue}>{langue}</li>
          ))}
        </ul>
      </Section>

      <Section titre="Parcours">
        <ul>
          {PARCOURS.map((experience) => (
            <LigneParcours key={`${experience.periode}-${experience.structure}`} experience={experience} />
          ))}
        </ul>
      </Section>

      <Section titre="Questions fréquentes">
        <div className="border-t border-trait">
          {QUESTIONS.map((item) => (
            <Accordeon key={item.question} question={item.question}>
              {item.reponse}
            </Accordeon>
          ))}
        </div>
        <div className="mt-10">
          <Bouton label="Voir mes projets" href="/projets" />
        </div>
      </Section>
    </>
  )
}
