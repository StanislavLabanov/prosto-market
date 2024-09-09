import Image from 'next/image';
import photo from './assets/John Stamp 1.png';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';

export const MyComponyPreview = () => {
  return (
    <div className="flex justify-between items-start flex-wrap">
      <div
        className="w-[85px] h-[85px] rounded-full bg-[#E6E3E3] flex justify-center items-center
      max-[380px]:w-[80px] max-[380px]:h-[80px] mr-4">
        <Image src={photo} alt="Логотип компании" className="w-[70%] h-[35%]" />
      </div>
      <div>
        <div className="font-normal">
          <PageTitle>
            <div className="max-[380px]:text-[18px] font-norms">JOHN COFFEE</div>
          </PageTitle>
        </div>
        <div className="text-[15px] text-white font-light text-end max-[380px]:text-[13px] font-norms">
          Кофейня
        </div>
      </div>
    </div>
  );
};
