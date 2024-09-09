import { CompanyGoodsCardLayout } from '@/entities/CompanyGoodsCardLayout';
import { CompanyGoodsScroll } from '@/features/CompanyGoodsScroll';

export const CompanyGoods = () => {
  return (
    <>
      {[1, 2].map((_, index) => (
        <div className={`${!index ? undefined : ' mt-4'}`} key={index}>
          <CompanyGoodsCardLayout key={index}>
            <CompanyGoodsScroll />
          </CompanyGoodsCardLayout>
        </div>
      ))}
    </>
  );
};
