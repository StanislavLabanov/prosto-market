import Image from 'next/image';
import testPhoto from './assets/IMG_2844 1.png';

export const MyProfile = () => {
  return (
    <div className="flex flex-wrap justify-start items-center">
      <Image
        src={testPhoto}
        alt="Фото пользователя"
        className="rounded-full w-[83px] h-[83px] max-[310px]:w-[70px] max-[310px]:h-[70px] mr-8 max-[380px]:mr-4"
      />
      <div>
        <h1 className="text-white text-[20px] leading-none max-[380px]:text-[18px] max-[310px]:text-[16px] max-[236px]:mt-2 font-norms">
          Артем Оверин
        </h1>
        <h2 className="text-[#878B88] text-[14px] mt-[5px] max-[380px]:text-[12px] font-norms">
          @timvern
        </h2>
      </div>
    </div>
  );
};
