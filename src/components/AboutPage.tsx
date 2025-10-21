import { Check, Laptop, Layers, Rocket, Smartphone, Palette, Users, TrendingUp, Award, Sparkles, Package } from 'lucide-react';
import imgKawanahStationF from "figma:asset/1c1ecca7c133c22cf4a15d0a0c26d1e6fb93df00.png";
import imgPortraitSonia from "figma:asset/4972d086d3cc9b4323dee58218ab3efaf152d172.png";
import imgPortraitLaetitia from "figma:asset/03c76274f53f49d1a50ab139df4f1dbabfe50089.png";
import imgOuvertureDeck from "figma:asset/fd8a36d2589fc918dc7d9b9cb05e6f14a1b81216.png";
import { HeroBadge } from './shared/HeroBadge';
import { GradientBackground } from './shared/GradientBackground';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../utils/constants';
import { NavigationProps } from '../utils/types';

function HeroSection() {
  return (
    <GradientBackground className={SECTION_PADDING.hero}>
      <div className={CONTAINER_CLASSES}>
        <div className="flex flex-col items-center gap-6 sm:gap-[24px]">
          <h1 className="font-bold text-center">
            <span className="block text-3xl sm:text-4xl lg:text-[53px] leading-tight sm:leading-[55px]">A propos de Titah</span>
            <span className="block text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[55px] bg-gradient-to-r from-[#9b3eff] to-[#ff6900] bg-clip-text text-transparent mt-2">
              Agence digitale dédiée à l'hébergement touristique
            </span>
          </h1>
          <div className="text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#44484f] text-center max-w-[763px]">
            <p className="mb-4">Grâce à notre solide expertise mêlant design, technologies no-code, intelligence artificielle et automatisation, nous créons des sites web performants, rapides à mettre en ligne, évolutifs et simples à gérer.</p>
            <p>Nos sites sont conçus pour simplifier le quotidien des hébergeur·euse·s, renforcer leur visibilité et générer plus de réservations directes.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[27px] pt-4 sm:pt-[17px]">
            <HeroBadge icon={Award} text="+ 15 ans d'expérience" color="#FF6900" bgColor="#FBDDC8" />
            <HeroBadge icon={Layers} text="+ 20 projets réalisés" color="#00BBA7" bgColor="#D1FAE5" />
            <HeroBadge icon={Laptop} text="100% Tech/Design" color="#155DFC" bgColor="#DBEAFE" />
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

function QuiNousSommesSection({ onNavigate }: NavigationProps) {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-[80px] items-start mb-16 sm:mb-20 lg:mb-[100px]">
          <div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[45px] leading-tight sm:leading-[60px] mb-6 sm:mb-[24px]">Qui nous sommes</h2>
            <div className="text-base sm:text-lg lg:text-[17px] leading-relaxed space-y-4">
              <p>Titah est une agence digitale implantée dans la Métropole du Grand Paris, fondée en 2022 par Sonia, en partenariat avec Laetitia.</p>
              <p>Collaborant depuis 2004, nous avons accompagné de nombreux projets digitaux alliant design, contenu et technologie.</p>
              <p>Avec la création de Titah, nous avons uni nos expertises pour développer des solutions plus agiles, combinant UX/UI, no-code, IA et automatisation, qu'il s'agisse de sites, d'applications ou de plateformes.</p>
              <p>
                <span>Nous avons réalisé de nombreux projets en design graphique et web pour des structures variées.</span>
                <br />
                <span className="text-[#7f22fe]">Voir nos réalisations avec Axii Design</span>
              </p>
            </div>
          </div>
          <div>
            <img 
              src={imgKawanahStationF} 
              alt="Kawanah Station F" 
              className="w-full rounded-[8px]"
            />
          </div>
        </div>

        <p className="text-lg sm:text-xl lg:text-[20px] leading-relaxed text-center mb-12 sm:mb-16 lg:mb-[60px] max-w-[996px] mx-auto">
          En 2025, nous avons choisi de recentrer notre activité autour du secteur de l'hospitalité, en mettant notre savoir-faire technologique et notre sens du design au service des hébergeur·euse·s avec :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-[37px] max-w-[1000px] mx-auto">
          {/* Carte Titah */}
          <div className="bg-[rgba(155,62,255,0.02)] rounded-[16px] border-l-4 border-[#9b3eff] p-6 sm:p-[22px] shadow-sm">
            <div className="flex items-center gap-4 sm:gap-[16px] mb-6 sm:mb-[24px]">
              <div className="bg-purple-100 rounded-[14px] w-[56px] h-[56px] flex items-center justify-center shrink-0">
                <Package className="w-[28px] h-[28px] text-[#9810fa]" />
              </div>
              <h3 className="font-bold text-2xl sm:text-[28px] leading-tight text-[#9810fa]">Titah</h3>
            </div>
            <p className="text-base sm:text-lg lg:text-[17px] leading-relaxed mb-6 sm:mb-[24px]">
              En proposant la création de sites internet et d'outils digitaux qui ont pour objectif de valoriser les établissements touristiques et d'augmenter leur chiffre d'affaires.
            </p>
            <button 
              onClick={() => onNavigate('offers')}
              className="bg-[#9b3eff] text-white px-6 sm:px-[26px] py-2 rounded-[5px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] text-base sm:text-lg transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
            >
              Voir nos offres
            </button>
          </div>

          {/* Carte Kawanah */}
          <div className="bg-[rgba(255,105,0,0.05)] rounded-[16px] border-l-4 border-[#ff6900] p-6 sm:p-[22px] shadow-sm">
            <div className="flex items-center gap-4 sm:gap-[16px] mb-6 sm:mb-[24px]">
              <div className="bg-[#fbddc8] rounded-[14px] w-[56px] h-[56px] flex items-center justify-center shrink-0">
                <Sparkles className="w-[28px] h-[28px] text-[#ff6900]" />
              </div>
              <h3 className="font-bold text-2xl sm:text-[28px] leading-tight text-[#ff6900]">Kawanah</h3>
            </div>
            <p className="text-base sm:text-lg lg:text-[17px] leading-relaxed mb-6 sm:mb-[24px]">
              Une webapp que nous avons imaginée pour simplifier la gestion des services et enrichir l'expérience client, sélectionnée la même année au round 1 du Fighters Program de STATION F, powered by TikTok.
            </p>
            <button 
              onClick={() => window.open('https://kawanah.com/', '_blank')}
              className="bg-[#9b3eff] text-white px-6 sm:px-[26px] py-2 rounded-[5px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] text-base sm:text-lg transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
            >
              Découvrir Kawanah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotreEquipeSection() {
  return (
    <GradientBackground className={SECTION_PADDING.large}>
      <div className={CONTAINER_CLASSES}>
        <h2 className="font-bold text-center mb-6 sm:mb-[24px]">
          <span className="text-3xl sm:text-4xl lg:text-[45px] leading-tight sm:leading-[60px] bg-gradient-to-r from-[#9b3eff] to-[#ff6900] bg-clip-text text-transparent">Notre équipe</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-[24px] leading-relaxed text-[#1b1c1e] text-center max-w-[973px] mx-auto mb-12 sm:mb-16 lg:mb-[80px]">
          Titah, c'est avant tout une équipe complémentaire, animée par une même exigence : créer des outils digitaux simples, beaux et efficaces pour les professionnel·le·s de l'hébergement touristique.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-[80px] max-w-[900px] mx-auto">
          {/* Sonia */}
          <div className="text-center">
            <img 
              src={imgPortraitSonia} 
              alt="Portrait Sonia" 
              className="w-[200px] sm:w-[232px] h-[183px] sm:h-[213px] rounded-[23px] mx-auto mb-6 sm:mb-[24px] object-cover"
            />
            <div className="text-center max-w-[371px] mx-auto">
              <p className="text-xl sm:text-[24px] mb-2 sm:mb-[8px]">Sonia</p>
              <p className="text-base sm:text-lg leading-relaxed">
                Conçoit l'expérience globale et pilote chaque projet, du premier brief à la mise en ligne.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-[16px]">
                <span>Spécialités : </span>
                <span>UX design, SEO, stratégie éditoriale, rédaction et IA générative.</span>
              </p>
            </div>
          </div>

          {/* Laetitia */}
          <div className="text-center">
            <img 
              src={imgPortraitLaetitia} 
              alt="Portrait Laetitia" 
              className="w-[200px] sm:w-[232px] h-[183px] sm:h-[213px] rounded-[22px] mx-auto mb-6 sm:mb-[24px] object-cover"
            />
            <div className="text-center max-w-[350px] mx-auto">
              <p className="text-xl sm:text-[24px] mb-2 sm:mb-[8px]">Laetitia</p>
              <p className="text-base sm:text-lg leading-relaxed">
                Construit, design et jongle avec la tech pour donner vie à chaque interface.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-[16px]">
                <span>Spécialités : </span>
                <span>UI design, développement web et applications, low-code, Vibe coding et automatisation.</span>
              </p>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed text-[#1b1c1e] text-center max-w-[973px] mx-auto mt-12 sm:mt-16 lg:mt-[60px]">
          Selon les besoins de chaque projet, nous faisons appel à un réseau de partenaires tech et créatifs (expert·e·s en no-code, développement et design) afin de garantir des délais maîtrisés et une qualité optimale.
        </p>
      </div>
    </GradientBackground>
  );
}

function FeatureCard({ icon: Icon, title, description, bgColor, iconColor }: { 
  icon: any; 
  title: string; 
  description: string;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white rounded-[16px] border border-gray-100 shadow-sm p-6 sm:p-[33px]">
      <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[14px] mb-4 sm:mb-[16px]" style={{ backgroundColor: bgColor }}>
        <Icon className="w-[28px] h-[28px]" style={{ color: iconColor }} />
      </div>
      <h3 className="font-bold text-lg sm:text-xl lg:text-[20px] leading-relaxed text-[#1b1c1e] mb-3 sm:mb-[16px]">{title}</h3>
      <p className="text-base sm:text-lg leading-relaxed text-[#4a5565]">{description}</p>
    </div>
  );
}

function PourquoiChoisirSection() {
  const features = [
    {
      icon: Palette,
      title: "Expertise web & design",
      description: "Une expérience solide en création de sites et en UX/UI design, pensée pour les besoins spécifiques des hébergements touristiques.",
      bgColor: "#F3E8FF",
      iconColor: "#9810FA"
    },
    {
      icon: Laptop,
      title: "Modèles maison",
      description: "Des modèles conçus par nos soins, dédiés à l'hébergement touristique. Personnalisation légère ou avancée selon votre besoin, pour une livraison rapide et soignée.",
      bgColor: "#DBEAFE",
      iconColor: "#155DFC"
    },
    {
      icon: Rocket,
      title: "Sites clés en main et rapides",
      description: "Des sites prêts à l'emploi, au calendrier clair et aux délais respectés.",
      bgColor: "#FFEDD4",
      iconColor: "#F54900"
    },
    {
      icon: Smartphone,
      title: "Mobile-first",
      description: "Une navigation fluide et intuitive sur smartphone, pour voir, réserver et contacter facilement.",
      bgColor: "#D1FAE5",
      iconColor: "#00A63E"
    },
    {
      icon: TrendingUp,
      title: "Flexibilité & évolutivité",
      description: "Nos offres grandissent avec vous : de nouvelles options peuvent être activées à tout moment, sans repartir de zéro.",
      bgColor: "#F3E8FF",
      iconColor: "#9810FA"
    },
    {
      icon: Users,
      title: "Autonomie",
      description: "Une formation incluse et un mini-guide pratique pour gérer vos textes, tarifs et visuels au quotidien.",
      bgColor: "#DBEAFE",
      iconColor: "#155DFC"
    },
    {
      icon: Award,
      title: "Transparence & clarté",
      description: "Un périmètre défini, un process simple et aucune mauvaise surprise.",
      bgColor: "#FFEDD4",
      iconColor: "#F54900"
    },
    {
      icon: Sparkles,
      title: "Réactivité & accompagnement",
      description: "Des réponses rapides (sous 24 à 48 h ouvrées) et un suivi attentif à chaque étape du projet.",
      bgColor: "#D1FAE5",
      iconColor: "#00A63E"
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-[80px]">
      <div className="max-w-[1205px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-center mb-12 sm:mb-16 lg:mb-[80px]">
          <span className="text-3xl sm:text-4xl lg:text-[50px] leading-tight sm:leading-[60px]">Pourquoi choisir </span>
          <span className="text-3xl sm:text-4xl lg:text-[50px] leading-tight sm:leading-[60px] bg-gradient-to-r from-[#9b3eff] to-[#ff6900] bg-clip-text text-transparent">Titah ?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[32px]">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

function KawanahBannerSection() {
  const goals = [
    "Simplifier la gestion quotidienne.",
    "Améliorer l'expérience voyageur·euse.",
    "Générer de nouveaux revenus.",
    "Faire gagner du temps à vos équipes."
  ];

  return (
    <div className={`bg-white ${SECTION_PADDING.large}`}>
      <div className={CONTAINER_CLASSES}>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 sm:gap-16 lg:gap-[80px] items-center">
          <div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[45px] lg:leading-[45px] leading-tight mb-6 sm:mb-8 lg:mb-[32px]">
              <span>Ce que nous </span>
              <span className="bg-gradient-to-r from-[#9b3eff] to-[#ff6900] bg-clip-text text-transparent">développons pour vous</span>
            </h2>
            <div className="text-sm sm:text-base lg:text-[16px] lg:leading-[24px] leading-relaxed space-y-4 mb-6 sm:mb-8 lg:mb-[32px]">
              <p>En parallèle de notre activité au sein de Titah, nous continuons à faire évoluer Kawanah, notre solution SaaS tout-en-un dédiée à l'hospitalité.</p>
              <p>Elle aide les hébergeur·euse·s à centraliser la gestion de leurs services et activités, souvent dispersée, manuelle et chronophage.</p>
            </div>
            
            <p className="text-base sm:text-lg lg:text-[20px] lg:leading-[24px] mb-4 sm:mb-[16px]">Objectifs :</p>
            <div className="space-y-2 sm:space-y-[8px] mb-6 sm:mb-8 lg:mb-[32px]">
              {goals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-2 sm:gap-[7px]">
                  <Check className="w-5 h-5 sm:w-[21px] sm:h-[20px] text-[#7f22fe] flex-shrink-0 mt-[2px]" strokeWidth={2.5} />
                  <p className="text-sm sm:text-[15px] lg:leading-[16px]">{goal}</p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base lg:text-[16px] lg:leading-[20px] leading-relaxed mb-6 sm:mb-8 lg:mb-[32px]">
              STATION F, le plus grand campus de startups au monde, nous accompagne dans le développement et la structuration de Kawanah.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[16px] lg:gap-[70px]">
              <button className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white px-6 sm:px-[25px] py-2 sm:py-[13px] rounded-[5px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] text-sm sm:text-base transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5">
                Offre spéciale pour nos client·e·s
              </button>
              <button className="bg-[rgba(255,255,255,0.5)] text-[#9b3eff] px-6 sm:px-[26px] py-2 sm:py-[14px] rounded-[5px] border-2 border-[#9b3eff] text-sm sm:text-base transition-all duration-300 hover:bg-white">
                Accéder à l'offre spéciale Titah
              </button>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <img 
              src={imgOuvertureDeck} 
              alt="Ouverture Deck" 
              className="w-full rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutPage({ onNavigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <QuiNousSommesSection onNavigate={onNavigate} />
      <NotreEquipeSection />
      <PourquoiChoisirSection />
      <KawanahBannerSection />
    </div>
  );
}
