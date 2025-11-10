import { HeroSection } from './home/HeroSection';
import { BadgeSection } from './home/BadgeSection';
import { KawanahBannerSection } from './home/KawanahBannerSection';
import { ApprocheDifferenteSection } from './home/ApprocheDifferenteSection';
import { OffresSection } from './home/OffresSection';
import { FondationsSection } from './home/FondationsSection';
import { PourquoiTitahSection } from './home/PourquoiTitahSection';
import { PasserActionSection } from './home/PasserActionSection';
import { KawanahSection } from './home/KawanahSection';
import { NavigationProps } from '../utils/types';

export function HomePage({ onNavigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection onNavigate={onNavigate} />
      <BadgeSection />
      <KawanahBannerSection />
      <ApprocheDifferenteSection onNavigate={onNavigate} />
      <FondationsSection />
      <OffresSection onNavigate={onNavigate} />
      <PourquoiTitahSection onNavigate={onNavigate} />
      <PasserActionSection onNavigate={onNavigate} />
      <KawanahSection />
    </div>
  );
}
