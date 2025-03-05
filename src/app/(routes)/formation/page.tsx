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

export const metadata = {
  title: "Formations | Services IT & IA",
  description: "Formations techniques pour les décideurs sur l&apos;IA et l&apos;automatisation des processus.",
};

export default function Formation() {
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
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)' 
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

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Nos formations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Nos formations sont conçues spécifiquement pour les décideurs qui souhaitent comprendre 
              les enjeux et les opportunités des technologies modernes sans nécessairement maîtriser 
              les aspects techniques.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">L&apos;IA au service des décideurs</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comprendre les fondamentaux de l&apos;IA et son impact stratégique sur votre secteur d&apos;activité.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Automatisation des processus</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Découvrir les outils modernes d&apos;automatisation et leur potentiel pour votre entreprise.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Transformation numérique</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comprendre les enjeux de la transformation numérique et les stratégies pour la réussir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Data-driven decision making</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Apprendre à exploiter les données pour prendre des décisions stratégiques éclairées.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Pourquoi choisir nos formations ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Contenu adapté spécifiquement aux décideurs et dirigeants</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Formateurs experts avec expérience en entreprise</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Approche pratique avec des cas concrets adaptés à votre secteur</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="dark:text-gray-300">Suivi personnalisé et accompagnement post-formation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Catalogue de formations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark:text-white">L&apos;IA pour les décideurs</h3>
              <div className="mb-4 text-center">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">2 jours</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Une formation complète pour comprendre les fondamentaux de l&apos;IA, ses applications 
                concrètes en entreprise et son impact stratégique sur votre secteur d&apos;activité.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Introduction aux concepts clés de l&apos;IA</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Applications sectorielles et études de cas</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stratégies d&apos;intégration de l&apos;IA</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark:text-white">Automatisation des processus</h3>
              <div className="mb-4 text-center">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">1 jour</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Découvrez les outils modernes d&apos;automatisation et leur potentiel pour optimiser 
                les processus métier de votre entreprise.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Panorama des technologies d&apos;automatisation</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Identification des processus automatisables</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Méthodologie de mise en œuvre</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark:text-white">Data-driven decision making</h3>
              <div className="mb-4 text-center">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">2 jours</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Apprenez à exploiter les données pour prendre des décisions stratégiques 
                éclairées et piloter votre entreprise avec précision.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Collecte et analyse des données pertinentes</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Interprétation et visualisation des données</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-sm mr-2 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mise en place d&apos;une culture data-driven</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Notre approche pédagogique</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Simplification</h3>
              <p className="text-gray-600 dark:text-gray-400">Nous rendons accessibles des concepts techniques complexes</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Cas pratiques</h3>
              <p className="text-gray-600 dark:text-gray-400">Nous utilisons des exemples concrets adaptés à votre secteur</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Interactivité</h3>
              <p className="text-gray-600 dark:text-gray-400">Nos ateliers favorisent les échanges et la participation active</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Suivi personnalisé</h3>
              <p className="text-gray-600 dark:text-gray-400">Nous vous accompagnons après la formation pour la mise en pratique</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Questions fréquentes</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Faut-il avoir des connaissances techniques préalables ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Non, nos formations sont spécifiquement conçues pour les décideurs sans bagage technique. 
                  Nous rendons accessibles des concepts complexes en utilisant un langage clair et des exemples concrets.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Les formations peuvent-elles être personnalisées ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Absolument ! Nous adaptons le contenu de nos formations à votre secteur d&apos;activité, 
                  à vos enjeux spécifiques et à vos objectifs stratégiques. Contactez-nous pour discuter 
                  de vos besoins particuliers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Proposez-vous des formations en intra-entreprise ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Oui, nous proposons des formations en intra-entreprise, ce qui permet d&apos;adapter 
                  le contenu à votre contexte spécifique et de former plusieurs collaborateurs 
                  simultanément. C&apos;est souvent la solution la plus efficace pour les équipes dirigeantes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Quel est le nombre idéal de participants ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Pour garantir une expérience d&apos;apprentissage optimale et favoriser les interactions, 
                  nous recommandons des groupes de 5 à 10 participants. Cela permet à chacun de 
                  bénéficier d&apos;une attention personnalisée tout en profitant de la richesse des échanges.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Y a-t-il un suivi après la formation ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Oui, nous proposons un accompagnement post-formation qui comprend des sessions 
                  de questions-réponses, des ressources complémentaires et un accès à nos experts 
                  pour vous aider à mettre en pratique les connaissances acquises.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Prêt à développer vos compétences ?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en formation 
            et découvrir comment nous pouvons vous aider à maîtriser les technologies modernes.
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