/**
 * Brand Colors
 */
export const COLORS = {
  primary: '#9B3EFF',
  secondary: '#FF6900',
  secondaryAlt: '#FF4E1F',
  orange: '#ff6b35',
  black: '#1B1C1E',
  darkGray: '#44484f',
  mediumGray: '#717182',
  lightGray: '#ECECF0',
} as const;

/**
 * Gradients
 */
export const GRADIENTS = {
  // Background gradient (light opacity)
  bgLight: 'linear-gradient(135deg, rgba(155, 62, 255, 0.1) 30%, rgba(255, 105, 0, 0.1) 84%)',
  
  // Text gradient (full opacity)
  text: 'linear-gradient(135deg, #9B3EFF 30%, #FF6900 84%)',
  
  // Button gradient
  button: 'linear-gradient(to right, #9b3eff, #ff6b35)',
} as const;

/**
 * Border Radius
 */
export const RADIUS = {
  xs: '5px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  full: '30px',
} as const;

/**
 * Shadows
 */
export const SHADOWS = {
  card: '0px 4px 12px rgba(0, 0, 0, 0.08)',
  hover: '0px 8px 24px rgba(0, 0, 0, 0.12)',
  button: '0px 4px 20px rgba(155, 62, 255, 0.3)',
  buttonHover: '0px 8px 24px rgba(155, 62, 255, 0.4)',
  image: '0px 25px 50px 0px rgba(0, 0, 0, 0.15)',
} as const;

/**
 * Responsive Container Classes
 */
export const CONTAINER_CLASSES = 'max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8';

/**
 * Responsive Padding Classes
 */
export const SECTION_PADDING = {
  default: 'py-12 sm:py-16 lg:py-20',
  large: 'py-12 sm:py-16 lg:py-[80px]',
  hero: 'pt-12 sm:pt-16 lg:pt-[80px] pb-12 sm:pb-16 lg:pb-[80px]',
} as const;

/**
 * Text Styles
 */
export const TEXT_STYLES = {
  h1: 'text-3xl sm:text-4xl lg:text-[53px] leading-tight sm:leading-[55px]',
  h2: 'text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[55px]',
  h3: 'text-xl sm:text-2xl lg:text-[35px] leading-relaxed',
  body: 'text-base sm:text-lg lg:text-[19px] leading-relaxed',
  bodySmall: 'text-sm sm:text-base leading-relaxed',
} as const;

/**
 * Button Classes
 */
export const BUTTON_CLASSES = {
  primary: `bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white px-8 py-3 sm:py-4 rounded-[5px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] text-base sm:text-lg transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5`,
  secondary: `bg-white text-[#9b3eff] px-8 py-3 sm:py-4 rounded-[5px] border-2 border-[#9b3eff] text-base sm:text-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-[0px_4px_12px_rgba(155,62,255,0.2)] hover:-translate-y-0.5`,
  violet: `bg-[#9b3eff] text-white px-8 py-3 sm:py-4 rounded-[5px] shadow-[0px_4px_20px_rgba(155,62,255,0.3)] text-base sm:text-lg transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5`,
} as const;

/**
 * Gradient Text Style (for inline styles)
 */
export const GRADIENT_TEXT_STYLE = {
  WebkitTextFillColor: 'transparent',
  backgroundImage: GRADIENTS.text,
} as const;
