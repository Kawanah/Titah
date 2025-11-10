import logo from "../assets/Logo.webp";

interface TitahLogoProps {
  size?: number;
}

export function TitahLogo({ size = 35 }: TitahLogoProps) {
  return (
    <img
      src={logo}
      alt="Titah logo"
      className="h-auto w-auto"
      style={{
        height: `${size}px`,
      }}
    />
  );
}
