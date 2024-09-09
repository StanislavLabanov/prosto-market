import { subPagesButtonInBottomTypes } from '@/shared/types/subPagesButtonInBottomTypes';

export const selectButtonName = (type: subPagesButtonInBottomTypes) => {
  switch (type) {
    case subPagesButtonInBottomTypes.ADDRESSES:
      return 'Добавить адрес';
    case subPagesButtonInBottomTypes.ORDER:
      return 'Повторить заказ';
    case subPagesButtonInBottomTypes.STAFF:
      return 'Добавить сотрудника';
    default:
      return '';
  }
};
