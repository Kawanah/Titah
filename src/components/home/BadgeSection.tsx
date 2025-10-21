import svgPaths from "../../imports/svg-9h1x2qd6f3";

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

export function BadgeSection() {
  return (
    <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 z-10 pointer-events-none">
      <div className="absolute right-4 sm:right-8 -bottom-[90px] sm:-bottom-[85px] pointer-events-auto">
        <div className="rounded-[14px] w-full max-w-[227px] border border-[#fee685] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 bg-white">
          <div className="flex gap-[6px] items-center mb-2">
            <Icon14 />
            <p className="text-[10px] text-amber-800 tracking-[0.5px]">SÉLECTIONNÉE ROUND 1</p>
            <Icon14 />
          </div>
          <div className="flex gap-[6px] items-center mb-2">
            <Icon16 />
            <p className="text-[14px] text-black">Fighters Program 2025</p>
          </div>
          <p className="text-[12px] text-black text-center mb-1">by STATION F</p>
          <div className="flex gap-[4px] items-center justify-center">
            <Icon17 />
            <p className="text-[10px] text-gray-500">powered by TikTok</p>
          </div>
        </div>
      </div>
    </div>
  );
}
