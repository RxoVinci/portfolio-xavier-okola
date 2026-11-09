import Link from "next/link"
import MenuMobile from "@/components/menu-mobile"
import { LIENS } from "@/data/navigation"

export default function Menu() {
  return (
    <header className="sticky top-0 z-20 border-b border-trait bg-nuit/85 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-electrique font-serif text-lg">
            XO
          </span>
          <span className="font-semibold tracking-tight">Xavier Okola</span>
        </Link>
        <ul className="hidden gap-8 text-sm text-brume md:flex">
          {LIENS.map((lien) => (
            <li key={lien.href}>
              <Link href={lien.href} className="transition-colors hover:text-creme">
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
