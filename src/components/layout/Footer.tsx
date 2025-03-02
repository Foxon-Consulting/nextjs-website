import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/images/logo/new/GREEN-BLACK-C.png" 
              alt="Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto mb-4 dark:hidden" 
            />
            <Image 
              src="/images/logo/new/GREEN-WHITE-C.png" 
              alt="Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto mb-4 hidden dark:block" 
            />
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Expertise IT & IA au service de votre transformation numérique
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/consulting-it" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                  Consulting IT
                </Link>
              </li>
              <li>
                <Link href="/data-ia" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                  Exploitation de données avec l&apos;IA
                </Link>
              </li>
              <li>
                <Link href="/formation" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                  Formations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-white">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                  Notre approche
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-white">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              123 Avenue des Champs-Élysées<br />
              75008 Paris, France<br /><br />
              <a href="mailto:contact@votreentreprise.com" className="hover:text-[#00f65e]">
                contact@votreentreprise.com
              </a><br />
              <a href="tel:+33123456789" className="hover:text-[#00f65e]">
                +33 (0)1 23 45 67 89
              </a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 