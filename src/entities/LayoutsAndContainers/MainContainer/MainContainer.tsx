import { Footer } from '@/entities/Footer/Footer';
import { ReactNode } from 'react';

export const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-screen min-h-screen pb-[120px] max-[380px]:pb-[105px] max-[280px]:pb-[95px]">
      {children}
      <Footer />
    </div>
  );
};
