import { Box, Button, IconButton } from '@mui/material';
import React, { FC, useState, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { CustomTextField } from '../../customFormComponents/CustomTextField';
import { CustomAutocomplete } from '../../customFormComponents/CustomAutocomplete';
import { CustomNumericTextField } from '../../customFormComponents/CustomNumericTextField';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addOperations } from 'src/slices/operationsSlice';
import { useSelector, UseSelector } from 'react-redux';
import { Operation } from '../operation/operationsTypes';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import useHttp from 'src/hooks/http.hook';
import { postOperation, changeOperation } from 'src/slices/operationsSlice';
import { IRootState } from 'src/store/store';
import './addOperation.scss'
import { CategoryType, Category } from "src/shared/ui/operation/operationsTypes";


const TYPES = [
    'Profit', 'Cost'
]

export const AddOperationForm: FC = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const { request } = useHttp();
    const dispatch = useAppDispatch();
    const slug = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<Operation>({
        id: "",
        commandId: "",
        createdAt: null,
        updatedAt: null,
        type: "Profit",
        name: "",
        desc: "",
        date: null,
        amount: null,
        category: {
            id: null,
            name: '',
            photo: "",
            createdAt: null,
            updatedAt: null,
            commandId: ""
        },
    })
    //const randomNumber = (val: number): string => Math.floor(Math.random() * (val - 0) + 0).toString();
    const methods = useForm<Operation>({
        defaultValues: data
    })


    const { handleSubmit, reset, formState: { errors }, control, setValue } = methods

    const onSubmit: SubmitHandler<Operation> = (data: Operation) => {
        const newData = ({ category, id, commandId, createdAt, updatedAt, ...rest }: Operation) => {
            return { ...rest, categoryId: category.id }
        }
        if (slug.id) {
            putOperation(slug.id, newData(data)).then((value) => {
                dispatch(changeOperation(value))
                navigate("/operations", { replace: true });
            }).catch((value) => {
                return value
            })
        } else {
            dispatch(postOperation(newData({ ...data, date: new Date() }))).unwrap().then((value) => {
                navigate("/operations", { replace: true });
            }).catch((value) => {
                return value
            })
        }

    }
    const getCategories = async () => {
        const res = await request(`categories`);
        return res;
    }

    const getOperation = async (id: string) => {
        const res = await request(`operations/${id} `);
        return res;
    }

    const putOperation = async (id: string, data: Omit<CategoryType, 'id'>) => {
        const res = await request(`operations/${id}`, 'PUT', JSON.stringify(data));
        return res;
    }

    useEffect(() => {
        getCategories().then((value) => {
            setCategories(value.data)
        })
    }, [])

    useEffect(() => {
        reset(data);
    }, [data]);

    useEffect(() => {
        if (slug.id) {
            getOperation(slug.id).then(res => setData(res
            ))
        }
    }, [slug.id])


    return (
        <FormProvider {...methods}>
            <Box className='form addOperationForm' component="form" onSubmit={handleSubmit(onSubmit)}>
                <CustomAutocomplete
                    disableClearable={true}
                    className='wAll'
                    readOnly={false}
                    val={(value) => value ? value : ""}
                    defaultValue={data.type}
                    id="input-type"
                    name='type'
                    control={control}
                    getOptionLabel={(option) => {
                        switch (option) {
                            case "Profit":
                                return "Продажа"
                            case "Cost":
                                return "Покупка"
                            default:
                                return "";
                        }
                    }}
                    options={TYPES}
                    isOptionEqualToValue={(option, value) => (option === value)}
                    label='Тип операции'
                />
                <CustomTextField
                    requiredInput
                    className='wAll'
                    readOnly={false}
                    name="name"
                    control={control}
                    label="Название операции"
                    id="input-name"
                />
                <CustomNumericTextField
                    className='wAll'
                    readOnly={false}
                    name="amount"
                    control={control}
                    label="Сумма операции"
                    id="input-amount"
                />
                <CustomAutocomplete
                    disableClearable={true}
                    className='wAll'
                    readOnly={false}
                    val={(value) => value?.name ? value : null}
                    defaultValue={data.category}
                    id="input-category"
                    name='category'
                    control={control}
                    getOptionLabel={(option) => option.name || ""}
                    options={categories}
                    isOptionEqualToValue={(option, value) => (option.id === value.id)}
                    label='Категория'
                />


                <CustomTextField
                    className='wAll'
                    multiline={true}
                    rows={4}
                    requiredInput
                    readOnly={false}
                    name="desc"
                    control={control}
                    label="Описание"
                    id="input-desc"
                />

                <Button variant="contained" type="submit"> Отправить</Button>
            </Box>
        </FormProvider>
    );
};


