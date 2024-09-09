import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SearchField } from '@/features/SearchField';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { Categories } from '@/widgets/Categories';

export default function CategoriesPage() {
  return (
    <MainContainer>
      <MainLayout>
        <div className="mt-12 max-[310px]:mt-8">
          <PageTitle>Товары</PageTitle>
          <SearchField />
          <Categories />
        </div>
      </MainLayout>
    </MainContainer>
  );
}
