import svgPaths from "./svg-wml1hbtrmd";
import imgOuvertureDeck1 from "figma:asset/fd8a36d2589fc918dc7d9b9cb05e6f14a1b81216.png";

function Link() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[52px] items-center px-[25px] py-[13px] relative rounded-[5px] shrink-0 w-[305px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)]" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Offre spéciale pour nos client·e·s</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[8px] h-[52px] items-center px-[26px] py-[14px] relative rounded-[5px] shrink-0 w-[296.758px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#9b3eff] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#9b3eff] text-[16px] text-center text-nowrap whitespace-pre">{`Accéder à l'offre spéciale Titah`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex gap-[70px] h-[91px] items-center left-[152px] pb-0 pt-[26px] px-0 top-[428px] w-[727px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-0 mt-0 relative w-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Icon">
          <path d="M17.5 5L7.875 14.1667L3.5 10" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[228px]" data-name="Bold Text">
      <p className="font-['Inter:Light',_sans-serif] font-light h-[25px] leading-[16px] not-italic relative shrink-0 text-[15px] text-black w-[405px]">Simplifier la gestion quotidienne.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-[33px] mt-0 relative w-[248px]" data-name="Text">
      <BoldText />
    </div>
  );
}

function Group54() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Icon />
      <Text />
    </div>
  );
}

function Icon1() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-0 mt-0 relative w-[24.725px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Icon">
          <path d={svgPaths.p219cf480} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[228px]" data-name="Bold Text">
      <p className="font-['Inter:Light',_sans-serif] font-light h-[25px] leading-[16px] not-italic relative shrink-0 text-[15px] text-black w-[405px]">Améliorer l’expérience voyageur·euse.</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-[33.001px] mt-0 relative w-[291.999px]" data-name="Text">
      <BoldText1 />
    </div>
  );
}

function Group55() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-0 mt-0 relative w-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Icon">
          <path d="M17.5 5L7.875 14.1667L3.5 10" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[228px]" data-name="Bold Text">
      <p className="font-['Inter:Light',_sans-serif] font-light h-[25px] leading-[16px] not-italic relative shrink-0 text-[15px] text-black w-[405px]">Générer de nouveaux revenus.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-[33px] mt-0 relative w-[248px]" data-name="Text">
      <BoldText2 />
    </div>
  );
}

function Group56() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-0 mt-0 relative w-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Icon">
          <path d="M17.5 5L7.875 14.1667L3.5 10" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BoldText3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[228px]" data-name="Bold Text">
      <p className="font-['Inter:Light',_sans-serif] font-light h-[25px] leading-[16px] not-italic relative shrink-0 text-[15px] text-black w-[405px]">Faire gagner du temps à vos équipes.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-[33px] mt-0 relative w-[248px]" data-name="Text">
      <BoldText3 />
    </div>
  );
}

function Group57() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Icon3 />
      <Text3 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[127px] items-start justify-center leading-[0] left-[182px] top-[251px] w-[325px]" data-name="List Item">
      <Group54 />
      <Group55 />
      <Group56 />
      <Group57 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[150px] top-[35px]">
      <Container />
      <div className="absolute h-[518px] left-[685px] top-[41px] w-[756px]" data-name="ouverture deck 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOuvertureDeck1} />
      </div>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[46px] leading-[20px] left-[151px] not-italic text-[16px] text-black top-[390px] w-[563px]">STATION F, le plus grand campus de startups au monde, nous accompagne dans le développement et la structuration de Kawanah.</p>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[141px] leading-[0] left-[151px] not-italic text-[0px] text-black top-[110px] w-[716px]">
        <p className="mb-0">
          <span className="leading-[24px] text-[16px]">En parallèle de notre activité au sein de Titah, nous continuons à faire évoluer Kawanah, notre solution SaaS tout-en-un dédiée à l’hospitalité.</span>
          <span className="leading-[7px] text-[13px]"> </span>
        </p>
        <p>
          <span className="leading-[7px] text-[13px]">
            <br aria-hidden="true" />
          </span>
          <span className="leading-[24px] text-[16px]">Elle aide les hébergeur·euse·s à centraliser la gestion de leurs services et activités, souvent dispersée, manuelle et chronophage.</span>
        </p>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[23px] leading-[24px] left-[152px] not-italic text-[20px] text-black top-[223px] w-[549px]">Objectifs :</p>
      <p className="absolute bg-clip-text font-['Inter:Extra_Bold',_sans-serif] font-extrabold h-[49px] leading-[45px] left-[150px] not-italic text-[0px] text-[45px] top-[35px] w-[838px]" style={{ WebkitTextFillColor: "transparent" }}>
        <span className="text-black">{`Ce que nous `}</span>
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          développons pour vous
        </span>
      </p>
      <ListItem />
    </div>
  );
}

export default function Kawanah() {
  return (
    <div className="bg-white relative size-full" data-name="Kawanah">
      <Group53 />
    </div>
  );
}