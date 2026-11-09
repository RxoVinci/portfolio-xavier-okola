"use client"

import { useState } from "react"
import Link from "next/link"
import { Lien } from "@/interfaces/Lien"

type Props = {
  liens: Lien[]
}

export default function MenuMobile({ liens }: Props) {
  const [ouvert, setOuvert] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
        className="rounded-full border border-trait px-4 py-2 text-sm"
      >
        {ouvert ? "Fermer" : "Menu"}
      </button>
      {ouvert && (
        <ul className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-trait bg-fond px-6 py-4">
          {liens.map((lien) => (
            <li key={lien.href}>
              <Link href={lien.href} onClick={() => setOuvert(false)} className="block py-2 text-lg">
                {lien.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
