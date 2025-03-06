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

### Activation du déploiement continu

Après avoir appliqué la configuration Terraform, vous devez lancer les jobs des branches correspondantes dans l'interface AWS Amplify pour que l'application soit complètement déployée.

1. Accéder à la console AWS Amplify
2. Sélectionner l'application créée
3. Dans l'onglet "Branches", déclencher le build pour la branche principale (main)
4. Attendre que le déploiement soit terminé

Une fois le déploiement terminé, le site sera accessible à l'adresse configurée dans les variables Terraform.

## Personnalisation

### Couleurs

Les couleurs principales du site sont définies dans le fichier `tailwind.config.js` :

- `primary-yellow`: #f1f55c
- `primary-green`: #00f65e
- `dark`: #121212
- `light`: #ffffff

### Polices

Le site utilise la police Poppins, importée depuis Google Fonts dans le fichier `layout.tsx`.

## Licence et Copyright

Ce projet est la propriété exclusive de FOXON CONSULTING FR. Tous droits réservés.
