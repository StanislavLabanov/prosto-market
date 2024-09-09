import { IChangeNumberGoodButtonsProps } from './ChangeNumberGoodButtons.types';

export const ChangeNumberGoodButtons = ({
  size,
  number,
  minusHandler,
  plusHandler,
  addHandler,
}: IChangeNumberGoodButtonsProps) => {
  return (
    <>
      {number ? (
        <div
          className={`w-[100%] ${
            size === 'small' ? 'h-[28px]' : 'h-[56px]'
          } rounded-[22px] bg-button flex justify-between items-center p-[10px] text-text ${
            size === 'small' ? 'text-[12px]' : 'text-[20px]'
          } font-bold font-norms`}>
          <button onClick={minusHandler}>-</button>
          <span>{number}</span>
          <button onClick={plusHandler}>+</button>
        </div>
      ) : (
        <button
          onClick={addHandler}
          className={`w-[100%] ${
            size === 'small' ? 'h-[28px]' : 'h-[56px]'
          } rounded-[22px] border-[#DC306B] border-solid border ${
            size === 'small' ? 'border' : 'border-2'
          } flex justify-center items-center ${
            size === 'small' ? 'text-[16px]' : 'text-[30px]'
          } text-white font-light font-norms`}>
          +
        </button>
      )}
    </>
  );
};
