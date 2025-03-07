import { NextRequest, NextResponse } from 'next/server';
import { getContactInfo } from '@/lib/contact';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Récupération des données du formulaire
    const data = await request.json();
    
    // Validation basique des données
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { success: false, message: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }
    
    // Validation de l'email (simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Veuillez fournir une adresse email valide' },
        { status: 400 }
      );
    }
    
    // Récupération des informations de contact
    const contactInfo = await getContactInfo();
    
    // Envoi de l'email
    const result = await sendEmail(data, contactInfo);
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue lors du traitement de votre demande. Veuillez réessayer ultérieurement.' 
      },
      { status: 500 }
    );
  }
} 