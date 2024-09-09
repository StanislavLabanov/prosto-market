'use client';
import { BaseButton } from '@/shared/ui/BaseButton';
import { useRouter } from 'next/navigation';

export const AuthorizationButton = () => {
  const router = useRouter();

  const handler = () => {
    router.push('/user');
  };

  return <BaseButton handler={handler}>Войти</BaseButton>;
};
