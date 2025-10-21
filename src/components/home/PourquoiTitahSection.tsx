import imgImageExempleDeSiteWebLeGiteDesLavandes from "figma:asset/79b21271c1d487fae19aa4ff104956affdcd126d.png";
import { GradientBackground } from '../shared/GradientBackground';
import { SECTION_PADDING } from '../../utils/constants';
import { NavigationProps } from '../../utils/types';

export function PourquoiTitahSection({ onNavigate }: NavigationProps) {
  return (
    <GradientBackground className={SECTION_PADDING.default}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="font-bold text-[#1b1c1e] text-3xl sm:text-4xl lg:text-[45px] leading-tight sm:leading-[60px] mb-4">
              Pourquoi choisir Titah ?
            </h2>
            <p className="text-[#4a5565] text-xl sm:text-2xl lg:text-[24px] sm:mb-8 text-[23px] mt-[0px] mr-[0px] mb-[10px] ml-[0px]">
              L'expertise et la proximité au service de votre réussite
            </p>
            <div className="space-y-4 text-[#1b1c1e] text-base sm:text-lg leading-relaxed">
              <p>
                Avec plus de 15 ans d'expérience dans le digital, nous mettons notre savoir-faire au service des professionnel·le·s de l'hébergement touristique. Notre force : une expertise technique solide, un sens du design affirmé et une approche humaine à chaque étape du projet.
              </p>
              <p>
                Titah, c'est une agence à taille humaine, réactive et à l'écoute, qui conçoit des sites durables, évolutifs et orientés résultats. Vous bénéficiez d'un accompagnement clair et fiable, pensé pour durer.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('about')}
              className="mt-6 sm:mt-8 bg-[#9b3eff] text-white px-8 py-3 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
            >
              Découvrir l'agence
            </button>
          </div>
          
          <div className="relative order-first lg:order-last">
            <img 
              src={imgImageExempleDeSiteWebLeGiteDesLavandes} 
              alt="Exemple de site web" 
              className="w-full h-auto rounded-lg shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}
