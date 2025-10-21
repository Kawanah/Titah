import { LucideIcon } from 'lucide-react';
import { RADIUS } from '../../utils/constants';

interface HeroBadgeProps {
  icon: LucideIcon;
  text: string;
  color: string;
  bgColor?: string;
}

export function HeroBadge({ icon: Icon, text, color, bgColor }: HeroBadgeProps) {
  return (
    <div 
      className="flex items-center gap-2 sm:gap-[17px] bg-white px-4 sm:px-[26px] py-1.5 sm:py-[8px] border-2" 
      style={{ borderColor: color, borderRadius: RADIUS.full }}
    >
      <Icon className="w-5 h-5 sm:w-[24px] sm:h-[24px] flex-shrink-0" style={{ color }} />
      <span className="text-xs sm:text-[14px]" style={{ color }}>{text}</span>
    </div>
  );
}
