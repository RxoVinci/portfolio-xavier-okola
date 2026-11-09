import { Experience } from "@/interfaces/Experience"

type Props = {
  experience: Experience
}

export default function LigneParcours({ experience }: Props) {
  return (
    <li className="grid gap-2 border-t border-trait py-6 md:grid-cols-[180px_1fr]">
      <p className="text-sm text-menthe">{experience.periode}</p>
      <div>
        <h3 className="text-lg font-semibold">{experience.poste}</h3>
        <p className="text-sm text-creme/80">{experience.structure}</p>
        <p className="mt-2 text-sm text-brume">{experience.description}</p>
      </div>
    </li>
  )
}
