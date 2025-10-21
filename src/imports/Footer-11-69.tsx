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

export default function Footer1() {
  return (
    <div className="bg-white relative size-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[121.5px] pr-[120px] pt-px relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}