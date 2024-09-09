'use client';
import { ChangeNumberGoodButtons } from '@/features/ChangeNumberGoodButtons';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import testPhoto from './assets/Remove-bg.ai_1725031825216 1.png';
import Image from 'next/image';

export const CategoryGoodCard = () => {
  const [addNumber, setAddNumber] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const minusHandler = () => {
    setAddNumber((prev) => prev - 1);
  };

  const plusHandler = () => {
    setAddNumber((prev) => (prev < 5 ? prev + 1 : prev));
  };

  const addHandler = () => {
    setAddNumber((prev) => prev + 1);
  };

  return (
    <div className="bg-[#1E1E1E] w-[43vw] h-auto max-[450px]:w-[42vw] max-[350px]:w-full rounded-[10px] p-[10px]">
      <div
        className="flex justify-center items-start mb-2"
        onClick={() => router.push(`${pathname}/matcha`)}>
        <Image
          src={testPhoto}
          alt="Фото товара"
          className="w-[70%] h-[30vw] max-[350px]:h-[45vw]"
        />
      </div>
      <div className="text-[10px] text-white font-thin min-[500px]:text-[13px] font-norms">
        Brasil Cerrado
      </div>
      <div className="text-[12px] text-[#DC306B] font-light min-[500px]:text-[15px] font-norms">
        570,00 Р
      </div>
      <div className="flex justify-center items-center mt-1">
        <div className="w-[60%] max-[380px]:w-[85%] max-[350px]:w-[60%]">
          <ChangeNumberGoodButtons
            size={'small'}
            number={addNumber}
            minusHandler={minusHandler}
            plusHandler={plusHandler}
            addHandler={addHandler}
          />
        </div>
      </div>
    </div>
  );
};
