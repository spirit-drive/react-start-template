import { createSlice } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";

interface snackBarTypes {
    snackBar: {
        open: boolean,
        text: string,
        severity: AlertColor,
    }

}

const initialState: snackBarTypes = {
    snackBar: {
        open: false,
        text: '',
        severity: 'info',
    }

}

export const snackBarSlice = createSlice({
    name: 'snackBar',
    initialState,
    reducers: {
        setSnackBar: (state, action) => {
            state.snackBar = action.payload
        },
    }
})

const { actions, reducer } = snackBarSlice;

export const { setSnackBar } = snackBarSlice.actions


export default reducer;