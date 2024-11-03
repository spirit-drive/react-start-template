import React, { FC } from 'react';
import { CategoryItem } from './CategoryItem';
import { useFetchCategoriesQuery } from 'src/shared/api/rtk/categoriesApi';
import { Loader } from 'src/components/Loader/Loader';
import './Category.scss';

export const CategoryList: FC = () => {
  const { data: categories, error, isLoading } = useFetchCategoriesQuery();

  if (isLoading) return <Loader />;
  if (error || !categories?.length) return <h4>{error as string} Нет категорий</h4>;
  return (
    <ul>
      {categories?.map((c) => (
        <CategoryItem key={c.id} name={c.name} id={c.id} />
      ))}
    </ul>
  );
};

CategoryList.displayName = 'CategoryList';
