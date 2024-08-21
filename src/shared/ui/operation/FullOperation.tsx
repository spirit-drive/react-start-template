import React, { FC, memo, useCallback } from 'react';
import { Operation } from './operationsTypes';
import dayjs from 'dayjs';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
//import { Category } from '../../operation/operationsTypes';
import { useDispatch } from 'react-redux';
import useHttp from "src/hooks/http.hook";
import { removeOperation } from 'src/slices/operationsSlice';
import { setSnackBar } from 'src/slices/snackBarSlice';


interface IPropsFullOperationTypes {
    value: Operation
}


export const FullOperation: FC<IPropsFullOperationTypes> = memo(({ ...props }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { request } = useHttp()
    const handleRowClick = (id: string) => {
            navigate(`operationId/${id}`)
    };
    const deleteOperation = async (id: string) => {
        const res = await request(`operations/${id}`, "DELETE");
        return res;
    }
    const onDeleteOperation = (id: string) => {
        deleteOperation(id).then((value) => {
            dispatch(removeOperation(value))
            dispatch(setSnackBar({
                open: true,
                text: 'Операция удалена',
                severity: 'success'
            }));
        })
    }
    return (
        <div className="tableItem dfc">
            <div className="tableItem__body df">
                <div className='tableItem__actions df'>
                    <IconButton onClick={() => onDeleteOperation(props.value.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
                <div className='df jsb tableItem__right' onClick={()=>handleRowClick(props.value.id)}>
                    <div className="tableItem__info dfc">
                        <h3>{props.value.type === "Profit" ? "Продажа" : "Покупка"} "{props.value.name}"</h3>
                        <span>{props.value.category?.name}</span>
                        <span>{dayjs(props.value.date).format('DD-MM-YYYY')}</span>
                    </div>
                    <div className="tableItem__amount">{props.value.amount.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</div>
                </div>

            </div>
        </div>
    );
});