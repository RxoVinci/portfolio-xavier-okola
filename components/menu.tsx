import Link from "next/link"
import MenuMobile from "@/components/menu-mobile"
import { LIENS } from "@/data/navigation"

export default function Menu() {
  return (
    <header className="sticky top-0 z-20 border-b border-trait bg-fond/85 backdrop-blur-sm">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl">
          Xavier Okola<span className="text-accent">.</span>
        </Link>
        <ul className="hidden gap-8 text-sm text-gris md:flex">
          {LIENS.map((lien) => (
            <li key={lien.href}>
              <Link href={lien.href} className="transition-colors hover:text-accent">
                {lien.label}
              </Link>
            </li>
          ))}
        </ul>
        <MenuMobile liens={LIENS} />
      </nav>
    </header>
  )
}
