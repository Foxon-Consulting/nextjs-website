# Site Web Services IT & IA

Ce projet est un site web moderne pour une entreprise proposant des services de consulting IT, d'exploitation de données avec l'IA et des formations pour les décideurs.

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React pour le développement web
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript typé
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [Shadcn UI](https://ui.shadcn.com/) - Composants UI réutilisables
- [Font Awesome](https://fontawesome.com/) - Bibliothèque d'icônes

## Structure du projet

```
nextjs_website/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── consulting-it/
│   │   │   ├── data-ia/
│   │   │   └── formation/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   └── ui/
│   └── lib/
├── public/
│   └── images/
└── ...
```

## Pages du site

1. **Page d'accueil (/)** - Présentation générale de l'entreprise et aperçu des services
2. **Consulting IT (/consulting-it)** - Services de consulting IT
3. **Exploitation de données avec l'IA (/data-ia)** - Services d'exploitation de données avec l'IA
4. **Formations (/formation)** - Formations pour les décideurs

## Installation

1. Cloner le dépôt :
```bash
git clone <url-du-depot>
cd nextjs_website
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Déploiement

Ce site peut être déployé sur n'importe quelle plateforme supportant Next.js, comme Vercel, Netlify ou AWS Amplify.

### Déploiement sur Vercel

1. Créer un compte sur [Vercel](https://vercel.com/)
2. Importer le projet depuis GitHub
3. Configurer les variables d'environnement si nécessaire
4. Déployer

## Personnalisation

### Couleurs

Les couleurs principales du site sont définies dans le fichier `tailwind.config.js` :

- `primary-yellow`: #f1f55c
- `primary-green`: #00f65e
- `dark`: #121212
- `light`: #ffffff

### Polices

Le site utilise la police Poppins, importée depuis Google Fonts dans le fichier `layout.tsx`.

## Licence

Ce projet est sous licence [MIT](LICENSE).
