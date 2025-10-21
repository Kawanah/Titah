import { HeroSection } from '../components/home/HeroSection';
import { BadgeSection } from '../components/home/BadgeSection';
import { KawanahBannerSection } from '../components/home/KawanahBannerSection';
import { ApprocheDifferenteSection } from '../components/home/ApprocheDifferenteSection';
import { OffresSection } from '../components/home/OffresSection';
import { FondationsSection } from '../components/home/FondationsSection';
import { PourquoiTitahSection } from '../components/home/PourquoiTitahSection';
import { PasserActionSection } from '../components/home/PasserActionSection';
import { KawanahSection } from '../components/home/KawanahSection';
import { NavigationProps } from '../utils/types';

export function HomePage({ onNavigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection onNavigate={onNavigate} />
      <BadgeSection />
      <KawanahBannerSection />
      <ApprocheDifferenteSection />
      <FondationsSection />
      <OffresSection onNavigate={onNavigate} />
      <PourquoiTitahSection onNavigate={onNavigate} />
      <PasserActionSection onNavigate={onNavigate} />
      <KawanahSection />
    </div>
  );
}
