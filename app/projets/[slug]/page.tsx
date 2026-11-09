import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Bouton from "@/components/bouton"
import Etiquette from "@/components/etiquette"
import { PROJETS, getProjet, getProjetSuivant } from "@/data/projets"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams(): { slug: string }[] {
  return PROJETS.map((projet) => ({ slug: projet.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const projet = getProjet(slug)

  if (!projet) {
    return { title: "Projet introuvable" }
  }

  return { title: projet.titre, description: projet.resume }
}

export default async function PageProjet({ params }: Props) {
  const { slug } = await params
  const projet = getProjet(slug)

  if (!projet) {
    notFound()
  }

  const suivant = getProjetSuivant(projet.slug)

  return (
    <article className="py-12">
      <Link href="/projets" className="text-sm text-brume hover:text-creme">
        ← Tous les projets
      </Link>

      <header className="mt-8">
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm uppercase tracking-widest text-menthe">
          <span>{projet.categorie}</span>
          <span>{projet.annee}</span>
          <span>{projet.statut}</span>
        </p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">{projet.titre}</h1>
        <p className="mt-4 max-w-2xl text-lg text-brume">{projet.resume}</p>
      </header>

      <Image
        src={projet.image}
        alt={`Visuel du projet ${projet.titre}`}
        width={1200}
        height={800}
        loading="eager"
        sizes="(min-width: 1152px) 1104px, 100vw"
        className="mt-10 aspect-[3/2] w-full rounded-2xl border border-trait object-cover"
      />

      <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-serif text-3xl">Le projet</h2>
          <p className="mt-4 leading-relaxed text-creme/85">{projet.description}</p>

          <h2 className="mt-10 font-serif text-3xl">Ce que j&apos;ai fait</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {projet.realisations.map((realisation) => (
              <li key={realisation} className="flex gap-3 text-creme/85">
                <span className="text-menthe">→</span>
                {realisation}
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex flex-col gap-6 rounded-2xl border border-trait bg-nuit-claire p-6 self-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-brume">Mon rôle</p>
            <p className="mt-1">{projet.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brume">Outils</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {projet.tags.map((tag) => (
                <li key={tag}>
                  <Etiquette texte={tag} />
                </li>
              ))}
            </ul>
          </div>
          {projet.lien && <Bouton label="Voir le site" href={projet.lien} externe />}
        </aside>
      </div>

      <Link
        href={`/projets/${suivant.slug}`}
        className="mt-16 flex items-center justify-between rounded-2xl border border-trait p-8 transition-colors hover:border-electrique"
      >
        <span>
          <span className="block text-xs uppercase tracking-widest text-brume">Projet suivant</span>
          <span className="mt-2 block font-serif text-3xl">{suivant.titre}</span>
        </span>
        <span className="text-3xl text-menthe">→</span>
      </Link>
    </article>
  )
}
