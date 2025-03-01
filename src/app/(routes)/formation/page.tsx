import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, 
  faLightbulb, 
  faRobot, 
  faUsers,
  faCheckCircle,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "Formations | Services IT & IA",
  description: "Formations techniques pour les décideurs sur l'IA et l'automatisation des processus.",
};

export default function Formation() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark to-gray-dark text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Formations pour les décideurs</h1>
            <p className="text-xl mb-8">
              Des formations techniques adaptées aux décideurs pour comprendre et exploiter 
              le potentiel de l'IA et de l'automatisation dans votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos formations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nos formations sont conçues spécifiquement pour les décideurs qui souhaitent comprendre 
                les enjeux et les opportunités des technologies modernes sans nécessairement maîtriser 
                les aspects techniques.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">L'IA au service des décideurs</h3>
                    <p className="text-gray-600">
                      Comprendre les fondamentaux de l'IA, ses applications concrètes et son impact stratégique sur votre entreprise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Automatisation des processus</h3>
                    <p className="text-gray-600">
                      Découvrir les outils modernes d'automatisation (n8n, crewai, etc.) et leur potentiel pour optimiser vos processus métier.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transformation numérique</h3>
                    <p className="text-gray-600">
                      Comprendre les enjeux de la transformation numérique et élaborer une stratégie adaptée à votre entreprise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data-driven decision making</h3>
                    <p className="text-gray-600">
                      Apprendre à exploiter les données pour prendre des décisions stratégiques éclairées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Formations" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Catalogue de formations</h2>
            <p className="text-xl text-gray-600">Découvrez nos formations adaptées à vos besoins</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <CardTitle>L'IA pour les décideurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Une formation complète pour comprendre les fondamentaux de l'IA, ses applications 
                  concrètes et son impact stratégique sur votre entreprise.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Durée :</span>
                    <span className="text-sm text-gray-500">2 jours</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Format :</span>
                    <span className="text-sm text-gray-500">Présentiel ou distanciel</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Public :</span>
                    <span className="text-sm text-gray-500">Dirigeants, managers, décideurs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <CardTitle>Automatisation des processus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Découvrez les outils modernes d'automatisation et leur potentiel pour 
                  optimiser vos processus métier et gagner en efficacité.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Durée :</span>
                    <span className="text-sm text-gray-500">1 jour</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Format :</span>
                    <span className="text-sm text-gray-500">Présentiel ou distanciel</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Public :</span>
                    <span className="text-sm text-gray-500">Managers, responsables de département</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <CardTitle>Data-driven decision making</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Apprenez à exploiter les données pour prendre des décisions stratégiques 
                  éclairées et améliorer la performance de votre entreprise.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Durée :</span>
                    <span className="text-sm text-gray-500">2 jours</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Format :</span>
                    <span className="text-sm text-gray-500">Présentiel ou distanciel</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Public :</span>
                    <span className="text-sm text-gray-500">Dirigeants, managers, analystes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre méthodologie pédagogique</h2>
            <p className="text-xl text-gray-600">Une approche pratique et adaptée aux décideurs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Méthodologie pédagogique" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary-green text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Vulgarisation et synthèse</h3>
                  <p className="text-gray-600">
                    Nous simplifions les concepts techniques complexes pour les rendre accessibles aux décideurs, 
                    sans sacrifier la pertinence et la profondeur des sujets abordés.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-green text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cas pratiques et exemples concrets</h3>
                  <p className="text-gray-600">
                    Nos formations s'appuient sur des cas réels et des exemples concrets pour illustrer 
                    les concepts et faciliter leur application dans votre contexte professionnel.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-green text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ateliers interactifs</h3>
                  <p className="text-gray-600">
                    Nos formations incluent des ateliers interactifs pour mettre en pratique les concepts 
                    abordés et favoriser l'apprentissage par l'expérience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-green text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suivi personnalisé</h3>
                  <p className="text-gray-600">
                    Nous proposons un suivi personnalisé après la formation pour vous accompagner 
                    dans la mise en œuvre des concepts et des outils dans votre entreprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600">Réponses à vos interrogations sur nos formations</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>Faut-il avoir des connaissances techniques pour suivre vos formations ?</AccordionTrigger>
                <AccordionContent>
                  Non, nos formations sont spécifiquement conçues pour les décideurs qui n'ont pas nécessairement 
                  de background technique. Nous vulgarisons les concepts complexes pour les rendre accessibles à tous.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Les formations sont-elles personnalisables ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous pouvons adapter nos formations à vos besoins spécifiques et à votre contexte d'entreprise. 
                  Contactez-nous pour discuter de vos besoins particuliers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Proposez-vous des formations en intra-entreprise ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous proposons des formations en intra-entreprise, adaptées à votre contexte et à vos enjeux spécifiques. 
                  Ces formations peuvent être organisées dans vos locaux ou à distance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Quelle est la taille idéale d'un groupe pour une formation ?</AccordionTrigger>
                <AccordionContent>
                  Pour garantir une interaction optimale et un apprentissage efficace, nous recommandons des groupes 
                  de 6 à 12 personnes. Cependant, nous pouvons nous adapter à vos contraintes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Proposez-vous un suivi après la formation ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous proposons un suivi personnalisé après la formation pour vous accompagner dans la mise en œuvre 
                  des concepts et des outils dans votre entreprise. Ce suivi peut prendre la forme de sessions de coaching 
                  individuelles ou collectives.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-green to-primary-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Prêt à développer vos compétences ?</h2>
          <p className="text-xl mb-8 text-dark max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en formation et découvrir 
            comment notre expertise peut vous aider à relever les défis de la transformation numérique.
          </p>
          <Link href="/#contact">
            <Button className="bg-dark text-white hover:bg-gray-dark px-8 py-3 rounded-full text-lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
} 