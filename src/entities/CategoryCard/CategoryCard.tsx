import Image from 'next/image';
import testPhoto from './assets/image 12.png';
import Link from 'next/link';

export const CategoryCard = () => {
  return (
    <Link
      href={'/categories/nkml'}
      className="rounded-xl relative p-[10px] flex justify-start items-end bg-[#C3C3C3]
      w-[29vw] h-[29vw] max-[430px]:w-[28vw] max-[430px]:h-[28vw] max-[380px]:w-[44vw] max-[380px]:h-[44vw]
      max-[275px]:w-full max-[275px]:h-[60vw]
      ">
      <div
        className="absolute leading-3 top-[7px] left-[10px] min-[500px]:top-[10px] min-[500px]:left-[10px] text-[12px] text-[#2A2A2A]
       max-[380px]:top-[10px] max-[380px]:left-[10px] font-norms">
        Алкогольные напитки
      </div>
      <Image
        src={testPhoto}
        alt="Фото категории"
        className="w-[23vw] h-[18vw] mb-[1vw] max-[430px]:h-[16vw] max-[430px]:mb-0 max-[380px]:w-[37vw] max-[380px]:h-[28vw]
        max-[275px]:w-[80%] max-[275px]:h-[75%] max-[275px]:ml-[10%]
        "
      />
    </Link>
  );
};
