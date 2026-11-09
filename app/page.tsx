import Hero from "@/components/hero"
import Section from "@/components/section"
import ListeProjets from "@/components/liste-projets"
import ChiffreCle from "@/components/chiffre-cle"
import CarteCompetence from "@/components/carte-competence"
import Bouton from "@/components/bouton"
import { getProjetsMisEnAvant } from "@/data/projets"
import { CHIFFRES, PROFIL } from "@/data/profil"
import { COMPETENCES } from "@/data/competences"

export default function Accueil() {
  const projetsMisEnAvant = getProjetsMisEnAvant()

  return (
    <>
      <Hero
        surtitre={`${PROFIL.ecole}, ${PROFIL.ville}`}
        titre="Salut, moi c'est Xavier."
        texte={PROFIL.accroche}
      />

      <div className="grid grid-cols-2 gap-8 pb-16 md:grid-cols-4">
        {CHIFFRES.map((chiffre) => (
          <ChiffreCle key={chiffre[1]} chiffre={chiffre} />
        ))}
      </div>

      <Section titre="Quelques projets" sousTitre="Ceux dont je suis le plus fier en ce moment.">
        <ListeProjets projets={projetsMisEnAvant} />
        <div className="mt-10">
          <Bouton label="Voir tous les projets" href="/projets" variante="contour" />
        </div>
      </Section>

      <Section titre="Mes outils" sousTitre="Ce que j'utilise au quotidien, en cours comme sur mes projets.">
        <div className="grid gap-6 md:grid-cols-2">
          {COMPETENCES.map((competence) => (
            <CarteCompetence key={competence.domaine} competence={competence} />
          ))}
        </div>
      </Section>
    </>
  )
}
