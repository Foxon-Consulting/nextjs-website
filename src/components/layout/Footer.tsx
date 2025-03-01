import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Image src="/images/logo/logo-white.png" alt="Logo" width={180} height={50} className="h-12 w-auto" />
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">À propos</h3>
            <p className="text-sm text-gray-300">
              Nous vous accompagnons dans votre transformation numérique avec des services de consulting IT, 
              d'exploitation de données par l'IA et des formations pour les décideurs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/consulting-it" className="text-sm text-gray-300 hover:text-primary-green transition-colors">
                  Consulting IT
                </Link>
              </li>
              <li>
                <Link href="/data-ia" className="text-sm text-gray-300 hover:text-primary-green transition-colors">
                  Exploitation de données avec l'IA
                </Link>
              </li>
              <li>
                <Link href="/formation" className="text-sm text-gray-300 hover:text-primary-green transition-colors">
                  Formations
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#approach" className="text-sm text-gray-300 hover:text-primary-green transition-colors">
                  Notre Approche
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-sm text-gray-300 hover:text-primary-green transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-gray-300 hover:text-primary-green transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-gray-300 hover:text-primary-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-sm text-gray-300">
              Email: contact@example.com<br />
              Téléphone: +33 1 23 45 67 89<br />
              Adresse: 123 Rue de l'Innovation, 75000 Paris
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 