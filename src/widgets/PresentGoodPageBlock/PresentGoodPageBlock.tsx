'use client';
import { ChangeNumberGoodButtons } from '@/features/ChangeNumberGoodButtons';
import { BrandPageTitle } from '@/shared/ui/BrandPageTitle';
import { OverlayingBlock } from '@/shared/ui/OverlayingBlock';
import { useState } from 'react';

export const PresentGoodPageBlock = () => {
  const [addNumber, setAddNumber] = useState(0);

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
    <div className="mt-[50%] max-[380px]:mt-[45%]">
      <OverlayingBlock background="[#1E1E1E]">
        <div className="flex justify-between items-center pt-[10px] max-[380px]:pt-[5px] text-[#E2E2E2] max-[350px]:p-[10px]">
          <h1 className="leading-[0px] text-[36px] font-light max-[380px]:text-[28px] font-norms">
            Матча
          </h1>
          <div className="text-[14px] font-light font-norms">100g</div>
        </div>
        <div className="mt-8 mb-14 max-[350px]:px-[10px] max-[350px]:mt-4 max-[350px]:mb-10">
          <div className="text-[13px] text-[#49454F] font-light mb-4 max-[350px]:mb-2 font-norms">
            Описание
          </div>
          <p className="text-white text-[16px] leading-6 font-light max-[350px]:text-[14px] font-norms">
            Матча — японский порошковый зеленый чай. Традиционно используется в классической
            японской чайной церемонии. Матча — японский порошковый зеленый чай. Традиционно
            используется в классической японской чайной церемонии. Матча — японский порошковый
            зеленый чай. Традиционно используется в классической японской чайной церемонии. Матча —
            японский порошковый зеленый чай. Традиционно используется в классической японской чайной
            церемонии. Матча — японский порошковый зеленый чай. Традиционно используется в
            классической японской чайной церемонии. Матча — японский порошковый зеленый чай.
            Традиционно используется в классической японской чайной церемонии. Матча — японский
            порошковый зеленый чай. Традиционно используется в классической японской чайной
            церемонии. Матча — японский порошковый зеленый чай. Традиционно используется в
            классической японской чайной церемонии. Матча — японский порошковый зеленый чай.
            Традиционно используется в классической японской чайной церемонии. Матча — японский
            порошковый зеленый чай. Традиционно используется в классической японской чайной
            церемонии. Матча — японский порошковый зеленый чай. Традиционно используется в
            классической японской чайной церемонии. Матча — японский порошковый зеленый чай.
            Традиционно используется в классической японской чайной церемонии. Матча — японский
            порошковый зеленый чай. Традиционно используется в классической японской чайной
            церемонии. Матча — японский порошковый зеленый чай. Традиционно используется в
            классической японской чайной церемонии.
          </p>
        </div>
        <div className="max-[350px]:px-[10px]">
          <BrandPageTitle url={undefined} />
          <div className="flex justify-between items-center flex-wrap mt-4">
            <div className="text-[24px] text-[#DC306B] font-bold mr-2 max-[350px]:text-[20px] font-norms">
              1000 R.
            </div>
            <div className="min-w-[50%] max-w-full">
              <ChangeNumberGoodButtons
                size={'medium'}
                number={addNumber}
                minusHandler={minusHandler}
                plusHandler={plusHandler}
                addHandler={addHandler}
              />
            </div>
          </div>
        </div>
      </OverlayingBlock>
    </div>
  );
};
