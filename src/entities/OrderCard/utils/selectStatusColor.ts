import { EOrderCardTypes } from '@/shared/types/orderCardTypes';

export const selectStatusColor = (status: EOrderCardTypes) => {
  switch (status) {
    case EOrderCardTypes.EXPECTATION_PAYMENT:
      return 'bg-[#36E337]';
    case EOrderCardTypes.IN_WAY:
      return 'bg-[#DCCB30]';
    case EOrderCardTypes.IN_PROCESS:
      return 'bg-[#505050]';
    case EOrderCardTypes.SUCCESSFULLY:
      return 'bg-[#DC306B]';
    default:
      return '';
  }
};
