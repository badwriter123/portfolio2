'use client';

import { MatrixRain } from '@/components/matrix-rain';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MatrixRain />
      {children}
    </>
  );
}
