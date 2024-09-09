import Image from 'next/image';
import download from './assets/download.svg';

export const OrderPageTitle = ({ order }: { order: string }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-[#F5ADC6] text-[24px] font-norms">Заказ {order}</div>
      <Image src={download} alt={'Скачать'} className="w-[32px] h-[32px] mb-1" />
    </div>
  );
};
