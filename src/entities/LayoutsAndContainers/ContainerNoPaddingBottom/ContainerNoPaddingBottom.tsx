import { Footer } from '@/entities/Footer/Footer';
import { ReactNode } from 'react';

export const ContainerNoPaddingBottom = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-screen min-h-screen">
      {children}
      <Footer />
    </div>
  );
};
