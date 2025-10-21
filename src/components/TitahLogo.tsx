import imgTitahLogo from "figma:asset/5c5c5e36d9a707a6b167a2b93ac123371d4d9ddc.png";

interface TitahLogoProps {
  size?: number;
}

export function TitahLogo({ size = 35 }: TitahLogoProps) {
  return (
    <img 
      src={imgTitahLogo}
      alt="Titah Logo"
      className={`h-[${size}px] w-auto`}
      style={{ height: `${size}px` }}
    />
  );
}
