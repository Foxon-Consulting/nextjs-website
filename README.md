# Site Web Services IT & IA

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React pour le développement web (v15.2.0)
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript typé (v5)
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire (v4)
- [Shadcn UI](https://ui.shadcn.com/) - Composants UI réutilisables
- [Font Awesome](https://fontawesome.com/) - Bibliothèque d'icônes
- [Next-intl](https://next-intl-docs.vercel.app/) - Solution d'internationalisation pour Next.js
- [React Hook Form](https://react-hook-form.com/) - Gestion des formulaires
- [Zod](https://zod.dev/) - Validation de données typées

## Structure du projet

```
nextjs_website/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── (routes)/
│   │   │   │   ├── consulting-it/
│   │   │   │   ├── data-ia/
│   │   │   │   └── formation/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── api/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── i18n/
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── messages/
│   │   ├── fr.json
│   │   ├── en.json
│   │   ├── de.json
│   │   └── es.json
│   └── lib/
├── public/
│   ├── images/
│   ├── videos/
│   └── icons/
└── ...
```

## Internationalisation

Le site est disponible en quatre langues :
- Français (fr) - langue par défaut
- Anglais (en)
- Allemand (de)
- Espagnol (es)

L'internationalisation est gérée via la bibliothèque `next-intl`. Les fichiers de traduction sont situés dans le dossier `src/messages/`.

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

Le déploiement de ce site est géré par Terraform qui configure AWS Amplify et Route53 pour l'hébergement et le domaine.

### Déploiement avec Terraform

1. Accéder au répertoire terraform :
```bash
cd terraform
```

2. Initialiser Terraform :
```bash
make init
```

3. Planifier les modifications :
```bash
make plan
```

4. Appliquer les modifications :
```bash
make apply
```

La configuration Terraform crée :
- Une application AWS Amplify connectée au dépôt GitHub
- La configuration des domaines dans Route53
- Les règles de redirection nécessaires

### Variables de déploiement requises

Pour déployer l'infrastructure, vous devez configurer les variables suivantes dans le fichier `terraform/amplify.tfvars` :

```
# Informations générales
client          = "nom-du-client"
environment     = "production"
app_name        = "nom-application"
domain_name     = "exemple.com"

# Configuration du dépôt
repository_url  = "https://github.com/organisation/repo"
access_token    = "github-personal-access-token"
prd_branch_name = "main"

# Sécurité (pour environnement UAT)
basic_auth_username = "utilisateur"
basic_auth_password = "mot-de-passe"

# Optionnel - Liste des préfixes pour les sous-domaines à rediriger vers le domaine principal
prefixlist = ["www", "app"]
```

| Variable | Description |
|----------|-------------|
| `client` | Nom du client ou de l'organisation |
| `environment` | Environnement de déploiement (production, staging, etc.) |
| `app_name` | Nom de l'application Amplify |
| `domain_name` | Nom de domaine principal |
| `repository_url` | URL du dépôt GitHub (sans .git) |
| `access_token` | Token d'accès GitHub pour Amplify |
| `prd_branch_name` | Nom de la branche de production |
| `basic_auth_username` | Nom d'utilisateur pour l'authentification basique (environnements non-production) |
| `basic_auth_password` | Mot de passe pour l'authentification basique (environnements non-production) |
| `prefixlist` | Liste des préfixes de sous-domaines à rediriger vers le domaine principal |

### Premier déploiement

1. **Configuration initiale sur AWS Amplify** :
   - Accédez à la console AWS Amplify
   - Configurez les variables d'environnement nécessaires :
     * `USER_EMAIL` : adresse email pour les notifications
     * `USER_PASSWORD` : mot de passe pour l'accès sécurisé

2. **Déclenchement du processus de déploiement** :
   - Lancez un job de déploiement initial via la console AWS Amplify
   - Vérifiez que le build et le déploiement se terminent avec succès

3. **Déploiement continu** :
   - Le système est configuré pour le déploiement automatique :
     * Chaque commit sur la branche `uat` déclenche automatiquement un déploiement dans l'environnement UAT
     * Chaque commit sur la branche `prd` (ou votre branche de production configurée) déclenche automatiquement un déploiement en production
   - Vous pouvez suivre l'état des déploiements directement depuis la console AWS Amplify

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement avec Turbopack
- `npm run build` : Crée une version de production de l'application
- `npm run start` : Démarre le serveur de production
- `npm run lint` : Exécute ESLint pour vérifier le code

## Personnalisation

### Couleurs

Les couleurs principales du site sont définies dans le fichier `tailwind.config.js` :

- `primary-yellow`: #f1f55c (rgb(241, 245, 92))
- `primary-green`: #00f65e (rgb(0, 246, 94))
- `dark`: #121212
- `light`: #ffffff
- `gray`: #f5f5f5
- `gray-dark`: #333333
- `gray-light`: #eeeeee

Le site utilise également des dégradés :
- `gradient-primary`: Dégradé de primary-green à primary-yellow
- `gradient-dark`: Dégradé de dark à gray-dark

### Polices

Le site utilise la police Poppins, importée depuis Google Fonts dans le fichier `layout.tsx`.

## Licence et Copyright

Ce projet est la propriété exclusive de FOXON CONSULTING FR. Tous droits réservés.
