import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faProjectDiagram, 
  faUsers, 
  faCodeBranch, 
  faAward,
  faServer,
  faDatabase,
  faGraduationCap,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions IT & IA pour votre entreprise</h1>
            <p className="text-xl mb-8">
              Nous vous accompagnons dans votre transformation numérique avec des services de consulting IT, 
              d'exploitation de données par l'IA et des formations pour les décideurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact">
                <Button className="bg-primary-green text-dark hover:bg-primary-yellow px-8 py-3 rounded-full text-lg">
                  Contactez-nous
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark px-8 py-3 rounded-full text-lg">
                  Nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section id="key-figures" className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-green text-3xl mb-4">
                <FontAwesomeIcon icon={faProjectDiagram} />
              </div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-green text-3xl mb-4">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="text-4xl font-bold mb-2">85+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-green text-3xl mb-4">
                <FontAwesomeIcon icon={faCodeBranch} />
              </div>
              <div className="text-4xl font-bold mb-2">25k+</div>
              <div className="text-gray-600">Lignes de code</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-green text-3xl mb-4">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Des solutions adaptées à vos besoins</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faServer} />
                </div>
                <CardTitle>Consulting IT</CardTitle>
                <CardDescription>
                  Expertise technique et accompagnement pour vos projets IT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Développement de logiciel à la demande</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Pilotage de la chaîne logicielle</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Audit technique et amélioration</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Déploiement d'infrastructure</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/consulting-it" className="w-full">
                  <Button className="w-full">En savoir plus</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <CardTitle>Exploitation de données avec l'IA</CardTitle>
                <CardDescription>
                  Valorisez vos données grâce à l'intelligence artificielle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Collecte et intégration de données</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Structure et stockage optimisés</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Analyse prédictive par IA</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Tableaux de bord interactifs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/data-ia" className="w-full">
                  <Button className="w-full">En savoir plus</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <CardTitle>Formations</CardTitle>
                <CardDescription>
                  Formations techniques pour les décideurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>L'IA au service des décideurs</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Automatisation des process</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Vulgarisation et synthèse</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faChevronRight} className="text-primary-green mt-1 mr-2" />
                    <span>Impact stratégique des technologies</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/formation" className="w-full">
                  <Button className="w-full">En savoir plus</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Approche</h2>
            <p className="text-xl text-gray-600">Une méthodologie en 5 étapes pour garantir le succès de vos projets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-green text-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Analyse</h3>
              <p className="text-gray-600">Compréhension approfondie de vos besoins et objectifs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-green text-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Conception</h3>
              <p className="text-gray-600">Élaboration d'une solution sur mesure</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-green text-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Développement</h3>
              <p className="text-gray-600">Mise en œuvre agile et itérative</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-green text-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Déploiement</h3>
              <p className="text-gray-600">Intégration fluide dans votre environnement</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-green text-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-xl font-bold mb-2">Suivi</h3>
              <p className="text-gray-600">Accompagnement continu et optimisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
            <p className="text-xl text-gray-600">Ce que nos clients disent de nous</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-green rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold">Jean Dupont</h3>
                    <p className="text-sm text-gray-600">Directeur IT, Entreprise A</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "L'équipe a su comprendre nos besoins et nous proposer une solution parfaitement adaptée. 
                  Le projet a été livré dans les délais et le résultat dépasse nos attentes."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-green rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold">Marie Martin</h3>
                    <p className="text-sm text-gray-600">CEO, Startup B</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Grâce à leur expertise en IA, nous avons pu valoriser nos données et obtenir des insights 
                  précieux pour notre activité. Un partenaire de confiance pour notre transformation numérique."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-green rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold">Pierre Leroy</h3>
                    <p className="text-sm text-gray-600">Directeur Général, Entreprise C</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Les formations pour décideurs nous ont permis de mieux comprendre les enjeux de l'IA 
                  et de prendre des décisions stratégiques éclairées. Une approche pédagogique remarquable."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">Réponses à vos interrogations</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment démarrer une collaboration avec vous ?</AccordionTrigger>
                <AccordionContent>
                  Pour démarrer une collaboration, contactez-nous via notre formulaire de contact ou par téléphone. 
                  Nous organiserons un premier rendez-vous pour comprendre vos besoins et vous proposer une approche adaptée.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Quelles technologies utilisez-vous pour vos projets ?</AccordionTrigger>
                <AccordionContent>
                  Nous utilisons les technologies les plus récentes et adaptées à chaque projet : cloud computing (AWS, Azure), 
                  conteneurisation (Kubernetes, Docker), langages modernes (Python, JavaScript, Go), et frameworks d'IA (TensorFlow, PyTorch).
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Combien coûtent vos services ?</AccordionTrigger>
                <AccordionContent>
                  Le coût de nos services varie en fonction de la nature et de l'ampleur de votre projet. 
                  Nous établissons un devis personnalisé après avoir analysé vos besoins spécifiques.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Quelle est la durée moyenne d'un projet ?</AccordionTrigger>
                <AccordionContent>
                  La durée d'un projet dépend de sa complexité. Un projet simple peut prendre quelques semaines, 
                  tandis qu'un projet plus complexe peut s'étendre sur plusieurs mois. Nous définissons ensemble 
                  un calendrier réaliste lors de la phase de conception.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Proposez-vous un support après la livraison du projet ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous offrons un support continu après la livraison du projet. Nous proposons différentes 
                  formules de maintenance et d'accompagnement pour assurer la pérennité et l'évolution de votre solution.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600">Parlons de votre projet</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div>
                <Button className="w-full md:w-auto bg-primary-green hover:bg-primary-yellow hover:text-dark text-dark font-medium px-6 py-3 rounded-full">
                  Envoyer
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
