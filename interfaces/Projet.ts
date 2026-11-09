import { Categorie } from "@/types/Categorie"
import { Statut } from "@/types/Statut"

export interface Projet {
  id: number
  slug: string
  titre: string
  resume: string
  description: string
  image: string
  annee: number
  tags: string[]
  categorie: Categorie
  statut: Statut
  role: string
  realisations: string[]
  lien?: string
  misEnAvant: boolean
}
