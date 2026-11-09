import { Profil } from "@/interfaces/Profil"
import { Chiffre } from "@/types/Chiffre"
import { PROJETS, getPeriode } from "@/data/projets"

export const PROFIL: Profil = {
  prenom: "Xavier",
  nom: "Okola",
  metier: "Développeur web et créatif digital",
  ecole: "IIM Digital School",
  ville: "Paris",
  accroche:
    "Étudiant en deuxième année à l'IIM Digital School et fondateur de Prok Agency. Je conçois des sites, des marques et des contenus, du premier croquis jusqu'à la mise en ligne.",
  reseaux: [
    { label: "GitHub", href: "https://github.com/rxoduvinci" },
    { label: "Prok Agency", href: "https://www.linkedin.com/company/agencyprok" },
    { label: "Instagram", href: "https://www.instagram.com/agency_prok" },
    { label: "Linktree", href: "https://linktr.ee/prokagency" },
  ],
}

const [debut, fin] = getPeriode()

export const CHIFFRES: Chiffre[] = [
  [String(PROJETS.length), "projets présentés"],
  [String(PROJETS.filter((projet) => projet.statut === "En ligne").length), "sites e-commerce en ligne"],
  [String(fin - debut), "ans à créer du contenu"],
  ["3", "métiers : web, marque, vidéo"],
]
