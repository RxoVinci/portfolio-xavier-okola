import type { ReactNode } from "react"

type Props = {
  titre: string
  sousTitre?: string
  children: ReactNode
}

export default function Section({ titre, sousTitre, children }: Props) {
  return (
    <section className="border-t border-trait py-16">
      <div className="mb-10 flex flex-col gap-2">
        <h2 className="font-serif text-4xl">{titre}</h2>
        {sousTitre ? <p className="text-brume">{sousTitre}</p> : null}
      </div>
      {children}
    </section>
  )
}
