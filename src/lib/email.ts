import nodemailer from 'nodemailer';
import { ContactInfo } from './contact';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData, contactInfo: ContactInfo): Promise<{ success: boolean; message: string }> {
  try {
    // Vérification de la configuration SMTP
    if (!contactInfo.email_smtp) {
      throw new Error("La configuration SMTP n'est pas disponible");
    }

    // Récupération des informations sensibles depuis les variables d'environnement
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      throw new Error("Les informations d'authentification email ne sont pas configurées");
    }

    // Configuration du transporteur
    const transporter = nodemailer.createTransport({
      host: contactInfo.email_smtp.host,
      port: contactInfo.email_smtp.port,
      secure: contactInfo.email_smtp.secure,
      auth: {
        user: emailUser,
        pass: emailPassword
      }
    });

    // Construction de l'email
    const mailOptions = {
      from: `"${contactInfo.email_smtp.from_name}" <${contactInfo.email_smtp.from_email}>`,
      to: contactInfo.email_smtp.to_email,
      replyTo: data.email,
      subject: `[Contact] ${data.subject}`,
      text: `
Nouveau message depuis le formulaire de contact

Nom: ${data.name}
Email: ${data.email}
Sujet: ${data.subject}

Message:
${data.message}
      `,
      html: `
<h2>Nouveau message depuis le formulaire de contact</h2>
<p><strong>Nom:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Sujet:</strong> ${data.subject}</p>
<h3>Message:</h3>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les meilleurs délais."
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ultérieurement."
    };
  }
} 