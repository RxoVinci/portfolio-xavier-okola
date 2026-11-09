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
    "Étudiant à l'IIM Digital School, je code des sites, je construis des marques et je monte des vidéos. J'ai commencé à 16 ans avec un média rap, aujourd'hui je lance ma propre agence, Prok Agency.",
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
