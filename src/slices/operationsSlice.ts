import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { Operation } from "src/shared/ui/operation/operationsTypes";
import { setSnackBar } from "./snackBarSlice";
import { IRootState } from 'src/store/store';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

interface OperationsTypes {
    operations: Operation[],
    pagination: paginationTypes,
    sorting: sortingTypes
}

interface paginationTypes {
    pageSize?: number;
    pageNumber?: number;
    total?: number
}
interface sortingTypes {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'date';
}
type MyOmit<T, K extends keyof T> = Omit<T, K>;

type OperationToPost = MyOmit<Operation, 'id' | 'category' | 'commandId' | 'createdAt' | 'updatedAt'>

interface IOperationToPost extends OperationToPost {
    categoryId: string;
}


export const postOperation = createAsyncThunk(
    'operations/postOperation',
    async (body: IOperationToPost, { dispatch, rejectWithValue, fulfillWithValue }) => {
        const token = localStorage.getItem('myToken')
        try {
            const response = await fetch(`https://19429ba06ff2.vps.myjino.ru/api/operations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body)
            })
            if (!response.ok) {
                const errors = await response.json();
                dispatch(setSnackBar({
                    open: true,
                    text: errors.errors[0].message,
                    severity: 'error'
                }));
                //return rejectWithValue(`${errors.errors[0].message}`)
                throw new Error(`${errors.errors[0].message}`);
            }
            const data = await response.json();
            //dispatch(setToken(data.token));
            dispatch(addOperation(data))
            return fulfillWithValue(data)
        } catch (error) {
            //throw rejectWithValue(error.message)
            return rejectWithValue(error)
            //return rejectWithValue(error)
        }
    }
)

const checkToken = ( token: string) => {
    if (token) {
        return {
            "Content-type": 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        }
    } else{
        return {
        "Content-type": 'application/json;charset=utf-8',
    }
    }
}



export const getOperations = createAsyncThunk(
    'operations/getOperations',
    async ({ pageSize, pageNumber }: paginationTypes, { dispatch, rejectWithValue, fulfillWithValue }) => {
        const token = localStorage.getItem('myToken')
        try {
            
            const response = await fetch(`https://19429ba06ff2.vps.myjino.ru/api/operations?${new URLSearchParams({
                pagination: JSON.stringify({
                    pageSize: pageSize,
                    pageNumber: pageNumber,
                })
            }).toString()}`, {
                method: 'GET',
                headers: checkToken(token)

            })
            if (!response.ok) {
                const errors = await response.json();
                dispatch(setSnackBar({
                    open: true,
                    text: errors.errors[0].message,
                    severity: 'error'
                }));
                console.log(response)
                throw new Error(`${errors.errors[0].message}`);
            }
            const data = await response.json();
            //dispatch(setToken(data.token));
            //dispatch(getDefaultOperations(data))
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState: OperationsTypes = {
    operations: [
    ],
    pagination: {
        pageSize: 3,
        pageNumber: 1,
        total: 0
    },
    sorting: {
        type: "ASC",
        field: "createdAt"
    },
}


export const operationsSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {
        addOperation: (state, action) => {
            state.operations = [...state.operations, action.payload]
            //state.pagination.total = state.pagination.total + 1
        },
        removeOperation: (state, action) => {
            state.operations = state.operations.filter((value) => value.id !== action.payload.id)
            state.pagination.total = state.pagination.total - 1
        },
        addOperations: (state, action) => {
            
            function unDuplicateArrayObjects(array: Operation[]) {
                    const objectValuesArrayFromKey = array.map((item:Operation) => item['id']);
                    const uniqueValues =[...new Set(objectValuesArrayFromKey)];
                    return uniqueValues.map((key: any) => array.find((item:any) => item['id'] === key));
            }

            const operations = [...state.operations, ...action.payload.data]
            state.operations = unDuplicateArrayObjects(operations)
            state.pagination = action.payload.pagination
            state.sorting = action.payload.sorting
        },
        getDefaultOperations: (state, action) => {
            state.operations = action.payload.data
            state.pagination = action.payload.pagination
            state.sorting = action.payload.sorting
        },
        changeOperation: (state, action) => {
            let currentOperation = state.operations.find((value) => value.id === action.payload.id)
            let index = state.operations.indexOf(currentOperation)
            state.operations.splice(index, 1, action.payload)
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getOperations.rejected, (state, action) => {
            console.log(action.payload)
        })

    }
})

const { actions, reducer } = operationsSlice;
export const { addOperations, getDefaultOperations, addOperation, removeOperation, changeOperation } = operationsSlice.actions
export default reducer;