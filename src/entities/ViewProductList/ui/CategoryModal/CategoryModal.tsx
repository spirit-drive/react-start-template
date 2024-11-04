import React, { ChangeEventHandler, useEffect, useState } from "react"
import { Modal } from "../../../../shared/Modal";
import { deleteCategoryApi, getCategoriesApi, postCategoriesApi } from "../../api/requestCategory";
import { Category } from "../../model/types/types";
import { LabelWrapper } from "../../../../shared/LabelWrapper";
import s from './CategoryModal.module.sass';



export interface ICategoryModalProps {
    isOpen: boolean;
    onConfirm: (category: Category) => void;
    onClose: () => void;
}

export const CategoryModal = ({ isOpen, onConfirm, onClose }: ICategoryModalProps) => {
    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const [selectCategory, setSelectCategory] = useState<Category>();
    const [addCategory, setAddCategory] = useState("");

    const getCategoryData = async () => {
        const category = await getCategoriesApi(10, 1, { type: 'ASC', field: 'id' });

        setCategoryList(category.data)
        if(category.data.length > 0){
            setSelectCategory(category.data[0])
        }
    }

    useEffect(() => {
        // Получаем известные категории
        getCategoryData()
    }, []);

    // Выбрали категорию
    const handleSelectCategory = () => {
        onConfirm(selectCategory)

    }

    // Добавить категорию
    const handleAddCategory = () => {
        postCategoriesApi(addCategory);
        getCategoryData();
    }

    // Выбранная категория
    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectCategory(categoryList[e.target.options.selectedIndex]);
    }

    // Удаляем выбранную категорию
    const handleDellCategory = () => {
        deleteCategoryApi(selectCategory.id);
        getCategoryData();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>

            <div className={s.mainContainer}>
                {categoryList ?
                    <LabelWrapper title={"Выберите категорию"} required={true}>
                        <div className={s.containerRow}>

                            <select onChange={handleChangeCategory}>
                                {
                                    categoryList.map((c: Category) => <option key={c.id} value={c.id} >{c.name}</option>)
                                }
                            </select>
                            <button type="button" onClick={handleDellCategory} disabled={categoryList ? false : true}>Удалить выбранную</button>
                        </div>
                    </LabelWrapper>
                    :
                    'Нет категорий'
                }


                <button type="button" onClick={handleSelectCategory} disabled={categoryList ? false : true}>Выбрать</button>
            </div>

            <div className={s.containerAddNew}>
                <LabelWrapper title={"Добавить новую категорию в список"} required={false}>
                    <input value={addCategory} onChange={(e) => setAddCategory(e.target.value)}></input>
                </LabelWrapper>
                <button className={s.addButton} type="button" onClick={handleAddCategory}>Добавить</button>
            </div>


        </Modal>
    )

}