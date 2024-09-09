import { EOrderCardTypes } from '@/shared/types/orderCardTypes';

export const selectStatusName = (status: EOrderCardTypes) => {
  switch (status) {
    case EOrderCardTypes.EXPECTATION_PAYMENT:
      return 'Ожидает оплаты';
    case EOrderCardTypes.IN_WAY:
      return 'В пути';
    case EOrderCardTypes.IN_PROCESS:
      return 'В обработке';
    case EOrderCardTypes.SUCCESSFULLY:
      return 'Исполнен';
    default:
      return '';
  }
};
