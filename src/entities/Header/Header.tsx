'use client';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import shop from './assets/ShoppingCart.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full flex justify-between items-center pt-8 max-[260px]:pt-4 max-[310px]:pt-6">
      <Link href={'/'}>
        <Image
          src={logo}
          alt={'Логотип'}
          className="relative z-[2] w-[85px] h-[52px] max-[310px]:w-[70px] max-[310px]:h-[42px]"
        />
      </Link>
      {pathname === '/' ? null : (
        <div className="flex justify-end items-center">
          <Link href={'/user/basket'} className="mr-5 relative z-[2] max-[260px]:mr-4">
            <Image
              src={shop}
              alt={'Корзина'}
              className="w-[32px] h-[32px] max-[310px]:w-[27px] max-[310px]:h-[27px]"
            />
            <div
              className="absolute top-[-10px] right-[-10px] w-[16px] h-[16px] rounded-full bg-button text-text font-normal flex justify-center items-center text-[11px]
          max-[310px]:text-[10px] max-[310px]:w-[14px] max-[310px]:h-[14px] max-[260px]:text-[8px]
          ">
              1
            </div>
          </Link>
          <div
            className="z-[2] w-[40px] h-[40px] flex justify-center items-center bg-button rounded-full text-[#050505] font-medium text-[16px] 
          max-[310px]:w-[32px] max-[310px]:h-[32px] max-[310px]:text-[13px] max-[260px]:text-[11px]
        ">
            Jc
          </div>
        </div>
      )}
    </header>
  );
};
