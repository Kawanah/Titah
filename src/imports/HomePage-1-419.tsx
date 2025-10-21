import svgPaths from "./svg-9h1x2qd6f3";
import imgFooter from "figma:asset/5c5c5e36d9a707a6b167a2b93ac123371d4d9ddc.png";
import imgKawanah from "figma:asset/fd8a36d2589fc918dc7d9b9cb05e6f14a1b81216.png";
import imgImageExempleDeSiteWebLeGiteDesLavandes from "figma:asset/79b21271c1d487fae19aa4ff104956affdcd126d.png";

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
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[357px] items-start left-[-5px] pb-0 pl-[121.5px] pr-[120px] pt-px top-[4303px] w-[1523px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[28%_86.19%_32%_6.62%]" data-name="Icon">
      <div className="absolute inset-[-7.25%_-7.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Icon">
            <path d="M3.57794 0.999998V2.84" id="Vector" stroke="var(--stroke-0, #9B3EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M7.70264 0.999998V2.84" id="Vector_2" stroke="var(--stroke-0, #9B3EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.pab9ce00} id="Vector_3" stroke="var(--stroke-0, #9B3EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M1 4.68003H10.2806" id="Vector_4" stroke="var(--stroke-0, #9B3EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-violet-50 h-[23px] left-1/2 rounded-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[129px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ddd6ff] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Icon />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[17px] leading-[21px] left-[24px] not-italic text-[#9b3eff] text-[11px] top-px w-[94px]">Bientôt disponible</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[27px] relative shrink-0 w-[133px]" data-name="Container">
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[773px]">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold h-[30px] leading-[33px] left-[32px] not-italic text-[15px] text-white top-0 w-[741px]">{`Notre application Kawanah pour simplifier la gestion de vos services et enrichir l’expérience client. `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-end relative shrink-0 w-[1003px]">
      <Container6 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[7px] h-[30px] items-center justify-end relative shrink-0 w-[1006px]">
      <Frame2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#9b3eff] box-border content-stretch flex flex-col gap-[21px] h-[64px] items-start left-0 pb-px pt-[17px] px-[152px] top-[751px] w-[1520px]" data-name="Section">
      <Frame3 />
    </div>
  );
}

function Logo() {
  return (
    <div className="[grid-area:1_/_1] h-[19.241px] ml-[22.366%] mt-[17.949%] relative w-[110.805px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 20">
        <g id="Logo">
          <path d={svgPaths.p3041e100} fill="var(--fill-0, #010101)" id="Vector" />
          <path d={svgPaths.p7ec800} fill="var(--fill-0, #010101)" id="Vector_2" />
          <path d={svgPaths.p2106c200} fill="var(--fill-0, #010101)" id="Vector_3" />
          <path d={svgPaths.p948fd00} fill="var(--fill-0, #010101)" id="Vector_4" />
          <path d={svgPaths.p2d9eb600} fill="var(--fill-0, #010101)" id="Vector_5" />
          <path d={svgPaths.p32839300} fill="var(--fill-0, #010101)" id="Vector_6" />
          <path d={svgPaths.p1636d6f0} fill="var(--fill-0, #010101)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Gp() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[28px]" data-name="GP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="GP">
          <circle cx="14" cy="14" fill="url(#paint0_linear_1_467)" id="Ellipse 2" r="14" />
          <g clipPath="url(#clip0_1_467)" id="Calque_1">
            <path d={svgPaths.p16051f00} fill="var(--fill-0, #2563EB)" id="Vector" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_467" x1="-4.53521" x2="44.0001" y1="-1.38029" y2="8.88051">
            <stop stopColor="#407BE7" />
            <stop offset="0.367931" stopColor="#FFDCBE" />
            <stop offset="0.497615" stopColor="#FFDCBE" />
            <stop offset="0.738136" stopColor="#FAB515" />
          </linearGradient>
          <clipPath id="clip0_1_467">
            <rect fill="white" height="13.4084" transform="translate(9.07054 7.09858)" width="12.2254" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Logo />
      <Gp />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[619px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-px not-italic text-[#4a5565] text-[16px] top-[-1px] w-[747px]">Sélectionnée au round 1 du Fighters Program de STATION F, powered by TikTok</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[53px] relative shrink-0 w-[636px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[25.5px] left-px not-italic text-[#4a5565] text-[17px] top-px w-[645px]">{`Centralisez la gestion de vos services et activités, simplifiez le quotidien de vos équipes et enrichissez l'expérience de vos client·e·s.`}</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[52px] items-center px-[25px] py-[13px] relative rounded-[5px] shrink-0 w-[237px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)]" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">Découvrir Kawanah</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[8px] h-[52px] items-center px-[26px] py-[14px] relative rounded-[5px] shrink-0 w-[328px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#9b3eff] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#9b3eff] text-[18px] text-center text-nowrap whitespace-pre">{`Accéder à l'offre spéciale Titah`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="box-border content-stretch flex gap-[75px] items-center px-0 py-[26px] relative shrink-0" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col gap-[13px] h-[314.115px] items-start left-[151px] top-[3923.65px] w-[651px]" data-name="Section">
      <Group45 />
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[48px] leading-[40px] not-italic relative shrink-0 text-[27px] text-black w-[608px]">{`Notre webapp tout-en-un pour l'hospitalité`}</p>
      <Paragraph2 />
      <Paragraph3 />
      <Container7 />
    </div>
  );
}

function Kawanah() {
  return (
    <div className="absolute h-[415.475px] left-[778px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] top-[3888.53px] w-[684px]" data-name="Kawanah">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgKawanah} />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[111px] left-0 top-0 w-[1232px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[52px] left-[608.95px] not-italic text-[#1b1c1e] text-[45px] text-center text-nowrap top-[-7.69px] translate-x-[-50%] whitespace-pre">
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>{`Une approche différente, `}</span>
        <span>
          <br aria-hidden="true" />
          pensée pour les hébergeur·euse·s
        </span>
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[86.695px] left-[225px] top-[111px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[28.9px] left-[384.27px] not-italic text-[#4a5565] text-[17px] text-center top-0 translate-x-[-50%] w-[762px]">{`Chez Titah, nous créons nos propres modèles de sites web, spécialement conçus pour l'hébergement touristique. C'est ce qui nous permet d'allier design soigné, rapidité d'exécution et évolutivité, 3 piliers qui font la différence.`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[236px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph4 />
    </div>
  );
}

function BtVoirLesModeles() {
  return (
    <div className="absolute bg-[#9b3eff] box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center left-[487px] px-[24px] py-[12px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] top-[352px] w-[230px]" data-name="BT Voir les modèles">
      <p className="font-['Inter_Tight:SemiBold',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Voir nos modèles</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3cde4300} id="Vector" stroke="var(--stroke-0, #00BBA7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p18e93240} id="Vector_2" stroke="var(--stroke-0, #00BBA7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1987b500} id="Vector_3" stroke="var(--stroke-0, #00BBA7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p86b7780} id="Vector_4" stroke="var(--stroke-0, #00BBA7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-teal-100 content-stretch flex items-center justify-center left-[19px] rounded-[14px] size-[56px] top-[30px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[82px] left-[87px] top-[29px] w-[186px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[25px] left-0 not-italic text-[#1b1c1e] text-[20px] top-[0.5px] w-[192px]">Une mise en ligne rapide et sans stress</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[144px] left-[19px] top-[86px] w-[218px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[14px] top-[24px] w-[251px]">Vous choisissez votre modèle, nous le personnalisons à votre image, puis nous le mettons en ligne en quelques semaines seulement.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 bg-[rgba(0,187,167,0.02)] grow h-[294px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-solid border-teal-500 inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <BtVoirLesModeles />
      <Container9 />
      <Heading5 />
      <Paragraph5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.pb26ca00} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M21 19.8333V10.5" id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M15.1667 19.8333V5.83333" id="Vector_3" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 19.8333V16.3333" id="Vector_4" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-orange-200 content-stretch flex items-center justify-center left-[22px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[54px] left-[91px] top-[32px] w-[218px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[27px] left-0 not-italic text-[#1b1c1e] text-[20px] top-[0.5px] w-[185px]">Une base qui évolue avec vous</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[168px] left-[22px] top-[111px] w-[254px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[254px]">Votre site grandit au rythme de votre établissement. Vous pouvez commencer simplement, puis ajouter de nouvelles pages, fonctionnalités ou services sans tout recommencer.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 bg-[rgba(251,146,60,0.02)] grow h-[294px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-orange-400 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container11 />
      <Heading6 />
      <Paragraph6 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p106f7500} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M25.6667 11.6667V18.6667" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pc2e7900} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-purple-100 content-stretch flex items-center justify-center left-[23px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[71px] left-[89px] top-[25px] w-[140px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold h-[55px] leading-[27px] left-0 not-italic text-[#1b1c1e] text-[20px] top-[8px] w-[140px]">Autonomie garantie</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[168px] left-[18px] top-[115px] w-[255px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[255px]">{`Vous êtes formé·e et gagnez en autonomie dès la mise en ligne. Vous apprenez à mettre à jour vos textes, tarifs et visuels en toute simplicité, sans dépendre d'un prestataire.`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 bg-[rgba(155,62,255,0.02)] grow h-[294px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9b3eff] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container13 />
      <Heading7 />
      <Paragraph7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p2c948e80} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p12782a80} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1cc46d80} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-purple-100 content-stretch flex items-center justify-center left-[22px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[60px] left-[91px] top-[32px] w-[179px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold h-[48px] leading-[27px] left-0 not-italic text-[#1b1c1e] text-[20px] top-px w-[163px]">Des modèles 100 % maison</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 bg-[rgba(155,62,255,0.02)] grow h-[294px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9b3eff] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container15 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[178px] leading-[24px] left-[22px] not-italic text-[#4a5565] text-[14px] top-[111px] w-[247px]">Chaque modèle est créé par nos soins, avec une exigence esthétique et une compréhension fine de vos besoins. Résultat : un site toujours professionnel, harmonieux et inspirant confiance à vos voyageur·euse·s.</p>
      <Heading8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[27px] h-[305px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] h-[765.719px] items-start left-0 pb-0 pt-[64px] px-[152px] top-[814.61px] w-[1520px]" data-name="Section">
      <Container8 />
      <Container17 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[60px] left-[152px] top-[44px] w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Black',_sans-serif] font-['Inter:Extra_Bold',_sans-serif] font-black font-extrabold leading-[60px] left-[608.71px] not-italic text-[#1b1c1e] text-[0px] text-[45px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">
        Nos offres de création de
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          {" "}
        </span>
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          sites internet
        </span>
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[27px] left-[152px] top-[120px] w-[1216px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[27px] left-[608.42px] not-italic text-[#4a5565] text-[23px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Choisissez la formule adaptée à votre établissement</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute contents left-[152px] top-[44px]" data-name="Container">
      <Heading9 />
      <Paragraph8 />
    </div>
  );
}

function Icon5() {
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

function Container19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[160px] rounded-[16px] size-[64px] top-[34px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[36px] left-1/2 top-[122px] translate-x-[-50%] w-[316px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[36px] left-[157.5px] not-italic text-[#1b1c1e] text-[24px] text-center top-px translate-x-[-50%] w-[383px]">Landing Page Express</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[24px] left-[34px] top-[182px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-1px] whitespace-pre">Pour exister rapidement en ligne</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[72px] left-[34px] top-[230px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] w-[315px]">Une page unique, claire et attractive, pour exister rapidement et déclencher les réservations directes.</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[326px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[295px]">Idéale pour les établissements qui veulent être visibles en quelques jours.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container19 />
      <Heading10 />
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Icon6() {
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

function Container21() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[158px] rounded-[16px] size-[64px] top-[34px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[36px] left-1/2 top-[122px] translate-x-[-50%] w-[384px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[36px] left-[189px] not-italic text-[#1b1c1e] text-[24px] text-center top-px translate-x-[-50%] w-[378px]">Site Vitrine Complet</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[178px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] w-[313px]">Pour présenter, convaincre et déclencher les réservations</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[96px] left-[34px] top-[242px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] w-[296px]">Un site multi-pages pour présenter vos hébergements, services, avis et informations pratiques dans une structure fluide et efficace.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[358px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[289px]">Parfait pour valoriser votre offre et renforcer votre image professionnelle.</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[18px] size-[14px] top-[10.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_472)" id="Icon">
          <path d={svgPaths.p37795c0} id="Vector" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.8333 2.33333H10.5" id="Vector_3" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p291dcf00} id="Vector_4" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_472">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-purple-50 h-[35.5px] left-[133.47px] rounded-[10px] top-[-10px] w-[117.055px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-2 border-[#dab2ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon7 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[19.5px] left-[38px] not-italic text-[#8200db] text-[13px] text-nowrap top-[9.5px] whitespace-pre">Populaire</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#c27aff] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container21 />
      <Heading11 />
      <Paragraph12 />
      <Paragraph13 />
      <Paragraph14 />
      <Text1 />
    </div>
  );
}

function Icon8() {
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

function Container23() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[160px] rounded-[16px] size-[64px] top-[34px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[36px] left-0 top-[122px] w-[384px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[36px] left-[192px] not-italic text-[#1b1c1e] text-[24px] text-center top-px translate-x-[-50%] w-[384px]">{`Refonte & Modernisation`}</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[182px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] w-[243px]">Pour redonner vie à votre site et améliorer vos performances</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[96px] left-[34px] top-[254px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] w-[311px]">{`Une refonte complète pour moderniser votre site existant, améliorer l'expérience mobile et fluidifier le parcours de réservation.`}</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[374px] w-[316px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[306px]">Pensée pour les établissements qui souhaitent évoluer sans repartir de zéro.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container23 />
      <Heading12 />
      <Paragraph15 />
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[29px] h-[464px] items-center justify-center left-[152px] top-[206.78px] w-[1216px]" data-name="Container">
      <Container20 />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#9b3eff] h-[48px] left-[642px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] top-[731px] w-[235.297px]" data-name="Link">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-[118.5px] not-italic text-[18px] text-center text-nowrap text-white top-[12.5px] translate-x-[-50%] whitespace-pre">Voir nos offres en détail</p>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-white h-[842.994px] left-0 top-[2113.22px] w-[1520px]" data-name="Section">
      <Container18 />
      <Container25 />
      <Link3 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[60px] left-0 top-[12px] w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[60px] left-[608.17px] not-italic text-[#1b1c1e] text-[0px] text-[45px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">
        <span>{`Des `}</span>
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          fondations
        </span>
        <span>{` solides`}</span>
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[185px] left-0 top-0 w-[1232px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[27px] left-[598px] not-italic text-[#364153] text-[17px] text-center top-[87px] translate-x-[-50%] w-[912px]">{`Des sites performants, durables et pensés pour l'expérience client Nos sites reposent sur une base technique fiable et moderne, optimisée dès la conception pour la performance, le référencement et la simplicité d'usage.`}</p>
      <Heading13 />
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

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[92.688px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] text-nowrap whitespace-pre">
        <span>{`Mobile-first `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">: Une navigation fluide et rapide sur tous les écrans.</span>
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[489.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[489.773px]">
        <BoldText />
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[26px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-full" data-name="List Item">
      <Icon9 />
      <Text2 />
    </div>
  );
}

function Icon10() {
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
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[230.023px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[54px] leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] w-[833px]">
        <span>{`Réservation fluide et intégrée `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">: Un bouton de réservation relié à votre moteur ou channel manager, pour un parcours sans friction.</span>
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[43.5px] relative shrink-0 w-[674.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.5px] relative w-[674.773px]">
        <BoldText1 />
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[48px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-full" data-name="List Item">
      <Icon10 />
      <Text3 />
    </div>
  );
}

function Icon11() {
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
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[157.203px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] text-nowrap whitespace-pre">
        <span>{`SEO et performance `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">: Structure optimisée (balises Hn, méta, ALT, données locales).</span>
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[634.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[634.844px]">
        <BoldText2 />
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[26px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-full" data-name="List Item">
      <Icon11 />
      <Text4 />
    </div>
  );
}

function Icon12() {
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
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-0 w-[180.336px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] text-nowrap whitespace-pre">
        <span>{`Outils essentiels inclus `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">: Google Analytics 4, Search Console et formulaire de contact préconfiguré.</span>
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[812px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[812px]">
        <BoldText3 />
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[26px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-full" data-name="List Item">
      <Icon12 />
      <Text5 />
    </div>
  );
}

function Icon13() {
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
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1b1c1e] text-[16px] text-nowrap whitespace-pre">
        <span>{`Transparence totale `}</span>
        <span className="font-['Inter:Regular',_sans-serif] font-normal">: Un processus clair, sans frais cachés, ni mauvaises surprises.</span>
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[638.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[638.156px]">
        <BoldText4 />
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[26px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-[725px]" data-name="List Item">
      <Icon13 />
      <Text6 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[248px] items-start left-[152px] top-[185.23px] w-[911px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Fondations() {
  return (
    <div className="absolute h-[453.611px] left-[121px] top-[1620.47px] w-[1248px]" data-name="Fondations">
      <Container26 />
      <List />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[27px] left-[7px] top-[8px] w-[832px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[27px] left-[415.74px] not-italic text-[21px] text-black text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Un site professionnel, rapide et pensé pour vos réservations directes.</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[44px] left-[344px] top-[103px] w-[832px]" data-name="Heading 2">
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[24px] left-[344px] top-[160px] w-[832px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[415.94px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">Vous avez un projet ou souhaitez moderniser votre site pour le rendre plus clair, plus efficace et plus actuel ?</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#9b3eff] h-[48px] left-[650.17px] rounded-[5px] top-[216.77px] w-[219.648px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)]" />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[24px] left-[110px] not-italic text-[18px] text-center text-nowrap text-white top-[12.5px] translate-x-[-50%] whitespace-pre">Parlons-en ensemble</p>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-white h-[321.14px] left-0 top-[3532.26px] w-[1520px]" data-name="Section">
      <Heading14 />
      <p className="absolute bg-clip-text font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[60px] left-[760.95px] not-italic text-[45px] text-center text-nowrap top-[37px] translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>{`Passer à l'action`}</p>
      <Paragraph19 />
      <Link4 />
    </div>
  );
}

function ImageExempleDeSiteWebLeGiteDesLavandes() {
  return (
    <div className="absolute h-[415px] left-[518px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] top-[66.77px] w-[686px]" data-name="Image (Exemple de site web - Le gîte des lavandes)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageExempleDeSiteWebLeGiteDesLavandes} />
    </div>
  );
}

function Paragraph20() {
  return <div className="absolute h-[87px] left-0 top-[280px] w-[630px]" data-name="Paragraph" />;
}

function Frame58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[-4px] not-italic top-[46px] w-[652px]">
      <p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold h-[108px] leading-[52.4px] relative shrink-0 text-[53px] text-black w-full">
        Hébergeur·euse·s touristiques
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
      <p className="font-['Inter:Black',_sans-serif] font-['Inter:Extra_Bold',_sans-serif] font-black font-extrabold h-[94px] leading-[47px] relative shrink-0 text-[#1b1c1e] text-[0px] text-[40px] w-[569px]">
        <span className="text-black">Votre site</span>
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          {" "}
        </span>
        <span className="text-black">{`express et évolutif `}</span>
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          Vos réservations
        </span>{" "}
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
          en hausse
        </span>
      </p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium h-[199px] leading-[28.9px] relative shrink-0 text-[#44484f] text-[19px] w-[573px]">
        {`Nous accompagnons les propriétaires et gérant·e·s d'hôtels, de campings, de gîtes, de chambres d'hôtes et de villages vacances dans la création de sites beaux, efficaces et rapides à mettre en ligne. `}
        <br aria-hidden="true" />
        Des sites évolutifs et mobile-first, conçus pour valoriser votre établissement et déclencher des réservations directes.
      </p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center left-0 px-[25px] py-[13px] rounded-[5px] top-[0.31px] w-[230px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)]" />
      <p className="font-['Inter_Tight:SemiBold',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Voir nos offres</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center left-[269px] px-[26px] py-[14px] rounded-[5px] top-[0.31px] w-[232px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#9b3eff] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#9b3eff] text-[20px] text-nowrap whitespace-pre">Voir nos modèles</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[52px] left-[-4px] top-[487px] w-[797.711px]" data-name="Container">
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[466px] left-0 top-[-20px] w-[846px]" data-name="Container">
      <Paragraph20 />
      <Frame58 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="box-border content-stretch flex h-[558px] items-center justify-between p-[10px] relative shrink-0 w-[1200px]" data-name="Container">
      <ImageExempleDeSiteWebLeGiteDesLavandes />
      <Container28 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[692.459px] items-center justify-center left-0 overflow-clip top-[80px] w-[1520px]" data-name="Section">
      <Container29 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FFB900)" id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[133px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-amber-800 top-px tracking-[0.5px] w-[138px]">SÉLECTIONNÉE ROUND 1</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[15px] items-center left-[27px] top-[13.23px] w-[176px]" data-name="Container">
      <Icon14 />
      <Text7 />
      <Icon14 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_430)" id="Icon">
          <path d={svgPaths.p11d16100} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37d49080} id="Vector_2" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24319500} id="Vector_3" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p7d50f00} id="Vector_4" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_430">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[21px] left-0 not-italic text-[#1b1c1e] text-[14px] text-nowrap top-0 whitespace-pre">Fighters Program 2025</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-[25px] top-[34px] w-[177.141px]" data-name="Container">
      <Icon16 />
      <Text8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[18px] left-[73.92px] top-[59px] w-[79.289px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] left-[41.08px] not-italic text-[12px] text-black text-center top-[1.23px] translate-x-[-50%] w-[142px]">by STATION F</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_427)" id="Icon">
          <path d={svgPaths.pd083500} fill="var(--fill-0, #FFB900)" id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_427">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-gray-500 text-nowrap top-[0.5px] whitespace-pre">powered by TikTok</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[64.42px] top-[83px] w-[98.297px]" data-name="Container">
      <Icon17 />
      <Text9 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[111.396px] left-[1144px] rounded-[14px] top-[726.29px] w-[227.141px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute contents left-0 top-[80px]" data-name="Container">
      <Section />
      <Section1 />
      <Kawanah />
      <Section2 />
      <Section3 />
      <Fondations />
      <Section4 />
      <Section5 />
      <Badge />
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

function Link7() {
  return (
    <div className="h-[32px] relative shrink-0 w-[122.18px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center relative w-[122.18px]">
        <Header />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[88px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[88px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">Nos offres</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[78.938px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">A propos</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px] whitespace-pre">FAQ</p>
      </div>
    </div>
  );
}

function Link11() {
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
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link7 />
      <Navigation />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white h-[80px] relative shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[80px] items-start px-[152px] py-0 relative w-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function SiteWebPourAgenceTitah() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[-1px] top-0 w-[1520px]" data-name="Site Web pour Agence Titah">
      <Header1 />
    </div>
  );
}

function Section6() {
  return <div className="h-[576px] shrink-0 w-[1546px]" data-name="Section" />;
}

function Heading15() {
  return (
    <div className="h-[60px] relative shrink-0 w-[554px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[60px] left-0 not-italic text-[#1b1c1e] text-[45px] top-0 w-[682px]">Pourquoi choisir Titah ?</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[38px] relative shrink-0 w-[682px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[27px] left-0 not-italic text-[#4a5565] text-[24px] text-nowrap top-0 whitespace-pre">{`L'expertise et la proximité au service de votre réussite`}</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] h-[109px] items-start left-[151px] top-[70px] w-[719px]" data-name="Container">
      <Heading15 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[179px] left-[-2px] top-0 w-[691px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[233px] leading-[28.9px] left-px not-italic text-[17px] text-black top-[-15px] w-[666px]">
        <p className="mb-0">{`Avec plus de 15 ans d'expérience dans le digital, nous mettons notre savoir-faire au service des professionnel·le·s de l'hébergement touristique. Notre force : une expertise technique solide, un sens du design affirmé et une approche humaine à chaque étape du projet.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Titah, c'est une agence à taille humaine, réactive et à l'écoute, qui conçoit des sites durables, évolutifs et orientés résultats. Vous bénéficiez d'un accompagnement clair et fiable, pensé pour durer.`}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[245px] left-[154px] top-[200px] w-[832px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function ImageExempleDeSiteWebLeGiteDesLavandes1() {
  return (
    <div className="absolute h-[402px] left-[705px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] top-[91px] w-[664px]" data-name="Image (Exemple de site web - Le gîte des lavandes)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageExempleDeSiteWebLeGiteDesLavandes} />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[48px] left-[152px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] top-[466px] w-[235.297px]" data-name="Link">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-[118px] not-italic text-[18px] text-center text-nowrap text-white top-[12.5px] translate-x-[-50%] whitespace-pre">Découvrir l’agence</p>
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col gap-[10px] items-start left-0 top-[2956px] w-[1368px]" data-name="Section">
      <Section6 />
      <Container36 />
      <Container37 />
      <ImageExempleDeSiteWebLeGiteDesLavandes1 />
      <Link12 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="HomePage">
      <Footer1 />
      <Container34 />
      <SiteWebPourAgenceTitah />
      <Section7 />
    </div>
  );
}