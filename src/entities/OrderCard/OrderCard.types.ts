import { EOrderCardTypes } from '@/shared/types/orderCardTypes';

export interface IOrderCardProps {
  orderNumber: string;
  status: EOrderCardTypes;
  name: string;
  date: string;
}
