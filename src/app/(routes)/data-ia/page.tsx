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

export const metadata = {
  title: "Exploitation de données avec l&apos;IA | Services IT & IA",
  description: "Services d&apos;exploitation de données avec l&apos;intelligence artificielle pour optimiser vos performances et prendre des décisions éclairées.",
};

// Fonction pour charger les données YAML
async function loadYamlData(): Promise<{ caseStudies: CaseStudy[], technologies: Technology[] }> {
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
      'Etude de cas': YamlStudyEntry[];
      'Technologies'?: string[];
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
    
    return { caseStudies, technologies };
  } catch (error) {
    console.error('Erreur lors du chargement du fichier YAML:', error);
    
    // Retourner les données par défaut en cas d'erreur
    return { 
      caseStudies: [
        {
          title: "Maintenance prédictive pour l'industrie",
          description: "Développement d'un système de maintenance prédictive basé sur l'IA pour une entreprise industrielle, permettant de réduire les temps d'arrêt de 35% et les coûts de maintenance de 25%.",
          technologies: ["IoT", "TensorFlow", "Time Series", "AWS"]
        },
        {
          title: "Détection de fraude pour services financiers",
          description: "Mise en place d'un système de détection de fraude en temps réel pour une institution financière, améliorant la détection de 60% tout en réduisant les faux positifs de 40%.",
          technologies: ["Machine Learning", "Kafka", "Spark", "Real-time"]
        },
        {
          title: "Optimisation de la chaîne logistique",
          description: "Développement d'un système d'optimisation de la chaîne logistique basé sur l'IA pour un distributeur, réduisant les coûts de transport de 15% et les délais de livraison de 20%.",
          technologies: ["Optimisation", "Python", "OR-Tools", "GCP"]
        },
        {
          title: "Analyse de sentiment pour le service client",
          description: "Implémentation d'un système d'analyse de sentiment pour le service client d'une entreprise de télécommunications, améliorant la satisfaction client de 25% et réduisant le temps de résolution des problèmes de 30%.",
          technologies: ["NLP", "BERT", "Hugging Face", "Azure"]
        }
      ],
      technologies: [
        { name: "LLM" },
        { name: "Embeddings" },
        { name: "Vector Databases" },
        { name: "Prompt Engineering" },
        { name: "RAG" },
        { name: "LangChain" },
        { name: "Hugging Face" },
        { name: "Fine-tuning" },
        { name: "AWS Bedrock" },
        { name: "AWS SageMaker" },
        { name: "AWS Datazone" }
      ]
    };
  }
}

export default async function DataIA() {
  // Charger les données depuis le fichier YAML
  const { caseStudies, technologies } = await loadYamlData();
  
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
            <source src="/videos/data_exploitation.mp4" type="video/mp4" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Exploitation de données avec l&apos;IA</h1>
            <p className="text-xl mb-8 text-white">
              Transformez vos données en insights stratégiques grâce à nos solutions 
              d&apos;intelligence artificielle sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Nos services d&apos;exploitation de données</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Notre équipe d&apos;experts en data science et en IA vous aide à tirer le meilleur parti 
              de vos données pour améliorer vos processus et prendre des décisions éclairées.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Collecte et intégration de données</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mise en place de systèmes de collecte et d&apos;intégration de données provenant de sources diverses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Stockage optimisé et sécurisé</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Conception d&apos;architectures de stockage performantes et sécurisées pour vos données.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Analyse prédictive et prescriptive</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Développement de modèles d&apos;IA pour prédire les tendances et recommander des actions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Tableaux de bord interactifs</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Création de visualisations interactives pour explorer et comprendre vos données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Notre processus d&apos;exploitation de données</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Collecte</h3>
              <p className="text-gray-600 dark:text-gray-400">Identification et collecte des données pertinentes pour votre activité</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Traitement</h3>
              <p className="text-gray-600 dark:text-gray-400">Nettoyage, transformation et enrichissement des données brutes</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Analyse</h3>
              <p className="text-gray-600 dark:text-gray-400">Application d&apos;algorithmes d&apos;IA pour extraire des insights pertinents</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Visualisation</h3>
              <p className="text-gray-600 dark:text-gray-400">Présentation des résultats sous forme de tableaux de bord interactifs</p>
            </div>
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
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Prêt à valoriser vos données ?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en exploitation de données 
            et découvrir comment nous pouvons vous aider à tirer le meilleur parti de vos données.
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