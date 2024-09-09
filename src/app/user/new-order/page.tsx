import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SearchField } from '@/features/SearchField';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { NewOrderPartners } from '@/widgets/NewOrderPartners/NewOrderPartners';
import partner from './part.png';

export default function NewOrder() {
  return (
    <MainContainer>
      <MainLayout>
        <div className="mt-12 max-[310px]:mt-8">
          <PageTitle>Новый заказ</PageTitle>
          <SearchField />
          <NewOrderPartners
            partners={[
              { id: 1, img: partner, name: '' },
              { id: 2, img: partner, name: '' },
              { id: 3, img: partner, name: '' },
            ]}
          />
        </div>
      </MainLayout>
    </MainContainer>
  );
}
