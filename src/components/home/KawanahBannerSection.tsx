import svgPaths from "../../imports/svg-9h1x2qd6f3";

function Icon() {
  return (
    <div className="size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d="M3.57794 0.999998V2.84" stroke="#9B3EFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M7.70264 0.999998V2.84" stroke="#9B3EFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pab9ce00} stroke="#9B3EFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1 4.68003H10.2806" stroke="#9B3EFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export function KawanahBannerSection() {
  return (
    <div className="bg-[#9b3eff] h-[65px] relative flex items-center">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 text-left w-full">
          <div className="bg-violet-50 border border-[#ddd6ff] rounded-[30px] px-3 py-1 flex items-center gap-2 shrink-0">
            <Icon />
            <p className="text-[#9b3eff] text-[11px]">Bientôt disponible</p>
          </div>
          <p className="text-white text-sm sm:text-[15px]">
            Notre application Kawanah pour simplifier la gestion de vos services et enrichir l'expérience client.
          </p>
        </div>
      </div>
    </div>
  );
}
