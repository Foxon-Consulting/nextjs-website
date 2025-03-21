import path from 'path';
import { readFile } from 'fs/promises';
import yaml from 'js-yaml';

export interface ContactInfo {
  company_name: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  email: {
    main: string;
    support: string;
  };
  phone: {
    main: string;
    hours: string;
  };
  social_media: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
  booking: {
    url: string;
    text: string;
  };
  email_smtp?: {
    host: string;
    port: number;
    secure: boolean;
    from_email: string;
    from_name: string;
    to_email: string;
  };
}

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/[locale]/(routes)/contact/contact.yaml');
    const fileContents = await readFile(filePath, 'utf8');
    const data = yaml.load(fileContents) as ContactInfo;
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des informations de contact:', error);
    
    // Retourner des données par défaut en cas d'erreur
    return {
      company_name: "Votre Entreprise",
      address: {
        street: "123 Avenue des Champs-Élysées",
        city: "Paris",
        postal_code: "75008",
        country: "France"
      },
      email: {
        main: "contact@votreentreprise.com",
        support: "support@votreentreprise.com"
      },
      phone: {
        main: "+33 (0)1 23 45 67 89",
        hours: "Lun-Ven: 9h-18h"
      },
      social_media: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      },
      booking: {
        url: "https://book.morgen.so/foxonconsulting/meeting",
        text: "Prendre rendez-vous"
      }
    };
  }
} 