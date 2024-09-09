import { CategoryGoodCard } from '@/entities/CategoryGoodCard';

export const CategoryGoodsCards = () => {
  return (
    <div className="flex flex-wrap justify-between items-start gap-6">
      {[1, 2, 3].map((_, index) => (
        <CategoryGoodCard key={index} />
      ))}
    </div>
  );
};
