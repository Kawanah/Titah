import type { ReactNode } from 'react';
import { NavigationProps } from '../../utils/types';

function FeatureCard({ icon, title, description, color, bgColor }: {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}) {
  // Fond de la carte plus clair
  const lightBgColor = bgColor.replace('0.01', '0.01');
  // Fond de l'icône un peu plus foncé
  const iconBgColor = bgColor.replace('0.02', '0.1');
  
  return (
    <div className={`rounded-[16px] border-l-4 ${color} shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-6 flex flex-col transition-all duration-300 hover:shadow-[0px_10px_25px_0px_rgba(0,0,0,0.12)] hover:-translate-y-1`} style={{ backgroundColor: lightBgColor.replace('bg-[', '').replace(']', '') }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center rounded-[14px] size-[56px] shrink-0" style={{ backgroundColor: iconBgColor.replace('bg-[', '').replace(']', '') }}>
          {icon}
        </div>
        <h3 className="font-bold text-[#1b1c1e] text-base sm:text-lg">
          {title}
        </h3>
      </div>
      <p className="text-[#4a5565] text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function ApprocheDifferenteSection({ onNavigate }: NavigationProps) {
  const features = [
    {
      icon: (
        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
          <path d="M5.25 19.2499C3.5 20.7199 2.91667 25.0833 2.91667 25.0833C2.91667 25.0833 7.28 24.4999 8.75 22.7499C9.57833 21.7699 9.56667 20.2649 8.645 19.3549C8.19152 18.9221 7.59418 18.672 6.9676 18.6526C6.34102 18.6333 5.72936 18.846 5.25 19.2499Z" stroke="#00BBA7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 17.5L10.5 14C11.1208 12.3893 11.9026 10.8454 12.8333 9.39167C14.1927 7.21816 16.0856 5.42856 18.3318 4.19311C20.5781 2.95766 23.1031 2.31744 25.6667 2.33334C25.6667 5.50667 24.7567 11.0833 18.6667 15.1667C17.193 16.0985 15.6297 16.8802 14 17.5Z" stroke="#00BBA7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 14H4.66667C4.66667 14 5.30833 10.465 7 9.33336C8.89 8.07336 12.8333 9.33336 12.8333 9.33336" stroke="#00BBA7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 17.5V23.3333C14 23.3333 17.535 22.6917 18.6667 21C19.9267 19.11 18.6667 15.1667 18.6667 15.1667" stroke="#00BBA7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
      title: "Une mise en ligne rapide et sans stress",
      description: "Vous choisissez votre modèle, nous le personnalisons à votre image, puis nous le mettons en ligne en quelques semaines seulement.",
      color: "border-teal-500",
      bgColor: "bg-[rgba(0,187,167,0.02)]"
    },
    {
      icon: (
        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
          <path d="M3.5 3.5V22.1667C3.5 22.7855 3.74583 23.379 4.18342 23.8166C4.621 24.2542 5.21449 24.5 5.83333 24.5H24.5" stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M21 19.8333V10.5" stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M15.1667 19.8333V5.83333" stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 19.8333V16.3333" stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
      title: "Une base qui évolue avec vous",
      description: "Votre site grandit au rythme de votre établissement. Vous pouvez commencer simplement, puis ajouter de nouvelles pages, fonctionnalités ou services sans tout recommencer.",
      color: "border-orange-400",
      bgColor: "bg-[rgba(251,146,60,0.02)]"
    },
    {
      icon: (
        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
          <path d="M14.9683 2.54332C14.6643 2.40466 14.3341 2.33291 14 2.33291C13.6659 2.33291 13.3357 2.40466 13.0317 2.54332L3.03333 7.09332C2.8263 7.18461 2.65029 7.33412 2.52672 7.52366C2.40315 7.71319 2.33736 7.93457 2.33736 8.16082C2.33736 8.38708 2.40315 8.60846 2.52672 8.79799C2.65029 8.98753 2.8263 9.13704 3.03333 9.22832L13.0433 13.79C13.3473 13.9286 13.6775 14.0004 14.0117 14.0004C14.3458 14.0004 14.676 13.9286 14.98 13.79L24.99 9.23999C25.197 9.14871 25.373 8.99919 25.4966 8.80966C25.6202 8.62012 25.686 8.39875 25.686 8.17249C25.686 7.94623 25.6202 7.72486 25.4966 7.53532C25.373 7.34579 25.197 7.19627 24.99 7.10499L14.9683 2.54332Z" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M25.6667 11.6667V18.6667" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M7 14.5833V18.6667C7 19.5949 7.7375 20.4852 9.05025 21.1415C10.363 21.7979 12.1435 22.1667 14 22.1667C15.8565 22.1667 17.637 21.7979 18.9497 21.1415C20.2625 20.4852 21 19.5949 21 18.6667V14.5833" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
      title: "Autonomie garantie",
      description: "Vous êtes formé·e et gagnez en autonomie dès la mise en ligne. Vous apprenez à mettre à jour vos textes, tarifs et visuels en toute simplicité, sans dépendre d'un prestataire.",
      color: "border-[#9b3eff]",
      bgColor: "bg-[rgba(155,62,255,0.02)]"
    },
    {
      icon: (
        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
          <path d="M14.9683 2.54332C14.6643 2.40466 14.3341 2.33291 14 2.33291C13.6659 2.33291 13.3357 2.40466 13.0317 2.54332L3.03333 7.09332C2.8263 7.18461 2.65029 7.33412 2.52672 7.52366C2.40315 7.71319 2.33736 7.93457 2.33736 8.16082C2.33736 8.38708 2.40315 8.60846 2.52672 8.79799C2.65029 8.98753 2.8263 9.13704 3.03333 9.22832L13.0433 13.79C13.3473 13.9286 13.6775 14.0004 14.0117 14.0004C14.3458 14.0004 14.676 13.9286 14.98 13.79L24.99 9.23999C25.197 9.14871 25.373 8.99919 25.4966 8.80966C25.6202 8.62012 25.686 8.39875 25.686 8.17249C25.686 7.94623 25.6202 7.72486 25.4966 7.53532C25.373 7.34579 25.197 7.19627 24.99 7.10499L14.9683 2.54332Z" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M2.33334 14C2.33278 14.2231 2.39624 14.4418 2.51617 14.6299C2.63611 14.8181 2.80749 14.9679 3.01 15.0617L13.0433 19.6233C13.3457 19.7603 13.6739 19.8311 14.0058 19.8311C14.3378 19.8311 14.6659 19.7603 14.9683 19.6233L24.9783 15.0733C25.1848 14.9805 25.3599 14.8296 25.4821 14.639C25.6043 14.4484 25.6685 14.2264 25.6667 14" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M2.33334 19.8333C2.33278 20.0565 2.39624 20.2751 2.51617 20.4633C2.63611 20.6514 2.80749 20.8013 3.01 20.895L13.0433 25.4567C13.3457 25.5936 13.6739 25.6644 14.0058 25.6644C14.3378 25.6644 14.6659 25.5936 14.9683 25.4567L24.9783 20.9067C25.1848 20.8138 25.3599 20.6629 25.4821 20.4724C25.6043 20.2818 25.6685 20.0597 25.6667 19.8333" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
      title: "Des modèles 100 % maison",
      description: "Chaque modèle est créé par nos soins, avec une exigence esthétique et une compréhension fine de vos besoins. Résultat : un site toujours professionnel, harmonieux et inspirant confiance à vos voyageur·euse·s.",
      color: "border-[#9b3eff]",
      bgColor: "bg-[rgba(155,62,255,0.02)]"
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-[#1b1c1e] text-3xl sm:text-4xl lg:text-[45px] leading-tight sm:leading-[52px] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">Une approche différente, </span>
            <br />
            pensée pour les hébergeur·euse·s
          </h2>
          <p className="text-[#4a5565] text-base sm:text-lg max-w-3xl mx-auto mt-6">
            Chez Titah, nous créons nos propres modèles de sites web, spécialement conçus pour l'hébergement touristique. C'est ce qui nous permet d'allier design soigné, rapidité d'exécution et évolutivité, 3 piliers qui font la différence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[27px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('models')}
            className="bg-[#9b3eff] text-white px-6 py-3 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
          >
            Voir nos modèles
          </button>
        </div>
      </div>
    </div>
  );
}
