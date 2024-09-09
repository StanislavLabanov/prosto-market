import Image from 'next/image';
import testPhoto from './assets/image 15.png';
import Link from 'next/link';

export const CompanyCategories = () => {
  return (
    <div className="gap-5 flex flex-wrap justify-between items-start">
      {[1, 2, 3, 4].map((_, key) => (
        <Link
          href={'/categories/nkml/nicks-house/svdfghtnf'}
          key={key}
          className="w-[47%] h-[42vw] rounded-[10px] bg-[#1E1E1E] relative flex justify-center items-center max-[363px]:w-[100%] max-[363px]:h-[80vw]">
          <Image src={testPhoto} alt="Фото категории" className="w-[50%] h-[50%]" />
          <span className="absolute top-[7px] left-[10px] text-[#D4CABC] text-[12px] font-light font-norms">
            Упаковка
          </span>
        </Link>
      ))}
    </div>
  );
};
