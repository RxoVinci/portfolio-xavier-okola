type Props = {
  texte: string
}

export default function Etiquette({ texte }: Props) {
  return <span className="rounded-full border border-trait px-3 py-1 text-xs text-brume">{texte}</span>
}
