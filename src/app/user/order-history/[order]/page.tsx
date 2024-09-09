import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SubPagesContainer } from '@/entities/LayoutsAndContainers/SubPagesContainer';
import { subPagesButtonInBottomTypes } from '@/shared/types/subPagesButtonInBottomTypes';
import { BackArrow } from '@/shared/ui/BackArrow';
import { OrderPageTitle } from '@/shared/ui/OrderPageTitle';
import { OrderData } from '@/widgets/OrderData';

export default function Order() {
  return (
    <MainContainer>
      <MainLayout>
        <SubPagesContainer type={subPagesButtonInBottomTypes.ORDER}>
          <BackArrow url="/user/order-history">
            <OrderPageTitle order={'#8963459-001'} />
          </BackArrow>
          <OrderData
            date={'18.08.2024'}
            from={'HJJK JHKML'}
            address={'Hhgj kljhgubhinjo'}
            to={'Gvghbjnklm'}
            items={[
              { id: 1, name: 'Gcfgbh Wcgv', prise: 354365, number: 2, weight: '100' },
              { id: 2, name: 'Hhjk Kdxfg', prise: 354365, number: 2, weight: '100' },
              { id: 3, name: 'Uhvj Gbnm', prise: 354365, number: 1, weight: '100' },
            ]}
            total={'600,68'}
          />
        </SubPagesContainer>
      </MainLayout>
    </MainContainer>
  );
}
