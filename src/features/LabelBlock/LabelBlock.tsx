import { ILabelBlockProps } from './LabelBlock.types';

export const LabelBlock = ({ title, placeholder, inputType }: ILabelBlockProps) => {
  return (
    <label className="w-full">
      <span className="inline-block text-[#E2E2E2] text-[15px] font-normal mb-2">{title}</span>
      <input
        type={inputType}
        placeholder={placeholder}
        className="w-full h-[64px] rounded-[50px] outline-none bg-[#D9D9D9] pl-5 text-[#1E1E1E] text-[20px] font-light placeholder:text-[#C3C3C3]"
      />
    </label>
  );
};
