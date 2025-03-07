import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountUp } from "@/components/ui/CountUp";
import { getContactInfo } from "@/lib/contact";
import { getLandingPageData } from "@/lib/landing";
import { getIconByName } from "@/lib/icons";

export default async function Home() {
  const contactInfo = await getContactInfo();
  const landingData = await getLandingPageData();
  
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
              {landingData.hero.title}
            </h1>
            <p className="text-xl mb-8 text-white">
              {landingData.hero.description}
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
                <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
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
            {landingData.services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="text-[#00f65e] text-3xl mb-4 flex justify-center">
                    <FontAwesomeIcon icon={getIconByName(service.icon)} />
                  </div>
                  <CardTitle className="text-center dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-center dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  <p className="mb-4">
                    {service.details}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href={service.link}>
                    <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c]">
                      En savoir plus
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
            {landingData.key_figures.map((figure, index) => (
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
              <h2 className="text-3xl font-bold mb-6 dark:text-white">{landingData.about.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {landingData.about.description}
              </p>
              {landingData.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Nos valeurs</h3>
              <ul className="space-y-4">
                {landingData.about.values.map((value, index) => (
                  <li key={index} className="flex items-start">
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
            {landingData.testimonials.map((testimonial, index) => (
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
              {landingData.faq.map((item, index) => (
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
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{landingData.cta.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            {landingData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                Contactez-nous
              </Button>
            </Link>
            <a href={contactInfo.booking.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                {contactInfo.booking.text}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
