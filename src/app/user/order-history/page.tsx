import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SearchField } from '@/features/SearchField';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { Orders } from '@/widgets/Orders/Orders';

export default function OrderHistory() {
  return (
    <MainContainer>
      <MainLayout>
        <div className="mt-12 max-[310px]:mt-8">
          <PageTitle>История заказов</PageTitle>
          <SearchField />
          <Orders />
        </div>
      </MainLayout>
    </MainContainer>
  );
}
