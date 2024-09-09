'use client';
import Image from 'next/image';
import icon from './assets/arrow.svg';
import { IDropDownBlockProps } from './DropDownBlock.types';
import { useState } from 'react';
import { EropDownBlockTypes } from '@/shared/types/dropDownBlockTypes';

export const DropDownBlock = ({ title, children, size }: IDropDownBlockProps) => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div
        className={`flex justify-start font-norms items-center ${
          size === EropDownBlockTypes.SMALL
            ? 'text-white text-[15px] font-light max-[310px]:text-[13px]'
            : 'text-white font-normal text-[24px] max-[310px]:text-[20px]'
        }`}
        onClick={() => setFlag((prev) => !prev)}>
        {title}
        <span className="ml-4">
          <Image src={icon} alt="Стрелка" className="w-[10px] h-[10px]" />
        </span>
      </div>
      {flag ? null : children}
    </>
  );
};
