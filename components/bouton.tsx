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
      ? "bg-encre text-fond hover:bg-accent"
      : "border border-encre text-encre hover:bg-encre hover:text-fond"
  const classes = `inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors ${style}`

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
