import Image from 'next/image';
import photo from './testImage.png';
import { ContainerNoPaddingBottom } from '@/entities/LayoutsAndContainers/ContainerNoPaddingBottom';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { PresentGoodPageBlock } from '@/widgets/PresentGoodPageBlock';
import { BackArrow } from '@/shared/ui/BackArrow';

export default function Good() {
  return (
    <ContainerNoPaddingBottom>
      <div
        className="fixed top-[-10px] left-0 w-full z-[1] h-[405px] 
        max-[260px]:h-[250px] max-[310px]:h-[290px] max-[380px]:h-[335px] min-[500px]:h-[465px] min-[560px]:h-[500px] 
        flex justify-center items-center">
        <Image src={photo} alt={'Фото товара'} className="w-[80%] h-[80%]" />
      </div>
      <MainLayout>
        <div className="relative z-[2]">
          <BackArrow url="/categories/nkml/nicks-house/svdfghtnf"></BackArrow>
        </div>
      </MainLayout>
      <PresentGoodPageBlock />
    </ContainerNoPaddingBottom>
  );
}
