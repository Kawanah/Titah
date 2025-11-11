import { Linkedin } from 'lucide-react';
import { TitahLogo } from './TitahLogo';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Left Column - Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <TitahLogo size={24} />
            </div>
            <div className="text-[#4a5565] space-y-1 text-sm sm:text-base">
              <p>
                Agence spécialisée dans la création de sites web pour l'hébergement touristique.
              </p>
              <p>Métropole du Grand Paris - France</p>
              <a
                href="mailto:welcome@titah.fr"
                className="block underline hover:text-[#9b3eff] transition-colors"
              >
                welcome@titah.fr
              </a>
              <a
                href="https://www.linkedin.com/company/titah-agence-digitale/?viewAsMember=true"
                className="inline-flex items-center gap-2 text-[#4a5565] hover:text-[#9b3eff] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div>
            <h3 className="font-bold text-[#1b1c1e] mb-4 text-base sm:text-lg">Navigation</h3>
            <ul className="space-y-2 text-[#4a5565] text-sm sm:text-base">
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('offers')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  Nos offres
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('about')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('models')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  Nos modèles
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('faq')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('contact')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Legal Info */}
          <div>
            <h3 className="font-bold text-[#1b1c1e] mb-4 text-base sm:text-lg">Informations légales</h3>
            <ul className="space-y-2 text-[#4a5565] text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  onClick={handleNavClick('legal')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('privacy')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('cookies')}
                  className="hover:text-[#9b3eff] transition-colors"
                >
                  Gestion des cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9b3eff] transition-colors">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <p className="text-[#4a5565] text-center text-sm sm:text-base">
            © 2025 Titah. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
