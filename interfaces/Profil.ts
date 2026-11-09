import { Lien } from "@/interfaces/Lien"

export interface Profil {
  prenom: string
  nom: string
  metier: string
  ecole: string
  ville: string
  accroche: string
  reseaux: Lien[]
  email?: string
}
