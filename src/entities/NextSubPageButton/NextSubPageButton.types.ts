import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface INextSubPageButtonProps {
  logo: string | StaticImport;
  text: string;
  url: string;
}
