'use client';
import { IBaseButtonProps } from './BaseButton.types';

export const BaseButton = ({ children, handler }: IBaseButtonProps) => {
  return (
    <button
      className="w-full bg-button h-[64px] rounded-[20px] text-text text-[20px]
      max-[380px]:h-[60px] max-[380px]:text-[18px] max-[310px]:h-[53px] max-[310px]:text-[16px] max-[310px]:rounded-[16px] font-norms"
      onClick={handler}>
      {children}
    </button>
  );
};
