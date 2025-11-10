import imgImageExempleDeSiteWebLeGiteDesLavandes from "figma:asset/79b21271c1d487fae19aa4ff104956affdcd126d.png";
import { NavigationProps } from '../../utils/types';
import { GRADIENTS, CONTAINER_CLASSES, RADIUS } from '../../utils/constants';

export function HeroSection({ onNavigate }: NavigationProps) {
  return (
    <div className="relative py-8 sm:py-12 lg:py-16">
      <div className="absolute inset-0" style={{ background: GRADIENTS.bgLight }} />
      <div className={`relative ${CONTAINER_CLASSES}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-bold mb-4 sm:mb-6">
              <span className="block text-3xl sm:text-4xl lg:text-[53px] leading-tight sm:leading-[52.4px] mb-2">
                Hébergeur·euse·s touristiques
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[47px]">
                <span className="text-black">Votre site</span>
                {' '}
                <span className="text-black">express et évolutif</span>
                {' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">
                  Vos réservations en hausse
                </span>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#44484f] mb-6 sm:mb-8 max-w-[573px]">
              Nous accompagnons les propriétaires et gérant·e·s d'hôtels, de campings, de gîtes, de chambres d'hôtes et de villages vacances dans la création de sites beaux, efficaces et rapides à mettre en ligne.
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:mt-0">Des sites évolutifs et mobile-first, conçus pour valoriser votre établissement et déclencher des réservations directes.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button 
                onClick={() => onNavigate('offers')}
                className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white px-6 sm:px-[25px] py-2 border border-white text-lg sm:text-[20px] transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderRadius: RADIUS.xs }}
              >
                Voir nos offres
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="bg-[rgba(255,255,255,0.5)] text-[#9b3eff] px-6 sm:px-[26px] py-2 border-2 border-[#9b3eff] text-lg sm:text-[20px] transition-all duration-300 hover:bg-white hover:-translate-y-0.5"
                style={{ borderRadius: RADIUS.xs }}
              >
                Voir nos modèles
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <img 
              src={imgImageExempleDeSiteWebLeGiteDesLavandes} 
              alt="Exemple de site web - Le gîte des lavandes" 
              className="w-full h-auto rounded-lg scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
