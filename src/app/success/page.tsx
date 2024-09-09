import { MainContainer } from '@/entities/LayoutsAndContainers/MainContainer';
import { MainLayout } from '@/entities/LayoutsAndContainers/MainLayout';
import { SuccessPageContent } from '@/widgets/SuccessPageContent';

export default function Success() {
  return (
    <MainContainer>
      <MainLayout>
        <SuccessPageContent />
      </MainLayout>
    </MainContainer>
  );
}
