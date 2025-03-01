import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDatabase, 
  faChartPie, 
  faRobot, 
  faBrain,
  faCheckCircle,
  faServer,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Exploitation de données avec l'IA | Services IT & IA",
  description: "Services d'exploitation de données avec l'IA pour valoriser vos données et obtenir des insights précieux pour votre activité.",
};

export default function DataIA() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 data-ia-header service-header text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Exploitation de données avec l'IA</h1>
            <p className="text-xl mb-8">
              Valorisez vos données grâce à l'intelligence artificielle et obtenez des insights 
              précieux pour optimiser votre activité.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos services d'exploitation de données</h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre équipe d'experts en data science et en IA vous aide à tirer le meilleur parti 
                de vos données pour améliorer vos processus et prendre des décisions éclairées.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Collecte et intégration de données</h3>
                    <p className="text-gray-600">
                      Mise en place de systèmes de collecte et d'intégration de données provenant de sources diverses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Structure et stockage optimisés</h3>
                    <p className="text-gray-600">
                      Conception et mise en œuvre de solutions de stockage adaptées à vos besoins (data lakes, data warehouses).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analyse prédictive par IA</h3>
                    <p className="text-gray-600">
                      Développement de modèles d'IA pour prédire les tendances, détecter les anomalies et optimiser vos processus.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tableaux de bord interactifs</h3>
                    <p className="text-gray-600">
                      Création de tableaux de bord personnalisés pour visualiser et analyser vos données en temps réel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Data & IA" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus</h2>
            <p className="text-xl text-gray-600">Comment nous exploitons vos données avec l'IA</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <CardTitle className="text-center">Collecte</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Nous collectons les données de vos différentes sources (capteurs, applications, bases de données) 
                  et les consolidons dans un format exploitable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <CardTitle className="text-center">Traitement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Nous nettoyons, transformons et enrichissons vos données pour les rendre exploitables 
                  par les algorithmes d'IA.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <CardTitle className="text-center">Analyse</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Nous développons et entraînons des modèles d'IA adaptés à vos besoins spécifiques 
                  pour extraire des insights pertinents.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-green text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <CardTitle className="text-center">Visualisation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Nous créons des tableaux de bord interactifs et des interfaces utilisateur intuitives 
                  pour exploiter les résultats de l'analyse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies</h2>
            <p className="text-xl text-gray-600">Les technologies que nous utilisons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <CardTitle>Données</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Apache Kafka</li>
                  <li>Apache Spark</li>
                  <li>Hadoop</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Snowflake</li>
                  <li>AWS S3 / Azure Blob</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <CardTitle>Intelligence Artificielle</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>Scikit-learn</li>
                  <li>Hugging Face</li>
                  <li>OpenAI API</li>
                  <li>LangChain</li>
                  <li>RAG (Retrieval Augmented Generation)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faChartPie} />
                </div>
                <CardTitle>Visualisation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Tableau</li>
                  <li>Power BI</li>
                  <li>Grafana</li>
                  <li>D3.js</li>
                  <li>Plotly</li>
                  <li>Kibana</li>
                  <li>Streamlit</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Études de cas</h2>
            <p className="text-xl text-gray-600">Découvrez nos réalisations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Prédiction de maintenance pour une usine industrielle</h3>
                <p className="text-gray-600 mb-4">
                  Mise en place d'un système de maintenance prédictive basé sur l'IA pour une usine industrielle, 
                  permettant de réduire les temps d'arrêt de 35% et les coûts de maintenance de 25%.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies :</strong> IoT, Kafka, TensorFlow, Grafana, AWS
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Optimisation de la chaîne logistique</h3>
                <p className="text-gray-600 mb-4">
                  Développement d'un système d'optimisation de la chaîne logistique basé sur l'IA, 
                  permettant de réduire les coûts de transport de 18% et d'améliorer les délais de livraison de 22%.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies :</strong> Python, PyTorch, PostgreSQL, Power BI
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Analyse de sentiment client</h3>
                <p className="text-gray-600 mb-4">
                  Mise en place d'un système d'analyse de sentiment pour les avis clients, 
                  permettant d'identifier les points d'amélioration et d'augmenter la satisfaction client de 15%.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies :</strong> NLP, Hugging Face, MongoDB, Tableau
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Détection de fraude pour une institution financière</h3>
                <p className="text-gray-600 mb-4">
                  Développement d'un système de détection de fraude en temps réel basé sur l'IA, 
                  permettant de réduire les pertes liées à la fraude de 42%.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies :</strong> Spark, Scikit-learn, Kafka, Elasticsearch
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Prêt à valoriser vos données avec l'IA ?</h2>
          <p className="text-xl mb-8 text-gray-900 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir 
            comment notre expertise en IA peut transformer vos données en avantage concurrentiel.
          </p>
          <Link href="/#contact">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}