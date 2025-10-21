import svgPaths from "./svg-c4a83rqufu";
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
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[357px] items-start left-[3px] pb-0 pl-[121.5px] pr-[120px] pt-px top-[1531px] w-[1523px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="absolute h-[14px] left-[60.26px] top-0 w-[7.563px]" data-name="ContactPage">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Prénom</p>
      <ContactPage />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function ContactPage1() {
  return (
    <div className="absolute h-[14px] left-[39.76px] top-0 w-[7.563px]" data-name="ContactPage">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Nom</p>
      <ContactPage1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function ContactPage2() {
  return (
    <div className="absolute h-[14px] left-[44.45px] top-0 w-[7.563px]" data-name="ContactPage">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Email</p>
      <ContactPage2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#1b1c1e] text-[14px] text-nowrap whitespace-pre">Téléphone</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function ContactPage3() {
  return (
    <div className="absolute h-[14px] left-[153.66px] top-0 w-[7.563px]" data-name="ContactPage">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{`Type d'établissement`}</p>
      <ContactPage3 />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[174.633px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[174.633px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Sélectionnez votre activité</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[5px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton />
    </div>
  );
}

function ContactPage4() {
  return (
    <div className="absolute h-[14px] left-[121.16px] top-0 w-[7.563px]" data-name="ContactPage">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Service souhaité</p>
      <ContactPage4 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-[167.891px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[167.891px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Landing Page Express</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <RadioButton />
      <Label />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[150.062px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[150.062px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Site Vitrine Complet</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <RadioButton1 />
      <Label1 />
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[185.961px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[185.961px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">{`Refonte & Modernisation`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <RadioButton2 />
      <Label2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[122px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
      <Container16 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#1b1c1e] text-[14px] text-nowrap whitespace-pre">Options souhaitées</p>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[136.68px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[136.68px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Pages additionnelles</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton1 />
      <Label3 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[169.008px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[169.008px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Personnalisation avancée</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton2 />
      <Label4 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[178.133px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[178.133px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Accompagnement éditorial</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton3 />
      <Label5 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[207.633px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[207.633px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">{`Gestion des avis & e-réputation`}</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton4 />
      <Label6 />
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[125.953px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[125.953px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Version multilingue</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton5 />
      <Label7 />
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[116.211px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[116.211px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Pack SEO avancé</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:3_/_2] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton6 />
      <Label8 />
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[157.18px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[157.18px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Google Business Profile</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:4_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton7 />
      <Label9 />
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[105.234px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[105.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Email marketing</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:4_/_2] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton8 />
      <Label10 />
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[106.148px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[106.148px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">Automatisations</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:5_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton9 />
      <Label11 />
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[99.945px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[99.945px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-gray-600 text-nowrap top-0 whitespace-pre">FAQ interactive</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="[grid-area:5_/_2] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <PrimitiveButton10 />
      <Label12 />
    </div>
  );
}

function Container28() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(5,_minmax(0px,_1fr))] h-[153px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[179px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel6 />
      <Container28 />
    </div>
  );
}

function ContactPage5() {
  return (
    <div className="absolute h-[14px] left-[149.17px] top-0 w-[7.563px]" data-name="ContactPage">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Décrivez votre projet</p>
      <ContactPage5 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f3f3f5] h-[64px] relative rounded-[5px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[64px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Parlez-nous de vos besoins, vos objectifs, votre situation actuelle...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Textarea />
    </div>
  );
}

function ContactPage6() {
  return (
    <div className="absolute h-[14px] left-[177.94px] top-0 w-[7.563px]" data-name="ContactPage">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[0.5px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[14px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Accord de confidentialité</p>
      <ContactPage6 />
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="absolute bg-[#f3f3f5] left-0 rounded-[4px] size-[16px] top-[4px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Label13() {
  return (
    <div className="absolute h-[89.594px] left-[28px] top-0 w-[580px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[14px] text-gray-600 top-[0.5px] w-[576px]">{`En soumettant ce formulaire, j'accepte de partager mon adresse email ainsi que les informations liées à ma demande. Je comprends que toutes les données partagées seront traitées de manière confidentielle et ne seront en aucun cas partagées avec des tiers sans mon consentement explicite.`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[89.594px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton11 />
      <Label13 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[115.594px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel8 />
      <Container31 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[399.12px] size-[20px] top-[19.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1675)" id="Icon">
          <path d={svgPaths.p365e1040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p8bd79c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1675">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9b3eff] h-[59px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[27px] left-[188.88px] not-italic text-[18px] text-nowrap text-white top-[16.5px] whitespace-pre">Envoyer ma demande</p>
      <Icon1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-[304.74px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">{`* Champs obligatoires - Réponse sous 48  h.`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[112px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Button />
      <Paragraph2 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white h-[1140.59px] relative shrink-0 w-full" data-name="Form">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[1140.59px] items-start pb-0 pt-[64px] px-[457.5px] relative w-full">
          <Container8 />
          <Container11 />
          <Container12 />
          <Container17 />
          <Container29 />
          <Container30 />
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function ContactPage7() {
  return (
    <div className="bg-white h-[1132px] relative shrink-0 w-[1523px]" data-name="ContactPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1132px] items-start relative w-[1523px]">
        <Form />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[80px] h-[1212px] items-start left-[3px] pb-0 pt-[80px] px-0 top-[338px] w-[1523px]" data-name="App">
      <ContactPage7 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[235px] items-center leading-[0] left-0 not-italic px-[50px] py-0 text-center top-[16px] w-[1210px]">
      <p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold h-[63px] leading-[53.4px] relative shrink-0 text-[53px] text-black w-full">
        <span>{`Parlons de `}</span>
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          votre projet
        </span>
      </p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium h-[109px] relative shrink-0 text-[#44484f] text-[19px] w-[714px]">
        <span className="leading-[29px]">Et voyons comment créer ensemble un site web clair, rapide et évolutif, pensé pour vos réservations directes.</span>
        <span className="leading-[14px]">
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="leading-[29px]">{`Remplissez le formulaire ci-dessous. Nous vous répondrons sous 48 h. `}</span>
      </p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[218px] left-0 top-[-20px] w-[1204px]" data-name="Container">
      <Frame46 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[198px] relative shrink-0 w-[1204px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[341px] items-start left-[2px] overflow-clip pb-0 pl-[152px] pr-0 pt-[80px] top-[80px] w-[1520px]" data-name="Hero">
      <Container35 />
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

function Link1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[122.18px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center relative w-[122.18px]">
        <Header />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[88px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[88px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">Nos offres</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[78.938px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">A propos</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">FAQ</p>
      </div>
    </div>
  );
}

function Link5() {
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
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Navigation />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white h-[80px] relative shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[80px] items-start px-[152px] py-0 relative w-full">
          <Container36 />
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

export default function ContactFormulaire() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="Contact formulaire">
      <Footer1 />
      <App />
      <Hero />
      <SiteWebPourAgenceTitah />
    </div>
  );
}