import Bouton from "@/components/bouton"

type Props = {
  surtitre: string
  titre: string
  texte: string
}

export default function Hero({ surtitre, titre, texte }: Props) {
  return (
    <div className="grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-end md:py-28">
      <div>
        <p className="text-sm text-gris">{surtitre}</p>
        <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">{titre}</h1>
      </div>
      <div>
        <p className="text-lg leading-relaxed">{texte}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Bouton label="Voir mes projets" href="/projets" />
          <Bouton label="Mon parcours" href="/a-propos" variante="contour" />
        </div>
      </div>
    </div>
  )
}
