import Image from 'next/image';
import arrow from './assets/RightArrow.svg';
import { INextSubPageButtonProps } from './NextSubPageButton.types';
import Link from 'next/link';

export const NextSubPageButton = ({ logo, text, url }: INextSubPageButtonProps) => {
  return (
    <Link
      href={url}
      className="w-full h-[53px] rounded-xl bg-[#1E1E1E] px-4 flex justify-between items-center mt-2
      max-[380px]:h-[50px] max-[310px]:h-[43px]">
      <div className="flex justify-start items-center">
        <Image
          src={logo}
          alt={'Иконка кнопки'}
          className="w-[15px] h-[15px] mr-4 max-[310px]:w-[12px] max-[310px]:h-[12px] max-[310px]:mr-2"
        />
        <span className="text-[#E2E2E2] text-[15px] max-[310px]:text-[12px] font-norms">
          {text}
        </span>
      </div>
      <Image
        src={arrow}
        alt="Стрелка"
        className="w-[12px] h-[18px] max-[310px]:w-[8px] max-[310px]:h-[14px]"
      />
    </Link>
  );
};
