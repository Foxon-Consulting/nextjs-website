import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLightbulb, 
  faRobot, 
  faCheckCircle,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { readFile } from 'fs/promises';
import yaml from 'js-yaml';
import path from 'path';

// Types pour les formations
interface Formation {
  title: string;
  icon: string;
  duration: string;
  description: string;
  modules: string[];
}

// Types pour l'approche pédagogique
interface PedagogieItem {
  title: string;
  description: string;
  step: number;
}

// Types pour la FAQ
interface FaqItem {
  question: string;
  reponse: string;
}

// Type pour les études de cas
interface CaseStudy {
  title: string;
  description: string;
  technologies: string[];
}

export const metadata = {
  title: "Formations | Services IT & IA",
  description: "Formations techniques pour les décideurs sur l&apos;IA et l&apos;automatisation des processus.",
};

// Fonction pour charger les données YAML des formations
async function loadFormationsData(): Promise<{ 
  formations: Formation[], 
  pedagogie: PedagogieItem[], 
  faq: FaqItem[] 
}> {
  try {
    // Chemin vers le fichier YAML
    const filePath = path.join(process.cwd(), 'src/app/(routes)/formation/formations.yaml');
    
    // Lire le contenu du fichier de manière asynchrone
    const fileContents = await readFile(filePath, 'utf8');
    
    // Parser le contenu YAML
    const data = yaml.load(fileContents) as {
      formations: Formation[],
      pedagogie: PedagogieItem[],
      faq: FaqItem[]
    };
    
    // Vérifier la structure du fichier YAML
    if (!data || !data.formations || !Array.isArray(data.formations)) {
      console.error('Structure du fichier YAML incorrecte');
      throw new Error('Structure du fichier YAML incorrecte');
    }
    
    return {
      formations: data.formations,
      pedagogie: data.pedagogie || [],
      faq: data.faq || []
    };
  } catch (error) {
    console.error('Erreur lors du chargement du fichier YAML:', error);
    
    // Retourner les données par défaut en cas d'erreur
    return {
      formations: [
        {
          title: "L'IA pour les décideurs",
          icon: "faLightbulb",
          duration: "2 jours",
          description: "Une formation complète pour comprendre les fondamentaux de l'IA, ses applications concrètes en entreprise et son impact stratégique sur votre secteur d'activité.",
          modules: [
            "Introduction aux concepts clés de l'IA",
            "Applications sectorielles et études de cas",
            "Stratégies d'intégration de l'IA"
          ]
        },
        {
          title: "Automatisation des processus",
          icon: "faRobot",
          duration: "1 jour",
          description: "Découvrez les outils modernes d'automatisation et leur potentiel pour optimiser les processus métier de votre entreprise.",
          modules: [
            "Panorama des technologies d'automatisation",
            "Identification des processus automatisables",
            "Méthodologie de mise en œuvre"
          ]
        },
        {
          title: "Data-driven decision making",
          icon: "faChartLine",
          duration: "2 jours",
          description: "Apprenez à exploiter les données pour prendre des décisions stratégiques éclairées et piloter votre entreprise avec précision.",
          modules: [
            "Collecte et analyse des données pertinentes",
            "Interprétation et visualisation des données",
            "Mise en place d'une culture data-driven"
          ]
        }
      ],
      pedagogie: [
        {
          title: "Simplification",
          description: "Nous rendons accessibles des concepts techniques complexes",
          step: 1
        },
        {
          title: "Cas pratiques",
          description: "Nous utilisons des exemples concrets adaptés à votre secteur",
          step: 2
        },
        {
          title: "Interactivité",
          description: "Nos ateliers favorisent les échanges et la participation active",
          step: 3
        },
        {
          title: "Suivi personnalisé",
          description: "Nous vous accompagnons après la formation pour la mise en pratique",
          step: 4
        }
      ],
      faq: [
        {
          question: "Faut-il avoir des connaissances techniques préalables ?",
          reponse: "Non, nos formations sont spécifiquement conçues pour les décideurs sans bagage technique. Nous rendons accessibles des concepts complexes en utilisant un langage clair et des exemples concrets."
        },
        {
          question: "Les formations peuvent-elles être personnalisées ?",
          reponse: "Absolument ! Nous adaptons le contenu de nos formations à votre secteur d'activité, à vos enjeux spécifiques et à vos objectifs stratégiques. Contactez-nous pour discuter de vos besoins particuliers."
        },
        {
          question: "Proposez-vous des formations en intra-entreprise ?",
          reponse: "Oui, nous proposons des formations en intra-entreprise, ce qui permet d'adapter le contenu à votre contexte spécifique et de former plusieurs collaborateurs simultanément. C'est souvent la solution la plus efficace pour les équipes dirigeantes."
        },
        {
          question: "Quel est le nombre idéal de participants ?",
          reponse: "Pour garantir une expérience d'apprentissage optimale et favoriser les interactions, nous recommandons des groupes de 5 à 10 participants. Cela permet à chacun de bénéficier d'une attention personnalisée tout en profitant de la richesse des échanges."
        },
        {
          question: "Y a-t-il un suivi après la formation ?",
          reponse: "Oui, nous proposons un accompagnement post-formation qui comprend des sessions de questions-réponses, des ressources complémentaires et un accès à nos experts pour vous aider à mettre en pratique les connaissances acquises."
        }
      ]
    };
  }
}

// Fonction pour charger les études de cas
async function loadCaseStudies(): Promise<CaseStudy[]> {
  try {
    // Chemin vers le fichier YAML
    const filePath = path.join(process.cwd(), 'src/app/(routes)/formation/etude_de_cas.yaml');
    
    // Lire le contenu du fichier de manière asynchrone
    const fileContents = await readFile(filePath, 'utf8');
    
    // Types pour la structure du YAML
    interface YamlStudyEntry {
      [title: string]: {
        description: string;
        technologies: string[];
      }
    }
    
    // Parser le contenu YAML
    const data = yaml.load(fileContents) as YamlStudyEntry;
    
    if (!data) {
      throw new Error('Structure du fichier YAML incorrecte');
    }
    
    // Transformer les données au format attendu
    const caseStudies: CaseStudy[] = Object.entries(data).map(([title, details]) => {
      return {
        title,
        description: details.description,
        technologies: details.technologies || []
      };
    });
    
    return caseStudies;
  } catch (error) {
    console.error('Erreur lors du chargement des études de cas:', error);
    
    // Retourner les données par défaut en cas d'erreur
    return [
      {
        title: "Formation IA générative pour une équipe de direction",
        description: "Formation de 2 jours sur l'IA générative pour le comité de direction d'une entreprise de services numériques, incluant des cas pratiques spécifiques à leur secteur d'activité.",
        technologies: ["GenAI", "Prompt Engineering", "Business Strategy", "Innovation"]
      },
      {
        title: "Workshop Data-Driven pour une entreprise industrielle",
        description: "Animation d'un workshop d'une journée sur la prise de décision basée sur les données pour les responsables d'une entreprise industrielle, aboutissant à un plan d'action concret.",
        technologies: ["Data Analysis", "KPI Design", "Decision Making", "Change Management"]
      }
    ];
  }
}

// Fonction pour récupérer l'icône à partir du nom
function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'faLightbulb':
      return faLightbulb;
    case 'faRobot':
      return faRobot;
    case 'faChartLine':
      return faChartLine;
    default:
      return faLightbulb;
  }
}

export default async function Formation() {
  // Charger les données depuis les fichiers YAML
  const { formations, pedagogie, faq } = await loadFormationsData();
  const caseStudies = await loadCaseStudies();
  
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative py-20 formation-header service-header overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/formation.mp4" type="video/mp4" />
          </video>
          {/* Overlay avec gradient linéaire */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)" 
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Formations pour les décideurs</h1>
            <p className="text-xl mb-8 text-white">
              Des formations techniques adaptées aux décideurs pour comprendre et exploiter 
              le potentiel de l&apos;IA et de l&apos;automatisation dans votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Nos formations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                  <FontAwesomeIcon icon={getIconComponent(formation.icon)} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center dark:text-white">{formation.title}</h3>
                <div className="mb-4 text-center">
                  <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">{formation.duration}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {formation.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {formation.modules.map((module, moduleIndex) => (
                    <li key={moduleIndex} className="flex items-start">
                      <div className="text-[#00f65e] text-sm mr-2 mt-1">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{module}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Notre approche pédagogique</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pedagogie.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Questions fréquentes</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white dark:bg-gray-800 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                    {item.reponse}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Études de cas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 dark:text-white">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00f65e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Prêt à former vos équipes ?</h2>
          <p className="text-xl mb-8 text-gray-800 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment 
            nos formations peuvent transformer votre approche de l&apos;IA et de l&apos;automatisation.
          </p>
          <Link href="/contact">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-lg">
              Demander un devis
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
} 