import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface INewOrderPartnersProps {
  partners: { id: number; name: string; img: string | StaticImport }[];
}
