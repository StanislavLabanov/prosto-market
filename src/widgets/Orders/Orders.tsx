import { OrderCard } from '@/entities/OrderCard';
import { EOrderCardTypes } from '@/shared/types/orderCardTypes';

export const Orders = () => {
  return (
    <>
      {[
        EOrderCardTypes.IN_PROCESS,
        EOrderCardTypes.EXPECTATION_PAYMENT,
        EOrderCardTypes.IN_WAY,
        EOrderCardTypes.IN_PROCESS,
      ].map((item, index) => (
        <OrderCard
          key={index}
          orderNumber={'#8963459-039'}
          status={item}
          name={'NICK’S HOUSE'}
          date={'15.08.2024'}
        />
      ))}
      <div className="text-[#878B88] text-[10px] ml-2 mt-2 font-comfortaa">Архив</div>
      {[1, 2, 3, 4].map((_, index) => (
        <OrderCard
          key={index}
          orderNumber={'#8963459-039'}
          status={EOrderCardTypes.SUCCESSFULLY}
          name={'NICK’S HOUSE'}
          date={'15.08.2024'}
        />
      ))}
    </>
  );
};
