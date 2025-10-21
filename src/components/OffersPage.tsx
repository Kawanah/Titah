import { Check, Package, Palette, TrendingUp, Bell, Coins, Monitor } from 'lucide-react';
import { NavigationProps } from '../utils/types';
import { HeroBadge } from './shared/HeroBadge';
import { GradientBackground } from './shared/GradientBackground';
import { CONTAINER_CLASSES, SECTION_PADDING, BUTTON_CLASSES, RADIUS } from '../utils/constants';

function OfferHero() {
  return (
    <GradientBackground className={SECTION_PADDING.large}>
      <div className={CONTAINER_CLASSES}>
        <div className="flex flex-col items-center gap-6 sm:gap-[24px]">
          <h1 className="font-bold text-center">
            <span className="block text-3xl sm:text-4xl lg:text-[53px] leading-tight sm:leading-[55px] mb-2">Nos offres de création de sites internet</span>
            <span className="block text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[55px] bg-gradient-to-r from-[#9b3eff] to-[#ff6900] bg-clip-text text-transparent">
              Une solution pour chaque hébergement touristique
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#44484f] text-center max-w-[868px]">
            Que vous soyez hôtelier·ère, gérant·e de gîte, exploitant·e de camping ou responsable de chambres d'hôtes, nous avons conçu des offres simples, rapides et efficaces pour améliorer votre visibilité en ligne et valoriser votre établissement.
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-0">Nos sites vous font gagner du temps : simples à mettre à jour, connectés à votre moteur de réservation et conçus pour convertir vos visiteur·euse·s en client·e·s.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[27px] pt-4 sm:pt-[17px]">
            <HeroBadge icon={Package} text="Livraison en 1 à 5 semaines" color="#FF6900" />
            <HeroBadge icon={Palette} text="Design professionnel" color="#14B8A6" />
            <HeroBadge icon={TrendingUp} text="Évolutif" color="#2563EB" />
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

function OfferCard({ 
  title, 
  subtitle, 
  icon: Icon, 
  borderColor,
  features,
  benefits,
  includes,
  buttonText = "Demander un devis",
  onNavigate
}: { 
  title: string;
  subtitle: string;
  icon: any;
  borderColor: string;
  features: { text: string; isSubList?: boolean }[];
  benefits: string[];
  includes: string[];
  buttonText?: string;
  onNavigate?: (page: string) => void;
}) {
  return (
    <div className="bg-white rounded-[16px] sm:rounded-[24px] border-2 shadow-sm p-4 sm:p-6 lg:p-[28px] w-full max-w-[1200px]" style={{ borderColor }}>
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-[10px] mb-6 sm:mb-[22px]">
        <div className="w-12 h-12 sm:w-[64px] sm:h-[64px] rounded-[12px] sm:rounded-[16px] bg-gradient-to-br from-[#9b3eff] to-[#c026d3] flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 sm:w-[32px] sm:h-[32px] text-white" strokeWidth={2.67} />
        </div>
        <div>
          <h2 className="font-bold text-xl sm:text-2xl lg:text-[33px] leading-tight mb-2 sm:mb-[10px]">{title}</h2>
          <p className="text-base sm:text-lg lg:text-[20px] leading-relaxed">{subtitle}</p>
        </div>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-[40px] mb-6 sm:mb-[28px]">
        {/* Ce que vous obtenez */}
        <div>
          <div className="flex items-center gap-2 sm:gap-[10px] mb-4 sm:mb-[17px]">
            <Bell className="w-5 h-5 sm:w-[24px] sm:h-[24px] text-[#ff6900]" />
            <h3 className="font-bold text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#ff6900]">Ce que vous obtenez</h3>
          </div>
          <div className="flex flex-col gap-3 sm:gap-[17px]">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-[7px]">
                <Check className="w-4 h-4 sm:w-[19px] sm:h-[19px] text-[#ff6900] flex-shrink-0 mt-[2px]" />
                <p className="text-sm sm:text-base">
                  {feature.isSubList ? (
                    <span>
                      <span>{feature.text.split('\n')[0]}</span>
                      <br />
                      <span className="text-xs sm:text-sm text-[#686363]">{feature.text.split('\n')[1]}</span>
                    </span>
                  ) : (
                    feature.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bénéfices */}
        <div>
          <div className="flex items-center gap-2 sm:gap-[10px] mb-4 sm:mb-[17px]">
            <Coins className="w-6 h-6 sm:w-[32px] sm:h-[32px] text-[#8200db]" />
            <h3 className="font-bold text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#7f22fe]">Bénéfices</h3>
          </div>
          <div className="flex flex-col gap-3 sm:gap-[17px]">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-[7px]">
                <Check className="w-4 h-4 sm:w-[19px] sm:h-[19px] text-[#8200db] flex-shrink-0 mt-[2px]" />
                <p className="text-sm sm:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ce qui est inclus */}
        <div>
          <div className="flex items-center gap-2 sm:gap-[14px] mb-4 sm:mb-[17px]">
            <Monitor className="w-5 h-5 sm:w-[24px] sm:h-[24px] text-[#00bba7]" />
            <h3 className="font-bold text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#00bba7]">Ce qui est inclus</h3>
          </div>
          <div className="flex flex-col gap-3 sm:gap-[17px]">
            {includes.map((include, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-[7px]">
                <Check className="w-4 h-4 sm:w-[19px] sm:h-[19px] text-[#00bba7] flex-shrink-0 mt-[2px]" />
                <p className="text-sm sm:text-base">{include}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-end">
        <button 
          onClick={() => onNavigate && onNavigate('contact')}
          className="bg-[#9b3eff] text-white px-6 sm:px-[28px] py-2 rounded-[5px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] text-base sm:text-lg transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function OffersSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const landingPageFeatures = [
    { 
      text: "Une vitrine attractive et design, structurée en 6 sections :\nAccueil / Héros • Hébergements & services • À propos • Galerie • Avis clients • Contact / Accès",
      isSubList: true 
    },
    { text: "Réservation connectée : bouton \"Réserver\" relié à votre moteur ou channel manager, visible dès l'accueil." },
    { text: "Affichage mobile et tablette optimisé pour une expérience fluide et rapide." },
    { text: "Suivi de performance : intégration de Google Analytics 4 et Search Console." },
    { text: "Formulaire de contact complet : anti-spam, message de succès, redirection." },
    { text: "Autonomie garantie : formation de 45 min (en visio) + mini-guide PDF/vidéo pour gérer textes, prix et photos facilement, sans coder." },
  ];

  const landingPageBenefits = [
    "Délai express : mise en ligne en 7 jours ouvrés après réception des contenus.",
    "Budget maîtrisé : un site efficace et professionnel sans complexité technique.",
    "Évolutivité assurée : la page peut évoluer en site vitrine complet sans repartir de zéro.",
    "Pensée mobile-first : rapide, claire et conçue pour déclencher l'action.",
    "Suivi d'audience inclus : Analytics et Search Console configurés.",
    "Structure optimisée pour convertir : votre offre est lisible et orientée réservation.",
  ];

  const landingPageIncludes = [
    "1 concept visuel basé sur nos modèles : choix parmi 3 designs pré-sélectionnés.",
    "Personnalisation légère : logo, couleurs, typographies, visuel d'accueil.",
    "Intégration de vos contenus : textes + jusqu'à 15 photos optimisées.",
    "SEO essentiel : balises Title/Meta, Hn, ALT, données locales de base.",
    "Check-list pré-lancement : tests de performance, affichage mobile et indexation.",
  ];

  const siteCompletFeatures = [
    { text: "Une présence web professionnelle et complète, pensée pour valoriser votre établissement." },
    { 
      text: "Un site vitrine design et optimisé, structuré en 6 à 7 pages selon vos besoins :\nAccueil / Héros • Hébergements • Services & activités • Galerie • Avis clients & preuves sociales • • À propos • Contact / Accès",
      isSubList: true 
    },
    { text: "Réservation connectée : bouton \"Réserver\" relié à votre moteur ou channel manager, visible dès l'accueil." },
    { text: "Affichage mobile et tablette optimisé pour une expérience fluide et rapide." },
    { text: "Suivi de performance : intégration de Google Analytics 4 et Search Console." },
    { text: "Formulaire de contact complet : anti-spam, message de succès, redirection." },
    { text: "Autonomie garantie : formation de 45 min (en visio) + mini-guide PDF/vidéo pour gérer textes, prix et photos facilement, sans coder." },
  ];

  const siteCompletBenefits = [
    "Délai maîtrisé : mise en ligne en 2 à 3 semaines ouvrées après réception des contenus.",
    "Image professionnelle : un site clair, rassurant et aligné avec votre identité.",
    "Évolutivité naturelle : base solide pour ajouter facilement d'autres pages (offres spéciales, blog, langues supplémentaires, partenaires…).",
    "Pensé mobile-first : rapide, fluide et conçu pour convertir vos visiteur·euse·s.",
    "Suivi d'audience intégré : connexion à Google Analytics et Search Console.",
    "Clarté de l'offre : structure lisible et intuitive qui inspire confiance et incite à la réservation.",
  ];

  const siteCompletIncludes = [
    "1 concept visuel basé sur nos modèles Titah dédiés à l'hébergement touristique : choix parmi 3 designs pré-sélectionnés selon votre type d'établissement et selon brief client.",
    "Personnalisation légère : logo, couleurs, typographies et visuel de couverture.",
    "Intégration de vos contenus : textes + jusqu'à 30 photos optimisées et création des pages standards listées ci-dessus (jusqu'à 7 pages).",
    "SEO essentiel : balises Title/Meta, Hn, ALT, données locales de base.",
    "Check-list pré-lancement : tests de performance, affichage mobile et indexation.",
  ];

  const refonteFeatures = [
    { text: "Une présence web modernisée et alignée avec votre identité." },
    { text: "Une refonte complète sur la base d'un nouveau design, tout en revalorisant vos contenus existants et votre référencement acquis." },
    { 
      text: "Un site vitrine design et optimisé, structuré en 6 à 7 pages selon vos besoins :\nAccueil / Héros • Hébergements • Services & activités • Galerie • Avis clients & preuves sociales • • À propos • Contact / Accès",
      isSubList: true 
    },
    { text: "Réservation connectée : bouton \"Réserver\" relié à votre moteur ou channel manager, visible dès l'accueil." },
    { text: "Optimisation mobile & tablette : amélioration de la vitesse, de la lisibilité et de l'accessibilité." },
    { text: "Suivi de performance : intégration de Google Analytics 4 et Search Console." },
    { text: "Formulaire de contact complet : anti-spam, message de succès, redirection." },
    { text: "Migration raisonnée des contenus : reprise structurée de vos textes et images, avec ajustements éditoriaux mineurs pour clarifier votre offre." },
    { text: "Autonomie garantie : formation de 45 min (en visio) + mini-guide PDF/vidéo pour gérer textes, prix et photos facilement, sans coder." },
  ];

  const refonteBenefits = [
    "Image professionnelle renouvelée : un design actuel, cohérent et rassurant.",
    "Expérience utilisateur optimisée : structure claire et parcours de réservation fluide.",
    "Gains de performance : site plus rapide, plus lisible sur mobile et mieux référencé.",
    "Évolutivité assurée : base solide pour ajouter de nouvelles pages (offres, blog, langues, partenaires…).",
    "Suivi d'audience intégré : connexion à Google Analytics et Search Console.",
    "Délai maîtrisé : calendrier de production défini après diagnostic du site existant.",
  ];

  const refonteIncludes = [
    "Audit express de votre site actuel : performance, mobile, SEO de base et structure des contenus.",
    "1 concept visuel basé sur nos modèles Titah dédiés à l'hébergement touristique : choix parmi 3 designs pré-sélectionnés selon votre type d'établissement et selon brief client.",
    "Personnalisation légère : logo, couleurs, typographies et visuel de couverture.",
    "Intégration de vos contenus optimisés : textes, jusqu'à 30 photos et création des pages standards listées ci-dessus (jusqu'à 7 pages).",
    "SEO essentiel : balises Title/Meta, Hn, ALT et données locales de base.",
    "Check-list pré-lancement : tests de performance, affichage mobile et indexation.",
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-[64px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[59px]">
          <OfferCard
            title="Landing Page Express"
            subtitle="Pour exister rapidement en ligne"
            icon={Package}
            borderColor="#9B3EFF"
            features={landingPageFeatures}
            benefits={landingPageBenefits}
            includes={landingPageIncludes}
            onNavigate={onNavigate}
          />
          
          <OfferCard
            title="Site Vitrine Complet"
            subtitle="Pour présenter, convaincre et déclencher les réservations"
            icon={Palette}
            borderColor="#FF6900"
            features={siteCompletFeatures}
            benefits={siteCompletBenefits}
            includes={siteCompletIncludes}
            onNavigate={onNavigate}
          />
          
          <OfferCard
            title="Refonte & Modernisation"
            subtitle="Pour redonner vie à votre site et améliorer vos performances"
            icon={TrendingUp}
            borderColor="#00BBA7"
            features={refonteFeatures}
            benefits={refonteBenefits}
            includes={refonteIncludes}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </div>
  );
}

function OptionsSection() {
  const leftOptions = [
    { 
      title: "Pages additionnelles", 
      text: "– Offres spéciales, événements, partenaires, presse, recrutement, ou toute autre page sur mesure selon vos besoins." 
    },
    { 
      title: "Personnalisation avancée –", 
      text: "Variantes de sections, mises en page spécifiques, éléments graphiques dédiés et animations légères pour un rendu unique." 
    },
    { 
      title: "Accompagnement éditorial –", 
      text: "Aide à la structuration ou à la rédaction de vos contenus pour valoriser votre établissement." 
    },
    { 
      title: "Gestion des avis & e-réputation –", 
      text: "Sélection d'avis issus de plusieurs plateformes (Google, TripAdvisor, Booking.com…), affichage d'un badge de note et d'un bouton \"Voir tous les avis\", chaque extrait renvoyant vers sa source d'origine." 
    },
    { 
      title: "Version multilingue –", 
      text: "Site en plusieurs langues pour toucher un public international et élargir votre clientèle." 
    },
  ];

  const rightOptions = [
    { 
      title: "Pack SEO avancé –", 
      text: "Optimisation complète pour renforcer votre visibilité et remonter dans les résultats Google." 
    },
    { 
      title: "Google Business Profile –", 
      text: "Création ou optimisation de votre fiche Google, ajout de photos et intégration d'avis vérifiés sur votre site." 
    },
    { 
      title: "Email marketing –", 
      text: "Mise en place d'une newsletter (Brevo, Mailchimp), création du gabarit, capture d'emails et scénarios simples d'automatisation." 
    },
    { 
      title: "Automatisations (Make) –", 
      text: "Connexions entre votre site et vos outils : formulaire → email/CRM, messages pré-arrivée, confirmations personnalisées, export automatique des leads." 
    },
    { 
      title: "FAQ interactive –", 
      text: "Module de questions/réponses dépliantes avec recherche rapide et liens utiles. Réduit jusqu'à 30 % des demandes répétitives par email." 
    },
  ];

  return (
    <GradientBackground className={SECTION_PADDING.large}>
      <div className={CONTAINER_CLASSES}>
        <h2 className="font-bold text-center mb-12 sm:mb-16 lg:mb-[60px]">
          <span className="block sm:inline text-2xl sm:text-3xl lg:text-[45px] leading-tight sm:leading-[60px] bg-gradient-to-r from-[#9b3eff] to-[#ff6900] bg-clip-text text-transparent">Options disponibles </span>
          <span className="block sm:inline text-2xl sm:text-3xl lg:text-[45px] leading-tight sm:leading-[60px]">selon vos besoins</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[80px]">
          <div className="flex flex-col gap-6 sm:gap-[26px]">
            {leftOptions.map((option, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-[12px]">
                <Check className="w-5 h-5 sm:w-[24px] sm:h-[24px] text-[#7f22fe] flex-shrink-0 mt-[2px]" strokeWidth={2.5} />
                <p className="text-sm sm:text-base leading-relaxed">
                  <span>{option.title}</span>
                  <span> {option.text}</span>
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 sm:gap-[26px]">
            {rightOptions.map((option, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-[12px]">
                <Check className="w-5 h-5 sm:w-[24px] sm:h-[24px] text-[#7f22fe] flex-shrink-0 mt-[2px]" strokeWidth={2.5} />
                <p className="text-sm sm:text-base leading-relaxed">
                  <span>{option.title}</span>
                  <span> {option.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

function CTASection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-[43px]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[36px]">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight text-center">
            <span>Vous souhaitez créer</span>
            <span className="bg-gradient-to-r from-[#9b3eff] to-[#ff6900] bg-clip-text text-transparent"> un site qui reflète votre établissement, </span>
            <span>attire plus de voyageurs et reste simple à gérer ?</span>
          </h2>
          <button 
            onClick={() => onNavigate && onNavigate('contact')}
            className="bg-[#9b3eff] text-white px-6 sm:px-[16px] py-3 sm:py-[12px] rounded-[5px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] text-base sm:text-lg border border-white transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
          >
            Parlons-en ensemble
          </button>
        </div>
      </div>
    </div>
  );
}

export function OffersPage({ onNavigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <OfferHero />
      <OffersSection onNavigate={onNavigate} />
      
      <OptionsSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
