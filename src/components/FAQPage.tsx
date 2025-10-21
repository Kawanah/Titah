import { useState } from 'react';
import { ChevronDown, ChevronUp, DollarSign, Handshake, Clock, Link, Palette, Smartphone, Search, Package, Settings, TrendingUp, BarChart, Monitor } from 'lucide-react';
import { NavigationProps } from '../utils/types';
import { GRADIENTS, GRADIENT_TEXT_STYLE, CONTAINER_CLASSES, SECTION_PADDING, BUTTON_CLASSES } from '../utils/constants';
import { GradientBackground } from './shared/GradientBackground';

export function FAQPage({ onNavigate }: NavigationProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: DollarSign,
      question: "Combien coûte la création d'un site internet ?",
      answer: "Nos tarifs dépendent du type de site (Landing Page Express, Site Vitrine Complet ou Refonte).\nChaque devis est établi selon vos besoins réels : contenu, fonctionnalités, personnalisation et options éventuelles.\n➡️ Les prix sont toujours communiqués avant lancement, sans frais cachés."
    },
    {
      icon: Handshake,
      question: "Est-il possible de payer en plusieurs fois ?",
      answer: "Oui. Nous proposons un paiement en deux ou trois fois sans frais pour faciliter votre budget.\nLes modalités sont précisées dans le devis avant signature."
    },
    {
      icon: Clock,
      question: "Quels sont les délais de mise en ligne ?",
      answer: "Selon la formule choisie :\n\n• Landing Page Express → 1 à 2 semaines ouvrées après réception des contenus.\n• Site Vitrine Complet → 2 à 3 semaines ouvrées après réception des contenus.\n• Refonte → 3 à 5 semaines ouvrées selon la complexité du site existant.\n\nCes délais incluent la personnalisation, les tests et la formation."
    },
    {
      icon: Link,
      question: "Pouvez-vous connecter mon site à mon moteur de réservation ?",
      answer: "Oui, tout à fait.\nNous connectons votre site à votre moteur de réservation ou à votre channel manager, afin d'assurer un parcours fluide entre la découverte et la réservation.\nLe bouton \"Voir les disponibilités / Réserver\" est intégré dès la page d'accueil et optimisé pour mobile."
    },
    {
      icon: Palette,
      question: "Puis-je choisir le design de mon site ?",
      answer: "Oui. Nous avons conçu nos propres modèles dédiés à l'hébergement touristique.\nVous choisissez le modèle qui correspond le mieux à votre établissement.\nNous le personnalisons ensuite à votre image : logo, couleurs, typographies, visuels et contenu."
    },
    {
      icon: Smartphone,
      question: "Mon site sera-t-il adapté aux mobiles ?",
      answer: "Oui, tous nos sites sont pensés mobile-first : ils s'affichent et se chargent parfaitement sur smartphone et tablette, afin d'offrir une navigation fluide et favoriser les réservations directes."
    },
    {
      icon: Search,
      question: "Le site est-il optimisé pour le référencement (SEO) ?",
      answer: "Oui. Tous nos sites sont livrés avec une optimisation SEO de base : structure Hn, métadonnées, balises ALT, performances techniques, données locales, etc.\nDes options d'optimisation avancée sont disponibles pour améliorer votre positionnement sur Google."
    },
    {
      icon: Package,
      question: "Que dois-je préparer avant la création du site ?",
      answer: "Nous vous accompagnons à chaque étape.\nUn guide de contenus vous aide à préparer les textes, photos, informations pratiques et liens utiles (hébergements, services, avis, contact…).\nNous pouvons également relire et harmoniser vos textes si besoin."
    },
    {
      icon: Settings,
      question: "Pourrai-je modifier mon site moi-même ?",
      answer: "Oui, c'est tout l'intérêt de notre approche.\nVous recevez une formation personnalisée (45 à 90 minutes selon la formule) et un mini-guide pratique pour gérer vos textes, tarifs et photos en toute autonomie.\nVous restez propriétaire et libre de vos mises à jour."
    },
    {
      icon: TrendingUp,
      question: "Mon site pourra-t-il évoluer plus tard ?",
      answer: "Oui, c'est l'un de nos grands atouts.\nNos sites sont conçus pour être évolutifs : vous pouvez demander à tout moment l'ajout de nouvelles pages, fonctionnalités ou automatisations.\nUn devis complémentaire est établi selon vos besoins. Cette évolution reste plus rapide et plus économique car nous partons de votre base existante."
    },
    {
      icon: BarChart,
      question: "Fournissez-vous un suivi après la mise en ligne ?",
      answer: "Oui, nous restons disponibles après la mise en ligne pour toute question ou ajustement mineur.\nDes prestations complémentaires (SEO avancé, automatisations, e-mail marketing, etc.) peuvent également être activées selon vos besoins."
    },
    {
      icon: Monitor,
      question: "Proposez-vous l'hébergement et la maintenance du site ?",
      answer: "Oui, au cas par cas.\nNous pouvons vous accompagner pour :\n\n• l'hébergement (choix du prestataire et configuration technique),\n• la maintenance (mises à jour, sauvegardes, suivi de performance, support technique).\n\nCes prestations font l'objet d'un devis distinct, selon le type de site et le niveau d'assistance souhaité."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-12 sm:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, rgba(155, 62, 255, 0.1) 30%, rgba(255, 105, 0, 0.1) 84%)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="font-bold mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-[53px] leading-tight sm:leading-[55px] bg-clip-text" 
            style={{ 
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(135deg, #9B3EFF 30%, #FF6900 84%)'
            }}
          >
            FAQ
          </h1>
          <p className="sm:text-2xl lg:text-[30px] leading-relaxed text-black max-w-3xl mx-auto font-bold text-[25px]">
            Création de sites internet pour l'hébergement touristique
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-[12px] overflow-hidden hover:border-[#9b3eff] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="pr-3 sm:pr-4 flex items-center gap-2 sm:gap-3">
                  <faq.icon className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] text-[#9b3eff] flex-shrink-0" strokeWidth={2} />
                  <span className="text-base sm:text-lg leading-relaxed">{faq.question}</span>
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#9b3eff] shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-[#9b3eff] shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 bg-gray-50">
                  <p className="text-sm sm:text-base leading-relaxed text-[#44484f] whitespace-pre-line pl-0 sm:pl-[32px]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Still have questions section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight mb-4">Vous avez d'autres questions ?</h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#44484f] mb-6 sm:mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className={`${BUTTON_CLASSES.violet} !py-2`}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
}
