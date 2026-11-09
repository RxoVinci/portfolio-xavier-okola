import Etiquette from "@/components/etiquette"
import { Competence } from "@/interfaces/Competence"

type Props = {
  competence: Competence
}

export default function CarteCompetence({ competence }: Props) {
  return (
    <div className="rounded-md border border-trait bg-carte p-6">
      <h3 className="text-lg font-semibold">{competence.domaine}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {competence.outils.map((outil) => (
          <li key={outil}>
            <Etiquette texte={outil} />
          </li>
        ))}
      </ul>
    </div>
  )
}
