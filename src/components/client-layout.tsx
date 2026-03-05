'use client';

import { MatrixRain } from '@/components/matrix-rain';
import { SmoothScroll } from '@/components/smooth-scroll';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <MatrixRain />
      {children}
    </SmoothScroll>
  );
}
