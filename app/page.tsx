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
        titre="Je crée des sites, des marques et des images qui donnent envie."
        texte={PROFIL.accroche}
      />

      <div className="grid grid-cols-2 gap-4 pb-16 md:grid-cols-4">
        {CHIFFRES.map((chiffre) => (
          <ChiffreCle key={chiffre[1]} chiffre={chiffre} />
        ))}
      </div>

      <Section titre="Projets à la une" sousTitre="Trois projets que je mène de A à Z, du design à la mise en ligne.">
        <ListeProjets projets={projetsMisEnAvant} />
        <div className="mt-10">
          <Bouton label="Voir tous les projets" href="/projets" variante="contour" />
        </div>
      </Section>

      <Section titre="Ce que je sais faire" sousTitre="Du code à l'image, j'aime tenir un projet du début à la fin.">
        <div className="grid gap-6 md:grid-cols-2">
          {COMPETENCES.map((competence) => (
            <CarteCompetence key={competence.domaine} competence={competence} />
          ))}
        </div>
      </Section>
    </>
  )
}
