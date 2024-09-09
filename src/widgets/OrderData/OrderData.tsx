import { IOrderData } from './OrderData.types';

export const OrderData = ({ date, from, address, to, items, total }: IOrderData) => {
  return (
    <div className="text-[#E2E2E2] font-normal mt-5">
      <ul className="text-[15px] mb-2 font-norms">
        <li className="mb-1">{date}</li>
        <li className="mb-1">From: {from}</li>
        <li className="mb-1">{address}</li>
        <li className="mb-1">To: {to}</li>
      </ul>
      <ul className="text-[15px] mb-10 mt-6">
        {items.map((item) => (
          <li
            className="relative after:absolute after:left-0 after:top-5 after:w-full after:bg-[#E2E2E2] after:h-[1px] after:block after:content-[''] mb-1 flex justify-between items-center font-norms"
            key={item.id}>
            <span>{item.name}</span>
            <span className="w-[50%] flex justify-between items-center">
              <span className="text-[#777777] relative after:z-[1] after:absolute after:left-0 after:top-5 after:w-full after:bg-[#777777] after:h-[1px] after:block after:content-['']">
                {item.weight}*{item.number}
              </span>
              <span>{item.prise} Р</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="text-[20px] font-norms">ИТОГО..........{total} Р</div>
    </div>
  );
};
