import { GoodFromBasket } from '@/entities/GoodFromBasket';
import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { MakeOrderButton } from '@/entities/MakeOrderButton/MakeOrderButton';
import { DropDownBlock } from '@/features/DropDownBlock/DropDownBlock';
import { EropDownBlockTypes } from '@/shared/types/dropDownBlockTypes';
import { BackArrow } from '@/shared/ui/BackArrow';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';

export default function Basket() {
  return (
    <MainContainer>
      <MainLayout>
        <BackArrow url="/user">
          <PageTitle>КОРЗИНА</PageTitle>
        </BackArrow>
        <div className="pb-[150px]">
          <DropDownBlock title="Белинского 59" size={EropDownBlockTypes.LARGE}>
            <div className="mt-4">
              <DropDownBlock title="NICK’S HOUSE" size={EropDownBlockTypes.SMALL}>
                {[1, 2, 3, 4, 5].map((order) => (
                  <GoodFromBasket
                    key={order}
                    img={''}
                    name={'Brasil Cerrado'}
                    number={2}
                    price={'2000,00'}
                  />
                ))}
              </DropDownBlock>
            </div>
          </DropDownBlock>
        </div>
        <MakeOrderButton />
      </MainLayout>
    </MainContainer>
  );
}
