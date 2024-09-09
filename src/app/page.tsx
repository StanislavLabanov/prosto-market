import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { PresentMainPageBlock } from '@/widgets/PresentMainPageBlock';
import Image from 'next/image';
import photo from './mainPhoto.png';
import { ContainerNoPaddingBottom } from '@/entities/LayoutsAndContainers/ContainerNoPaddingBottom';

export default function Home() {
  return (
    <ContainerNoPaddingBottom>
      <Image
        src={photo}
        alt={'Главное фото'}
        className="fixed top-[-10px] left-0 w-full z-[1] h-[405px] 
        max-[260px]:h-[250px] max-[310px]:h-[290px] max-[380px]:h-[335px] min-[500px]:h-[465px] min-[560px]:h-[500px]"
      />
      <MainLayout>
        <div className="relative z-[3]">
          <h1
            className="text-[32px] leading-6 text-white mt-[170px] min-[500px]:mt-[220px] min-[560px]:mt-[260px] max-[380px]:mt-[105px] max-[380px]:text-[26px]
          max-[310px]:mt-[80px] font-comfortaa">
            Новый вид
            <br />
            матчи
          </h1>
        </div>
      </MainLayout>
      <PresentMainPageBlock />
    </ContainerNoPaddingBottom>
  );
}
