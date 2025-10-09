import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://foxon.fr/#organization",
        "name": "Foxon",
        "url": "https://foxon.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://foxon.fr/images/logo/logo-white.png",
          "width": 300,
          "height": 100
        },
        "description": "Foxon accompagne votre transformation numérique avec des services de conseil IT, exploitation de données avec l'IA et formations pour décideurs.",
        "foundingDate": "2012",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["French", "English", "German", "Spanish"]
        },
        "sameAs": [
          // Ajoutez vos réseaux sociaux ici
          // "https://www.linkedin.com/company/foxon",
          // "https://twitter.com/foxon"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://foxon.fr/#website",
        "url": "https://foxon.fr",
        "name": "Foxon - Excellence IT & IA pour les Entreprises",
        "description": "Services de conseil IT, exploitation de données avec l'IA et formations pour décideurs",
        "publisher": {
          "@id": "https://foxon.fr/#organization"
        },
        "inLanguage": ["fr-FR", "en-US", "de-DE", "es-ES"]
      },
      {
        "@type": "Service",
        "name": "Conseil IT",
        "description": "Expertise technique et accompagnement stratégique pour vos projets IT",
        "provider": {
          "@id": "https://foxon.fr/#organization"
        },
        "serviceType": "IT Consulting",
        "areaServed": "FR"
      },
      {
        "@type": "Service",
        "name": "Exploitation de données avec l'IA",
        "description": "Valorisez vos données grâce à l'intelligence artificielle",
        "provider": {
          "@id": "https://foxon.fr/#organization"
        },
        "serviceType": "Data Analytics",
        "areaServed": "FR"
      },
      {
        "@type": "Service",
        "name": "Formations",
        "description": "Formations techniques adaptées aux décideurs",
        "provider": {
          "@id": "https://foxon.fr/#organization"
        },
        "serviceType": "Training",
        "areaServed": "FR"
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
