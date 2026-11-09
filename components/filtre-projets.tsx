"use client"

import { useState } from "react"
import ListeProjets from "@/components/liste-projets"
import { trierProjets } from "@/data/projets"
import { Projet } from "@/interfaces/Projet"
import { Categorie } from "@/types/Categorie"
import { Tri } from "@/types/Tri"

type Filtre = Categorie | "Tous"

type Props = {
  projets: Projet[]
  categories: Categorie[]
}

export default function FiltreProjets({ projets, categories }: Props) {
  const [filtre, setFiltre] = useState<Filtre>("Tous")
  const [tri, setTri] = useState<Tri>("recent")

  const filtres: Filtre[] = ["Tous", ...categories]
  const projetsFiltres = filtre === "Tous" ? projets : projets.filter((projet) => projet.categorie === filtre)
  const projetsAffiches = trierProjets(projetsFiltres, tri)

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-2">
          {filtres.map((categorie) => (
            <li key={categorie}>
              <button
                onClick={() => setFiltre(categorie)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  filtre === categorie ? "bg-creme text-nuit" : "border border-trait text-brume hover:text-creme"
                }`}
              >
                {categorie}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setTri(tri === "recent" ? "ancien" : "recent")}
          className="self-start rounded-full border border-trait px-4 py-2 text-sm text-brume hover:text-creme"
        >
          {tri === "recent" ? "Du plus récent au plus ancien" : "Du plus ancien au plus récent"}
        </button>
      </div>
      <p className="mb-6 text-sm text-brume">
        {projetsAffiches.length} {projetsAffiches.length > 1 ? "projets" : "projet"}
      </p>
      <ListeProjets projets={projetsAffiches} />
    </div>
  )
}
