import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { AuthorizationButton } from '@/features/AuthorizationButton';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { LabelsForAuthorization } from '@/widgets/LabelsForAuthorization/LabelsForAuthorization';

export default function Authorization() {
  return (
    <div className="bg-screen min-h-screen">
      <MainLayout>
        <div className="min-h-[calc(100vh-200px)] flex flex-col justify-between items-start mt-[80px]">
          <div className="w-full">
            <PageTitle>АВТОРИЗАЦИЯ</PageTitle>
            <LabelsForAuthorization />
          </div>
          <AuthorizationButton />
        </div>
      </MainLayout>
    </div>
  );
}
