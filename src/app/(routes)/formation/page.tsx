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
      <section className="relative py-20 formation-header service-header text-white">
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nos formations</h2>
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">L'IA au service des décideurs</h3>
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Automatisation des processus</h3>
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Transformation numérique</h3>
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Data-driven decision making</h3>
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre catalogue de formations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formations conçues spécifiquement pour les décideurs et adaptées à vos besoins
            </p>
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
                    <span className="text-sm text-gray-500">Dirigeants, managers, décideurs</span>
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
                  Apprenez à exploiter vos données pour prendre des décisions stratégiques 
                  éclairées et développer un avantage concurrentiel.
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
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre approche pédagogique</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir l'acquisition de compétences concrètes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Simplification</h3>
              <p className="text-gray-600">
                Nous rendons accessibles des concepts techniques complexes grâce à des explications 
                claires et des analogies pertinentes.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cas pratiques</h3>
              <p className="text-gray-600">
                Nous utilisons des études de cas réels et des exemples concrets adaptés 
                à votre secteur d'activité.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Ateliers interactifs</h3>
              <p className="text-gray-600">
                Nous favorisons l'apprentissage par la pratique avec des ateliers 
                collaboratifs et des mises en situation.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Suivi personnalisé</h3>
              <p className="text-gray-600">
                Nous proposons un accompagnement post-formation pour vous aider 
                à mettre en pratique les connaissances acquises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos formations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Faut-il avoir des connaissances techniques préalables ?</h3>
              <p className="text-gray-600">
                Non, nos formations sont spécialement conçues pour les décideurs sans bagage technique. 
                Nous adaptons notre langage et nos explications pour rendre les concepts accessibles à tous.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Les formations peuvent-elles être personnalisées ?</h3>
              <p className="text-gray-600">
                Absolument ! Nous pouvons adapter le contenu, la durée et les exemples utilisés 
                pour répondre parfaitement aux spécificités de votre entreprise et de votre secteur.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proposez-vous des formations en intra-entreprise ?</h3>
              <p className="text-gray-600">
                Oui, nous intervenons directement dans vos locaux ou à distance pour former 
                vos équipes. C'est souvent la solution privilégiée pour aborder des problématiques 
                spécifiques à votre organisation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quel est le nombre idéal de participants ?</h3>
              <p className="text-gray-600">
                Pour garantir une interaction optimale et un apprentissage efficace, 
                nous recommandons des groupes de 6 à 12 participants. Cela permet à chacun 
                de participer activement tout en bénéficiant de la richesse des échanges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quel suivi est proposé après la formation ?</h3>
              <p className="text-gray-600">
                Nous offrons une session de suivi à distance quelques semaines après la formation 
                pour répondre à vos questions et vous aider à surmonter les éventuels obstacles 
                rencontrés dans la mise en pratique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Prêt à développer vos compétences ?</h2>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Contactez notre équipe pour discuter de vos besoins en formation et découvrir 
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