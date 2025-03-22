// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountUp } from "@/components/ui/CountUp";
// import { getContactInfo } from "@/lib/contact";
// import { getLandingPageData } from "@/lib/landing";
import { getIconByName } from "@/lib/icons";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type ServiceType = 'consulting' | 'data' | 'training';
type KeyFigure = {
  icon: string;
  value: number;
  label: string;
};

type Features = {
  [key in ServiceType]: Record<string, string>;
};

export default function Home() {
  // const contactInfo = await getContactInfo();
  // const landingData = await getLandingPageData();
  const t = useTranslations();
  
  // Accès aux services avec vérification de type
  const services: ServiceType[] = ['consulting', 'data', 'training'];
  const features: Features = {
    consulting: t.raw('landing_page.services.consulting.features'),
    data: t.raw('landing_page.services.data.features'),
    training: t.raw('landing_page.services.training.features')
  };

  // Accès aux chiffres clés
  const keyFigures: KeyFigure[] = ['clients', 'projects', 'experience', 'satisfaction'].map(key => ({
    icon: t(`landing_page.key_figures.${key}.icon`),
    value: Number(t(`landing_page.key_figures.${key}.value`)),
    label: t(`landing_page.key_figures.${key}.label`)
  }));

  // Accès aux paragraphes et valeurs "about"
  const aboutParagraphs: Record<string, string> = t.raw('landing_page.about.paragraphs');
  const aboutValues: Record<string, { icon: string; title: string; description: string }> = t.raw('landing_page.about.values');
  
  // Accès aux FAQ
  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];
  const faqItems = faqKeys.map(key => ({
    question: t(`landing_page.faq.${key}.question`),
    reponse: t(`landing_page.faq.${key}.reponse`)
  }));

  
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
        
        <div className="container relative z-10 mx-auto px-4 flex items-center min-h-[60vh]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("landing_page.hero.title")}
            </h1>
            <p className="text-xl mb-8 text-white">
              {t("landing_page.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                  {t("common.contact_us")}
                </Button>
              </Link>
              <Link href="/#services">
                <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                  {t("landing_page.hero.services_button")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              {t('landing_page.services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('landing_page.services.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                    <FontAwesomeIcon icon={getIconByName(t(`landing_page.services.${service}.icon`))} />
                  </div>
                  <CardTitle className="text-center dark:text-white">
                    {t(`landing_page.services.${service}.title`)}
                  </CardTitle>
                  <CardDescription className="text-center dark:text-gray-400">
                    {t(`landing_page.services.${service}.description`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  <p className="mb-4">
                    {t(`landing_page.services.${service}.details`)}
                  </p>
                  <ul className="space-y-2">
                    {features[service] && Object.entries(features[service]).map(([key, value]) => (
                      <li key={key}>• {value}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href={t(`landing_page.services.${service}.link`)}>
                    <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c]">
                      {t('common.learn_more')}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section id="key-figures" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFigures.map((figure, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                  <FontAwesomeIcon icon={getIconByName(figure.icon)} />
                </div>
                <div className="text-3xl font-bold mb-2 dark:text-white">
                  <CountUp end={figure.value} duration={2.5} />+
                </div>
                <p className="text-gray-600 dark:text-gray-400">{figure.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">{t("landing_page.about.title")}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {t("landing_page.about.description")}
              </p>
              {Object.entries(aboutParagraphs).map(([key, text]: [string, string]) => (
                <p key={key} className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {text}
                </p>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">{t("landing_page.about.values_title")}</h3>
              <ul className="space-y-4">
                {Object.entries(aboutValues).map(([key, value]: [string, { icon: string; title: string; description: string }]) => (
                  <li key={key} className="flex items-start">
                    <div className="text-[#00f65e] text-xl mr-4 mt-1">
                      <FontAwesomeIcon icon={getIconByName(value.icon)} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 dark:text-white">{value.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">{t("landing_page.faq.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("landing_page.faq.description")}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index + 1}`} 
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-4 last:mb-0"
                >
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
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{t("landing_page.cta.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            {t("landing_page.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                {t("common.contact_us")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
