import Image from 'next/image';
import { BackArrow } from '../BackArrow';
import { IBrandPageTitleProps } from './BrandPageTitle.types';
import testPhoto from './assets/image 3 (1).png';

export const BrandPageTitle = ({ url }: IBrandPageTitleProps) => {
  return (
    <BackArrow url={url}>
      <div className="flex justify-between items-start flex-wrap">
        <Image src={testPhoto} alt="Логотип компании" className="w-[110px] h-[37px] mr-2 mb-1" />
        <h1 className="text-[14px] text-white font-normal font-comfortaa">NICK’S HOUSE</h1>
      </div>
    </BackArrow>
  );
};
