import { NextSubPageButton } from '@/entities/NextSubPageButton/NextSubPageButton';
import user from './assets/user.svg';
import company from './assets/company.svg';

export const UserSubPages = () => {
  return (
    <>
      <NextSubPageButton logo={user} text={'Мой профиль'} url={'/user/profile'} />
      <NextSubPageButton logo={company} text={'Моя компания'} url={'/user/company'} />
    </>
  );
};
