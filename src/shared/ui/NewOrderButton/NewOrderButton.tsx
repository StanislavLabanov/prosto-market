'use client';

import { INewOrderButtonProps } from './NewOrderButton.types';
import { usePathname } from 'next/navigation';
import plus from './assets/Plus.svg';
import Image from 'next/image';
import Link from 'next/link';

export const NewOrderButton = ({}: INewOrderButtonProps) => {
  const pathname = usePathname();

  return (
    <Link
      href="/user/new-order"
      className={`w-[75px] h-[75px] rounded-full shadow-md ${
        pathname === '/user/new-order' || pathname === '/user/basket' ? 'bg-button' : 'bg-[#F5ADC6]'
      } flex justify-center items-center max-[380px]:h-[60px] max-[380px]:w-[60px] max-[280px]:h-[45px] max-[280px]:w-[45px]`}>
      <Image
        src={plus}
        alt="Плюс"
        className="w-[45px] h-[45px] max-[380px]:w-[35px] max-[380px]:h-[35px] max-[280px]:h-[25px] max-[280px]:w-[25px]"
      />
    </Link>
  );
};
