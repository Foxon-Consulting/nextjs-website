import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faServer, 
  faCode, 
  faChartLine, 
  faCloud,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Consulting IT | Services IT & IA",
  description: "Services de consulting IT pour le développement de logiciels, le pilotage de la chaîne logicielle, l'audit technique et le déploiement d'infrastructure.",
};

export default function ConsultingIT() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 consulting-header service-header text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting IT</h1>
            <p className="text-xl mb-8">
              Expertise technique et accompagnement pour vos projets IT. Nous vous aidons à développer, 
              piloter et optimiser vos solutions logicielles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Nos services de Consulting IT</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Notre équipe d'experts vous accompagne dans tous vos projets IT, du développement 
                à la mise en production, en passant par l'audit et l'optimisation de vos infrastructures.
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
                      Mise en place et optimisation de votre chaîne de développement, de l'idée à la production.
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
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Déploiement d'infrastructure</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Conception et mise en place d'infrastructures cloud et on-premise adaptées à vos besoins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Pourquoi choisir notre service de Consulting IT ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Expertise technique de haut niveau dans les technologies modernes</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Approche agile et adaptative pour répondre à vos besoins spécifiques</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Solutions évolutives qui grandissent avec votre entreprise</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Accompagnement continu et support réactif</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technologies utilisées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="text-[#00f65e] text-3xl mb-4 h-[1.5em] flex items-center justify-center">
                  <FontAwesomeIcon icon={faCode} className="w-[1em] h-[1em]" />
                </div>
                <CardTitle className="text-center dark:text-white">Langages & Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 dark:text-gray-300">
                <p>JavaScript / TypeScript</p>
                <p>Python / Django / Flask</p>
                <p>Java / Spring Boot</p>
                <p>Go</p>
                <p>React / Vue.js / Angular</p>
                <p>Node.js / Express</p>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="text-[#00f65e] text-3xl mb-4 h-[1.5em] flex items-center justify-center">
                  <FontAwesomeIcon icon={faCloud} className="w-[1em] h-[1em]" />
                </div>
                <CardTitle className="text-center dark:text-white">Cloud & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 dark:text-gray-300">
                <p>AWS / Azure / Google Cloud</p>
                <p>Docker / Kubernetes</p>
                <p>Terraform / Ansible</p>
                <p>CI/CD (Jenkins, GitHub Actions)</p>
                <p>Monitoring (Prometheus, Grafana)</p>
                <p>Sécurité & Conformité</p>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="text-[#00f65e] text-3xl mb-4 h-[1.5em] flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="w-[1em] h-[1em]" />
                </div>
                <CardTitle className="text-center dark:text-white">Méthodologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 dark:text-gray-300">
                <p>Agile / Scrum / Kanban</p>
                <p>DevOps / DevSecOps</p>
                <p>Test-Driven Development</p>
                <p>Continuous Integration</p>
                <p>Continuous Deployment</p>
                <p>Microservices Architecture</p>
              </CardContent>
            </Card>
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
              <p className="text-gray-600 dark:text-gray-400">Élaboration d'une architecture adaptée à vos besoins</p>
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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Refonte du système d'information d'une entreprise de logistique</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Modernisation complète du SI avec une architecture microservices, permettant une réduction de 40% des coûts 
                d'exploitation et une amélioration de 60% des temps de réponse.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Développement d'une plateforme e-commerce B2B</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Création d'une solution sur mesure intégrant gestion des stocks, facturation et CRM, 
                permettant à notre client d'augmenter son chiffre d'affaires de 35% en un an.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Prêt à transformer votre infrastructure IT ?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en consulting IT 
            et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
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