import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { MyComponyPreview } from '@/entities/MyComponyPreview';
import { BackArrow } from '@/shared/ui/BackArrow';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { MyCompanyData } from '@/widgets/MyCompanyData';
import { MyCompanySubPages } from '@/widgets/MyCompanySubPages';

export default function Company() {
  return (
    <MainContainer>
      <MainLayout>
        <BackArrow url="/user">
          <PageTitle>Моя компания</PageTitle>
        </BackArrow>
        <div className="mt-4">
          <MyComponyPreview />
        </div>
        <MyCompanyData />
        <div className="mt-4">
          <MyCompanySubPages />
        </div>
      </MainLayout>
    </MainContainer>
  );
}
