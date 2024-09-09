'use client';
import Image from 'next/image';
import icon from './assets/successIcon.svg';
import { BaseButton } from '@/shared/ui/BaseButton';
import { useRouter } from 'next/navigation';

export const SuccessPageContent = () => {
  const router = useRouter();

  return (
    <div
      className="w-full flex flex-col justify-between items-start h-[calc(100vh-229px)] 
      max-[380px]:h-[calc(100vh-215px)] max-[310px]:h-[calc(100vh-195px)] 
      max-[280px]:h-[calc(100vh-170px)]">
      <div className="flex justify-center items-center w-full h-[50vh]">
        <Image src={icon} alt={'Иконка успешно'} />
      </div>
      <div className="w-full">
        <div className="mb-8">
          <BaseButton handler={() => router.push('/')}>На главную</BaseButton>
        </div>
        <BaseButton handler={() => router.push('/user/order-history')}>Мои заказы</BaseButton>
      </div>
    </div>
  );
};
