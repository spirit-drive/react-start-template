import React, { FC, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { Alert, Button, Modal } from "antd"
import ProductForm from "src/features/forms/ProductForm/ProductForm"
import { ProductEditModel } from "src/models/product/editProduct"
import { ProductUpdateModel } from "src/models/product/updateProduct"
import { useRtkGetProductMutation, useRtkUpdateProductMutation } from "src/services/ProductService/ProductService"
import { getError } from "src/utils/getError"
import { ResponseError } from "src/models/response/responseError"


// Возвращает только измененные поля
const getUpdateProduct = (product: ProductEditModel, edit: ProductEditModel): ProductUpdateModel | null =>
{
    const fields = new Map<string, ProductUpdateModel[keyof ProductUpdateModel]>()

    Object.entries(edit).map(x => {
        const [key, value] = x
        const source = product[key as keyof ProductEditModel]
        if (source !== value) {
            fields.set(key, value)
        }
    })

    return (fields.size > 0) ?
        Object.assign({}, ...Array.from(fields, ([key, value]) => ({ [key]: value }))) :
        null
}

const ProductEdit: FC = () => {
    const { id } = useParams();
    const [isModalOpened, setIsModalOpened] = useState(true)
    const [edit, SetEdit] = useState<ProductEditModel>(null)
    const formRef = useRef(null);
    const editRef = useRef(edit)
    editRef.current = edit
    const navigator = useNavigate()

    const [ getProduct ] = useRtkGetProductMutation()
    const [ updateProduct, response ] = useRtkUpdateProductMutation()

    useEffect(() => {
        if (id !== 'undefined') {
            getProduct(id)
                .then(x => {
                    const product = x.data
                    SetEdit({ name: product.name, price: product.price, desc: product.desc })
                })
        }
    }, [])

    const handleCancel = () => {
        setIsModalOpened(false)
        navigator("/")
    }

    const handleSave = () => {
        if (formRef.current == null) return
        formRef.current.submitForm()
    }

    const handleSubmit = (data: ProductEditModel) => {
        const update = getUpdateProduct(editRef.current, data)

        if (update !== null) {
            update.id = id
            updateProduct(update)
                .unwrap()
                .then(() => {
                    setIsModalOpened(false)
                    navigator("/")
                })
                .catch(x => {

                })
        }
    }

    return (
        <Modal
            title='Редактирование товара'
            open={isModalOpened}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Отмена
                </Button>,
                <Button key="submit" type="primary" loading={response.isLoading} onClick={handleSave}>
                    Сохранить
                </Button>,
            ]}
            >
            <ProductForm
                product={edit}
                onSubmit={handleSubmit}
                innerRef={formRef}
                />
            {response.isError &&
                <Alert message={getError(response.error as ResponseError)} type="error" style={{ marginBottom: 20 }} />
            }
        </Modal>
    )
}

export default ProductEdit