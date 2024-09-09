import { IOverlayingBlockProps } from './OverlayingBlock.types';

export const OverlayingBlock = ({ children, background }: IOverlayingBlockProps) => {
  return (
    <div
      className={`relative rounded-t-[40px] bg-${background} px-[20px] pt-[18px] pb-[120px] z-[3] w-full h-auto mt-[30px] min-h-[55vh]
      max-[350px]:px-[10px] max-[350px]:pt-[10px] max-[350px]:rounded-t-[30px] max-[380px]:mt-[20px]
      max-[380px]:pb-[105px] max-[280px]:pb-[95px]
      `}>
      {children}
    </div>
  );
};
