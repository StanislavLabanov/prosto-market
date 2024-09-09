'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import testPhoto from './assets/image.png';
import Image from 'next/image';

export const CompanyGood = () => {
  const pathname = usePathname();

  return (
    <div className="w-[85px] min-[500px]:w-[100px]">
      <div className="mb-4">
        <div className="w-full flex justify-center items-center mb-2">
          <Image src={testPhoto} alt={'Фото товара'} className="w-[85%] h-[70%]" />
        </div>
        <div className="text-[10px] text-white font-thin min-[500px]:text-[12px] font-norms">
          Brasil Cerrado
        </div>
        <div className="text-[10px] text-[#DC306B] font-normal min-[500px]:text-[14px] font-norms">
          570,00 Р
        </div>
      </div>
      <Link
        className="w-full h-[30px] rounded-[20px] text-[11px] text-white flex justify-center items-center border-solid border-2 border-[#DC306B] font-normal font-norms"
        href={`${pathname}/nicks-house/coffee-and-tea/matcha`}>
        Купить
      </Link>
    </div>
  );
};
