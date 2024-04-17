import React from "react"
import ProductList from "../../components/ProductList/ProductList"
import DefaultButton from "../../components/Buttons/DefaultButton"
import { useModalCreateProduct } from "../../helper/useModalCreateProduct"
import { fakeCheckToken } from "../../helper/utils"

const Main = () => {
    const { toggleModal } = useModalCreateProduct()
    const token = localStorage.getItem("token");
    const isAdmin = fakeCheckToken(token);
    return (
        <>
            {isAdmin ? <DefaultButton callback={toggleModal}>Создать товар</DefaultButton> : null}
            <ProductList />
        </>
    ) 
}

export default Main