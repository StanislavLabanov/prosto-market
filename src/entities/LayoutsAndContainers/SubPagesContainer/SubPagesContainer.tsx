'use client';
import { BaseButton } from '@/shared/ui/BaseButton';
import { ISubPagesContainerProps } from './SubPagesContainer.types';
import { selectButtonName } from './utils/selectButtonName';

export const SubPagesContainer = ({ children, type }: ISubPagesContainerProps) => {
  const handler = () => {};

  return (
    <>
      <div className="pb-[80px] max-[380px]:pb-[68px] max-[310px]:pb-[64px] max-[280px]:pb-[60px]">
        {children}
      </div>
      <div className="w-full mt-4 fixed bottom-[120px] max-[380px]:bottom-[102px] max-[280px]:bottom-[90px] left-0 flex justify-center items-center">
        <div className="w-11/12">
          <BaseButton handler={handler}>{selectButtonName(type)}</BaseButton>
        </div>
      </div>
    </>
  );
};
