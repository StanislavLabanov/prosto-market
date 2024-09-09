'use client';
import { CompanyGood } from '@/entities/CompanyGood';
import Image from 'next/image';
import arrow from './assets/next.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const CompanyGoodsScroll = () => {
  const pathname = usePathname();

  return (
    <div className="overflow-x-auto w-auto flex justify-start items-start">
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <div className="mr-4" key={index}>
          <CompanyGood />
        </div>
      ))}
      <Link
        href={`${pathname}/nicks-house`}
        className="flex flex-col justify-center items-center mt-[5%]">
        <Image src={arrow} alt="Стрелка" className="w-[20px] h-[20px]" />
        <div className="mt-2 text-center text-white text-[11px] font-norms">
          Показать
          <br />
          все
        </div>
      </Link>
    </div>
  );
};
