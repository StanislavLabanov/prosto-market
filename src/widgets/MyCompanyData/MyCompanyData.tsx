import { LabelForUserPages } from '@/shared/ui/LabelForUserPages';

export const MyCompanyData = () => {
  return (
    <>
      <LabelForUserPages
        labelText={'Название компании'}
        placeholder={'Введите название'}
        value={'John Coffee'}
        type={'text'}
      />
      <LabelForUserPages
        labelText={'Номер телефона'}
        placeholder={'Введите номер телефона'}
        value={'+7 (965) 578-22-99'}
        type={'text'}
      />
      <LabelForUserPages
        labelText={'E-mail'}
        placeholder={'Введите email'}
        value={'i@timvern.ru'}
        type={'text'}
      />
      <LabelForUserPages
        labelText={'Город'}
        placeholder={'Введите название города'}
        value={'Пермь'}
        type={'text'}
      />
    </>
  );
};
