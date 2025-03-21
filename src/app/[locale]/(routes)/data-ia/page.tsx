import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { readFile } from 'fs/promises';
import yaml from 'js-yaml';
import path from 'path';

// Type pour les études de cas
interface CaseStudy {
  title: string;
  description: string;
  technologies: string[];
}

// Type pour les technologies
interface Technology {
  name: string;
}

// Type pour la section hero
interface Hero {
  title: string;
  description: string;
  video: string;
}

// Type pour un service
interface Service {
  title: string;
  icon: string;
  description: string;
}

// Type pour la section services
interface Services {
  title: string;
  description: string;
  items: Service[];
}

// Type pour une étape du processus
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// Type pour la section processus
interface DataProcess {
  title: string;
  steps: ProcessStep[];
}

// Type pour la section CTA
interface CTA {
  title: string;
  description: string;
}

export const metadata = {
  title: "Exploitation de données avec l&apos;IA | Services IT & IA",
  description: "Services d&apos;exploitation de données avec l&apos;intelligence artificielle pour optimiser vos performances et prendre des décisions éclairées.",
};

// Fonction pour charger les données YAML
async function loadYamlData(): Promise<{ 
  hero: Hero,
  services: Services,
  dataProcess: DataProcess,
  caseStudies: CaseStudy[], 
  technologies: Technology[],
  cta: CTA
}> {
  try {
    // Chemin vers le fichier YAML
    const filePath = path.join(process.cwd(), 'src/app/(routes)/data-ia/data-ia.yaml');
    
    // Lire le contenu du fichier de manière asynchrone
    const fileContents = await readFile(filePath, 'utf8');
    
    // Types pour la structure du YAML
    interface YamlStudyItem {
      description?: string;
      technologies?: string[];
    }
    
    interface YamlStudyEntry {
      [title: string]: YamlStudyItem[];
    }
    
    interface YamlData {
      hero?: {
        title: string;
        description: string;
        video: string;
      };
      services?: {
        title: string;
        description: string;
        items: {
          title: string;
          icon: string;
          description: string;
        }[];
      };
      process?: {
        title: string;
        steps: {
          number: number;
          title: string;
          description: string;
        }[];
      };
      'Etude de cas': YamlStudyEntry[];
      'Technologies'?: string[];
      cta?: {
        title: string;
        description: string;
      };
    }
    
    // Parser le contenu YAML
    const data = yaml.load(fileContents) as unknown as YamlData;
    
    // Vérifier la structure du fichier YAML
    if (!data || !data['Etude de cas'] || !Array.isArray(data['Etude de cas'])) {
      console.error('Structure du fichier YAML incorrecte');
      throw new Error('Structure du fichier YAML incorrecte');
    }
    
    // Transformer les études de cas au format attendu
    const caseStudies: CaseStudy[] = data['Etude de cas'].map((studyEntry: YamlStudyEntry) => {
      // Chaque entrée est un objet avec un seul clé qui est le titre
      const title = Object.keys(studyEntry)[0];
      const studyData = studyEntry[title];
      
      // Extraire la description et les technologies
      let description = '';
      let technologies: string[] = [];
      
      // Parcourir les propriétés de l'étude de cas
      studyData.forEach((item: YamlStudyItem) => {
        if (item.description) {
          description = item.description;
        } else if (item.technologies) {
          technologies = item.technologies;
        }
      });
      
      return {
        title,
        description,
        technologies
      };
    });
    
    // Transformer les technologies au format attendu
    const technologies: Technology[] = data.Technologies ? 
      data.Technologies.map((tech: string) => ({ name: tech })) : 
      [];
    
    // Extraire les autres sections
    const hero: Hero = data.hero || {
      title: "Exploitation de données avec l'IA",
      description: "Transformez vos données en insights stratégiques grâce à nos solutions d'intelligence artificielle sur mesure.",
      video: "/videos/data_exploitation.mp4"
    };
    
    const services: Services = data.services || {
      title: "Nos services d'exploitation de données",
      description: "Notre équipe d'experts en data science et en IA vous aide à tirer le meilleur parti de vos données pour améliorer vos processus et prendre des décisions éclairées.",
      items: []
    };
    
    const dataProcess: DataProcess = data.process || {
      title: "Notre processus d'exploitation de données",
      steps: []
    };
    
    const cta: CTA = data.cta || {
      title: "Prêt à valoriser vos données ?",
      description: "Contactez-nous dès aujourd'hui pour discuter de vos besoins en exploitation de données et découvrir comment nous pouvons vous aider à tirer le meilleur parti de vos données."
    };
    
    return { 
      hero,
      services,
      dataProcess,
      caseStudies, 
      technologies,
      cta
    };
  } catch (error) {
    console.error('Erreur lors du chargement du fichier YAML:', error);
    
    // Retourner les données par défaut en cas d'erreur
    return { 
      hero: {
        title: "Exploitation de données avec l'IA",
        description: "Transformez vos données en insights stratégiques grâce à nos solutions d'intelligence artificielle sur mesure.",
        video: "/videos/data_exploitation.mp4"
      },
      services: {
        title: "Nos services d'exploitation de données",
        description: "Notre équipe d'experts en data science et en IA vous aide à tirer le meilleur parti de vos données pour améliorer vos processus et prendre des décisions éclairées.",
        items: [
          {
            title: "Collecte et intégration de données",
            icon: "faCheckCircle",
            description: "Mise en place de systèmes de collecte et d'intégration de données provenant de sources diverses."
          },
          {
            title: "Stockage optimisé et sécurisé",
            icon: "faCheckCircle",
            description: "Conception d'architectures de stockage performantes et sécurisées pour vos données."
          },
          {
            title: "Analyse prédictive et prescriptive",
            icon: "faCheckCircle",
            description: "Développement de modèles d'IA pour prédire les tendances et recommander des actions."
          },
          {
            title: "Tableaux de bord interactifs",
            icon: "faCheckCircle",
            description: "Création de visualisations interactives pour explorer et comprendre vos données."
          }
        ]
      },
      dataProcess: {
        title: "Notre processus d'exploitation de données",
        steps: [
          {
            number: 1,
            title: "Collecte",
            description: "Identification et collecte des données pertinentes pour votre activité"
          },
          {
            number: 2,
            title: "Traitement",
            description: "Nettoyage, transformation et enrichissement des données brutes"
          },
          {
            number: 3,
            title: "Analyse",
            description: "Application d'algorithmes d'IA pour extraire des insights pertinents"
          },
          {
            number: 4,
            title: "Visualisation",
            description: "Présentation des résultats sous forme de tableaux de bord interactifs"
          }
        ]
      },
      caseStudies: [
        {
          title: "Maintenance prédictive pour l'industrie",
          description: "Développement d'un système de maintenance prédictive utilisant des capteurs IoT et des algorithmes d'IA pour prédire les pannes d'équipement industriel avant qu'elles ne se produisent.",
          technologies: ["Python", "TensorFlow", "IoT", "Azure", "Power BI"]
        },
        {
          title: "Optimisation de la chaîne d'approvisionnement",
          description: "Création d'un système d'optimisation de la chaîne d'approvisionnement utilisant l'apprentissage automatique pour prévoir la demande et optimiser les niveaux de stock.",
          technologies: ["Python", "Scikit-learn", "Tableau", "AWS", "PostgreSQL"]
        }
      ],
      technologies: [
        { name: "Python" },
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Scikit-learn" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Tableau" },
        { name: "Power BI" }
      ],
      cta: {
        title: "Prêt à valoriser vos données ?",
        description: "Contactez-nous dès aujourd'hui pour discuter de vos besoins en exploitation de données et découvrir comment nous pouvons vous aider à tirer le meilleur parti de vos données."
      }
    };
  }
}

export default async function DataIA() {
  // Charger les données depuis le fichier YAML
  const { hero, services, dataProcess, caseStudies, technologies, cta } = await loadYamlData();
  
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative py-20 data-ia-header service-header overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={hero.video} type="video/mp4" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{hero.title}</h1>
            <p className="text-xl mb-8 text-white">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">{services.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {services.description}
            </p>
            
            <div className="space-y-6">
              {services.items.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{dataProcess.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataProcess.steps.map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technologies utilisées</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
                <div className="mb-4 flex items-center justify-center">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">
                    {tech.name.substring(0, 2)}
                  </span>
                </div>
                <h3 className="font-bold dark:text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Études de cas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 dark:text-white">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
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
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{cta.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            {cta.description}
          </p>
          <Link href="/contact">
            <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}