import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { CategoryAddForm } from 'src/components/Forms/CategoryForm/ui/CategoryAddForm';
import { CategoryList } from 'src/components/Operation/Category/ui/CategoryList';
import { Button } from 'src/components/Buttons/Button/Button';
import { Portal } from 'src/components/Portal';
import { ModalWindow } from 'src/components/ModalWindow';
import { AppState } from 'src/app/redux/store';
import { MdAdd } from 'react-icons/md';

export const Category: FC = () => {
  const [showAddCategory, setAddCategoryModal] = useState(false);
  const token = useSelector<AppState, AppState['token']>((state) => state.token);
  const openCategoryModal = (): void => {
    setAddCategoryModal(true);
  };
  const closeCategoryModal = (): void => {
    setAddCategoryModal(false);
  };

  return (
    <div className="app-content" style={{ padding: '10px' }}>
      <CategoryList />
      <Button type="submit" variant={'primary'} size="small" onClick={openCategoryModal}>
        <MdAdd />
      </Button>
      {showAddCategory && (
        <Portal>
          <ModalWindow visible={showAddCategory} onCloseModalWindow={closeCategoryModal} token={token}>
            <CategoryAddForm closeModal={closeCategoryModal}></CategoryAddForm>
          </ModalWindow>
        </Portal>
      )}
    </div>
  );
};
