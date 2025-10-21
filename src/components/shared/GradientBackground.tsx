import { ReactNode } from 'react';
import { GRADIENTS } from '../../utils/constants';

interface GradientBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable gradient background wrapper
 */
export function GradientBackground({ children, className = '' }: GradientBackgroundProps) {
  return (
    <div className={className} style={{ background: GRADIENTS.bgLight }}>
      {children}
    </div>
  );
}
