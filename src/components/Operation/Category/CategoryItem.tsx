import React, { FC, useRef, useState } from 'react';
import { Category } from '../../../entities/Category/Model/Category';
import { MdEdit, MdSave } from 'react-icons/md';
import { useMutation } from '@apollo/client';
import { CategoryUpdateData, CategoryUpdateInput, PUT_CATEGORY } from 'src/helper/connections/categoriesConnections';
import { categoryActions } from '../../../app/redux/category';
import { useDispatch } from 'react-redux';

export const CategoryItem: FC<Category> = ({ id, name }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef(undefined);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  const save = () => {
    add({ variables: { input: { name: ref.current.value }, patchId: id } });
    handleClick();
  };

  const [add] = useMutation<CategoryUpdateData, CategoryUpdateInput>(PUT_CATEGORY, {
    onCompleted: (data) => {
      dispatch(categoryActions.update(data.categories.patch));
    },
  });

  return (
    <li>
      {isEditing ? <input ref={ref} type="text" defaultValue={name} /> : <label>{name}</label>}
      {isEditing ? <MdSave onClick={save} /> : <MdEdit onClick={handleClick} />}
    </li>
  );
};
