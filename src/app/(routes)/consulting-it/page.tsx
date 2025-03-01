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
              <h2 className="text-3xl font-bold mb-6">Nos services de Consulting IT</h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre équipe d'experts vous accompagne dans tous vos projets IT, du développement 
                à la mise en production, en passant par l'audit et l'optimisation de vos infrastructures.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Développement de logiciel à la demande</h3>
                    <p className="text-gray-600">
                      Conception et développement de solutions logicielles sur mesure, adaptées à vos besoins spécifiques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pilotage de la chaîne logicielle</h3>
                    <p className="text-gray-600">
                      Gestion complète du cycle de vie de vos applications, du développement au déploiement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Audit technique</h3>
                    <p className="text-gray-600">
                      Analyse de vos méthodes de travail et proposition d'améliorations basées sur les derniers outils et technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-green text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Déploiement d'infrastructure</h3>
                    <p className="text-gray-600">
                      Expertise en environnements conteneurisés (K8S, ECS) et cloud (AWS, Azure) avec une approche Infrastructure as Code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Consulting IT" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies</h2>
            <p className="text-xl text-gray-600">Les technologies que nous maîtrisons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <CardTitle>Développement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>JavaScript / TypeScript</li>
                  <li>Python</li>
                  <li>Java / Kotlin</li>
                  <li>Go</li>
                  <li>React / Vue / Angular</li>
                  <li>Node.js / Express</li>
                  <li>Django / Flask</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faServer} />
                </div>
                <CardTitle>Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>AWS ECS / EKS</li>
                  <li>Terraform</li>
                  <li>Ansible</li>
                  <li>Prometheus / Grafana</li>
                  <li>ELK Stack</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faCloud} />
                </div>
                <CardTitle>Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Google Cloud</li>
                  <li>Serverless</li>
                  <li>Microservices</li>
                  <li>API Gateway</li>
                  <li>Lambda / Functions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary-green text-3xl mb-4">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <CardTitle>DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>CI/CD</li>
                  <li>GitHub Actions</li>
                  <li>Jenkins</li>
                  <li>GitLab CI</li>
                  <li>ArgoCD</li>
                  <li>Monitoring</li>
                  <li>Logging</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Études de cas</h2>
            <p className="text-xl text-gray-600">Découvrez nos réalisations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Application de visualisation de données industrielles</h3>
                <p className="text-gray-600 mb-4">
                  Développement d'une application full stack permettant de visualiser et d'analyser 
                  les données de production d'une usine en temps réel.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies :</strong> React, Node.js, MongoDB, WebSockets, Docker
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Audit de chaîne CI/CD</h3>
                <p className="text-gray-600 mb-4">
                  Audit complet de la chaîne CI/CD d'un département IT et mise en place 
                  d'améliorations pour réduire le temps de déploiement de 70%.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies :</strong> Jenkins, GitLab CI, Docker, Kubernetes
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Déploiement d'infrastructure cloud</h3>
                <p className="text-gray-600 mb-4">
                  Migration d'applications internes vers AWS avec mise en place d'une infrastructure 
                  as code et d'un pipeline de déploiement automatisé.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Technologies :</strong> AWS, Terraform, CloudFormation, ECS, Lambda
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Prêt à transformer votre infrastructure IT ?</h2>
          <p className="text-xl mb-8 text-gray-900 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir 
            comment notre expertise peut vous aider à atteindre vos objectifs.
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