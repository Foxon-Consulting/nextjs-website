import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartLine, 
  faCode, 
  faRobot, 
  faCloud,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

export default function Consulting() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 consulting-header service-header text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting IT</h1>
            <p className="text-xl mb-8">
              Optimisez vos processus métier et votre infrastructure technologique 
              avec nos services de conseil personnalisés.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nos services de consulting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous vous accompagnons dans toutes les étapes de votre transformation numérique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="mb-4 text-primary-green text-4xl flex justify-center">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Audit & Stratégie IT</h3>
              <p className="text-gray-600">
                Évaluation de votre infrastructure actuelle et élaboration d'une feuille de route 
                technologique alignée sur vos objectifs d'affaires.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="mb-4 text-primary-green text-4xl flex justify-center">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Développement sur mesure</h3>
              <p className="text-gray-600">
                Création d'applications et de solutions logicielles personnalisées pour répondre 
                à vos besoins spécifiques.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="mb-4 text-primary-green text-4xl flex justify-center">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Automatisation des processus</h3>
              <p className="text-gray-600">
                Identification et mise en œuvre de solutions d'automatisation pour optimiser 
                vos flux de travail et réduire les tâches manuelles.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="mb-4 text-primary-green text-4xl flex justify-center">
                <FontAwesomeIcon icon={faCloud} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Migration cloud</h3>
              <p className="text-gray-600">
                Accompagnement dans votre transition vers le cloud, de la planification 
                à l'implémentation et l'optimisation continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre méthodologie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir le succès de vos projets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Découverte</h3>
              <p className="text-gray-600">
                Nous analysons vos besoins, objectifs et contraintes pour comprendre parfaitement votre contexte.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Conception</h3>
              <p className="text-gray-600">
                Nous élaborons une solution sur mesure adaptée à vos besoins spécifiques et à votre environnement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Implémentation</h3>
              <p className="text-gray-600">
                Nous mettons en œuvre la solution avec une approche agile, permettant des ajustements en cours de route.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Suivi</h3>
              <p className="text-gray-600">
                Nous assurons un accompagnement continu pour garantir l'adoption et optimiser la solution dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre expertise technique</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des compétences variées pour répondre à tous vos besoins technologiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">Langages & Frameworks</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  JavaScript / TypeScript
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  React / Next.js / Vue.js
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Node.js / Express
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Python / Django / Flask
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Java / Spring Boot
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  PHP / Laravel / Symfony
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">Infrastructure & DevOps</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  AWS / Azure / Google Cloud
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Docker / Kubernetes
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  CI/CD (Jenkins, GitHub Actions)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Terraform / Ansible
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Monitoring (Prometheus, Grafana)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Sécurité & Conformité
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">Bases de données & Intégration</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  SQL (PostgreSQL, MySQL, SQL Server)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  NoSQL (MongoDB, Redis, Elasticsearch)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  API REST / GraphQL
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Microservices / Event-driven
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  Message Brokers (Kafka, RabbitMQ)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary-green mr-2" />
                  ETL / Data Pipelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Études de cas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à résoudre leurs défis technologiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Refonte du système d'information pour une PME industrielle</h3>
              <p className="text-gray-600 mb-4">
                Modernisation complète de l'infrastructure IT et mise en place d'un ERP sur mesure 
                pour optimiser les processus de production et de gestion.
              </p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-900">Technologies utilisées:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Java Spring Boot</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Résultats:</span>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Réduction de 30% des délais de production</li>
                  <li>Amélioration de la traçabilité des produits</li>
                  <li>Centralisation des données métier</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Automatisation des processus RH pour un groupe international</h3>
              <p className="text-gray-600 mb-4">
                Développement d'une solution d'automatisation des workflows RH intégrée aux systèmes 
                existants pour simplifier la gestion des talents à l'échelle mondiale.
              </p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-900">Technologies utilisées:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">AWS</span>
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Résultats:</span>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Gain de temps de 70% sur les processus administratifs</li>
                  <li>Uniformisation des pratiques RH dans 12 pays</li>
                  <li>Amélioration de l'expérience collaborateur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Prêt à transformer votre infrastructure IT ?</h2>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Contactez notre équipe d'experts pour discuter de vos besoins et découvrir 
            comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <Button className="bg-white text-primary-green hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
            Contactez-nous
          </Button>
        </div>
      </section>
    </>
  );
} 