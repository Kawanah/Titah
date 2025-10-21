// Validation utilities for forms
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[\d\s\+\-\(\)\.]+$/;

export const MAX_MESSAGE_LENGTH = 2000;
export const MAX_PHONE_LENGTH = 20;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  if (!email || !email.trim()) {
    return { isValid: false, error: "L'email est requis" };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, error: "Format d'email invalide" };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || !phone.trim()) {
    return { isValid: true }; // Phone is optional
  }
  if (phone.length > MAX_PHONE_LENGTH) {
    return { isValid: false, error: "Le numéro de téléphone est trop long" };
  }
  if (!PHONE_REGEX.test(phone)) {
    return { isValid: false, error: "Format de téléphone invalide" };
  }
  return { isValid: true };
};

export const validateMessage = (message: string): ValidationResult => {
  if (!message || !message.trim()) {
    return { isValid: false, error: "Le message est requis" };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { isValid: false, error: `Le message ne peut pas dépasser ${MAX_MESSAGE_LENGTH} caractères` };
  }
  return { isValid: true };
};

export const sanitizeString = (str: string, maxLength: number = 500): string => {
  return str.trim().slice(0, maxLength);
};
