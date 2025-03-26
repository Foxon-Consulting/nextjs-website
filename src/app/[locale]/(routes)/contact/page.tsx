import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { getContactInfo } from "@/lib/contact";
import ContactForm from "./ContactForm";
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Contact | Services IT & IA",
  description: "Contactez notre équipe d'experts pour discuter de vos projets IT, d'exploitation de données avec l'IA ou de formations pour décideurs.",
};

export default async function ContactPage() {
  const contactInfo = await getContactInfo();
  const t = await getTranslations('contact_page');

  return (
    <>
      {/* Section Prise de rendez-vous */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">{t('hero.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              {t('booking.description')}
            </p>
            <div className="flex justify-center">
              <a href={contactInfo.booking.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                  {contactInfo.booking.text}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact par email */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('form.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              {t('form.description')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Section Informations de contact */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3 dark:text-white">{t('info.address.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contactInfo.address.street}<br />
                {contactInfo.address.postal_code} {contactInfo.address.city}, {contactInfo.address.country}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3 dark:text-white">{t('info.email.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contactInfo.email.main}<br />
                {contactInfo.email.support}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3 dark:text-white">{t('info.phone.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contactInfo.phone.main}<br />
                {contactInfo.phone.hours}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
