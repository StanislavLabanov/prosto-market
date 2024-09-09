import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SearchField } from '@/features/SearchField';
import { BackArrow } from '@/shared/ui/BackArrow';
import { CategoryTitle } from '@/shared/ui/CategoryTitle';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { CompanyGoods } from '@/widgets/CompanyGoods';

export default function Category() {
  return (
    <MainContainer>
      <MainLayout>
        <BackArrow url={'/categories'}>
          <PageTitle>Товары</PageTitle>
        </BackArrow>
        <SearchField />
        <CategoryTitle>Кофе и чай</CategoryTitle>
        <CompanyGoods />
      </MainLayout>
    </MainContainer>
  );
}
