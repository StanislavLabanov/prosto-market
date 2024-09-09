'use client';
import { BaseButton } from '@/shared/ui/BaseButton';
import { useRouter } from 'next/navigation';

export const MakeOrderButton = () => {
  const router = useRouter();

  return (
    <div
      className="fixed bottom-0 left-0 rounded-t-[30px] bg-[#1E1E1E] px-[15px] py-[10px] flex flex-col justify-start items-center h-[245px] w-full
      max-[380px]:h-[225px] max-[310px]:h-[215px] max-[280px]:h-[200px]">
      <div className="flex justify-between items-center flex-wrap text-white font-light mb-3 w-[97%] font-norms">
        <div className="text-[24px] max-[310px]:text-[20px]">ИТОГО</div>
        <div className="text-[20px] gap-4 max-[310px]:text-[18px]">1400Р</div>
      </div>
      <div className="w-[90%]">
        <BaseButton handler={() => router.push('/success')}>Заказать</BaseButton>
      </div>
    </div>
  );
};
