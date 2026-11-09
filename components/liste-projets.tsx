import CarteProjet from "@/components/carte-projet"
import { Projet } from "@/interfaces/Projet"

type Props = {
  projets: Projet[]
}

export default function ListeProjets({ projets }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projets.map((projet) => (
        <CarteProjet key={projet.id} projet={projet} />
      ))}
    </div>
  )
}
