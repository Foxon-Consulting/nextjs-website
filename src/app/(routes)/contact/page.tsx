import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Services IT & IA",
  description: "Contactez notre équipe d'experts pour discuter de vos projets IT, d'exploitation de données avec l'IA ou de formations pour décideurs.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe d&apos;experts est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e]"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e]"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e]"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e]"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div>
                <Button className="w-full md:w-auto bg-[#00f65e] hover:bg-[#f1f55c] text-gray-900 hover:text-gray-900 font-medium px-6 py-3 rounded-full">
                  Envoyer
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Adresse</h3>
              <p className="text-gray-600">
                123 Avenue des Champs-Élysées<br />
                75008 Paris, France
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-gray-600">
                contact@votreentreprise.com<br />
                support@votreentreprise.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Téléphone</h3>
              <p className="text-gray-600">
                +33 (0)1 23 45 67 89<br />
                Lun-Ven: 9h-18h
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 