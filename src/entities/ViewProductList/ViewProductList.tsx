import React, { useEffect, useState } from "react"
import { ViewProduct } from "../ViewProduct/ViewProduct";
import s from './ViewProductList.module.sass';
import { putProductApi } from "./api/request";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Category, Product, TUpdateProductParams } from "./model/types/types";
import { AddProductModal } from "./ui/AddProductModal/AddProductModal";
import { CategoryModal } from "./ui/CategoryModal";
import { productGet } from "../../store/slices/saga/getProductSaga";
import { productUpdate } from "../../store/slices/saga/updateProductSaga";
import { productRefresh } from "../../store/slices/saga/refreshProductListSaga";

interface IViewProductListProps {
    isEditMode: boolean;
}

export const ViewProductList = ({ isEditMode }: IViewProductListProps) => {
    const dispatcher = useAppDispatch();
    const productList = useAppSelector(state => state.productSlice.productList);
    const pagination = useAppSelector(state => state.productSlice.pagination);

    // Модальное окно - добавления товара
    const [isOpenAddProductModal, setIsOpenAddProductModal] = useState(false);

    // Модальное окно - выбора\добавления категории
    const [isOpenAddCategoryModal, setIsOpenAddCategoryModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category>()

    useEffect(() => {
        dispatcher(productGet(
            {
                pageSize: pagination.maxOnPage,
                pageNumber: pagination.currentPage,
                sorting: pagination.sort,
            }
        ));
    }, []);

    const handleNextPage = async () => {
        // TODO

        // const response = await getProductsApi(MAX_ON_PAGE, pageNumber + 1, sort);
        // if(response.data){
        //     setProductList(prev => prev.concat(...response.data))
        // }

        // setPageNumber(prev => prev + 1);
    }

    const handleAddProduct = () => {
        setIsOpenAddProductModal(true)
    }

    const handleSelectCategory = (category: Category) => {
        setSelectedCategory(category);
        setIsOpenAddCategoryModal(false);
        setIsOpenAddProductModal(true);
    }

    const handleSaveChanges = (product: Product) => {
        dispatcher(productUpdate(product));
    }

    return (
        <div className={s.viewProduct}>

            {isEditMode &&
                <button type="button" onClick={handleAddProduct}>
                    {'Добавить новый продукт'}
                </button>
            }
            {
                productList.map((p, index) =>
                    <ViewProduct
                        product={p}
                        key={p.id + index}
                        isLast={index === productList.length - 1}
                        isEditMode={isEditMode}
                        onSaveChanges={handleSaveChanges}
                        nextPage={handleNextPage}
                    />
                )
            }

            {/* Модальное окно - добавления товара */}
            <AddProductModal
                isOpen={isOpenAddProductModal}
                category={selectedCategory}
                onAddCategory={() => {
                    setIsOpenAddProductModal(false)
                    setIsOpenAddCategoryModal(true)
                }}
                onClose={() => {
                    setIsOpenAddProductModal(false);
                }}
                onSuccessAddProduct={() => {
                    setIsOpenAddProductModal(false); 
                }}
            />

            {/* Модальное окно - выбора\добавления категории */}
            <CategoryModal
                isOpen={isOpenAddCategoryModal}
                onConfirm={handleSelectCategory}
                onClose={() => {
                    setIsOpenAddCategoryModal(false);
                    setIsOpenAddProductModal(true);
                }}
            />
        </div>
    )
}
