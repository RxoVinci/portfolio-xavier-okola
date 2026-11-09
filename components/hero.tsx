import Bouton from "@/components/bouton"

type Props = {
  surtitre: string
  titre: string
  texte: string
}

export default function Hero({ surtitre, titre, texte }: Props) {
  return (
    <div className="py-20 md:py-28">
      <p className="flex items-center gap-2 text-sm text-menthe">
        <span className="h-2 w-2 rounded-full bg-menthe" />
        {surtitre}
      </p>
      <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">{titre}</h1>
      <p className="mt-6 max-w-2xl text-lg text-brume">{texte}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Bouton label="Voir mes projets" href="/projets" />
        <Bouton label="En savoir plus" href="/a-propos" variante="contour" />
      </div>
    </div>
  )
}
