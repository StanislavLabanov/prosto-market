'use client';

import Image from 'next/image';
import arrow from './assets/Icon.svg';
import { IBackArrowProps } from './BackArrow.types';
import { useRouter } from 'next/navigation';

export const BackArrow = ({ children, url }: IBackArrowProps) => {
  const router = useRouter();

  const handleClick = () => {
    url && router.push(url);
  };

  return (
    <>
      {url ? (
        <>
          <div className="w-[30%] h-[48px] flex justify-start items-center max-[310px]:w-[50px] max-[310px]:h-[40px]">
            <Image
              src={arrow}
              onClick={handleClick}
              alt="Стрелка"
              className="w-[24px] h-[24px] max-[310px]:w-[20px] max-[310px]:h-[20px]"
            />
          </div>
          {children}
        </>
      ) : (
        children
      )}
    </>
  );
};
