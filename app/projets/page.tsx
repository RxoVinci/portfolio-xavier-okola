import type { Metadata } from "next"
import TitrePage from "@/components/titre-page"
import FiltreProjets from "@/components/filtre-projets"
import { PROJETS, getCategories } from "@/data/projets"

export const metadata: Metadata = {
  title: "Projets",
  description: "Tous les projets de Xavier Okola : développement web, identité de marque et vidéo.",
}

export default function PageProjets() {
  return (
    <>
      <TitrePage
        surtitre="Projets"
        titre="Ce que j'ai réalisé"
        texte="Sites e-commerce, identités de marque, motion design et reportages. Filtre par catégorie ou change l'ordre pour explorer."
      />
      <FiltreProjets projets={PROJETS} categories={getCategories()} />
    </>
  )
}
