import { LabelForUserPages } from '@/shared/ui/LabelForUserPages';

export const ProfileData = () => {
  return (
    <>
      <LabelForUserPages
        labelText={'Имя и Фамилия'}
        placeholder={'Введите Имя и Фамилия'}
        value={''}
        type={'text'}
      />
      <LabelForUserPages
        labelText={'Номер телефона'}
        placeholder={'+7 (965) 578-22-99'}
        value={''}
        type={'text'}
      />
      <LabelForUserPages
        labelText={'E-mail'}
        placeholder={'i@timvern.ru'}
        value={''}
        type={'text'}
      />
    </>
  );
};
