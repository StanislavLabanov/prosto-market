import { PresentPartners } from '@/entities/PresentPartners';
import { SearchField } from '@/features/SearchField';
import { OverlayingBlock } from '@/shared/ui/OverlayingBlock';

export const PresentMainPageBlock = () => {
  return (
    <OverlayingBlock background="screen">
      <h2 className="text-white text-xl font-normal max-[350px]:ml-[10px] max-[350px]:text-[16px] font-comfortaa">
        Поставщики
      </h2>
      <SearchField />
      <PresentPartners />
    </OverlayingBlock>
  );
};
