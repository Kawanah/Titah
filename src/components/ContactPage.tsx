import { useState } from 'react';
import svgPaths from '../imports/svg-c4a83rqufu';
import { GradientBackground } from './shared/GradientBackground';
import { CONTAINER_CLASSES, BUTTON_CLASSES } from '../utils/constants';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    establishmentType: '',
    service: '',
    options: [] as string[],
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Client-side validation
    const { validateEmail, validatePhone, validateMessage } = await import('../utils/validation');
    
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      setError(emailValidation.error || 'Email invalide');
      setIsSubmitting(false);
      return;
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      setError(phoneValidation.error || 'Téléphone invalide');
      setIsSubmitting(false);
      return;
    }

    const messageValidation = validateMessage(formData.message);
    if (!messageValidation.isValid) {
      setError(messageValidation.error || 'Message invalide');
      setIsSubmitting(false);
      return;
    }

    try {
      const { submitContactForm } = await import('../utils/api');
      const result = await submitContactForm(formData);

      if (!result.success) {
        throw new Error(result.error);
      }

      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          establishmentType: '',
          service: '',
          options: [],
          message: '',
          consent: false
        });
      }, 5000);

    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de l\'envoi du formulaire');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'consent') {
        setFormData({ ...formData, consent: checkbox.checked });
      } else {
        const optionValue = checkbox.value;
        setFormData({
          ...formData,
          options: checkbox.checked
            ? [...formData.options, optionValue]
            : formData.options.filter(opt => opt !== optionValue)
        });
      }
    } else if (type === 'radio') {
      setFormData({ ...formData, service: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <GradientBackground className="py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[152px] text-center">
          <h1 className="font-bold text-black mb-6 text-[53px]">
            <span>Parlons de </span>
            <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: 'transparent' }}>
              votre projet
            </span>
          </h1>
          <div className="max-w-[714px] mx-auto space-y-6">
            <p className="text-[#44484f]">
              Et voyons comment créer ensemble un site web clair, rapide et évolutif, pensé pour vos réservations directes.
            </p>
            <p className="text-[#44484f]">
              Remplissez le formulaire ci-dessous. Nous vous répondrons sous 48 h.
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* Form Section */}
      <div className="bg-white py-16">
        <div className="max-w-[608px] mx-auto px-4">
          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-[5px] text-green-800 text-center">
              ✓ Merci ! Votre demande a été envoyée. Nous vous contacterons d'ici 48h maximum.
            </div>
          )}
          
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-[5px] text-red-800 text-center">
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Prénom et Nom */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-[#1b1c1e]">
                  Prénom <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-9 px-3 bg-[#f3f3f5] border border-[#d1d5dc] rounded-[5px] focus:outline-none focus:border-[#9b3eff]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-[#1b1c1e]">
                  Nom <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-9 px-3 bg-[#f3f3f5] border border-[#d1d5dc] rounded-[5px] focus:outline-none focus:border-[#9b3eff]"
                />
              </div>
            </div>

            {/* Email et Téléphone */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[#1b1c1e]">
                  Email <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-9 px-3 bg-[#f3f3f5] border border-[#d1d5dc] rounded-[5px] focus:outline-none focus:border-[#9b3eff]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-[#1b1c1e]">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-9 px-3 bg-[#f3f3f5] border border-[#d1d5dc] rounded-[5px] focus:outline-none focus:border-[#9b3eff]"
                />
              </div>
            </div>

            {/* Type d'établissement */}
            <div className="space-y-2">
              <label htmlFor="establishmentType" className="block text-[#1b1c1e]">
                Type d'établissement <span className="text-[#fb2c36]">*</span>
              </label>
              <select
                id="establishmentType"
                name="establishmentType"
                required
                value={formData.establishmentType}
                onChange={handleChange}
                className="w-full h-9 px-3 bg-[#f3f3f5] border border-[#d1d5dc] rounded-[5px] focus:outline-none focus:border-[#9b3eff] text-[#717182]"
              >
                <option value="">Sélectionnez votre activité</option>
                <option value="hotel">Hôtel</option>
                <option value="camping">Camping</option>
                <option value="gite">Gîte</option>
                <option value="chambre-hote">Chambre d'hôtes</option>
                <option value="village-vacances">Village vacances</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Service souhaité */}
            <div className="space-y-3">
              <label className="block text-[#1b1c1e]">
                Service souhaité <span className="text-[#fb2c36]">*</span>
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="landing-page-express"
                    checked={formData.service === 'landing-page-express'}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Landing Page Express</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="site-vitrine-complet"
                    checked={formData.service === 'site-vitrine-complet'}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Site Vitrine Complet</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="refonte-modernisation"
                    checked={formData.service === 'refonte-modernisation'}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Refonte & Modernisation</span>
                </label>
              </div>
            </div>

            {/* Options souhaitées */}
            <div className="space-y-3">
              <label className="block text-[#1b1c1e]">Options souhaitées</label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="pages-additionnelles"
                    checked={formData.options.includes('pages-additionnelles')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Pages additionnelles</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="personnalisation-avancee"
                    checked={formData.options.includes('personnalisation-avancee')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Personnalisation avancée</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="accompagnement-editorial"
                    checked={formData.options.includes('accompagnement-editorial')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Accompagnement éditorial</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="gestion-avis"
                    checked={formData.options.includes('gestion-avis')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Gestion des avis & e-réputation</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="version-multilingue"
                    checked={formData.options.includes('version-multilingue')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Version multilingue</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="pack-seo"
                    checked={formData.options.includes('pack-seo')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Pack SEO avancé</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="google-business"
                    checked={formData.options.includes('google-business')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Google Business Profile</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="email-marketing"
                    checked={formData.options.includes('email-marketing')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Email marketing</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="automatisations"
                    checked={formData.options.includes('automatisations')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">Automatisations</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="option"
                    value="faq-interactive"
                    checked={formData.options.includes('faq-interactive')}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff]"
                  />
                  <span className="text-gray-600">FAQ interactive</span>
                </label>
              </div>
            </div>

            {/* Décrivez votre projet */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-[#1b1c1e]">
                Décrivez votre projet <span className="text-[#fb2c36]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={3}
                maxLength={2000}
                className="w-full px-3 py-2 bg-[#f3f3f5] border border-[#d1d5dc] rounded-[5px] focus:outline-none focus:border-[#9b3eff] resize-none text-[#717182]"
                placeholder="Parlez-nous de vos besoins, vos objectifs, votre situation actuelle..."
              />
              <div className="text-xs text-[#717182] text-right">
                {formData.message.length}/2000 caractères
              </div>
            </div>

            {/* Accord de confidentialité */}
            <div className="space-y-3">
              <label className="block text-[#1b1c1e]">
                Accord de confidentialité <span className="text-[#fb2c36]">*</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded accent-[#9b3eff] shrink-0"
                />
                <span className="text-gray-600">
                  En soumettant ce formulaire, j'accepte de partager mon adresse email ainsi que les informations liées à ma demande. Je comprends que toutes les données partagées seront traitées de manière confidentielle et ne seront en aucun cas partagées avec des tiers sans mon consentement explicite.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#9b3eff] text-white py-2 rounded-[5px] transition-all duration-300 hover:bg-[#8a35e6] hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5 relative flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              >
                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                {!isSubmitting && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p365e1040} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p8bd79c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                )}
              </button>
              <p className="text-center text-[#6a7282]">
                * Champs obligatoires - Réponse sous 48 h.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
