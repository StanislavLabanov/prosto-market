import { MyProfile } from '@/entities/MyProfile';
import { UserSubPages } from '@/widgets/UserSubPages';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { ExitButton } from '@/entities/ExitButton/ExitButton';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';

export default function User() {
  return (
    <MainContainer>
      <MainLayout>
        <div
          className="h-[calc(100vh-120px-80px)] max-[310px]:h-[calc(100vh-105px-70px)] max-[280px]:h-[calc(100vh-95px-65px)] flex justify-center items-start
        max-[260px]:h-[calc(100vh-85px-65px)]">
          <div className="flex flex-col justify-between items-start w-11/12 h-full">
            <div className="w-full">
              <div className="my-4">
                <PageTitle>Профиль</PageTitle>
              </div>
              <MyProfile />
              <div className="mt-8 max-[380px]:mt-6 max-[310px]:mt-4">
                <UserSubPages />
              </div>
            </div>
            <ExitButton />
          </div>
        </div>
      </MainLayout>
    </MainContainer>
  );
}
