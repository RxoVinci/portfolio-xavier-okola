"use client"

import { useState, type ReactNode } from "react"

type Props = {
  question: string
  children: ReactNode
}

export default function Accordeon({ question, children }: Props) {
  const [ouvert, setOuvert] = useState(false)

  return (
    <div className="border-b border-trait">
      <button
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
        className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg"
      >
        {question}
        <span className={`text-2xl text-menthe transition-transform ${ouvert ? "rotate-45" : ""}`}>+</span>
      </button>
      {ouvert && <div className="pb-6 text-brume">{children}</div>}
    </div>
  )
}
