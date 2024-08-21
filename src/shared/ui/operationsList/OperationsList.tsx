import React, { FC, ReactNode, memo, useContext, useEffect, useMemo } from 'react';
import { LanguageContext } from 'src/app/context/LanguageContext';
import { FullOperation } from '../operation/FullOperation';
import { IRootState } from 'src/store/store';
import { Link } from 'react-router-dom';
import { resource } from 'src/app/localization/resources';
import { Box, Button } from '@mui/material';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useSelector, useDispatch } from 'react-redux';
import { addOperations } from 'src/slices/operationsSlice';
import { getDefaultOperations, getOperations } from 'src/slices/operationsSlice';
import OperationsListHeader from './OperationListHeader';
import { Operation } from "src/shared/ui/operation/operationsTypes";
import './operationsList.scss'
const renderItems = (items:Operation[]) => {
    return (
        items.map((value, index): ReactNode => {
            return <FullOperation key={value.id} value={value} />;
        })
    )
}

export const OperationsList = () => {
    const dispatch = useAppDispatch()
    const { language } = useContext(LanguageContext)
    const token = useSelector((state: IRootState)=>state.main.token)
    const items = useSelector((state: IRootState) => state.operations.operations)
    const page = useSelector((state: IRootState) => state.operations.pagination?.pageNumber)
    const pageSize = useSelector((state: IRootState) => state.operations.pagination?.pageSize)
    const total = useSelector((state: IRootState) => state.operations.pagination?.total)

    const downloadOperations = () => {
        dispatch(getOperations({pageSize: pageSize, pageNumber: page + 1})).then((value) => {
            dispatch(addOperations(value.payload))
        })
    }

    useEffect(() => {
            dispatch(getOperations({pageSize: pageSize, pageNumber: 1})).then((value) => {
            dispatch(getDefaultOperations(value.payload))
        })
        }, [token])

    const showMore = () => {
        if ((total > pageSize * page) 
        ) {
            return <Button onClick={downloadOperations} variant='contained'>загрузить еще</Button>
        }
    }

    return (
        <Box className="operations themeBg">

            <OperationsListHeader label={resource[language].components.operation.operationTitle}>
                <Button component={Link} to="addOperation" variant='contained'>
                    {resource[language].components.operation.addOperation}
                </Button>
            </OperationsListHeader>

            <div className='operations__list'>
                {items && renderItems(items)}
            </div>
            <div className='tableItem__button'>
                {showMore()}
            </div>

        </Box>



    );
};
