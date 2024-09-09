import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IGoodFromBasketProps {
  img: string | StaticImport;
  name: string;
  number: number;
  price: string;
}
