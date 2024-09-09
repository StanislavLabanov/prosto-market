import Link from 'next/link';
import { INewOrderPartnersProps } from './NewOrderPartners.types';
import Image from 'next/image';
import photo from './assets/add.svg';

export const NewOrderPartners = ({ partners }: INewOrderPartnersProps) => {
  return (
    <div className="flex justify-between items-start gap-6 flex-wrap max-[350px]:gap-5">
      <div
        className="flex justify-center items-center w-[43vw] h-[43vw] max-[450px]:w-[42vw] 
        max-[450px]:h-[42vw] rounded-[25px] max-[265px]:rounded-[15px] bg-[#777777]
        max-[265px]:h-[100px] max-[265px]:w-full">
        <Image
          src={photo}
          alt="Иконка добавить"
          className="w-[40px] h-[40px] min-[500px]:w-[50px] min-[500px]:h-[50px] 
          max-[310px]:w-[30px] max-[310px]:h-[30px]"
        />
      </div>
      {partners.map((part) => (
        <Link
          key={part.id}
          href={'/categories/scdfvg/sdvgbfgb'}
          className="w-[43vw] h-[43vw] max-[450px]:w-[42vw] max-[450px]:h-[42vw]
          max-[265px]:h-[190px] max-[265px]:w-full rounded-[25px] max-[265px]:rounded-[15px]
          flex justify-center items-center bg-[#000000]">
          <Image src={part.img} alt={'Логотип компании'} className="w-full h-full" />
        </Link>
      ))}
    </div>
  );
};
