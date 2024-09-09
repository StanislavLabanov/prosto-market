import Image from 'next/image';
import { ICompanyGoodsCardLayoutProps } from './CompanyGoodsCardLayout.types';
import testPhoto from './assets/image 3.png';

export const CompanyGoodsCardLayout = ({ children }: ICompanyGoodsCardLayoutProps) => {
  return (
    <div className="bg-[#232323] rounded-[20px] w-full p-[15px]">
      <div className="flex justify-between items-start mb-4 flex-wrap">
        <Image src={testPhoto} alt="Фото партнера" className="w-[80px] h-[25px] mr-4" />
        <div className="text-white text-[14px] mt-1 font-medium font-comfortaa">NICK’S HOUSE</div>
      </div>
      {children}
    </div>
  );
};
