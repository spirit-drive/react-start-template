import React, { FC, useState } from 'react';
import { CategoryAddForm } from 'src/components/Forms/CategoryForm/ui/CategoryAddForm';
import { CategoryList } from 'src/components/Category/CategoryList';
import { Button } from 'src/components/Buttons/Button/Button';
import { Portal } from 'src/components/Portal';
import { ModalWindow } from 'src/components/ModalWindow';
import { MdAdd } from 'react-icons/md';
import { Divider } from 'antd';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'src/features/Auth/service/user';

export const Category: FC = () => {
  const [showAddCategory, setAddCategoryModal] = useState(false);
  const isAuth = useSelector(getIsAuth);
  const openCategoryModal = (): void => {
    setAddCategoryModal(true);
  };
  const closeCategoryModal = (): void => {
    setAddCategoryModal(false);
  };

  return (
    <div className="app-content" style={{ padding: '10px' }}>
      <CategoryList />
      <Divider />
      <Button type="submit" variant={'primary'} size="small" onClick={openCategoryModal}>
        <MdAdd />
      </Button>
      {showAddCategory && (
        <Portal>
          <ModalWindow visible={showAddCategory} onCloseModalWindow={closeCategoryModal} isAuth={isAuth}>
            <CategoryAddForm closeModal={closeCategoryModal}></CategoryAddForm>
          </ModalWindow>
        </Portal>
      )}
    </div>
  );
};
