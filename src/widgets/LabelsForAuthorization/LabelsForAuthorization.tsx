import { LabelBlock } from '@/features/LabelBlock';
import { EInputType } from '@/shared/types/inputType';

export const LabelsForAuthorization = () => {
  return (
    <div className="mt-10 w-full">
      <div className="mb-4">
        <LabelBlock
          title={'Введите номер телефона для входа'}
          placeholder={'+7 (000) 000-00-00'}
          inputType={EInputType.TEL}
        />
      </div>
      <LabelBlock
        title={'Или введите ссылку-приглашение от Вашего руководителя'}
        placeholder={'https://'}
        inputType={EInputType.EMAIL}
      />
    </div>
  );
};
