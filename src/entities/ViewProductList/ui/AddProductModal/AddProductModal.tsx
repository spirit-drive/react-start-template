import React, { LegacyRef, useEffect, useRef, useState } from "react"
import { Modal } from "../../../../shared/Modal"
import { addProductApi } from "../../api/request";
import { Category, TAddProductFormParams, TAddProductParams } from "../../model/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { LabelWrapper } from "../../../../shared/LabelWrapper";
import { z } from 'zod';
import s from './AddProductModal.modal.sass';
import { zodResolver } from '@hookform/resolvers/zod';
import axiosInstance from "../../../../shared/axiosHelper/axiosHelper";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { productAdd } from "../../../../store/slices/saga/addProductSaga";
import { useNavigate } from "react-router-dom";
import { productGet } from "../../../../store/slices/saga/getProductSaga";

//productImage: z.instanceof(FileList),
// .refine(
//     (file) =>
//         [
//             "image/png",
//             "image/jpeg",
//             "image/svg",
//         ].includes(file.type),
//     { message: "Укажите фотографию" }
// ),

// transform((fileList) => fileList[0])
const schema = z.object({
    name: z.string().min(3, { message: 'Минимальная длина имени товара 3 символа' }),
    desc: z.string().nullable(),
    oldPrice: z.preprocess((p) => {
        const res = p === '' ? undefined : Number(p);
        return res;
    }, z.number().optional()),
    price: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number().positive({ message: 'Укажите стоимость товара' })),
    categoryId: z.string({ message: 'Обязательно для заполнения' }),
});

export interface IAddProductModalProps {
    isOpen: boolean;
    category?: Category,
    onAddCategory: () => void;
    onSuccessAddProduct: () => void;
    onClose: () => void;
}

export const AddProductModal = ({ isOpen, category, onAddCategory, onSuccessAddProduct, onClose }: IAddProductModalProps) => {
    const dispatcher = useAppDispatch();
    const hiddenInputRef = useRef<HTMLInputElement>();
    const [preview, setPreview] = useState("");
    const [lastPhotoSelected, setLastPhotoSelected] = useState<File>();

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        clearErrors,
        reset,
        formState: { errors },

    } = useForm<TAddProductFormParams>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            price: "0",
        },
    }
    );

    useEffect(() => {
        if (category && category.id) {
            setValue('categoryId', category.id);
            clearErrors('categoryId');
        }
    }, [category]);

    const { ref: registerRef, ...rest } = register("productImage");

    const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setLastPhotoSelected(file);

            const urlImage = URL.createObjectURL(file);
            setPreview(urlImage);
        }
    };

    // Кнопка выбора изображения
    const handleUploadImageButton = () => {
        if (hiddenInputRef.current && hiddenInputRef.current) {
            hiddenInputRef.current.click();
        }
    }

    const onSubmit: SubmitHandler<TAddProductFormParams> = async (data) => {
        console.log('onSubmit');

        if (lastPhotoSelected == undefined) {
            setError("productImage", { type: 'custom', message: "Загрузите фотографию" });
            return;
        }

        const newProduct: TAddProductFormParams = {
            name: data.name,
            price: data.price,
            categoryId: category.id,
            productImage: lastPhotoSelected,
            desc: data.desc,
            oldPrice: data.oldPrice,
        }
        await dispatcher(productAdd(newProduct));

        setPreview("");
        setLastPhotoSelected(undefined);
        reset();
        onSuccessAddProduct();
    }

    return (
        <>
            {/* Модальное окно */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <LabelWrapper title={"Имя"} required={true}>
                        <input {...register("name")} />
                    </LabelWrapper>
                    {errors.name && <p className={s.red}>{errors.name.message}</p>}


                    <input className={s.hidden} type="file"
                        name="productImage"
                        {...rest}
                        onChange={handleUploadedFile}
                        accept="image/png, image/jpeg"
                        ref={(e: any) => {
                            registerRef(e);
                            if (e && e != undefined) {
                                hiddenInputRef.current = e;
                            }
                        }}
                    />
                    {errors.productImage && <p className={s.red}>{errors.productImage.message}</p>}

                    {preview &&
                        <img className={s.imagePreview} src={preview} />
                    }

                    <button type="button" onClick={handleUploadImageButton} >
                        {'Загрузить фотографию'}
                    </button>


                    <LabelWrapper title={"Стоимость"} required={true}>
                        <input {...register("price")} />
                    </LabelWrapper>
                    {errors.price && <p className={s.red}>{errors.price.message}</p>}

                    <LabelWrapper title={"Старая цена"} required={false}>
                        <input {...register("oldPrice")} />
                    </LabelWrapper>
                    {errors.oldPrice && <p className={s.red}>{errors.oldPrice.message}</p>}

                    <LabelWrapper title={"Описание"} required={false}>
                        <input {...register("desc")} />
                    </LabelWrapper>
                    {errors.desc && <p className={s.red}>{errors.desc.message}</p>}


                    <LabelWrapper title={"Категория"} required={true}>
                        {category ? category.name : ""}
                    </LabelWrapper>
                    {errors.categoryId && <p className={s.red}>{errors.categoryId.message}</p>}

                    <div>
                        <button type="button" onClick={onAddCategory}>Выбрать категорию</button>
                    </div>

                    <button className={s.button} type="submit" >Добавить</button>
                </form>

            </Modal>
        </>
    )
}