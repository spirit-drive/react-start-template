import { Controller } from "react-hook-form";
import React, { FC } from 'react';
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material"
import { UseFormRegister, FieldValues, UseFormReturn, useFormContext } from 'react-hook-form'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


interface IFormInput {
    className?: string,
    id: string,
    name: string,
    control: any,
    label: string,
    readOnly?: boolean,
    disabled?: boolean,
    rows?: number,
    requiredInput?: boolean,
    multiline?: boolean,
    endAdornment?: React.ReactNode,
    startAdornment?: React.ReactNode,
    //register: UseFormRegister<any>
    type?: string
    pattern?: {value : RegExp, message: string}
}

export const CustomTextField: FC<TextFieldProps & IFormInput> = ({
    className,
    id,
    name,
    control,
    label,
    readOnly,
    endAdornment, requiredInput, multiline, disabled, rows, type, startAdornment, pattern }) => {
        const { register } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    type={type}
                    {...register(name, {
                        required: requiredInput,
                        pattern: pattern
                    })}
                    inputProps={{
                        readOnly: readOnly,
                    }}
                    InputProps={{
                        endAdornment: endAdornment,
                        startAdornment: startAdornment,
                    }}
                    multiline={multiline}
                    rows={rows}
                    disabled={disabled ? true : false}
                    id={id}
                    error={!!error}
                    onChange={onChange}
                    value={value !== null ? value : ""}
                    label={label}
                    className={className}
                />
            )}
        />
    );
};

