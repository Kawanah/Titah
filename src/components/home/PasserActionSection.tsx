import { NavigationProps } from '../../utils/types';

export function PasserActionSection({ onNavigate }: NavigationProps) {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bold text-[#1b1c1e] text-3xl sm:text-4xl lg:text-[45px] leading-tight sm:leading-[60px] mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">
            Passer à l'action
          </span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-[21px] text-black mb-4 sm:mb-6">
          Un site professionnel, rapide et pensé pour vos réservations directes.
        </p>
        <p className="text-[#4a5565] text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Vous avez un projet ou souhaitez moderniser votre site pour le rendre plus clair, plus efficace et plus actuel ?
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="bg-[#9b3eff] text-white px-8 py-2 rounded-[5px] border border-white shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
        >
          Parlons-en ensemble
        </button>
      </div>
    </div>
  );
}
