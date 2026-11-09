import { Chiffre } from "@/types/Chiffre"

type Props = {
  chiffre: Chiffre
}

export default function ChiffreCle({ chiffre }: Props) {
  const [valeur, libelle] = chiffre

  return (
    <div className="border-l border-trait pl-5">
      <p className="font-serif text-5xl text-accent">{valeur}</p>
      <p className="mt-1 text-sm text-gris">{libelle}</p>
    </div>
  )
}
