import Link from 'next/link';
import { IOrderCardProps } from './OrderCard.types';
import { selectStatusColor } from './utils/selectStatusColor';
import { selectStatusName } from './utils/selectStatusName';

export const OrderCard = ({ orderNumber, status, name, date }: IOrderCardProps) => {
  return (
    <Link
      href={'/user/order-history/item'}
      className="inline-block w-full bg-[#232323] rounded-[17px] px-[12px] py-[10px] mt-2">
      <div className="flex justify-between items-center flex-wrap text-[#878B88] font-bold text-[10px] font-comfortaa">
        <div className="mr-4">Заказ {orderNumber}</div>
        <div className="flex justify-center items-center">
          {selectStatusName(status)}
          <span
            className={`${selectStatusColor(
              status,
            )} shadow-[0_5px_5px_-0px_rgba(0,0,0,0.3)] w-[10px] h-[10px] inline-block rounded-full ml-1`}></span>
        </div>
      </div>
      <div className="text-base font-bold text-white mt-4 text-[16px] max-[310px]:mt-2 font-comfortaa max-[380px]:text-[14px]">
        {name}
      </div>
      <div className="flex justify-end items-center text-[#878B88] font-bold text-[10px] font-comfortaa">
        {date}
      </div>
    </Link>
  );
};
