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

// Type pour les études de cas
interface CaseStudy {
  title: string;
  description: string;
  technologies: string[];
}

export const metadata = {
  title: "Consulting IT | Services IT & IA",
  description: "Services de consulting IT pour le développement de logiciels, le pilotage de la chaîne logicielle, l&apos;audit technique et le déploiement d&apos;infrastructure.",
};

// Fonction pour charger les données YAML
function loadYamlData(): CaseStudy[] {
  const caseStudies: CaseStudy[] = [
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
  ];
  
  return caseStudies;
}

export default function ConsultingIT() {
  // Charger les études de cas depuis le fichier YAML (maintenant hard-codées)
  const caseStudies = loadYamlData();
  
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

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technologies utilisées</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* JavaScript */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#F7DF1E] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faJs} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">JavaScript</h3>
            </div>

            {/* TypeScript */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#007ACC] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faJs} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">TypeScript</h3>
            </div>

            {/* Python */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#3776AB] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faPython} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Python</h3>
            </div>

            {/* Java */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#007396] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faJava} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Java</h3>
            </div>

            {/* React */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#61DAFB] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faReact} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">React</h3>
            </div>

            {/* Angular */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#DD0031] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faAngular} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Angular</h3>
            </div>

            {/* Vue */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#4FC08D] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faVuejs} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Vue.js</h3>
            </div>

            {/* Node.js */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#339933] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faNodeJs} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Node.js</h3>
            </div>

            {/* AWS */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#FF9900] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faAws} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">AWS</h3>
            </div>

            {/* Docker */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#2496ED] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faDocker} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Docker</h3>
            </div>

            {/* Kubernetes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-blue-500 text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faCloud} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Kubernetes</h3>
            </div>

            {/* Git */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#F05032] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faGitAlt} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Git</h3>
            </div>

            {/* Database */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#4479A1] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faDatabase} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Bases de données</h3>
            </div>

            {/* HTML5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#E34F26] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faHtml5} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">HTML5</h3>
            </div>

            {/* CSS3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#1572B6] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faCss3Alt} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">CSS3</h3>
            </div>

            {/* Monitoring */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="text-[#00f65e] text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                <FontAwesomeIcon icon={faChartLine} className="w-[1em] h-[1em]" />
              </div>
              <h3 className="font-bold dark:text-white">Monitoring</h3>
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
              <p className="text-gray-600 dark:text-gray-400">Élaboration d&apos;une architecture adaptée à vos besoins</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Développement</h3>
              <p className="text-gray-600 dark:text-gray-400">Mise en œuvre agile avec des cycles courts</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Déploiement & Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Mise en production et accompagnement continu</p>
            </div>
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
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {study.description}
                </p>
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