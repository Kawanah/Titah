import svgPaths from "./svg-4jtiw0dxem";
import imgFooter from "figma:asset/5c5c5e36d9a707a6b167a2b93ac123371d4d9ddc.png";

function Footer() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[106.906px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFooter} />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[106.906px]" data-name="Link">
      <Footer />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[72px] left-0 top-[50.5px] w-[448px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[0.5px] not-italic text-[#4a5565] text-[16px] top-[-0.5px] w-[448px]">
        <p className="mb-0">{`Agence spécialisée dans la création de sites web pour l'hébergement touristique.`}</p>
        <p className="mb-0">Métropole du Grand Paris - France</p>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid mb-0 underline" href="https://welcome@titah.fr">
          welcome@titah.fr
        </a>
        <p>LinkedIn</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[195px] left-0 top-0 w-[592px]" data-name="Container">
      <Link />
      <Paragraph />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[27px] left-0 not-italic text-[#1b1c1e] text-[18px] text-nowrap top-[0.5px] whitespace-pre">Navigation</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[195px] items-start left-[624px] top-0 w-[280px]" data-name="Container">
      <Heading3 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[#4a5565] text-[15px] text-nowrap whitespace-pre">
        <p className="mb-0">
          Nos offres
          <br aria-hidden="true" />À propos
        </p>
        <p>
          Nos modèles
          <br aria-hidden="true" />
          FAQ
          <br aria-hidden="true" />
          Contact
        </p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1b1c1e] text-[16px] text-nowrap top-[0.5px] whitespace-pre">Informations légales</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[195px] items-start left-[936px] top-0 w-[280px]" data-name="Container">
      <Heading4 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[#4a5565] text-[15px] text-nowrap whitespace-pre">
        Mentions légales
        <br aria-hidden="true" />
        Politique de confidentialité
        <br aria-hidden="true" />
        CGV
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[195px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[608.44px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[269px]">© 2025 Titah. Tous droits réservés.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[57px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Paragraph1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[356px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[356px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[357px] items-start left-[-3px] pb-0 pl-[121.5px] pr-[120px] pt-px top-[4086px] w-[1523px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[75px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[405px]">
        <span className="font-['Inter:Bold',_sans-serif] font-bold">Pages additionnelles</span>
        <span>{` – Offres spéciales, événements, partenaires, presse, recrutement, ou toute autre page sur mesure selon vos besoins.`}</span>
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText />
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[77px] items-start left-0 pb-0 pt-[2px] px-0 top-0 w-[435px]" data-name="List Item">
      <Icon />
      <Text />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[75px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[405px]">
        <span>{`Personnalisation avancée – `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">Variantes de sections, mises en page spécifiques, éléments graphiques dédiés et animations légères pour un rendu unique.</span>
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText1 />
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[77px] items-start left-0 pb-0 pt-[2px] px-0 top-[96px] w-[435px]" data-name="List Item">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[75px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[405px]">
        <span>{`Accompagnement éditorial – `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">Aide à la structuration ou à la rédaction de vos contenus pour valoriser votre établissement.</span>
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText2 />
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[77px] items-start left-0 pb-0 pt-[2px] px-0 top-[192px] w-[435px]" data-name="List Item">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText3() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[125px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[414px]">
        <span>{`Gestion des avis & e-réputation – `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">Sélection d’avis issus de plusieurs plateformes (Google, TripAdvisor, Booking.com…), affichage d’un badge de note et d’un bouton “Voir tous les avis”, chaque extrait renvoyant vers sa source d’origine.</span>
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText3 />
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[127px] items-start left-0 pb-0 pt-[2px] px-0 top-[288px] w-[450px]" data-name="List Item">
      <Icon3 />
      <Text3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText4() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[78px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[380px]">
        Version multilingue –<span className="font-['Inter:Regular',_sans-serif] font-normal">{` Site en plusieurs langues pour toucher un public international et élargir votre clientèle.`}</span>
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText4 />
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[127px] items-start left-0 pb-0 pt-[2px] px-0 top-[434px] w-[450px]" data-name="List Item">
      <Icon4 />
      <Text4 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[515px] left-[285px] top-[185px] w-[442px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText5() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[75px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[405px]">
        <span>{`Pack SEO avancé – `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">Optimisation complète pour renforcer votre visibilité et remonter dans les résultats Google.</span>
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText5 />
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[77px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-[435px]" data-name="List Item">
      <Icon5 />
      <Text5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText6() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[75px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[405px]">
        <span>{`Google Business Profile – `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">Création ou optimisation de votre fiche Google, ajout de photos et intégration d’avis vérifiés sur votre site.</span>
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText6 />
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[77px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-[435px]" data-name="List Item">
      <Icon6 />
      <Text6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText7() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[75px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[405px]">
        <span>{`Email marketing – `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">Mise en place d’une newsletter (Brevo, Mailchimp), création du gabarit, capture d’emails et scénarios simples d’automatisation.</span>
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText7 />
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[77px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-[435px]" data-name="List Item">
      <Icon7 />
      <Text7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText8() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[125px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[414px]">
        Automatisations (Make) –<span className="font-['Inter:Regular',_sans-serif] font-normal">{` Connexions entre votre site et vos outils : formulaire → email/CRM, messages pré-arrivée, confirmations personnalisées, export automatique des leads.`}</span>
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[75px] relative shrink-0 w-[399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[75px] relative w-[399px]">
        <BoldText8 />
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[101px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-full" data-name="List Item">
      <Icon8 />
      <Text8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText9() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[156.781px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[104px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[389px]">
        <span>{`FAQ interactive – `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">Module de questions/réponses dépliantes avec recherche rapide et liens utiles. Réduit jusqu’à 30 % des demandes répétitives par email.</span>
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[104px] relative shrink-0 w-[414px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[104px] relative w-[414px]">
        <BoldText9 />
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[106px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-full" data-name="List Item">
      <Icon9 />
      <Text9 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-[781px] top-[185px] w-[442px]" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Options() {
  return (
    <div className="absolute h-[749px] left-0 top-[3034px] w-[1524px]" data-name="Options">
      <p className="absolute bg-clip-text font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[60px] left-[760.95px] not-italic text-[0px] text-[45px] text-center text-nowrap top-[43.45px] translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        <span>{`Options disponibles `}</span>
        <span className="text-black">selon vos besoins</span>
      </p>
      <List />
      <List1 />
    </div>
  );
}

function BtVoirLesModeles() {
  return (
    <div className="absolute bg-[#9b3eff] box-border grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[52px] left-[835px] px-[28px] py-[14px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] top-[499px] w-[333px]" data-name="BT Voir les modèles">
      <p className="[grid-area:1_/_1] font-['Inter_Tight:SemiBold',_sans-serif] leading-[24px] not-italic relative self-start shrink-0 text-[18px] text-center text-white">Demander un devis</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2f56f180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Ico() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]" data-name="Ico">
      <Icon10 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between not-italic relative shrink-0 text-black">
      <p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold h-[36px] leading-[36px] relative shrink-0 text-[33px] w-[382px]">Landing Page Express</p>
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[34px] leading-[30px] relative shrink-0 text-[20px] w-[1124px]">Pour exister rapidement en ligne</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[1198px]">
      <Ico />
      <Frame50 />
    </div>
  );
}

function BellSimpleRinging() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="BellSimpleRinging">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="BellSimpleRinging">
          <path d={svgPaths.p3abb8400} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <BellSimpleRinging />
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[33px] leading-[30px] not-italic relative shrink-0 text-[#ff6900] text-[20px] w-[221px]">Ce que vous obtenez</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[10px] h-[30px] items-start relative shrink-0 w-[246px]">
      <Frame52 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[0px] text-black w-[350px]">
        <p className="mb-0 text-[15px]">
          {`Une vitrine attractive et design, structurée en `}
          <br aria-hidden="true" />6 sections :
        </p>
        <p className="text-[#686363] text-[14px]">{`Accueil / Héros • Hébergements & services • À propos • Galerie • Avis clients • Contact / Accès`}</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check1 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[345px]">Réservation connectée : bouton “Réserver” relié à votre moteur ou channel manager, visible dès l’accueil.</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check2 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[406px]">Affichage mobile et tablette optimisé pour une expérience fluide et rapide.</p>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check3 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[374px]">Suivi de performance : intégration de Google Analytics 4 et Search Console.</p>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check4 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[336px]">Formulaire de contact complet : anti-spam, message de succès, redirection.</p>
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check5 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[345px]">Autonomie garantie : formation de 45 min (en visio) + mini-guide PDF/vidéo pour gérer textes, prix et photos facilement, sans coder.</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] h-[417px] items-start relative shrink-0 w-full">
      <Frame53 />
      <Frame54 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[456px] items-start relative shrink-0 w-[371px]">
      <Frame49 />
      <Frame62 />
    </div>
  );
}

function HandCoins() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="HandCoins">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="HandCoins">
          <path d={svgPaths.p11735880} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start ml-0 mt-0 relative w-[286px]">
      <HandCoins />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#7f22fe] text-[20px] w-[296px]">Bénéfices</p>
    </div>
  );
}

function Group49() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame64 />
    </div>
  );
}

function Check6() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check6 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Délai express : mise en ligne en 7 jours ouvrés après réception des contenus.</p>
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check7 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Budget maîtrisé : un site efficace et professionnel sans complexité technique.</p>
    </div>
  );
}

function Check8() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check8 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Évolutivité assurée : la page peut évoluer en site vitrine complet sans repartir de zéro.</p>
    </div>
  );
}

function Check9() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check9 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[298px]">Pensée mobile-first : rapide, claire et conçue pour déclencher l’action.</p>
    </div>
  );
}

function Check10() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check10 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[303px]">Suivi d’audience inclus : Analytics et Search Console configurés.</p>
    </div>
  );
}

function Check11() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check11 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[330px]">Structure optimisée pour convertir : votre offre est lisible et orientée réservation.</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[359px]">
      <Frame65 />
      <Frame59 />
      <Frame60 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0">
      <Group49 />
      <Frame69 />
    </div>
  );
}

function Airplay() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Airplay">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Airplay">
          <path d={svgPaths.p31166300} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Airplay />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#00bba7] text-[20px] w-[200px]">Ce qui est inclus</p>
    </div>
  );
}

function Check12() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check12 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[285px]">1 concept visuel basé sur nos modèles : choix parmi 3 designs pré-sélectionnés.</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[316px]">
      <Frame71 />
    </div>
  );
}

function Check13() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check13 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[301px]">Personnalisation légère : logo, couleurs, typographies, visuel d’accueil.</p>
    </div>
  );
}

function Check14() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check14 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Intégration de vos contenus : textes + jusqu’à 15 photos optimisées.</p>
    </div>
  );
}

function Check15() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check15 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[298px]">SEO essentiel : balises Title/Meta, Hn, ALT, données locales de base.</p>
    </div>
  );
}

function Check16() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check16 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[326px]">Check-list pré-lancement : tests de performance, affichage mobile et indexation.</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[400px]">
      <Frame72 />
      <Frame73 />
      <Frame74 />
      <Frame75 />
      <Frame76 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[355px] items-start relative shrink-0 w-[344px]">
      <Frame70 />
      <Frame77 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0">
      <Frame63 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] h-[549px] items-start left-[28px] top-[20px] w-[1172px]">
      <Frame51 />
      <Frame78 />
    </div>
  );
}

function Landing() {
  return (
    <div className="bg-white h-[579px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Landing">
      <div aria-hidden="true" className="absolute border-2 border-[#9b3eff] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <BtVoirLesModeles />
      <Frame79 />
    </div>
  );
}

function BtVoirLesModeles1() {
  return (
    <div className="absolute bg-[#9b3eff] box-border grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[52px] left-[835px] px-[28px] py-[14px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] top-[603px] w-[333px]" data-name="BT Voir les modèles">
      <p className="[grid-area:1_/_1] font-['Inter_Tight:SemiBold',_sans-serif] leading-[24px] not-italic relative self-start shrink-0 text-[18px] text-center text-white">Demander un devis</p>
    </div>
  );
}

function BellSimpleRinging1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="BellSimpleRinging">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="BellSimpleRinging">
          <path d={svgPaths.p3abb8400} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <BellSimpleRinging1 />
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[33px] leading-[30px] not-italic relative shrink-0 text-[#ff6900] text-[20px] w-[221px]">Ce que vous obtenez</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[10px] h-[38.165px] items-start relative shrink-0 w-[273.182px]">
      <Frame80 />
    </div>
  );
}

function Check17() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check17 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[350px]">Une présence web professionnelle et complète, pensée pour valoriser votre établissement.</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame82 />
    </div>
  );
}

function Check18() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check18 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[0px] text-black w-[350px]">
        <p className="mb-0 text-[15px]">Un site vitrine design et optimisé, structuré en 6 à 7 pages selon vos besoins :</p>
        <p className="text-[#686363] text-[14px] whitespace-pre-wrap">{`Accueil / Héros • Hébergements • Services & activités • Galerie • Avis clients & preuves sociales • • À propos  • Contact / Accès`}</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[376px]">
      <Frame84 />
    </div>
  );
}

function Check19() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[376px]">
      <Check19 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[345px]">Réservation connectée : bouton “Réserver” relié à votre moteur ou channel manager, visible dès l’accueil.</p>
    </div>
  );
}

function Check20() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[367px]">
      <Check20 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[406px]">Affichage mobile et tablette optimisé pour une expérience fluide et rapide.</p>
    </div>
  );
}

function Check21() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[364px]">
      <Check21 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[374px]">Suivi de performance : intégration de Google Analytics 4 et Search Console.</p>
    </div>
  );
}

function Check22() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[347px]">
      <Check22 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[338px]">Formulaire de contact complet : anti-spam, message de succès, redirection.</p>
    </div>
  );
}

function Check23() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[347px]">
      <Check23 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[332px]">Autonomie garantie : formation de 45 min (en visio) + mini-guide PDF/vidéo pour gérer textes, prix et photos facilement, sans coder.</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] h-[474px] items-start relative shrink-0 w-full">
      <Frame83 />
      <Frame85 />
      <Frame86 />
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[388px]">
      <Frame81 />
      <Frame91 />
    </div>
  );
}

function HandCoins1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="HandCoins">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="HandCoins">
          <path d={svgPaths.p11735880} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start ml-0 mt-0 relative w-[286px]">
      <HandCoins1 />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#7f22fe] text-[20px] w-[296px]">Bénéfices</p>
    </div>
  );
}

function Group51() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame93 />
    </div>
  );
}

function Check24() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check24 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Délai maîtrisé : mise en ligne en 2 à 3 semaines ouvrées après réception des contenus.</p>
    </div>
  );
}

function Check25() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check25 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Image professionnelle : un site clair, rassurant et aligné avec votre identité.</p>
    </div>
  );
}

function Check26() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check26 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Évolutivité naturelle : base solide pour ajouter facilement d’autres pages (offres spéciales, blog, langues supplémentaires, partenaires…).</p>
    </div>
  );
}

function Check27() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check27 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[298px]">Pensé mobile-first : rapide, fluide et conçu pour convertir vos visiteur·euse·s.</p>
    </div>
  );
}

function Check28() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check28 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[303px]">Suivi d’audience intégré : connexion à Google Analytics et Search Console.</p>
    </div>
  );
}

function Check29() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check29 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[330px]">Clarté de l’offre : structure lisible et intuitive qui inspire confiance et incite à la réservation.</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
      <Frame94 />
      <Frame95 />
      <Frame96 />
      <Frame97 />
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[359px]">
      <Group51 />
      <Frame100 />
    </div>
  );
}

function Airplay1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Airplay">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Airplay">
          <path d={svgPaths.p31166300} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[14px] h-[33.673px] items-center relative shrink-0 w-[192.185px]">
      <Airplay1 />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#00bba7] text-[20px] w-[200px]">Ce qui est inclus</p>
    </div>
  );
}

function Check30() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check30 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[285px]">1 concept visuel basé sur nos modèles Titah dédiés à l’hébergement touristique : choix parmi 3 designs pré-sélectionnés selon votre type d’établissement et selon brief client.</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[316px]">
      <Frame103 />
    </div>
  );
}

function Check31() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check31 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[301px]">Personnalisation légère : logo, couleurs, typographies et visuel de couverture.</p>
    </div>
  );
}

function Check32() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[304px]">
      <Check32 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[278px]">Intégration de vos contenus : textes + jusqu’à 30 photos optimisées et création des pages standards listées ci-dessus (jusqu’à 7 pages).</p>
    </div>
  );
}

function Check33() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check33 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[298px]">SEO essentiel : balises Title/Meta, Hn, ALT, données locales de base.</p>
    </div>
  );
}

function Check34() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[7px] h-[64px] items-start relative shrink-0 w-[277px]">
      <Check34 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[277px]">Check-list pré-lancement : tests de performance, affichage mobile et indexation.</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] h-[396.224px] items-start relative shrink-0 w-full">
      <Frame104 />
      <Frame105 />
      <Frame106 />
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[323px]">
      <Frame102 />
      <Frame109 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[19px] items-start relative shrink-0">
      <Frame92 />
      <Frame101 />
      <Frame110 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="absolute content-stretch flex gap-[19px] h-[535px] items-start left-[34px] top-[127px] w-[1152px]">
      <Frame111 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2137b930} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Ico1() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-center left-[34px] rounded-[16px] top-[27px] w-[60.285px]" data-name="Ico">
      <Icon11 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents left-[34px] top-[27px]">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[34px] leading-[30px] left-[111.24px] not-italic text-[20px] text-black top-[84px] w-[1058.76px]">Pour présenter, convaincre et déclencher les réservations</p>
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold h-[36px] leading-[36px] left-[111.24px] not-italic text-[33px] text-black top-[39px] w-[359.828px]">Site Vitrine Complet</p>
      <Ico1 />
    </div>
  );
}

function SiteComplet() {
  return (
    <div className="bg-white h-[684px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Site complet">
      <div aria-hidden="true" className="absolute border-2 border-[#ff6900] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <BtVoirLesModeles1 />
      <Frame112 />
      <Group50 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_488)" id="Icon">
          <path d={svgPaths.p33201170} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 2.66667V8" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M29.3333 5.33333H24" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.pecb2400} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Ico2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[34px] rounded-[16px] size-[64px] top-[27px]" data-name="Ico">
      <Icon12 />
    </div>
  );
}

function BellSimpleRinging2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="BellSimpleRinging">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="BellSimpleRinging">
          <path d={svgPaths.p3abb8400} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <BellSimpleRinging2 />
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[33px] leading-[30px] not-italic relative shrink-0 text-[#ff6900] text-[20px] w-[221px]">Ce que vous obtenez</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] h-[37.251px] items-start ml-0 mt-0 relative w-[250.979px]">
      <Frame113 />
    </div>
  );
}

function Check35() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check35 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[350px]">Une présence web modernisée et alignée avec votre identité.</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame115 />
    </div>
  );
}

function Check36() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check36 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[350px]">Une refonte complète sur la base d’un nouveau design, tout en revalorisant vos contenus existants et votre référencement acquis.</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame117 />
    </div>
  );
}

function Check37() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check37 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[0px] text-black w-[350px]">
        <p className="mb-0 text-[15px]">Un site vitrine design et optimisé, structuré en 6 à 7 pages selon vos besoins :</p>
        <p className="text-[#686363] text-[14px] whitespace-pre-wrap">{`Accueil / Héros • Hébergements • Services & activités • Galerie • Avis clients & preuves sociales • • À propos  • Contact / Accès`}</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame119 />
    </div>
  );
}

function Check38() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check38 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[345px]">Réservation connectée : bouton “Réserver” relié à votre moteur ou channel manager, visible dès l’accueil.</p>
    </div>
  );
}

function Check39() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check39 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[406px]">{`Optimisation mobile & tablette : amélioration de la vitesse, de la lisibilité et de l’accessibilité.`}</p>
    </div>
  );
}

function Check40() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check40 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[374px]">Suivi de performance : intégration de Google Analytics 4 et Search Console.</p>
    </div>
  );
}

function Check41() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check41 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[374px]">Formulaire de contact complet : anti-spam, message de succès, redirection.</p>
    </div>
  );
}

function Check42() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check42 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[374px]">Migration raisonnée des contenus : reprise structurée de vos textes et images, avec ajustements éditoriaux mineurs pour clarifier votre offre.</p>
    </div>
  );
}

function Check43() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #FF6900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check43 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[374px]">Autonomie garantie : formation de 45 min (en visio) + mini-guide PDF/vidéo pour gérer textes, prix et photos facilement, sans coder.</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[17px] h-[639.02px] items-start ml-0 mt-[48.98px] relative w-[382px]">
      <Frame116 />
      <Frame118 />
      <Frame120 />
      <Frame121 />
      <Frame122 />
      <Frame123 />
      <Frame124 />
      <Frame61 />
      <Frame125 />
    </div>
  );
}

function Group46() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame114 />
      <Frame126 />
    </div>
  );
}

function HandCoins2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="HandCoins">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="HandCoins">
          <path d={svgPaths.p11735880} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start ml-0 mt-0 relative w-[286px]">
      <HandCoins2 />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#7f22fe] text-[20px] w-[296px]">Bénéfices</p>
    </div>
  );
}

function Group52() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[7.009px] mt-0 place-items-start relative">
      <Frame127 />
    </div>
  );
}

function Check44() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check44 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Image professionnelle renouvelée : un design actuel, cohérent et rassurant.</p>
    </div>
  );
}

function Check45() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check45 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Expérience utilisateur optimisée : structure claire et parcours de réservation fluide.</p>
    </div>
  );
}

function Check46() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[359px]">
      <Check46 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[318px]">Gains de performance : site plus rapide, plus lisible sur mobile et mieux référencé.</p>
    </div>
  );
}

function Check47() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check47 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[298px]">Évolutivité assurée : base solide pour ajouter de nouvelles pages (offres, blog, langues, partenaires…).</p>
    </div>
  );
}

function Check48() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[336px]">
      <Check48 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[303px]">Suivi d’audience intégré : connexion à Google Analytics et Search Console.</p>
    </div>
  );
}

function Check49() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #8200DB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check49 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[330px]">Délai maîtrisé : calendrier de production défini après diagnostic du site existant.</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[17px] items-start ml-0 mt-[39px] relative w-[359px]">
      <Frame128 />
      <Frame129 />
      <Frame130 />
      <Frame131 />
      <Frame132 />
      <Frame133 />
    </div>
  );
}

function Group47() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group52 />
      <Frame134 />
    </div>
  );
}

function Airplay2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Airplay">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Airplay">
          <path d={svgPaths.p31166300} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame135() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[14px] items-center ml-[0.009px] mt-0 relative">
      <Airplay2 />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#00bba7] text-[20px] w-[200px]">Ce qui est inclus</p>
    </div>
  );
}

function Check50() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check50 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[285px]">Audit express de votre site actuel : performance, mobile, SEO de base et structure des contenus.</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[316px]">
      <Frame136 />
    </div>
  );
}

function Check51() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[311px]">
      <Check51 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[295px]">1 concept visuel basé sur nos modèles Titah dédiés à l’hébergement touristique : choix parmi 3 designs pré-sélectionnés selon votre type d’établissement et selon brief client.</p>
    </div>
  );
}

function Check52() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check52 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[374px]">Personnalisation légère : logo, couleurs, typographies et visuel de couverture.</p>
    </div>
  );
}

function Check53() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check53 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[295px]">Intégration de vos contenus optimisés : textes, jusqu’à 30 photos et création des pages standards listées ci-dessus (jusqu’à 7 pages).</p>
    </div>
  );
}

function Check54() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check54 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[286px]">SEO essentiel : balises Title/Meta, Hn, ALT et données locales de base.</p>
    </div>
  );
}

function Check55() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Check">
          <path d={svgPaths.p3c8b5b00} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
      <Check55 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[15px] text-black w-[289px]">{`Check-list pré-lancement : tests de performance, affichage mobile et indexation. `}</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[17px] items-start ml-0 mt-[39px] relative w-[326px]">
      <Frame137 />
      <Frame138 />
      <Frame139 />
      <Frame140 />
      <Frame141 />
      <Frame142 />
    </div>
  );
}

function Group48() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame135 />
      <Frame143 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="absolute content-stretch flex gap-[36px] h-[688px] items-start leading-[0] left-[34px] top-[140px] w-[1142px]">
      <Group46 />
      <Group47 />
      <Group48 />
    </div>
  );
}

function BtVoirLesModeles2() {
  return (
    <div className="absolute bg-[#9b3eff] box-border grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[52px] left-[837px] px-[28px] py-[14px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] top-[771px] w-[333px]" data-name="BT Voir les modèles">
      <p className="[grid-area:1_/_1] font-['Inter_Tight:SemiBold',_sans-serif] leading-[24px] not-italic relative self-start shrink-0 text-[18px] text-center text-white">Demander un devis</p>
    </div>
  );
}

function Refonte() {
  return (
    <div className="bg-white h-[855px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Refonte">
      <div aria-hidden="true" className="absolute border-2 border-[#00bba7] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[34px] leading-[30px] left-[116px] not-italic text-[20px] text-black top-[84px] w-[1124px]">Pour redonner vie à votre site et améliorer vos performances</p>
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold h-[36px] leading-[36px] left-[116px] not-italic text-[33px] text-black top-[39px] w-[703px]">{`Refonte & Modernisation`}</p>
      <Ico2 />
      <Frame144 />
      <BtVoirLesModeles2 />
    </div>
  );
}

function Offre() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[59px] h-[2404px] items-center left-0 px-0 py-[64px] top-[630px] w-[1520px]" data-name="Offre">
      <Landing />
      <SiteComplet />
      <Refonte />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[38px] left-[407px] top-[3158px] w-[682px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[27px] left-0 not-italic text-[#4a5565] text-[24px] text-nowrap top-0 whitespace-pre">Des fonctionnalités complémentaires pour aller plus loin</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#9b3eff] h-[48px] relative rounded-[5px] shrink-0 w-[219.648px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)]" />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[24px] left-[110px] not-italic text-[18px] text-center text-nowrap text-white top-[12.5px] translate-x-[-50%] whitespace-pre">Parlons-en ensemble</p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[36px] h-[303px] items-center left-[2px] px-[344px] py-[43px] top-[3783px] w-[1520px]" data-name="Section">
      <p className="bg-clip-text font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[45px] not-italic relative shrink-0 text-[0px] text-[40px] text-center w-[1000px]" style={{ WebkitTextFillColor: "transparent" }}>
        <span className="text-black">Vous souhaitez créer</span>
        <span>{` un site qui reflète votre établissement, `}</span>
        <span className="text-black">attire plus de voyageurs et reste simple à gérer ?</span>
      </p>
      <Link1 />
    </div>
  );
}

function Package() {
  return (
    <div className="absolute aspect-[24/24] left-[6.83%] overflow-clip right-[83.53%] top-[9px]" data-name="Package">
      <div className="absolute inset-[7.03%_10.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
          <path d={svgPaths.p2e7c6ef2} fill="var(--fill-0, #FF6900)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Livraison() {
  return (
    <div className="absolute contents inset-0" data-name="Livraison">
      <div className="absolute bg-white inset-0 rounded-[30px]">
        <div aria-hidden="true" className="absolute border border-[#ff6900] border-solid inset-0 pointer-events-none rounded-[30px]" />
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[26.19%_8.84%_23.81%_18.47%] leading-[21px] not-italic text-[#ff6900] text-[14px] text-nowrap whitespace-pre">Livraison en 1 à 5 semaines</p>
      <Package />
    </div>
  );
}

function Livraison1() {
  return (
    <div className="h-[42px] relative shrink-0 w-[249px]" data-name="Livraison">
      <Livraison />
    </div>
  );
}

function BezierCurve() {
  return (
    <div className="absolute aspect-[24/24] left-[8.13%] overflow-clip right-[80.38%] top-[9px]" data-name="BezierCurve">
      <div className="absolute inset-[19.52%_3.9%_19.53%_3.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 15">
          <path d={svgPaths.p33194200} fill="var(--fill-0, #00BBA7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className="h-[42px] relative shrink-0 w-[209px]" data-name="Design">
      <div className="absolute bg-white inset-0 rounded-[30px]">
        <div aria-hidden="true" className="absolute border border-[#00bba7] border-solid inset-0 pointer-events-none rounded-[30px]" />
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[26.19%_7.18%_23.81%_26.32%] leading-[21px] not-italic text-[14px] text-nowrap text-teal-500 whitespace-pre">Design professionnel</p>
      <BezierCurve />
    </div>
  );
}

function TrendUp() {
  return (
    <div className="absolute aspect-[24/24] left-[12.6%] overflow-clip right-[68.5%] top-[9px]" data-name="TrendUp">
      <div className="absolute inset-[19.53%_7.03%_25.84%_7.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 14">
          <path d={svgPaths.p33ea2600} fill="var(--fill-0, #2563EB)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Evolutif() {
  return (
    <div className="h-[42px] relative shrink-0 w-[127px]" data-name="Evolutif">
      <div className="absolute bg-white inset-0 rounded-[30px]">
        <div aria-hidden="true" className="absolute border border-blue-600 border-solid inset-0 pointer-events-none rounded-[30px]" />
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[26.19%_18.11%_23.81%_42.52%] leading-[21px] not-italic text-[14px] text-blue-600 text-nowrap whitespace-pre">Évolutif</p>
      <TrendUp />
    </div>
  );
}

function Frame145() {
  return (
    <div className="box-border content-stretch flex gap-[27px] items-start justify-center pb-0 pt-[17px] px-0 relative shrink-0">
      <Livraison1 />
      <Design />
      <Evolutif />
    </div>
  );
}

function Frame146() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[63px] top-[17px] w-[1077px]">
      <p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[55px] min-w-full not-italic relative shrink-0 text-[0px] text-black text-center w-[min-content] whitespace-pre-wrap">
        <span className="text-[53px]">{`Nos offres de création de sites internet  `}</span>
        <span className="bg-clip-text text-[40px]" style={{ WebkitTextFillColor: "transparent" }}>
          Une solution pour chaque hébergement touristique
        </span>
      </p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium h-[158px] leading-[28.9px] not-italic relative shrink-0 text-[#44484f] text-[19px] text-center w-[868px]">
        Que vous soyez hôtelier·ère, gérant·e de gîte, exploitant·e de camping ou responsable de chambres d’hôtes, nous avons conçu des offres simples, rapides et efficaces pour améliorer votre visibilité en ligne et valoriser votre établissement.
        <br aria-hidden="true" />
        Nos sites vous font gagner du temps : simples à mettre à jour, connectés à votre moteur de réservation et conçus pour convertir vos visiteur·euse·s en client·e·s.
      </p>
      <Frame145 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[426px] left-0 top-[-20px] w-[1204px]" data-name="Container">
      <Frame146 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[294px] relative shrink-0 w-[1204px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[550px] items-start left-0 overflow-clip pb-0 pl-[152px] pr-0 pt-[80px] top-[80px] w-[1520px]" data-name="Hero">
      <Container7 />
    </div>
  );
}

function Header() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Header">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFooter} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-full" />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[122.18px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center relative w-[122.18px]">
        <Header />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[88px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[88px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">Nos offres</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[78.938px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">A propos</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">FAQ</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#9b3eff] h-[44px] relative rounded-[5px] shrink-0 w-[113.016px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[113.016px]">
        <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[10.5px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[44px] relative shrink-0 w-[594px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[88px] h-[44px] items-center relative w-[594px]">
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Navigation />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white h-[80px] relative shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[80px] items-start px-[152px] py-0 relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function SiteWebPourAgenceTitah() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-0 w-[1520px]" data-name="Site Web pour Agence Titah">
      <Header1 />
    </div>
  );
}

export default function NosOffres() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="Nos offres">
      <Footer1 />
      <Options />
      <Offre />
      <Paragraph2 />
      <Section />
      <Hero />
      <SiteWebPourAgenceTitah />
    </div>
  );
}