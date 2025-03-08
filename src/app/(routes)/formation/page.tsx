import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLightbulb, 
  faRobot, 
  faCheckCircle,
  faChartLine,
  faLink
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { readFile } from 'fs/promises';
import yaml from 'js-yaml';
import path from 'path';

// Types pour les formations
interface Formation {
  title: string;
  icon: string;
  duration: string;
  description: string;
  modules: string[];
}

// Types pour l'approche pédagogique
interface PedagogieItem {
  title: string;
  description: string;
  step: number;
}

// Types pour la FAQ
interface FaqItem {
  question: string;
  reponse: string;
}

// Type pour les témoignages
interface Testimonial {
  content: string;  // contenu du témoignage
  author: string;   // nom de l'auteur
  position: string; // poste de l'auteur
  company: string;  // entreprise de l'auteur
}

// Type pour toutes les données de la page
interface PageData {
  hero: {
    title: string;
    description: string;
    video: string;
  };
  formations: Formation[];
  pedagogie: PedagogieItem[];
  faq: FaqItem[];
  testimonials: Testimonial[];
  cta: {
    title: string;
    description: string;
  };
}

export const metadata = {
  title: "Formations | Services IT & IA",
  description: "Formations techniques pour les décideurs sur l&apos;IA et l&apos;automatisation des processus.",
};

// Fonction pour charger les données YAML des formations
async function loadFormationsData(): Promise<PageData> {
  try {
    // Chemin vers le fichier YAML
    const filePath = path.join(process.cwd(), 'src/app/(routes)/formation/formations.yaml');
    
    // Lire le contenu du fichier de manière asynchrone
    const fileContents = await readFile(filePath, 'utf8');
    
    // Parser le contenu YAML
    const data = yaml.load(fileContents) as {
      hero?: {
        title: string;
        description: string;
        video: string;
      };
      formations: Formation[];
      pedagogie: PedagogieItem[];
      faq: FaqItem[];
      testimonials: Testimonial[];
      cta?: {
        title: string;
        description: string;
      };
    };
    
    // Vérifier la structure du fichier YAML
    if (!data || !data.formations || !Array.isArray(data.formations)) {
      console.error('Structure du fichier YAML incorrecte');
      throw new Error('Structure du fichier YAML incorrecte');
    }
    
    return {
      hero: data.hero || {
        title: "Formations pour les décideurs",
        description: "Des formations techniques adaptées aux décideurs pour comprendre et exploiter le potentiel de l'IA et de l'automatisation dans votre entreprise.",
        video: "/videos/formation.mp4"
      },
      formations: data.formations,
      pedagogie: data.pedagogie || [],
      faq: data.faq || [],
      testimonials: data.testimonials || [],
      cta: data.cta || {
        title: "Prêt à former vos équipes ?",
        description: "Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos formations peuvent transformer votre approche de l'IA et de l'automatisation."
      }
    };
  } catch (error) {
    console.error('Erreur lors du chargement du fichier YAML:', error);
    // Créer un message d'erreur sécurisé sans dépendre directement de error.message
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Erreur inconnue';
    throw new Error(`Impossible de charger les données de formation depuis le fichier YAML: ${errorMessage}`);
  }
}

// Fonction pour récupérer l'icône à partir du nom
function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'faLightbulb':
      return faLightbulb;
    case 'faRobot':
      return faRobot;
    case 'faChartLine':
      return faChartLine;
    case 'faLink':
      return faLink;
    default:
      return faLightbulb;
  }
}

export default async function Formation() {
  try {
    // Charger les données depuis les fichiers YAML
    const { formations, pedagogie, faq, testimonials, hero, cta } = await loadFormationsData();
    
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
              <source src={hero.video} type="video/mp4" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{hero.title}</h1>
              <p className="text-xl mb-8 text-white">
                {hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Nos formations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {formations.map((formation, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                    <FontAwesomeIcon icon={getIconComponent(formation.icon)} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center dark:text-white">{formation.title}</h3>
                  <div className="mb-4 text-center">
                    <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">{formation.duration}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {formation.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {formation.modules.map((module, moduleIndex) => (
                      <li key={moduleIndex} className="flex items-start">
                        <div className="text-[#00f65e] text-sm mr-2 mt-1">
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{module}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Notre approche pédagogique</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pedagogie.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                  <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Témoignages</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Ce que nos clients disent de nos formations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="text-[#00f65e]">
                        <span className="text-2xl">★★★★★</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <p className="font-bold dark:text-white">{testimonial.author}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Questions fréquentes</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white dark:bg-gray-800 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline dark:text-white">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                      {item.reponse}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">{cta.title}</h2>
            <p className="text-xl font-semibold text-center mb-6 text-gray-600 dark:text-gray-400">
              {cta.description}
            </p>
            <Link href="/contact">
              <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                Demander un devis
              </Button>
            </Link>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Erreur lors de la récupération des données</h1>
        <p className="text-xl text-center">
          {error instanceof Error ? error.message : 'Erreur inconnue'}
        </p>
        <Link href="/contact">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-lg">
            Contactez-nous pour plus d&apos;informations
          </Button>
        </Link>
      </div>
    );
  }
} 