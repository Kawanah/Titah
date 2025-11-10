import { GradientBackground } from "./shared/GradientBackground";
import { CONTAINER_CLASSES, SECTION_PADDING } from "../utils/constants";
import { NavigationProps } from "../utils/types";

export function ModelsPage({ onNavigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <GradientBackground className={SECTION_PADDING.hero}>
        <div className={CONTAINER_CLASSES}>
          <div className="max-w-3xl text-center mx-auto space-y-6">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-[50px] leading-tight text-[#0f0f0f]">
              Nos modèles
            </h1>
            <p className="text-base sm:text-lg text-[#44484f] leading-relaxed">
              Nous finalisons actuellement notre sélection de modèles prêts à l’emploi. Revenez très bientôt pour découvrir les concepts adaptés à chaque type d’hébergement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => onNavigate("offers")}
                className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white px-6 py-3 rounded-[5px] text-base font-semibold shadow-[0px_4px_20px_rgba(155,62,255,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Voir nos offres
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="bg-white/80 text-[#9b3eff] px-6 py-3 rounded-[5px] text-base font-semibold border-2 border-[#9b3eff] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Être prévenu·e
              </button>
            </div>
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}
