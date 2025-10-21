import { Check } from 'lucide-react';

export function FondationsSection() {
  const features = [
    {
      title: "Mobile-first",
      description: "Une navigation fluide et rapide sur tous les écrans."
    },
    {
      title: "Réservation fluide et intégrée",
      description: "Un bouton de réservation relié à votre moteur ou channel manager, pour un parcours sans friction."
    },
    {
      title: "SEO et performance",
      description: "Structure optimisée (balises Hn, méta, ALT, données locales)."
    },
    {
      title: "Outils essentiels inclus",
      description: "Google Analytics 4, Search Console et formulaire de contact préconfiguré."
    },
    {
      title: "Transparence totale",
      description: "Un processus clair, sans frais cachés, ni mauvaises surprises."
    }
  ];

  return (
    <div className="bg-[rgb(243,242,242)] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-bold text-[#1b1c1e] text-3xl sm:text-4xl lg:text-[45px] leading-tight sm:leading-[60px] mb-6">
            Des{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]">
              fondations
            </span>
            {' '}solides
          </h2>
          <p className="text-[#364153] text-base sm:text-lg max-w-4xl mx-auto">
            Des sites performants, durables et pensés pour l'expérience client. Nos sites reposent sur une base technique fiable et moderne, optimisée dès la conception pour la performance, le référencement et la simplicité d'usage.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="shrink-0 mt-1">
                <Check className="text-[#7F22FE]" size={24} strokeWidth={2.5} />
              </div>
              <p className="text-[#1b1c1e] text-base sm:text-lg">
                <span className="inline">{feature.title} : </span>
                <span className="inline">{feature.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
