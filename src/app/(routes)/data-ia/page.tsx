import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Exploitation de données avec l&apos;IA | Services IT & IA",
  description: "Services d&apos;exploitation de données avec l&apos;intelligence artificielle pour optimiser vos performances et prendre des décisions éclairées.",
};

export default function DataIA() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative py-20 data-ia-header service-header overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/data_exploitation.mp4" type="video/mp4" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Exploitation de données avec l&apos;IA</h1>
            <p className="text-xl mb-8 text-white">
              Transformez vos données en insights stratégiques grâce à nos solutions 
              d&apos;intelligence artificielle sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Nos services d&apos;exploitation de données</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Notre équipe d&apos;experts en data science et en IA vous aide à tirer le meilleur parti 
              de vos données pour améliorer vos processus et prendre des décisions éclairées.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Collecte et intégration de données</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mise en place de systèmes de collecte et d&apos;intégration de données provenant de sources diverses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Stockage optimisé et sécurisé</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Conception d&apos;architectures de stockage performantes et sécurisées pour vos données.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Analyse prédictive et prescriptive</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Développement de modèles d&apos;IA pour prédire les tendances et recommander des actions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00f65e] text-xl mr-4 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Tableaux de bord interactifs</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Création de visualisations interactives pour explorer et comprendre vos données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Notre processus d&apos;exploitation de données</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Collecte</h3>
              <p className="text-gray-600 dark:text-gray-400">Identification et collecte des données pertinentes pour votre activité</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Traitement</h3>
              <p className="text-gray-600 dark:text-gray-400">Nettoyage, transformation et enrichissement des données brutes</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Analyse</h3>
              <p className="text-gray-600 dark:text-gray-400">Application d&apos;algorithmes d&apos;IA pour extraire des insights pertinents</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Visualisation</h3>
              <p className="text-gray-600 dark:text-gray-400">Présentation des résultats sous forme de tableaux de bord interactifs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technologies utilisées</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* LLM */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">LLM</span>
              </div>
              <h3 className="font-bold dark:text-white">Large Language Models</h3>
            </div>

            {/* Embeddings */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">EMB</span>
              </div>
              <h3 className="font-bold dark:text-white">Embeddings</h3>
            </div>

            {/* Vector Databases */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">VDB</span>
              </div>
              <h3 className="font-bold dark:text-white">Vector Databases</h3>
            </div>

            {/* Prompt Engineering */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">PE</span>
              </div>
              <h3 className="font-bold dark:text-white">Prompt Engineering</h3>
            </div>

            {/* RAG */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">RAG</span>
              </div>
              <h3 className="font-bold dark:text-white">Retrieval Augmented Generation</h3>
            </div>

            {/* LangChain */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">LC</span>
              </div>
              <h3 className="font-bold dark:text-white">LangChain</h3>
            </div>

            {/* Hugging Face */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-3xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">🤗</span>
              </div>
              <h3 className="font-bold dark:text-white">Hugging Face</h3>
            </div>

            {/* Fine-tuning */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">FT</span>
              </div>
              <h3 className="font-bold dark:text-white">Fine-tuning</h3>
            </div>

            {/* AWS Bedrock */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">AWS</span>
              </div>
              <h3 className="font-bold dark:text-white">AWS Bedrock</h3>
            </div>

            {/* AWS SageMaker */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">SM</span>
              </div>
              <h3 className="font-bold dark:text-white">AWS SageMaker</h3>
            </div>

            {/* AWS Datazone */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 text-2xl font-bold p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-inner">DZ</span>
              </div>
              <h3 className="font-bold dark:text-white">AWS Datazone</h3>
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
              <h3 className="text-xl font-bold mb-4 dark:text-white">Maintenance prédictive pour l&apos;industrie</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Développement d&apos;un système de maintenance prédictive basé sur l&apos;IA pour une entreprise industrielle, 
                permettant de réduire les temps d&apos;arrêt de 35% et les coûts de maintenance de 25%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">IoT</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Time Series</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Détection de fraude pour services financiers</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Mise en place d&apos;un système de détection de fraude en temps réel pour une institution financière, 
                améliorant la détection de 60% tout en réduisant les faux positifs de 40%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Kafka</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Spark</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Real-time</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Optimisation de la chaîne logistique</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Développement d&apos;un système d&apos;optimisation de la chaîne logistique basé sur l&apos;IA pour un distributeur, 
                réduisant les coûts de transport de 15% et les délais de livraison de 20%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Optimisation</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">OR-Tools</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">GCP</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Analyse de sentiment pour le service client</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Implémentation d&apos;un système d&apos;analyse de sentiment pour le service client d&apos;une entreprise de télécommunications, 
                améliorant la satisfaction client de 25% et réduisant le temps de résolution des problèmes de 30%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">NLP</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">BERT</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Hugging Face</span>
                <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Azure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Prêt à valoriser vos données ?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en exploitation de données 
            et découvrir comment nous pouvons vous aider à tirer le meilleur parti de vos données.
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