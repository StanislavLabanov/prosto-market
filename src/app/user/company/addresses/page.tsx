import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SubPagesContainer } from '@/entities/LayoutsAndContainers/SubPagesContainer';
import { subPagesButtonInBottomTypes } from '@/shared/types/subPagesButtonInBottomTypes';
import { BackArrow } from '@/shared/ui/BackArrow';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { AddressesBlock } from '@/widgets/AddressesBlock';

export default function Adresses() {
  return (
    <MainContainer>
      <MainLayout>
        <SubPagesContainer type={subPagesButtonInBottomTypes.ADDRESSES}>
          <BackArrow url="/user/company">
            <PageTitle>Мои адреса</PageTitle>
          </BackArrow>
          <div className="mt-2">
            <AddressesBlock />
          </div>
        </SubPagesContainer>
      </MainLayout>
    </MainContainer>
  );
}
