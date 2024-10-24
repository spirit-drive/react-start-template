import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'src/app/redux/category';
import { AppDispatch , AppState} from 'src/app/redux/store';
import { CategoryItem } from '../CategoryItem';

export const CategoryList: FC = () => {
  const { categories } = useSelector((state: AppState) => state.category);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ul>
      {categories.map((c) => (
        <CategoryItem key={c.id} name={c.name} id={c.id} />
      ))}
    </ul>
  );
};
