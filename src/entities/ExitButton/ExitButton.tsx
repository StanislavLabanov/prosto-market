'use client';
import Image from 'next/image';
import icon from './assets/buttonIcon.svg';
import { useRouter } from 'next/navigation';

export const ExitButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('authorization')}
      className="w-full h-[53px] rounded-xl bg-[#1E1E1E] px-4 flex justify-start items-center cursor-pointer max-[380px]:h-[50px] max-[310px]:h-[43px]">
      <Image
        src={icon}
        alt="Иконка кнопки"
        className="w-[15px] h-[15px] mr-4 max-[310px]:mr-2 max-[310px]:w-[12px] max-[310px]:h-[12px]"
      />
      <span className="text-[#E2E2E2] text-[15px] max-[310px]:text-[12px] font-norms">Выйти</span>
    </button>
  );
};
