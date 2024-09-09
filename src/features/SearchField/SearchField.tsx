import Image from 'next/image';
import burger from './assets/burger.svg';
import search from './assets/search.svg';

export const SearchField = () => {
  return (
    <div
      className="w-full h-[56px] rounded-[28px] bg-white my-[20px] flex justify-between items-center px-[20px]
    max-[380px]:h-[50px] max-[380px]:rounded-[24px] max-[380px]:my-[15px] max-[380px]:px-[15px] max-[380px]:mt-[10px]
    ">
      <Image
        src={burger}
        alt="Иконка бургер"
        className="w-[18px] h-[12px] max-[310px]:w-[14px] max-[380px]:h-[10px]"
      />
      <input
        type="text"
        placeholder="Поиск"
        className="w-[77%] text-[18px] font-normal text-[#2A2A2A] max-[380px]:text-[16px] max-[310px]:text-[14px] font-norms"
      />
      <Image
        src={search}
        alt="Иконка поиска"
        className="w-[18px] h-[18px] max-[310px]:w-[14px] max-[380px]:h-[14px]"
      />
    </div>
  );
};
