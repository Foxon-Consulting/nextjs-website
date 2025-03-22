import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { getContactInfo } from "@/lib/contact";
import { Link } from '@/i18n/navigation';

export async function Footer() {
  const contactInfo = await getContactInfo();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              {/* <Link href={contactInfo.social_media.twitter} className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
              </Link> */}
              <Link href={contactInfo.social_media.linkedin} className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </Link>
              {/* <Link href={contactInfo.social_media.facebook} className="text-gray-600 dark:text-gray-400 hover:text-[#00f65e]">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              </Link> */}
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
            <h3 className="font-bold text-lg mb-4 dark:text-white">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              {contactInfo.address.street}<br />
              {contactInfo.address.postal_code} {contactInfo.address.city}, {contactInfo.address.country}<br /><br />
              <a href={`mailto:${contactInfo.email.main}`} className="hover:text-[#00f65e]">
                {contactInfo.email.main}
              </a><br />
              <a href={`tel:${contactInfo.phone.main.replace(/\s/g, '')}`} className="hover:text-[#00f65e]">
                {contactInfo.phone.main}
              </a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} {contactInfo.company_name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 