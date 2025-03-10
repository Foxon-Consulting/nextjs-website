import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { getContactInfo } from "@/lib/contact";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Services IT & IA",
  description: "Contactez notre équipe d&apos;experts pour discuter de vos projets IT, d&apos;exploitation de données avec l&apos;IA ou de formations pour décideurs.",
};

export default async function ContactPage() {
  const contactInfo = await getContactInfo();
  
  return (
    <>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Contactez-nous</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Notre équipe d&apos;experts est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
            </p>
            <div className="flex justify-center">
              <a href={contactInfo.booking.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#00f65e] text-gray-900 hover:bg-[#f1f55c] px-8 py-3 rounded-full text-lg">
                  {contactInfo.booking.text}
                </Button>
              </a>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3 dark:text-white">Adresse</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contactInfo.address.street}<br />
                {contactInfo.address.postal_code} {contactInfo.address.city}, {contactInfo.address.country}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contactInfo.email.main}<br />
                {contactInfo.email.support}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3 dark:text-white">Téléphone</h3>
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