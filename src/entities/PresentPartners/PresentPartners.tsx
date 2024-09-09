import Image from 'next/image';
import testPhoto from './assets/image 7.png';
import Link from 'next/link';

export const PresentPartners = () => {
  return (
    <ul>
      <li className="mb-[20px] max-[380px]:mb-[12px]">
        <Link href={'/categories/sdfsdf/nicks-house'}>
          <Image
            src={testPhoto}
            alt="Логотип партнера"
            className="w-full h-[175px] rounded-3xl mb-3 min-[500px]:h-[230px] max-[310px]:h-[140px] max-[310px]:rounded-2xl max-[260px]:h-[110px]"
          />
        </Link>
        <div className="ml-[10px] max-[310px]:ml-[5px]">
          <h3 className="font-comfortaa text-[20px] text-white leading-[16px] max-[380px]:text-[16px] max-[310px]:text-[14px] max-[310px]:leading-[5px] max-[380px]:leading-[10px]">
            NICK’S HOUSE
          </h3>
          <span className="font-comfortaa text-[12px] text-white max-[310px]:text-[10px]">
            кофе, чай
          </span>
        </div>
      </li>
      <li className="mb-[20px] max-[380px]:mb-[12px]">
        <Link href={'/categories/sdfsdf/nicks-house'}>
          <Image
            src={testPhoto}
            alt="Логотип партнера"
            className="w-full h-[175px] rounded-3xl mb-3 min-[500px]:h-[230px] max-[310px]:h-[140px] max-[310px]:rounded-2xl max-[260px]:h-[110px]"
          />
        </Link>
        <div className="ml-[10px] max-[310px]:ml-[5px]">
          <h3 className="font-comfortaa text-[20px] text-white leading-[16px] max-[380px]:text-[16px] max-[310px]:text-[14px] max-[310px]:leading-[5px] max-[380px]:leading-[10px]">
            NICK’S HOUSE
          </h3>
          <span className="font-comfortaa text-[12px] text-white max-[310px]:text-[10px]">
            кофе, чай
          </span>
        </div>
      </li>
    </ul>
  );
};
