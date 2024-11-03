import React, { FC, useRef, useState } from 'react';
import { Category } from '../../entities/Category/Model/Category';
import { MdEdit, MdSave } from 'react-icons/md';
import { useEditCategoryMutation } from 'src/shared/api/rtk/categoriesApi';

export const CategoryItem: FC<Category> = ({ id, name }) => {
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef(undefined);
  const [editCategory] = useEditCategoryMutation();
  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  const save = () => {
    editCategory({ values: { name: ref.current.value }, id });
    handleClick();
  };

  return (
    <li>
      {isEditing ? (
        <input className="mx-2" ref={ref} type="text" defaultValue={name} />
      ) : (
        <label className="mx-2">{name}</label>
      )}
      {isEditing ? <MdSave onClick={save} /> : <MdEdit onClick={handleClick} />}
    </li>
  );
};
