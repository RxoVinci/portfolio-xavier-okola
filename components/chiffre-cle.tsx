import { Chiffre } from "@/types/Chiffre"

type Props = {
  chiffre: Chiffre
}

export default function ChiffreCle({ chiffre }: Props) {
  const [valeur, libelle] = chiffre

  return (
    <div className="rounded-2xl border border-trait p-6">
      <p className="font-serif text-5xl text-creme">{valeur}</p>
      <p className="mt-2 text-sm text-brume">{libelle}</p>
    </div>
  )
}
