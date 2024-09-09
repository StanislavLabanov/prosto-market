import { CategoryCard } from '@/entities/CategoryCard';

export const Categories = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start gap-[10px]">
      {[...Array(9)].map((_, index) => (
        <CategoryCard key={index} />
      ))}
    </div>
  );
};
