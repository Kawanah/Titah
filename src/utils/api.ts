// API utility functions
import { supabaseFunctionsBaseUrl, publicAnonKey } from './supabase/info';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  establishmentType: string;
  service: string;
  options: string[];
  message: string;
  consent: boolean;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  try {
    if (!supabaseFunctionsBaseUrl) {
      throw new Error("La configuration Supabase est manquante. Vérifiez VITE_SUPABASE_URL.");
    }
    if (!publicAnonKey) {
      throw new Error("La clé anonyme Supabase est manquante. Vérifiez VITE_SUPABASE_ANON_KEY.");
    }

    const endpoint = `${supabaseFunctionsBaseUrl}/contact`;
    const response = await fetch(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Une erreur est survenue');
    }

    return {
      success: true,
      message: result.message || 'Demande envoyée avec succès'
    };
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    return {
      success: false,
      error: error.message || 'Impossible d\'envoyer votre demande. Veuillez réessayer.'
    };
  }
};
