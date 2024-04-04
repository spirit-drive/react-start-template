import React from "react"
import ProductList from "../../components/ProductList/ProductList"
import DefaultButton from "../../components/Buttons/DefaultButton"
import { useModalCreateProduct } from "../../helper/useModalCreateProduct"

const Main = () => {
    const { toggleModal } = useModalCreateProduct()
    return (
        <>
            <DefaultButton callback={toggleModal}>Создать товар</DefaultButton>
            <ProductList />
        </>
    ) 
}

export default Main