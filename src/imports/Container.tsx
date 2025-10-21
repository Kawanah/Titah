function Frame46() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['Inter:Extra_Bold',_sans-serif] font-extrabold gap-[11px] h-[202px] items-center left-0 not-italic px-[50px] py-0 text-center top-[16px] w-[1210px]">
      <p className="bg-clip-text h-[63px] leading-[53.4px] relative shrink-0 text-[53px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        FAQ
      </p>
      <p className="h-[90px] leading-[45px] relative shrink-0 text-[35px] text-black w-full">Création de sites internet pour l’hébergement touristique</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[218px] left-0 top-[-20px] w-[1204px]" data-name="Container">
      <Frame46 />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container />
    </div>
  );
}