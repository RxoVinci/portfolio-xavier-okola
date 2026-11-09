import Image from "next/image"
import Link from "next/link"
import Etiquette from "@/components/etiquette"
import { Projet } from "@/interfaces/Projet"

type Props = {
  projet: Projet
}

export default function CarteProjet({ projet }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-trait bg-nuit-claire transition-colors hover:border-electrique">
      <Link href={`/projets/${projet.slug}`} className="overflow-hidden">
        <Image
          src={projet.image}
          alt={`Visuel du projet ${projet.titre}`}
          width={1200}
          height={800}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex justify-between text-xs uppercase tracking-widest text-brume">
          <span>{projet.categorie}</span>
          <span>{projet.annee}</span>
        </p>
        <h3 className="mt-3 text-xl font-semibold">
          <Link href={`/projets/${projet.slug}`} className="hover:text-menthe">
            {projet.titre}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-brume">{projet.resume}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {projet.tags.map((tag) => (
            <li key={tag}>
              <Etiquette texte={tag} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
