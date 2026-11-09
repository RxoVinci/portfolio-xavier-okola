import Bouton from "@/components/bouton"

export default function PageIntrouvable() {
  return (
    <div className="flex flex-col items-start py-28">
      <p className="text-sm uppercase tracking-widest text-vert">Erreur 404</p>
      <h1 className="mt-4 font-serif text-6xl md:text-8xl">Page introuvable</h1>
      <p className="mt-4 max-w-xl text-lg text-gris">
        Cette page n&apos;existe pas ou plus. Tu peux revenir à l&apos;accueil ou parcourir mes projets.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Bouton label="Retour à l'accueil" href="/" />
        <Bouton label="Voir les projets" href="/projets" variante="contour" />
      </div>
    </div>
  )
}
