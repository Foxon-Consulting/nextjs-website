import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartLine, 
  faCloud,
  faCheckCircle,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import { 
  faJs,
  faNodeJs,
  faPython,
  faJava,
  faReact,
  faAngular,
  faVuejs,
  faAws,
  faDocker,
  faGitAlt,
  faHtml5,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons";
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

// Type pour les catégories de technologies
interface TechnologyCategory {
  name: string;
  technologies: string[];
}

export const metadata = {
  title: "Consulting IT | Services IT & IA",
  description: "Services de consulting IT pour le développement de logiciels, le pilotage de la chaîne logicielle, l&apos;audit technique et le déploiement d&apos;infrastructure.",
};

// Fonction pour charger les données YAML
async function loadYamlData(): Promise<{
  caseStudies: CaseStudy[],
  techCategories: TechnologyCategory[]
}> {
  try {
    // Chemin vers le fichier YAML
    const filePath = path.join(process.cwd(), 'src/app/(routes)/consulting-it/consulting-it.yaml');
    
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
    
    interface YamlTechnologyCategory {
      [category: string]: string[];
    }
    
    interface YamlData {
      'Etude de cas': YamlStudyEntry[];
      'Technologies'?: YamlTechnologyCategory[];
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
    const techCategories: TechnologyCategory[] = data.Technologies ? 
      data.Technologies.map((techCategoryObject: YamlTechnologyCategory) => {
        const categoryName = Object.keys(techCategoryObject)[0];
        return {
          name: categoryName,
          technologies: techCategoryObject[categoryName] || []
        };
      }) : [];
    
    return { caseStudies, techCategories };
  } catch (error) {
    console.error('Erreur lors du chargement du fichier YAML:', error);
    
    // Retourner les données par défaut en cas d'erreur
    return { 
      caseStudies: [
        {
          title: "Audit des pipeline CI/CD dans le cadre d'une migration de l'infrastructure cloud",
          description: "Analyse des pipelines CI/CD existants et recommandations pour améliorer la qualité et la sécurité des pipelines. Aide à la migration vers Azure.",
          technologies: ["Jenkins", "GitHub Actions", "Azure", "Kubernetes"]
        },
        {
          title: "Déploiement d'une solution ERP sur AWS",
          description: "Déploiement d'une solution ERP sur AWS avec une architecture hautement disponible et scalable.",
          technologies: ["AWS", "Terraform", "MariaDB", "Github Actions"]
        }
      ],
      techCategories: [
        {
          name: "Developpement",
          technologies: ["JavaScript", "TypeScript", "Python", "Java", "React", "Angular", "Vue.js", "Node.js"]
        },
        {
          name: "DevOps",
          technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git"]
        },
        {
          name: "Cloud",
          technologies: ["AWS", "Azure", "GCP"]
        }
      ]
    };
  }
}

export default async function ConsultingIT() {
  // Charger les études de cas depuis le fichier YAML
  const { caseStudies, techCategories } = await loadYamlData();
  
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative py-20 consulting-header service-header overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/consulting_it.mp4" type="video/mp4" />
          </video>
          {/* Overlay avec gradient linéaire */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              background: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)"
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Consulting IT</h1>
            <p className="text-xl mb-8 text-white">
              Expertise technique et accompagnement pour vos projets IT. Nous vous aidons à développer, 
              piloter et optimiser vos solutions logicielles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Nos services de Consulting IT</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Notre équipe d&apos;experts vous accompagne dans tous vos projets IT, du développement
              à la mise en production, en passant par l&apos;audit et l&apos;optimisation de vos infrastructures.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Développement de logiciel à la demande</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Conception et développement de solutions logicielles sur mesure, adaptées à vos besoins spécifiques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Pilotage de la chaîne logicielle</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mise en place et optimisation de votre chaîne de développement, de l&apos;idée à la production.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Audit technique et amélioration</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Analyse de vos systèmes existants et recommandations pour améliorer la performance et la sécurité.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Déploiement d&apos;infrastructure</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Conception et mise en place d&apos;infrastructures cloud sécurisées, évolutives et performantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Notre processus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Analyse des besoins</h3>
              <p className="text-gray-600 dark:text-gray-400">Compréhension approfondie de vos objectifs et contraintes</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Conception de la solution</h3>
              <p className="text-gray-600 dark:text-gray-400">Élaboration d&apos;une architecture et d&apos;une stratégie sur mesure</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Développement & Tests</h3>
              <p className="text-gray-600 dark:text-gray-400">Mise en œuvre agile avec cycles de feedback réguliers</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Déploiement & Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Mise en production et accompagnement continu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technologies utilisées</h2>
          
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => {
                  // Déterminer l'icône à afficher en fonction du nom de la technologie
                  let icon;
                  let iconColor = "";
                  
                  switch(tech.toLowerCase()) {
                    case 'javascript':
                      icon = faJs;
                      iconColor = "#F7DF1E";
                      break;
                    case 'typescript':
                      icon = faJs;
                      iconColor = "#007ACC";
                      break;
                    case 'python':
                      icon = faPython;
                      iconColor = "#3776AB";
                      break;
                    case 'java':
                      icon = faJava;
                      iconColor = "#007396";
                      break;
                    case 'react':
                    case 'reactjs':
                    case 'nextjs':
                      icon = faReact;
                      iconColor = "#61DAFB";
                      break;
                    case 'angular':
                      icon = faAngular;
                      iconColor = "#DD0031";
                      break;
                    case 'vue':
                    case 'vuejs':
                      icon = faVuejs;
                      iconColor = "#4FC08D";
                      break;
                    case 'node':
                    case 'nodejs':
                      icon = faNodeJs;
                      iconColor = "#339933";
                      break;
                    case 'aws':
                      icon = faAws;
                      iconColor = "#FF9900";
                      break;
                    case 'azure':
                      icon = faCloud;
                      iconColor = "#0078D4";
                      break;
                    case 'gcp':
                      icon = faCloud;
                      iconColor = "#4285F4";
                      break;
                    case 'docker':
                      icon = faDocker;
                      iconColor = "#2496ED";
                      break;
                    case 'kubernetes':
                    case 'k8s':
                      icon = faCloud;
                      iconColor = "#326CE5";
                      break;
                    case 'git':
                    case 'github':
                    case 'github actions':
                      icon = faGitAlt;
                      iconColor = "#F05032";
                      break;
                    case 'mariadb':
                    case 'mysql':
                    case 'postgresql':
                    case 'mongodb':
                    case 'sqlite':
                      icon = faDatabase;
                      iconColor = "#4479A1";
                      break;
                    case 'html':
                    case 'html5':
                      icon = faHtml5;
                      iconColor = "#E34F26";
                      break;
                    case 'css':
                    case 'css3':
                      icon = faCss3Alt;
                      iconColor = "#1572B6";
                      break;
                    case 'jenkins':
                    case 'terraform':
                    case 'ansible':
                    case 'sonarqube':
                    case 'c++':
                    case 'c#':
                    case 'qt':
                    default:
                      // Pour les technologies sans icône spécifique
                      icon = tech.includes('cloud') ? faCloud : 
                             tech.includes('database') ? faDatabase : 
                             tech.includes('monitoring') ? faChartLine : 
                             faCheckCircle;
                      iconColor = "#00f65e"; // Couleur par défaut
                  }
                  
                  return (
                    <div key={techIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
                      <div style={{ color: iconColor }} className="text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                        <FontAwesomeIcon icon={icon} className="w-[1em] h-[1em]" />
                      </div>
                      <h3 className="font-bold dark:text-white">{tech}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Études de cas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study: CaseStudy, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 dark:text-white">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech: string, techIndex: number) => (
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
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Prêt à transformer votre infrastructure IT ?</h2>
          <p className="text-xl font-semibold text-center mb-6">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en consulting IT
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