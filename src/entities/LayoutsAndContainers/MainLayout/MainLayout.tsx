import { Header } from '@/entities/Header';
import { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-start h-[100%]">
      <div className="w-11/12">
        <Header />
        {children}
      </div>
    </div>
  );
};
