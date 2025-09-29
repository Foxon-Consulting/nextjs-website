import path from 'path';
import { readFile } from 'fs/promises';
import yaml from 'js-yaml';

// Interfaces pour les données de la page d'accueil
export interface Service {
  title: string;
  icon: string;
  description: string;
  details: string;
  features: string[];
  link: string;
}

export interface KeyFigure {
  icon: string;
  value: number;
  label: string;
}

export interface AboutValue {
  title: string;
  icon: string;
  description: string;
}

export interface About {
  title: string;
  description: string;
  paragraphs: string[];
  values: AboutValue[];
}

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

export interface FaqItem {
  question: string;
  reponse: string;
}

export interface Cta {
  title: string;
  description: string;
}

export interface LandingPageData {
  hero: {
    title: string;
    description: string;
  };
  services: Service[];
  key_figures: KeyFigure[];
  about: About;
  testimonials: Testimonial[];
  faq: FaqItem[];
  cta: Cta;
}

export async function getLandingPageData(): Promise<LandingPageData> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/landing_page.yml');
    const fileContents = await readFile(filePath, 'utf8');
    const data = yaml.load(fileContents) as LandingPageData;

    // Vérifier la structure du fichier YAML
    if (!data || !data.hero || !data.services || !Array.isArray(data.services)) {
      console.error('Structure du fichier YAML incorrecte');
      throw new Error('Structure du fichier YAML incorrecte');
    }

    return data;
  } catch (error) {
    console.error('Erreur lors du chargement du fichier YAML de la page d\'accueil:', error);

    // Retourner des données par défaut en cas d'erreur
    return {
      hero: {
        title: "Excellence IT & IA au service des entreprises",
        description: "Nous vous accompagnons dans votre transformation numérique avec des services de consulting IT, d'exploitation de données par l'IA et des formations pour les décideurs."
      },
      services: [
        {
          title: "Consulting IT",
          icon: "faServer",
          description: "Expertise technique et accompagnement stratégique",
          details: "Notre équipe d'experts vous accompagne dans tous vos projets IT, du développement à la mise en production, en passant par l'audit et l'optimisation de vos infrastructures.",
          features: [
            "Développement de logiciel à la demande",
            "Pilotage de la chaîne logicielle",
            "Audit technique et amélioration",
            "Déploiement d'infrastructure"
          ],
          link: "/consulting-it"
        },
        {
          title: "Exploitation de données avec l'IA",
          icon: "faDatabase",
          description: "Valorisez vos données grâce à l'intelligence artificielle",
          details: "Nous vous aidons à tirer le meilleur parti de vos données pour améliorer vos processus et prendre des décisions éclairées grâce à l'intelligence artificielle.",
          features: [
            "Collecte et intégration de données",
            "Stockage optimisé",
            "Analyse prédictive",
            "Tableaux de bord interactifs"
          ],
          link: "/data-ia"
        },
        {
          title: "Formations",
          icon: "faGraduationCap",
          description: "Des formations techniques adaptées aux décideurs",
          details: "Nos formations sont conçues spécifiquement pour les décideurs qui souhaitent comprendre les enjeux et les opportunités des technologies modernes.",
          features: [
            "L'IA au service des décideurs",
            "Automatisation des processus",
            "Transformation numérique",
            "Data-driven decision making"
          ],
          link: "/training"
        }
      ],
      key_figures: [
        {
          icon: "faProjectDiagram",
          value: 100,
          label: "Projets réalisés"
        },
        {
          icon: "faUsers",
          value: 30,
          label: "Clients satisfaits"
        },
        {
          icon: "faCodeBranch",
          value: 15,
          label: "Technologies maîtrisées"
        },
        {
          icon: "faAward",
          value: 12,
          label: "Années d'expérience"
        }
      ],
      about: {
        title: "À propos de nous",
        description: "Notre entreprise est spécialisée dans les services IT et IA, avec une expertise particulière dans le développement de solutions sur mesure, l'exploitation de données et la formation des décideurs.",
        paragraphs: [
          "Nous nous distinguons par notre approche pragmatique et notre capacité à traduire des concepts techniques complexes en solutions concrètes et accessibles.",
          "Notre mission est de vous accompagner dans votre transformation numérique en vous fournissant les outils, les connaissances et l'expertise nécessaires pour réussir dans un monde en constante évolution."
        ],
        values: [
          {
            title: "Excellence",
            icon: "faAward",
            description: "Nous visons l'excellence dans chaque projet, en appliquant les meilleures pratiques et en restant à la pointe de l'innovation."
          },
          {
            title: "Collaboration",
            icon: "faUsers",
            description: "Nous croyons en la puissance de la collaboration et travaillons en étroite relation avec nos clients pour atteindre leurs objectifs."
          },
          {
            title: "Innovation",
            icon: "faCodeBranch",
            description: "Nous explorons constamment de nouvelles technologies et approches pour offrir des solutions innovantes à nos clients."
          }
        ]
      },
      testimonials: [
        {
          content: "L'équipe a su comprendre nos besoins et nous proposer une solution parfaitement adaptée à notre problématique. Leur expertise en IA nous a permis d'optimiser considérablement nos processus.",
          author: "Sophie Martin",
          position: "Directrice Innovation",
          company: "Entreprise A"
        },
        {
          content: "La formation sur l'IA pour les décideurs a été une révélation pour notre équipe dirigeante. Nous avons enfin compris comment exploiter concrètement ces technologies dans notre stratégie.",
          author: "Thomas Dubois",
          position: "CEO",
          company: "Entreprise B"
        },
        {
          content: "Le système d'analyse prédictive développé par l'équipe nous a permis de réduire nos coûts de maintenance de 30% et d'améliorer la disponibilité de nos équipements.",
          author: "Julie Leroy",
          position: "Directrice Technique",
          company: "Entreprise C"
        }
      ],
      faq: [
        {
          question: "Comment démarrer une collaboration avec vous ?",
          reponse: "La première étape consiste à nous contacter pour un entretien initial où nous discuterons de vos besoins et objectifs. Nous vous proposerons ensuite une approche personnalisée et un devis détaillé."
        },
        {
          question: "Quels types d'entreprises accompagnez-vous ?",
          reponse: "Nous travaillons avec des entreprises de toutes tailles, des startups aux grands groupes, dans divers secteurs d'activité. Notre approche est adaptée aux spécificités de chaque client."
        },
        {
          question: "Combien coûtent vos services ?",
          reponse: "Nos tarifs varient en fonction de la nature et de l'ampleur du projet. Nous proposons des formules adaptées à différents budgets et travaillons en toute transparence sur les coûts."
        },
        {
          question: "Quelle est votre approche en matière de confidentialité ?",
          reponse: "Nous accordons une importance capitale à la confidentialité. Tous nos contrats incluent des clauses de confidentialité strictes, et nous mettons en œuvre des mesures de sécurité robustes pour protéger vos données."
        },
        {
          question: "Proposez-vous un suivi après la réalisation d'un projet ?",
          reponse: "Absolument ! Nous proposons des services de maintenance et de support pour assurer la pérennité et l'évolution de vos solutions. Nous restons disponibles pour vous accompagner sur le long terme."
        }
      ],
      cta: {
        title: "Prêt à transformer votre entreprise ?",
        description: "Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs."
      }
    };
  }
}
