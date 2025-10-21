import svgPaths from "../../imports/svg-9h1x2qd6f3";

interface OfferCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  isPopular?: boolean;
}

function OfferCard({ icon, title, subtitle, description, idealFor, isPopular }: OfferCardProps) {
  return (
    <div className={`bg-white rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center relative transition-transform duration-300 hover:scale-105 ${isPopular ? 'border-2 border-[#c27aff] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]' : 'border-2 border-gray-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]'}`}>
      {isPopular && (
        <div className="absolute bg-purple-50 h-[35.5px] rounded-[10px] top-[-10px] px-4 border-2 border-[#dab2ff] flex items-center justify-center gap-2">
          <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
            <path d={svgPaths.p37795c0} stroke="#8200DB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M11.6667 1.16667V3.5" stroke="#8200DB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M12.8333 2.33333H10.5" stroke="#8200DB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p291dcf00} stroke="#8200DB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
          <p className="text-[#8200db] text-[13px]">Populaire</p>
        </div>
      )}
      
      <div className="flex items-center justify-center rounded-[16px] size-[64px] bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] mb-6 mt-2">
        {icon}
      </div>
      
      <h3 className="font-bold text-[#1b1c1e] text-xl sm:text-2xl mb-4">
        {title}
      </h3>
      
      <p className="text-[#4a5565] text-base mb-4">
        {subtitle}
      </p>
      
      <p className="text-[#4a5565] text-base leading-relaxed mb-6">
        {description}
      </p>
      
      <p className="text-[#364153] text-base leading-relaxed mt-auto">
        {idealFor}
      </p>
    </div>
  );
}

export function OffresSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const offers = [
    {
      icon: (
        <svg className="size-[32px]" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2f56f180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </svg>
      ),
      title: "Landing Page Express",
      subtitle: "Pour exister rapidement en ligne",
      description: "Une page unique, claire et attractive, pour exister rapidement et déclencher les réservations directes.",
      idealFor: "Idéale pour les établissements qui veulent être visibles en quelques jours.",
      isPopular: false
    },
    {
      icon: (
        <svg className="size-[32px]" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2137b930} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </svg>
      ),
      title: "Site Vitrine Complet",
      subtitle: "Pour présenter, convaincre et déclencher les réservations",
      description: "Un site multi-pages pour présenter vos hébergements, services, avis et informations pratiques dans une structure fluide et efficace.",
      idealFor: "Parfait pour valoriser votre offre et renforcer votre image professionnelle.",
      isPopular: true
    },
    {
      icon: (
        <svg className="size-[32px]" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p33201170} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 2.66667V8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M29.3333 5.33333H24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.pecb2400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </svg>
      ),
      title: "Refonte & Modernisation",
      subtitle: "Pour redonner vie à votre site et améliorer vos performances",
      description: "Une refonte complète pour moderniser votre site existant, améliorer l'expérience mobile et fluidifier le parcours de réservation.",
      idealFor: "Pensée pour les établissements qui souhaitent évoluer sans repartir de zéro.",
      isPopular: false
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-[#1b1c1e] text-3xl sm:text-4xl lg:text-[45px] leading-tight sm:leading-[60px] mb-4">
            Nos offres de création de{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">
              sites internet
            </span>
          </h2>
          <p className="text-[#4a5565] text-lg sm:text-xl lg:text-[23px]">
            Choisissez la formule adaptée à votre établissement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[29px] mb-12">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate && onNavigate('offers')}
            className="bg-[#9b3eff] text-white px-8 py-2 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
          >
            Voir nos offres en détail
          </button>
        </div>
      </div>
    </div>
  );
}
