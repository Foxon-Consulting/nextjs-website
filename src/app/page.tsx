import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faProjectDiagram, 
  faUsers, 
  faCodeBranch, 
  faAward,
  faServer,
  faDatabase,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountUp } from "@/components/ui/CountUp";
import { getContactInfo } from "@/lib/contact";

export default async function Home() {
  const contactInfo = await getContactInfo();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/landing_page.mp4" type="video/mp4" />
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
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Excellence IT & IA au service des entreprises
            </h1>
            <p className="text-xl mb-8 text-white">
              Nous vous accompagnons dans votre transformation numérique avec des services de consulting IT, 
              d&apos;exploitation de données par l&apos;IA et des formations pour les décideurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                  Contactez-nous
                </Button>
              </Link>
              <Link href="/#services">
                <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                  Nos services
                </Button>
              </Link>
              <a href={contactInfo.booking.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg">
                  {contactInfo.booking.text}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Nos Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Des solutions sur mesure pour répondre à vos besoins en matière de technologie et d&apos;innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                  <FontAwesomeIcon icon={faServer} />
                </div>
                <CardTitle className="text-center dark:text-white">Consulting IT</CardTitle>
                <CardDescription className="text-center dark:text-gray-400">
                  Expertise technique et accompagnement stratégique
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">
                  Notre équipe d&apos;experts vous accompagne dans tous vos projets IT, du développement 
                  à la mise en production, en passant par l&apos;audit et l&apos;optimisation de vos infrastructures.
                </p>
                <ul className="space-y-2">
                  <li>• Développement de logiciel à la demande</li>
                  <li>• Pilotage de la chaîne logicielle</li>
                  <li>• Audit technique et amélioration</li>
                  <li>• Déploiement d&apos;infrastructure</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/consulting-it">
                  <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c]">
                    En savoir plus
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <CardTitle className="text-center dark:text-white">Exploitation de données avec l&apos;IA</CardTitle>
                <CardDescription className="text-center dark:text-gray-400">
                  Valorisez vos données grâce à l&apos;intelligence artificielle
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">
                  Nous vous aidons à tirer le meilleur parti de vos données pour améliorer 
                  vos processus et prendre des décisions éclairées grâce à l&apos;intelligence artificielle.
                </p>
                <ul className="space-y-2">
                  <li>• Collecte et intégration de données</li>
                  <li>• Stockage optimisé</li>
                  <li>• Analyse prédictive</li>
                  <li>• Tableaux de bord interactifs</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/data-ia">
                  <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c]">
                    En savoir plus
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <CardTitle className="text-center dark:text-white">Formations</CardTitle>
                <CardDescription className="text-center dark:text-gray-400">
                  Des formations techniques adaptées aux décideurs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">
                  Nos formations sont conçues spécifiquement pour les décideurs qui souhaitent comprendre 
                  les enjeux et les opportunités des technologies modernes.
                </p>
                <ul className="space-y-2">
                  <li>• L&apos;IA au service des décideurs</li>
                  <li>• Automatisation des processus</li>
                  <li>• Transformation numérique</li>
                  <li>• Data-driven decision making</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/formation">
                  <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c]">
                    En savoir plus
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section id="key-figures" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faProjectDiagram} />
              </div>
              <div className="text-3xl font-bold mb-2 dark:text-white">
                <CountUp end={100} duration={2.5} />+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Projets réalisés</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="text-3xl font-bold mb-2 dark:text-white">
                <CountUp end={30} duration={2.5} />+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Clients satisfaits</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faCodeBranch} />
              </div>
              <div className="text-3xl font-bold mb-2 dark:text-white">
                <CountUp end={15} duration={2.5} />+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Technologies maîtrisées</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <div className="text-3xl font-bold mb-2 dark:text-white">
                <CountUp end={12} duration={2.5} />+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Années d&apos;expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">À propos de nous</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Notre entreprise est spécialisée dans les services IT et IA, avec une expertise 
                particulière dans le développement de solutions sur mesure, l&apos;exploitation de 
                données et la formation des décideurs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Nous nous distinguons par notre approche pragmatique et notre capacité à 
                traduire des concepts techniques complexes en solutions concrètes et accessibles.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Notre mission est de vous accompagner dans votre transformation numérique 
                en vous fournissant les outils, les connaissances et l&apos;expertise nécessaires 
                pour réussir dans un monde en constante évolution.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Nos valeurs</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faAward} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white">Excellence</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nous visons l&apos;excellence dans chaque projet, en appliquant les meilleures 
                      pratiques et en restant à la pointe de l&apos;innovation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white">Collaboration</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nous croyons en la puissance de la collaboration et travaillons en 
                      étroite relation avec nos clients pour atteindre leurs objectifs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white">Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nous explorons constamment de nouvelles technologies et approches 
                      pour offrir des solutions innovantes à nos clients.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Témoignages</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ce que nos clients disent de nous
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-[#00f65e]">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  &quot;L&apos;équipe a su comprendre nos besoins et nous proposer une solution 
                  parfaitement adaptée à notre problématique. Leur expertise en IA 
                  nous a permis d&apos;optimiser considérablement nos processus.&quot;
                </p>
                <div>
                  <p className="font-bold dark:text-white">Sophie Martin</p>
                  <p className="text-gray-600 dark:text-gray-400">Directrice Innovation, Entreprise A</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-[#00f65e]">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  &quot;La formation sur l&apos;IA pour les décideurs a été une révélation pour 
                  notre équipe dirigeante. Nous avons enfin compris comment exploiter 
                  concrètement ces technologies dans notre stratégie.&quot;
                </p>
                <div>
                  <p className="font-bold dark:text-white">Thomas Dubois</p>
                  <p className="text-gray-600 dark:text-gray-400">CEO, Entreprise B</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-[#00f65e]">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  &quot;Le système d&apos;analyse prédictive développé par l&apos;équipe nous a permis 
                  de réduire nos coûts de maintenance de 30% et d&apos;améliorer la 
                  disponibilité de nos équipements.&quot;
                </p>
                <div>
                  <p className="font-bold dark:text-white">Julie Leroy</p>
                  <p className="text-gray-600 dark:text-gray-400">Directrice Technique, Entreprise C</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Comment démarrer une collaboration avec vous ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  La première étape consiste à nous contacter pour un entretien initial où nous 
                  discuterons de vos besoins et objectifs. Nous vous proposerons ensuite une 
                  approche personnalisée et un devis détaillé.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Quels types d&apos;entreprises accompagnez-vous ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Nous travaillons avec des entreprises de toutes tailles, des startups aux grands 
                  groupes, dans divers secteurs d&apos;activité. Notre approche est adaptée aux 
                  spécificités de chaque client.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Combien coûtent vos services ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Nos tarifs varient en fonction de la nature et de l&apos;ampleur du projet. Nous 
                  proposons des formules adaptées à différents budgets et travaillons en toute 
                  transparence sur les coûts.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Quelle est votre approche en matière de confidentialité ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Nous accordons une importance capitale à la confidentialité. Tous nos contrats 
                  incluent des clauses de confidentialité strictes, et nous mettons en œuvre des 
                  mesures de sécurité robustes pour protéger vos données.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white dark:bg-gray-800 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                  Proposez-vous un suivi après la réalisation d&apos;un projet ?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  Absolument ! Nous proposons des services de maintenance et de support pour 
                  assurer la pérennité et l&apos;évolution de vos solutions. Nous restons disponibles 
                  pour vous accompagner sur le long terme.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Prêt à transformer votre entreprise ?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et découvrir 
            comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                Contactez-nous
              </Button>
            </Link>
            <a href={contactInfo.booking.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg">
                {contactInfo.booking.text}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
