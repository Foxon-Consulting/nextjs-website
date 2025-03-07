'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormResult {
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<FormResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      setResult({
        success: data.success,
        message: data.message,
      });

      if (data.success) {
        // Réinitialiser le formulaire si envoi réussi
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch {
      setResult({
        success: false,
        message: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer ultérieurement.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {result && (
        <div 
          className={`p-4 mb-4 rounded-md ${
            result.success 
              ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300' 
              : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300'
          }`}
        >
          {result.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e] dark:bg-gray-700 dark:text-white"
            placeholder="Votre nom"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e] dark:bg-gray-700 dark:text-white"
            placeholder="Votre email"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e] dark:bg-gray-700 dark:text-white"
          placeholder="Sujet de votre message"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f65e] dark:bg-gray-700 dark:text-white"
          placeholder="Votre message"
          required
        ></textarea>
      </div>

      <div>
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-[#00f65e] hover:bg-[#f1f55c] text-gray-900 hover:text-gray-900 font-medium px-6 py-3 rounded-full"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </Button>
      </div>
    </form>
  );
} 