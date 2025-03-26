import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faPython,
  faJava,
  faReact,
  faAws,
  faDocker,
  faGitAlt
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';

// Types pour les services
interface Service {
  title: string;
  description: string;
}

// Types pour les étapes du processus
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// Types pour les études de cas
interface CaseStudy {
  title: string;
  description: string;
  technologies: string[];
}

export const metadata = {
  title: "Consulting IT | Services IT & IA",
  description: "Services de consulting IT pour le développement de logiciels, le pilotage de la chaîne logicielle, l'audit technique et le déploiement d'infrastructure.",
};

export default function ConsultingIT() {
  const t = useTranslations('consulting_page');
  const commonT = useTranslations('common');

  // Accès aux services
  const services = t.raw('services.items') as Service[];

  // Accès aux étapes du processus
  const processSteps = t.raw('process.steps') as ProcessStep[];

  // Accès aux études de cas
  const caseStudies = t.raw('case_studies.items') as CaseStudy[];

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative py-20 consulting-header service-header overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/consulting_it.mp4" type="video/mp4" />
          </video>
          {/* Overlay avec gradient linéaire */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)"
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('hero.title')}</h1>
            <p className="text-xl mb-8 text-white">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">{t('services.title')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t('services.description')}
            </p>

            <div className="space-y-6">
              {services.map((service: Service, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="text-[#00f65e] text-xl mr-4 mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{t('process.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step: ProcessStep, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#00f65e] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{t('technologies.title')}</h2>

          {Object.entries(t.raw('technologies.categories') as Record<string, string>).map(([key, name], categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">{name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {getTechnologiesByCategory(key).map((tech, techIndex) => {
                  const { icon, iconColor, isCustomIcon } = getTechnologyIcon(tech);
                  return (
                    <div key={techIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
                      <div style={{ color: iconColor }} className="text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                        {isCustomIcon ? (
                          <Image
                            src={icon as string}
                            alt={tech}
                            width={24}
                            height={24}
                            className="w-[1em] h-[1em]"
                          />
                        ) : (
                          <FontAwesomeIcon icon={icon as IconDefinition} className="w-[1em] h-[1em]" />
                        )}
                      </div>
                      <h3 className="font-bold dark:text-white">{tech}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{t('case_studies.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study: CaseStudy, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 dark:text-white">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{t('cta.title')}</h2>
          <p className="text-xl font-semibold text-center mb-6">
            {t('cta.description')}
          </p>
          <Link href="/contact">
            <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
              {commonT('contact_us')}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

// Fonction utilitaire pour obtenir les technologies par catégorie
function getTechnologiesByCategory(category: string): string[] {
  switch(category) {
    case 'development':
      return ['C++', 'Python', 'Java','JavaScript', 'TypeScript', 'React', 'NextJS', 'Tauri'];
    case 'devops':
      return ['Git', 'GitHub Actions', 'Gitlab', 'Jenkins', 'Docker', 'Kubernetes', 'Helm', 'Terraform' ];
    case 'cloud':
      return ['AWS', 'Azure', 'GCP'];
    default:
      return [];
  }
}

// Fonction utilitaire pour obtenir l'icône et la couleur d'une technologie
function getTechnologyIcon(tech: string): { icon: IconDefinition | string; iconColor: string; isCustomIcon?: boolean } {
  switch(tech.toLowerCase()) {
    case 'c++':
      return { icon: '/icons/tech/cplusplus.svg', iconColor: "#007ACC", isCustomIcon: true };

    case 'javascript':
      return { icon: faJs, iconColor: "#F7DF1E" };
    case 'typescript':
      return { icon: faJs, iconColor: "#007ACC" };
    case 'python':
      return { icon: faPython, iconColor: "#3776AB" };
    case 'java':
      return { icon: faJava, iconColor: "#007396" };
    case 'react':
    case 'reactjs':
      return { icon: faReact, iconColor: "#61DAFB" };
    case 'nextjs':
      return { icon: '/icons/tech/nextjs.svg', iconColor: "#000000", isCustomIcon: true };
    case 'node':
    case 'nodejs':
      return { icon: faCode, iconColor: "#68a063" };
    case 'aws':
      return { icon: faAws, iconColor: "#FF9900" };
    case 'azure':
      return { icon: '/icons/tech/azure.svg', iconColor: "#0078D4", isCustomIcon: true };
    case 'gcp':
      return { icon: '/icons/tech/gcp.svg', iconColor: "#4285F4", isCustomIcon: true };
    case 'docker':
      return { icon: faDocker, iconColor: "#2496ED" };
    case 'kubernetes':
    case 'k8s':
      return { icon: '/icons/tech/kubernetes.svg', iconColor: "#326CE5", isCustomIcon: true };
    case 'helm':
      return { icon: '/icons/tech/helm.svg', iconColor: "#007ACC", isCustomIcon: true };
    case 'terraform':
      return { icon: '/icons/tech/terraform.svg', iconColor: "#5c4ee5", isCustomIcon: true };
    case 'git':
      return { icon: faGitAlt, iconColor: "#F05032" };
    case 'gitlab':
      return { icon: '/icons/tech/gitlab.svg', iconColor: "#E24329", isCustomIcon: true };
    case 'github actions':
      return { icon: '/icons/tech/githubactions.svg', iconColor: "#181717", isCustomIcon: true };
    case 'jenkins':
      return { icon: '/icons/tech/jenkins.svg', iconColor: "#335061", isCustomIcon: true };
    case 'tauri':
      return { icon: '/icons/tech/tauri.svg', iconColor: "#242424", isCustomIcon: true };
    default:
      return { icon: faCheckCircle, iconColor: "#00f65e" };
  }
}
