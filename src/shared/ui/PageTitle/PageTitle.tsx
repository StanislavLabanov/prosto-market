import { IPageTitleProps } from './PageTitle.types';

export const PageTitle = ({ children }: IPageTitleProps) => {
  return (
    <h1 className="text-white font-normal text-[24px] max-[380px]:text-[22px] max-[310px]:text-[20px] font-norms">
      {children}
    </h1>
  );
};
