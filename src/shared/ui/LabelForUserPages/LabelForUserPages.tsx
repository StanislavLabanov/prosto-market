import { ILabelForUserPagesProps } from './LabelForUserPages.types';

export const LabelForUserPages = ({
  labelText,
  placeholder,
  value,
  type,
}: ILabelForUserPagesProps) => {
  return (
    <label className="block mt-3">
      <span className="pl-2 inline-block text-[15px] text-[#E2E2E2] font-normal mb-1 max-[310px]:text-[13px] font-norms">
        {labelText}
      </span>
      <input
        className="pl-2 h-[38px] w-full rounded-[12px] border border-solid border-[#000000] text-white placeholder:text-[#878B88] text-[15px] font-light 
        max-[310px]:text-[13px] max-[310px]:h-[33px] font-norms"
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};
