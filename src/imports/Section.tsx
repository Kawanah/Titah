import imgImageExempleDeSiteWebLeGiteDesLavandes from "figma:asset/79b21271c1d487fae19aa4ff104956affdcd126d.png";

function ImageExempleDeSiteWebLeGiteDesLavandes() {
  return (
    <div className="absolute h-[415px] left-[518px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] top-[66.77px] w-[686px]" data-name="Image (Exemple de site web - Le gîte des lavandes)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageExempleDeSiteWebLeGiteDesLavandes} />
    </div>
  );
}

function Paragraph() {
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
        <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: "transparent" }}>
          {" "}
        </span>
        <span className="text-black">{`express et évolutif `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: "transparent" }}>
          Vos réservations
        </span>{" "}
        <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: "transparent" }}>
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

function Link() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center left-0 px-[25px] py-[13px] rounded-[5px] top-[0.31px] w-[230px] bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)]" />
      <p className="font-['Inter_Tight:SemiBold',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Voir nos offres</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center left-[269px] px-[26px] py-[14px] rounded-[5px] top-[0.31px] w-[232px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#9b3eff] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#9b3eff] text-[20px] text-nowrap whitespace-pre">Voir nos modèles</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[52px] left-[-4px] top-[487px] w-[797.711px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[466px] left-0 top-[-20px] w-[846px]" data-name="Container">
      <Paragraph />
      <Frame58 />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex h-[558px] items-center justify-between p-[10px] relative shrink-0 w-[1200px]" data-name="Container">
      <ImageExempleDeSiteWebLeGiteDesLavandes />
      <Container1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Section">
      <Container2 />
    </div>
  );
}