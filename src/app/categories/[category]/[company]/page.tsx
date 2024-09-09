import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SearchField } from '@/features/SearchField';
import { BrandPageTitle } from '@/shared/ui/BrandPageTitle';
import { CompanyCategories } from '@/widgets/CompanyCategories/CompanyCategories';

export default function Company() {
  return (
    <MainContainer>
      <MainLayout>
        <BrandPageTitle url={'/categories/nkml'} />
        <SearchField />
        <CompanyCategories />
      </MainLayout>
    </MainContainer>
  );
}
