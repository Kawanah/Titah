import imgKawanahStationF from "figma:asset/1c1ecca7c133c22cf4a15d0a0c26d1e6fb93df00.png";
import svgPaths from "../../imports/svg-9h1x2qd6f3";

function Logo() {
  return (
    <div className="h-[19.241px] relative w-[110.805px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 20">
        <g id="Logo">
          <path d={svgPaths.p3041e100} fill="#010101" />
          <path d={svgPaths.p7ec800} fill="#010101" />
          <path d={svgPaths.p2106c200} fill="#010101" />
          <path d={svgPaths.p948fd00} fill="#010101" />
          <path d={svgPaths.p2d9eb600} fill="#010101" />
          <path d={svgPaths.p32839300} fill="#010101" />
          <path d={svgPaths.p1636d6f0} fill="#010101" />
        </g>
      </svg>
    </div>
  );
}

function Gp() {
  return (
    <div className="relative size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g>
          <circle cx="14" cy="14" fill="url(#paint0_linear_1_467)" r="14" />
          <g clipPath="url(#clip0_1_467)">
            <path d={svgPaths.p16051f00} fill="#2563EB" />
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

export function KawanahSection() {
  return (
    <div className="bg-[rgb(243,242,242)] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Gp />
              <Logo />
            </div>
            
            <h2 className="text-black text-2xl sm:text-3xl lg:text-[27px] leading-tight sm:leading-[40px] mb-4 font-bold">
              Notre webapp tout-en-un pour l'hospitalité
            </h2>
            
            <p className="text-[#4a5565] text-base mb-4">
              Sélectionnée au round 1 du Fighters Program de STATION F, powered by TikTok
            </p>
            
            <p className="text-[#4a5565] text-base sm:text-lg leading-relaxed mb-6">
              Centralisez la gestion de vos services et activités, simplifiez le quotidien de vos équipes et enrichissez l'expérience de vos client·e·s.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://www.kawanah.com/', '_blank')}
                className="bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white px-6 py-2 rounded-[5px] border border-white shadow-[0px_4px_20px_0px_rgba(155,62,255,0.3)] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
              >
                Découvrir Kawanah
              </button>
              <button className="bg-[rgba(255,255,255,0.5)] border-2 border-[#9b3eff] text-[#9b3eff] px-6 py-2 rounded-[5px] transition-all duration-300 hover:bg-white hover:shadow-[0px_4px_12px_rgba(155,62,255,0.2)] hover:-translate-y-0.5">
                Accéder à l'offre spéciale Titah
              </button>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <img 
              src={imgKawanahStationF} 
              alt="Kawanah webapp" 
              className="w-full h-auto rounded-lg shadow-[0px_15px_20px_0px_rgba(0,0,0,0.15)] scale-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
