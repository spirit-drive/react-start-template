import React, { FC, useEffect, useImperativeHandle } from "react"
import { Form, Input } from 'antd';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { FormItem } from '../../../shared/form-item/form-item';
import { ProductEditModel } from "src/models/product/editProduct";

export interface IProductProps {
    product?: ProductEditModel
    onSubmit: SubmitHandler<ProductEditModel>
    innerRef?: any
}

const defaultValues = {
    name: '',
    desc: '',
    price: 0
}

const ProductForm: FC<IProductProps> = ({ product, onSubmit, innerRef }) => {
    const { control, handleSubmit, formState: { errors }, reset, trigger } = useForm<ProductEditModel>({ defaultValues })

    useEffect(() => {
        if (product)
            reset(product)
    }, [product])

    useImperativeHandle(innerRef, () => {
        return { submitForm }
    }, []);

    const submitForm = async () => {
        const isValid = await trigger()

        if (isValid) {
            handleSubmit(onSubmit)()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                rules={{
                    required: "Обязательно для заполнения",
                    minLength: {
                        value: 5,
                        message: "Минимальная длина названия - 5 символов"
                    }
                }}
                render={({ field }) => (
                    <Form.Item>
                        <FormItem
                            title="Название"
                            validateStatus={errors && errors["name"] ? "error" : ""}
                            help={errors.name?.message}
                        >
                            <Input {...field} />
                        </FormItem>
                    </Form.Item>
                )}
            />

            <Controller
                name='desc'
                control={control}
                rules={{
                    required: "Обязательно для заполнения",
                    minLength: {
                        value: 10,
                        message: "Минимальная длина описания - 10 символов"
                    }
                }}
                render={({ field }) => (
                    <Form.Item>
                        <FormItem
                            title="Описание"
                            validateStatus={errors && errors['desc'] ? "error" : ""}
                            help={errors.desc?.message}
                        >
                            <Input {...field} />
                        </FormItem>
                    </Form.Item>
                )}
            />

            <Controller
                name="price"
                rules={{ required: "Обязательно для заполнения", min: { value: 10, message: "Минимальная цена 10" } }}
                control={control}
                render={({ field }) => (
                    <Form.Item>
                        <FormItem
                            title="Цена"
                            validateStatus={errors && errors["price"] ? "error" : ""}
                            help={errors.price?.message}
                        >
                            <Input {...field} />
                        </FormItem>
                    </Form.Item>
                )}
            />
        </form>
    )
}

export default ProductForm