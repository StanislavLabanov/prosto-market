'use client';
import Image from 'next/image';
import { useState } from 'react';
import photo from './assets/basketItem.png';
import { IGoodFromBasketProps } from './GoodFromBasket.types';

export const GoodFromBasket = ({ img, name, number, price }: IGoodFromBasketProps) => {
  const [itemNumber, setItemNumber] = useState(1);

  return (
    <div className="flex justify-between items-center flex-wrap gap-2 mt-2">
      <div className="flex justify-start items-center">
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[10px] bg-[#1E1E1E] mr-4">
          <Image src={photo} alt="Фото товара" className="w-[55px] h-[55px]" />
        </div>
        <div className="font-medium text-[16px]">
          <div className="text-white font-norms">{name}</div>
          <div className="text-[#DC306B] font-norms">
            {number}*{price} Р
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90px]">
        <div
          onClick={() => setItemNumber((prev) => (prev === 1 ? prev : prev - 1))}
          className={`w-[30px] h-[30px] font-norms rounded-full flex justify-center items-center text-[16px] font-bold ${
            itemNumber === 1 ? 'bg-[#232323] text-[#505050]' : 'text-[#1E1E1E] bg-[#DC306B]'
          }`}>
          -
        </div>
        <div className="text-[#E2E2E2] text-[16px] font-bold font-norms">{itemNumber}</div>
        <div
          className={`w-[30px] h-[30px] rounded-full font-norms flex justify-center items-center text-[16px] font-bold ${
            itemNumber === 5 ? 'bg-[#232323] text-[#505050]' : 'text-[#1E1E1E] bg-[#DC306B]'
          }`}
          onClick={() => setItemNumber((prev) => (prev < 5 ? prev + 1 : prev))}>
          +
        </div>
      </div>
    </div>
  );
};
