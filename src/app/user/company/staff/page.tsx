import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SubPagesContainer } from '@/entities/LayoutsAndContainers/SubPagesContainer';
import { BackArrow } from '@/shared/ui/BackArrow';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { subPagesButtonInBottomTypes } from '@/shared/types/subPagesButtonInBottomTypes';
import { StaffBlock } from '@/widgets/StaffBlock';

export default function Staff() {
  return (
    <MainContainer>
      <MainLayout>
        <SubPagesContainer type={subPagesButtonInBottomTypes.STAFF}>
          <BackArrow url="/user/company">
            <PageTitle>Мои сотрудники</PageTitle>
          </BackArrow>
          <div className="mt-2">
            <StaffBlock />
          </div>
        </SubPagesContainer>
      </MainLayout>
    </MainContainer>
  );
}
