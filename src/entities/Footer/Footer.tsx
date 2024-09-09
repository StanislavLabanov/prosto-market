'use client';
import Image from 'next/image';

import home from './assets/home.svg';
import categories from './assets/categories.svg';
import user from './assets/user.svg';
import orders from './assets/orders.svg';

import activeHome from './assets/activeHome.svg';
import activeCategories from './assets/activeCategories.svg';
import activeUser from './assets/activeUser.svg';
import activeOrders from './assets/activeOrders.svg';

import { NewOrderButton } from '@/shared/ui/NewOrderButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className="fixed left-0 bottom-0 w-full bg-[#505050] h-[100px] rounded-t-3xl flex items-center justify-center z-10
    max-[380px]:h-[90px] max-[280px]:h-[75px]">
      <nav className="w-full">
        <ul className="flex justify-around items-center w-full">
          <li>
            <Link href={'/'}>
              <Image
                src={pathname === '/' ? activeHome : home}
                alt="Главная страница"
                className="w-[32px] h-[32px] max-[380px]:h-[27px] max-[380px]:w-[27px] max-[280px]:w-[23px] max-[280px]:h-[23px]"
              />
            </Link>
          </li>
          <li>
            <Link href={'/categories'}>
              <Image
                src={pathname === '/categories' ? activeCategories : categories}
                alt="Страница Категорий"
                className="w-[32px] h-[32px] max-[380px]:h-[27px] max-[380px]:w-[27px] max-[280px]:w-[23px] max-[280px]:h-[23px]"
              />
            </Link>
          </li>
          <NewOrderButton />
          <li>
            <Link href={'/user/order-history'}>
              <Image
                src={pathname === '/user/order-history' ? activeOrders : orders}
                alt="История заказов"
                className="w-[32px] h-[32px] max-[380px]:h-[27px] max-[380px]:w-[27px] max-[280px]:w-[23px] max-[280px]:h-[23px]"
              />
            </Link>
          </li>
          <li>
            <Link href={'/user'}>
              <Image
                src={
                  pathname === '/user' ||
                  pathname === '/user/profile' ||
                  pathname === '/user/company' ||
                  pathname === '/user/company/addresses' ||
                  pathname === '/user/company/staff'
                    ? activeUser
                    : user
                }
                alt="Страница пользователя"
                className="w-[32px] h-[32px] max-[380px]:h-[27px] max-[380px]:w-[27px] max-[280px]:w-[23px] max-[280px]:h-[23px]"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
