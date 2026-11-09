# Portfolio de Xavier Okola

Portfolio personnel réalisé en Next.js et TypeScript dans le cadre du cours Next.js de l'IIM Digital School (A2).
Il présente mes projets en développement web, en identité de marque et en vidéo.

- **Site en ligne :** https://portfolio-xavier-okola.vercel.app
- **Auteur :** Xavier Okola, étudiant en A2 à l'IIM Digital School

## Stack

- [Next.js 16](https://nextjs.org) avec l'App Router
- React 19
- TypeScript en mode `strict`
- Tailwind CSS 4
- Hébergement sur Vercel, déploiement automatique à chaque push sur `main`

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

Autres commandes :

```bash
npm run build   # build de production
npm run lint    # vérification ESLint
```

## Les pages

| Adresse | Fichier | Contenu |
| --- | --- | --- |
| `/` | `app/page.tsx` | Accueil : présentation, chiffres clés, projets à la une, compétences |
| `/projets` | `app/projets/page.tsx` | Tous les projets, avec filtre par catégorie et tri par année |
| `/projets/[slug]` | `app/projets/[slug]/page.tsx` | Page d'un projet, générée à partir du tableau de projets |
| `/a-propos` | `app/a-propos/page.tsx` | Parcours, compétences, langues et questions fréquentes |
| adresse inconnue | `app/not-found.tsx` | Page 404 personnalisée |

Une adresse comme `/projets/nimportequoi` affiche la page 404 grâce à `notFound()`.

## Structure du projet

```
app/
  layout.tsx            Menu et PiedDePage, écrits une seule fois pour toutes les pages
  page.tsx              Accueil
  projets/page.tsx      Liste des projets
  projets/[slug]/       Page d'un projet
  a-propos/page.tsx     À propos
  not-found.tsx         Page 404
components/             Les 15 composants du site, un fichier par composant
data/                   Les données écrites en dur : projets, profil, parcours, compétences
interfaces/             Les interfaces TypeScript (Projet, Experience, Competence...)
types/                  Les types TypeScript (Categorie, Statut, Tri, Chiffre)
public/projets/         Les visuels des projets
```

## Comment le projet répond à la consigne

| Critère | Où le trouver |
| --- | --- |
| Pages : accueil, `/projets`, `/projets/[slug]` avec 404 | `app/page.tsx`, `app/projets/page.tsx`, `app/projets/[slug]/page.tsx`, `app/not-found.tsx` |
| Layout : menu et pied de page jamais répétés | `app/layout.tsx` appelle `<Menu />` et `<PiedDePage />` une seule fois |
| 10 composants minimum, props typées | 15 composants dans `components/`, chacun avec son `type Props` |
| Un composant appelé dans un autre | `Hero` appelle `Bouton`, `CarteProjet` appelle `Etiquette`, `ListeProjets` appelle `CarteProjet`, `FiltreProjets` appelle `ListeProjets`, `Menu` appelle `MenuMobile` |
| 2 composants avec `useState` et `onClick` | `FiltreProjets`, `Accordeon` et `MenuMobile` |
| `"use client"` sur eux seuls | Seuls ces trois fichiers ont `"use client"`, les pages et le layout n'en ont pas |
| Au moins 5 projets dans un tableau | 10 projets dans `data/projets.ts`, avec titre, image, année et tags |
| Tags affichés un par un | `.map()` sur `projet.tags`, chaque tag dans un composant `Etiquette` |
| Code propre, sans `any` | Aucun `any` dans le projet, `npm run lint` et `npm run build` passent sans erreur |
| Site en ligne sur Vercel | Lien en haut de ce fichier |

### Bonus réalisés

- **Filtre et tri des projets** : sur `/projets`, filtre par catégorie et tri par année avec `useState`
- **Une 4e page** : `/a-propos`
- **Un README complet** : ce fichier
- **En plus** : lien « Projet suivant » sur chaque projet, page 404 personnalisée, menu mobile, titres d'onglet par page avec `generateMetadata`, pages de projets générées au build avec `generateStaticParams`

## Les composants

| Composant | Props | Rôle |
| --- | --- | --- |
| `Menu` | aucune | Barre de navigation, appelle `MenuMobile` |
| `MenuMobile` | `liens: Lien[]` | Menu déroulant sur mobile (`useState`, `onClick`) |
| `PiedDePage` | aucune | Pied de page avec les liens et les réseaux |
| `Hero` | `surtitre`, `titre`, `texte` | Bandeau de l'accueil, appelle `Bouton` |
| `Bouton` | `label`, `href`, `variante?`, `externe?` | Lien en forme de bouton, plein ou contour |
| `Section` | `titre`, `sousTitre?`, `children` | Titre de section et son contenu |
| `TitrePage` | `surtitre`, `titre`, `texte` | En-tête des pages intérieures |
| `Etiquette` | `texte` | Un tag ou un outil |
| `CarteProjet` | `projet: Projet` | Carte d'un projet, appelle `Etiquette` |
| `ListeProjets` | `projets: Projet[]` | Grille de cartes, avec `.map()` et `key` |
| `FiltreProjets` | `projets`, `categories` | Filtre et tri (`useState`, `onClick`) |
| `Accordeon` | `question`, `children` | Question qui se déplie (`useState`, `onClick`) |
| `ChiffreCle` | `chiffre: Chiffre` | Un chiffre et son libellé |
| `CarteCompetence` | `competence: Competence` | Un domaine et ses outils |
| `LigneParcours` | `experience: Experience` | Une ligne du parcours |

## TypeScript

Le projet utilise TypeScript en mode `strict`, sans aucun `any`.

- **Interfaces** dans `interfaces/` pour décrire les objets : `Projet`, `Experience`, `Competence`, `Profil`, `Lien`, `Question`.
- **Types union** dans `types/` pour limiter les valeurs possibles :
  ```ts
  export type Categorie = "Développement web" | "Identité & marketing" | "Motion & vidéo"
  export type Statut = "En ligne" | "En cours" | "Projet scolaire" | "Projet client" | "Projet personnel"
  export type Tri = "recent" | "ancien"
  ```
  Un projet avec une catégorie qui n'existe pas est souligné en rouge.
- **Tuples** : `type Chiffre = [string, string]` pour une valeur et son libellé, et `getPeriode(): [number, number]` qui renvoie la première et la dernière année.
- **Propriétés facultatives** avec `?` : `lien?` dans `Projet`, `email?` dans `Profil`, `sousTitre?` et `variante?` dans les props.
- **Interfaces imbriquées** : `Profil` contient un tableau de `Lien`, `Projet` utilise les types `Categorie` et `Statut`.
- **Fonctions typées** dans `data/projets.ts`, avec le type des paramètres et du retour :
  ```ts
  export const getProjet = (slug: string): Projet | undefined => {
    return PROJETS.find((projet) => projet.slug === slug)
  }
  ```
- **Tableaux typés** : `PROJETS: Projet[]`, `tags: string[]`.
- **Props typées** : chaque composant décrit ses props avec `type Props`.
- **État typé** : `useState<Filtre>("Tous")` avec `type Filtre = Categorie | "Tous"`.

## Les données

Tous les contenus sont écrits en dur dans `data/`, il n'y a pas de base de données.
Pour ajouter un projet, il suffit d'ajouter un objet dans le tableau `PROJETS` de `data/projets.ts` et son visuel dans `public/projets/` : la carte, le filtre et la page du projet se mettent à jour tout seuls.
