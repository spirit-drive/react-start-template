import React, { FC, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { Alert, Button, Modal } from "antd"
import ProductForm from "src/features/forms/ProductForm/ProductForm"
import { ProductEditModel } from "src/models/product/editProduct"
import { useRtkCreateProductMutation } from "src/services/ProductService/ProductService"
import { ProductAddModel } from "src/models/product/addProduct"
import { ResponseError } from "src/models/response/responseError"
import { getError } from "src/utils/getError"


const ProductAdd: FC = () => {
    const [isModalOpened, setIsModalOpened] = useState(true)
    const formRef = useRef(null);
    const navigator = useNavigate()
    const [rtkCreateProduct, response ] = useRtkCreateProductMutation()

    const handleCancel = () => {
        setIsModalOpened(false)
        navigator("/")
    }

    const handleSave = () => {
        if (formRef.current == null) return
        formRef.current.submitForm()
    }

    const handleSubmit = (editProduct: ProductEditModel) => {
        const newProduct: ProductAddModel = {
            name: editProduct.name,
            desc: editProduct.desc,
            price: editProduct.price,
            photo: editProduct.photo,
            categoryId: "68bc7bc78e877ac8a9c6a83e"
        }

        rtkCreateProduct(newProduct)
            .unwrap()
            .then(() => {
                setIsModalOpened(false)
                navigator("/")
            })
            .catch(x => {

            })
    }

    return (
        <Modal
            title='Новый товар'
            open={isModalOpened}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Отмена
                </Button>,
                <Button key="submit" type="primary" loading={ response.isLoading } onClick={handleSave}>
                    Сохранить
                </Button>,
            ]}
        >
            <ProductForm
                onSubmit={handleSubmit}
                innerRef={formRef}
            />

            {response.isError &&
                <Alert message={getError(response.error as ResponseError)} type="error" style={{ marginBottom: 20 }} />
            }
        </Modal>
    )
}

export default ProductAdd

