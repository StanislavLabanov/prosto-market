import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SearchField } from '@/features/SearchField';
import { BrandPageTitle } from '@/shared/ui/BrandPageTitle';
import { CategoryTitle } from '@/shared/ui/CategoryTitle';
import { CategoryGoodsCards } from '@/widgets/CategoryGoodsCards';

export default function Goods() {
  return (
    <MainContainer>
      <MainLayout>
        <BrandPageTitle url={'/categories/nkml/nicks-house'} />
        <SearchField />
        <CategoryTitle>Кофе и чай</CategoryTitle>
        <CategoryGoodsCards />
      </MainLayout>
    </MainContainer>
  );
}
