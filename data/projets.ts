import { Projet } from "@/interfaces/Projet"
import { Categorie } from "@/types/Categorie"
import { Tri } from "@/types/Tri"

export const PROJETS: Projet[] = [
  {
    id: 1,
    slug: "plusera",
    titre: "Plusera",
    resume: "Boutique en ligne d'ebooks avec paiement sécurisé et envoi automatique par email.",
    description:
      "Plusera est ma boutique d'ebooks sur le business en ligne et la productivité. J'ai conçu le site de A à Z, de la page d'accueil au tunnel d'achat, puis je l'ai mis en ligne sur mon propre nom de domaine. Quand un client paie, il reçoit automatiquement son ebook par email.",
    image: "/projets/plusera.jpg",
    annee: 2026,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Resend", "Vercel"],
    categorie: "Développement web",
    statut: "En ligne",
    role: "Conception, développement et mise en ligne",
    realisations: [
      "Catalogue, fiches produits et panier",
      "Paiement en ligne avec Stripe et webhook de confirmation",
      "Envoi automatique des ebooks par email avec Resend",
      "Nom de domaine plusera.store branché sur Vercel",
    ],
    lien: "https://plusera.store",
    misEnAvant: true,
  },
  {
    id: 2,
    slug: "xf-store",
    titre: "XF Store",
    resume: "E-commerce de streetwear et de sneakers customisées, avec un logo 3D interactif.",
    description:
      "XF Store est une marque de streetwear et de sneakers customisées. Le site mélange une direction artistique sombre et sable, un logo en 3D que l'on peut faire tourner et une page d'attente avec compte à rebours avant le premier drop.",
    image: "/projets/xf-store.jpg",
    annee: 2026,
    tags: ["Next.js", "TypeScript", "React Three Fiber", "Stripe", "Vercel"],
    categorie: "Développement web",
    statut: "En ligne",
    role: "Direction artistique et développement",
    realisations: [
      "Catalogue produits et paiement avec Stripe Checkout",
      "Logo 3D interactif sur la page d'accueil",
      "Page d'attente avec compte à rebours",
      "Micro-interactions au survol sur tout le site",
    ],
    lien: "https://xf-store.vercel.app",
    misEnAvant: true,
  },
  {
    id: 3,
    slug: "prok-agency",
    titre: "Prok Agency",
    resume: "Mon agence de marketing et de communication : identité, lancement sur les réseaux et site vitrine.",
    description:
      "Prok Agency est l'agence de marketing et de communication que je développe en parallèle de mes études. J'ai créé son identité visuelle, préparé son lancement sur les réseaux sociaux et défini son offre de services pour les entreprises et les jeunes talents.",
    image: "/projets/prok-agency.jpg",
    annee: 2026,
    tags: ["Branding", "Figma", "Canva", "Réseaux sociaux", "Next.js"],
    categorie: "Identité & marketing",
    statut: "En cours",
    role: "Fondateur",
    realisations: [
      "Logo PROK et charte graphique bleu électrique et navy",
      "Teaser de lancement sur Instagram, TikTok, YouTube et LinkedIn",
      "Offre de services : rebranding, sites web, campagnes, automatisation",
      "Site vitrine en Next.js en cours de construction",
    ],
    misEnAvant: true,
  },
  {
    id: 4,
    slug: "postulwork",
    titre: "PostulWork",
    resume: "Application qui aide les jeunes actifs à postuler plus vite grâce à l'IA.",
    description:
      "PostulWork part d'un constat simple : chercher un job prend un temps fou. L'application lit le CV, trouve des offres adaptées et rédige des candidatures personnalisées. Elle vise les 19-21 ans, avec une interface sobre façon cockpit.",
    image: "/projets/postulwork.jpg",
    annee: 2026,
    tags: ["Node.js", "Express", "IA", "API France Travail"],
    categorie: "Développement web",
    statut: "En cours",
    role: "Conception et développement",
    realisations: [
      "Lecture du CV et rédaction de lettres de motivation par IA",
      "Recherche d'offres avec l'API officielle de France Travail",
      "Serveur Node.js avec Express",
      "Formules d'abonnement pensées pour un public étudiant",
    ],
    misEnAvant: false,
  },
  {
    id: 5,
    slug: "refonte-site-iim",
    titre: "Refonte du site de l'IIM",
    resume: "Refonte du site de l'IIM Digital School sous forme de thème WordPress.",
    description:
      "Projet d'intégration web : refaire le site de mon école sous forme de thème WordPress à blocs, puis réorganiser tout le style en SASS avec une architecture claire en plusieurs dossiers.",
    image: "/projets/refonte-site-iim.jpg",
    annee: 2026,
    tags: ["WordPress", "Thème à blocs", "SASS", "Architecture 7-1"],
    categorie: "Développement web",
    statut: "Projet scolaire",
    role: "Intégration et développement du thème",
    realisations: [
      "Thème WordPress FSE construit avec des blocs",
      "Style converti en SASS avec une architecture 7-1",
      "Pages responsives fidèles à la maquette",
    ],
    misEnAvant: false,
  },
  {
    id: 6,
    slug: "collection-cartes-pokemon",
    titre: "Collection de cartes Pokémon",
    resume: "Site de collection de cartes relié à une API et à une base de données.",
    description:
      "Site réalisé sans framework pour mon projet d'axe : les cartes sont récupérées depuis la PokéAPI, et chaque utilisateur peut enregistrer sa collection dans une base de données MySQL.",
    image: "/projets/collection-cartes-pokemon.jpg",
    annee: 2026,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PokéAPI"],
    categorie: "Développement web",
    statut: "Projet scolaire",
    role: "Développement front et back",
    realisations: [
      "Appels asynchrones à la PokéAPI",
      "Comptes utilisateurs et collection enregistrée en PHP et MySQL",
      "Démonstration vidéo et soutenance devant un jury",
    ],
    misEnAvant: false,
  },
  {
    id: 7,
    slug: "opulence",
    titre: "OPULENCE",
    resume: "Motion design de 20 secondes pour un album fictif, sur une direction artistique noir et or.",
    description:
      "Sujet : animer l'univers d'un artiste. J'ai imaginé OPULENCE, un album fictif autour du rappeur Gunna, avec un message central : rien n'est impossible. Du moodboard au storyboard, puis l'animation sur After Effects.",
    image: "/projets/opulence.jpg",
    annee: 2026,
    tags: ["After Effects", "Motion design", "Storyboard", "Direction artistique"],
    categorie: "Motion & vidéo",
    statut: "Projet scolaire",
    role: "Concept, direction artistique et animation",
    realisations: [
      "Moodboard et document de recherche graphique",
      "Storyboard en six scènes",
      "Palette noir et or, typographies Bebas Neue et Helvetica",
      "Animation de typographie et reveal de la pochette",
    ],
    misEnAvant: false,
  },
  {
    id: 8,
    slug: "agri-assistant",
    titre: "Agri Assistant",
    resume: "Lancement sur les réseaux sociaux d'une application mobile pour les agriculteurs.",
    description:
      "Mission freelance pour une entreprise agri-tech française qui lance l'application Agri Assistant. J'ai construit sa présence sur Facebook, Instagram, X et LinkedIn, avec un slogan clair : moins de paperasse, plus de terrain.",
    image: "/projets/agri-assistant.jpg",
    annee: 2026,
    tags: ["Social media", "Identité visuelle", "Python", "Carrousels"],
    categorie: "Identité & marketing",
    statut: "Projet client",
    role: "Freelance social media et identité",
    realisations: [
      "Bios, bannières et identité sur chaque réseau",
      "Bannières générées automatiquement avec Python",
      "Carrousels et textes de lancement",
      "Mascotte AgriBot intégrée à la communication",
    ],
    misEnAvant: false,
  },
  {
    id: 9,
    slug: "reportage-vivatech",
    titre: "Reportage VivaTech",
    resume: "Reportage vidéo de deux minutes tourné au salon VivaTech avec ma promo.",
    description:
      "Lors d'une sortie de classe au salon VivaTech, j'ai tourné et monté un reportage de deux minutes : voix off, interviews de dirigeants et avis face caméra, puis un post LinkedIn pour le diffuser.",
    image: "/projets/reportage-vivatech.jpg",
    annee: 2026,
    tags: ["Premiere Pro", "Interview", "Montage", "LinkedIn"],
    categorie: "Motion & vidéo",
    statut: "Projet scolaire",
    role: "Tournage, interviews et montage",
    realisations: [
      "Interviews de dirigeants d'Innov8 et de GENCI",
      "Voix off et montage sur Premiere Pro",
      "Post LinkedIn de diffusion",
    ],
    misEnAvant: false,
  },
  {
    id: 10,
    slug: "media-rap",
    titre: "Média rap indépendant",
    resume: "Le média que j'ai lancé à 16 ans pour couvrir la scène rap.",
    description:
      "À 16 ans, j'ai créé un média consacré au rap. Pendant quatre ans, je l'ai géré seul : couverture d'événements, rencontres avec des acteurs de la musique et animation des réseaux sociaux. C'est là que j'ai appris à créer du contenu et à construire une audience.",
    image: "/projets/media-rap.jpg",
    annee: 2021,
    tags: ["Création de contenu", "Événementiel", "Réseaux sociaux"],
    categorie: "Identité & marketing",
    statut: "Projet personnel",
    role: "Fondateur",
    realisations: [
      "Création et gestion du média de 2021 à 2025",
      "Couverture d'événements musicaux",
      "Rencontres avec des artistes et des professionnels",
    ],
    misEnAvant: false,
  },
]

export const getProjet = (slug: string): Projet | undefined => {
  return PROJETS.find((projet) => projet.slug === slug)
}

export const getProjetsMisEnAvant = (): Projet[] => {
  return PROJETS.filter((projet) => projet.misEnAvant)
}

export const getCategories = (): Categorie[] => {
  const categories: Categorie[] = []
  PROJETS.forEach((projet) => {
    if (!categories.includes(projet.categorie)) {
      categories.push(projet.categorie)
    }
  })
  return categories
}

export const getProjetSuivant = (slug: string): Projet => {
  const index = PROJETS.findIndex((projet) => projet.slug === slug)
  return PROJETS[(index + 1) % PROJETS.length]
}

export const getPeriode = (): [number, number] => {
  const annees = PROJETS.map((projet) => projet.annee)
  return [Math.min(...annees), Math.max(...annees)]
}

export const trierProjets = (projets: Projet[], tri: Tri): Projet[] => {
  return [...projets].sort((a, b) => {
    if (tri === "recent") {
      return b.annee - a.annee || a.id - b.id
    }
    return a.annee - b.annee || a.id - b.id
  })
}
