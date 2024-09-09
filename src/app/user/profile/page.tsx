import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { MyProfile } from '@/entities/MyProfile';
import { BackArrow } from '@/shared/ui/BackArrow';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { ProfileData } from '@/widgets/ProfileData';

export default function Profile() {
  return (
    <MainContainer>
      <MainLayout>
        <BackArrow url="/user">
          <PageTitle>Мой профиль</PageTitle>
        </BackArrow>
        <div className="mt-4">
          <MyProfile />
        </div>
        <ProfileData />
      </MainLayout>
    </MainContainer>
  );
}
