import { NextSubPageButton } from '@/entities/NextSubPageButton/NextSubPageButton';
import users from './assets/Users.svg';
import map from './assets/Map.svg';

export const MyCompanySubPages = () => {
  return (
    <>
      <NextSubPageButton logo={map} text={'Мои адреса'} url={'/user/company/addresses'} />
      <NextSubPageButton logo={users} text={'Мои сотрудники'} url={'/user/company/staff'} />
    </>
  );
};
