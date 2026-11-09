import Link from "next/link"

type Props = {
  label: string
  href: string
  variante?: "plein" | "contour"
  externe?: boolean
}

export default function Bouton({ label, href, variante = "plein", externe = false }: Props) {
  const style =
    variante === "plein"
      ? "bg-electrique text-creme hover:bg-creme hover:text-nuit"
      : "border border-trait text-creme hover:border-creme"
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${style}`

  if (externe) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {label} ↗
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  )
}
