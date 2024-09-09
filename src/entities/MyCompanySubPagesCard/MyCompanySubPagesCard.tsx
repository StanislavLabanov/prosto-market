import { IMyCompanySubPagesCardProps } from './MyCompanySubPagesCard.types';

export const MyCompanySubPagesCard = ({
  name,
  role,
  phone,
  details,
}: IMyCompanySubPagesCardProps) => {
  return (
    <div className="w-full bg-[#232323] rounded-[17px] p-[10px] mt-3 max-[310px]:rounded-[12px] max-[310px]:mt-2 max-[310px]:py-[7px]">
      <div className={`flex ${role ? 'justify-between' : 'justify-start'} items-center flex-wrap`}>
        <div className="text-[16px] text-white font-normal max-[310px]:text-[13px] font-norms">
          {name}
        </div>
        {role ? (
          <div className="text-[10px] text-[#878B88] font-light font-comfortaa">{role}</div>
        ) : null}
      </div>
      <div className="text-[10px] text-[#878B88] font-light font-norms">{phone}</div>
      <div className="text-[10px] text-[#878B88] font-light mt-4 font-norms">{details}</div>
    </div>
  );
};
