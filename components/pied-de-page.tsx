import Link from "next/link"
import { PROFIL } from "@/data/profil"
import { LIENS } from "@/data/navigation"

const ANNEE = new Date().getFullYear()

export default function PiedDePage() {
  return (
    <footer className="mt-24 border-t border-trait">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">
            {PROFIL.prenom} {PROFIL.nom}
          </p>
          <p className="mt-2 text-sm text-brume">
            {PROFIL.metier}, {PROFIL.ville}.
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-sm text-brume">
          {LIENS.map((lien) => (
            <li key={lien.href}>
              <Link href={lien.href} className="hover:text-creme">
                {lien.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 text-sm text-brume">
          {PROFIL.reseaux.map((reseau) => (
            <li key={reseau.href}>
              <a href={reseau.href} target="_blank" rel="noreferrer" className="hover:text-creme">
                {reseau.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-6 pb-8 text-xs text-brume">
        © {ANNEE} {PROFIL.prenom} {PROFIL.nom}. Site réalisé avec Next.js et TypeScript.
      </p>
    </footer>
  )
}
