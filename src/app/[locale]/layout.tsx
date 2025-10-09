import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { StructuredData } from '@/components/StructuredData';

// Empêcher FontAwesome de charger ses propres styles CSS
// qui peuvent causer un flash d'icônes non stylisées
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: 'Foxon - Excellence IT & IA pour les Entreprises',
    template: '%s | Foxon - Consulting IT & IA'
  },
  description: 'Foxon accompagne votre transformation numérique avec des services de conseil IT, exploitation de données avec l\'IA et formations pour décideurs. Expertise technique et solutions sur mesure.',
  keywords: [
    // Français
    'consulting IT',
    'intelligence artificielle',
    'IA',
    'transformation numérique',
    'développement logiciel',
    'exploitation données',
    'formation IA',
    'audit technique',
    'infrastructure IT',
    'analyse prédictive',
    'automatisation processus',
    'data science',
    'machine learning',
    'conseil technologique',
    'solutions sur mesure',
    // Anglais
    'IT consulting',
    'artificial intelligence',
    'AI',
    'digital transformation',
    'software development',
    'data exploitation',
    'AI training',
    'technical audit',
    'IT infrastructure',
    'predictive analytics',
    'process automation',
    'data analytics',
    'business intelligence',
    'technology consulting',
    'custom solutions',
    'cloud computing',
    'DevOps',
    'cybersecurity',
    'enterprise solutions',
    'digital innovation',
    // Allemand
    'IT-Beratung',
    'künstliche Intelligenz',
    'KI',
    'digitale Transformation',
    'Softwareentwicklung',
    'Datenauswertung',
    'KI-Schulung',
    'technische Beratung',
    'IT-Infrastruktur',
    'Unternehmensberatung',
    // Espagnol
    'consultoría IT',
    'inteligencia artificial',
    'transformación digital',
    'desarrollo de software',
    'explotación de datos',
    'formación IA',
    'auditoría técnica',
    'infraestructura IT',
    'consultoría tecnológica'
  ],
  authors: [{ name: 'Foxon' }],
  creator: 'Foxon',
  publisher: 'Foxon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://foxon.fr'), // Remplacez par votre domaine réel
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
      'de-DE': '/de',
      'es-ES': '/es',
    },
  },
  openGraph: {
    title: 'Foxon - Excellence IT & IA pour les Entreprises',
    description: 'Accompagnement dans la transformation numérique avec des services de conseil IT, exploitation de données avec l\'IA et formations pour décideurs.',
    url: 'https://foxon.fr',
    siteName: 'Foxon',
    images: [
      {
        url: '/images/logo/logo-white.png',
        width: 1200,
        height: 630,
        alt: 'Foxon - Consulting IT & IA',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foxon - Excellence IT & IA pour les Entreprises',
    description: 'Accompagnement dans la transformation numérique avec des services de conseil IT, exploitation de données avec l\'IA et formations.',
    images: ['/images/logo/logo-white.png'],
    creator: '@foxon', // Remplacez par votre handle Twitter réel
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'votre-code-google-search-console', // À ajouter quand vous aurez configuré GSC
    // yandex: 'votre-code-yandex',
    // yahoo: 'votre-code-yahoo',
  },
  category: 'technology',
  classification: 'Business',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'apple-mobile-web-app-title': 'Foxon',
    'application-name': 'Foxon',
    'msapplication-TileColor': '#00f65e',
    'theme-color': '#00f65e',
  },
};



export default async function RootLayout({
  children,
  params
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  const locale = (await params).locale;
  if (!hasLocale(routing.locales, locale)) notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <StructuredData />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
