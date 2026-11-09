type Props = {
  surtitre: string
  titre: string
  texte: string
}

export default function TitrePage({ surtitre, titre, texte }: Props) {
  return (
    <div className="py-16 md:py-20">
      <p className="text-sm uppercase tracking-widest text-menthe">{surtitre}</p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl">{titre}</h1>
      <p className="mt-4 max-w-2xl text-lg text-brume">{texte}</p>
    </div>
  )
}
