import type { Metadata } from "next"
import localFont from "next/font/local"
import Menu from "@/components/menu"
import PiedDePage from "@/components/pied-de-page"
import "./globals.css"

const bricolage = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
})

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
})

export const metadata: Metadata = {
  title: {
    default: "Xavier Okola, développeur web et créatif digital",
    template: "%s | Xavier Okola",
  },
  description:
    "Portfolio de Xavier Okola, étudiant à l'IIM Digital School et fondateur de Prok Agency : sites web, identités de marque et vidéo.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Menu />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6">{children}</main>
        <PiedDePage />
      </body>
    </html>
  )
}
