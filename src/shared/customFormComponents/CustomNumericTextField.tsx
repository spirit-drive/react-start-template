import { NumericFormat } from "react-number-format";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import React, { FC } from 'react';
import { TextFieldProps } from "@mui/material"

interface IFormNumericInput {
    className?: string,
    id: string,
    name: string,
    control: any,
    label: string,
    readOnly: boolean,
}




export const CustomNumericTextField: FC<TextFieldProps & IFormNumericInput> = ({ 
    label,
    className,
    id,
    name,
    control,
    readOnly
}) => {
    return (
        <Controller
            rules={{
                validate: {
                    ifEmpty: (value) => {
                        return value !== ''
                    },
                    ifNull: (value) => {
                        return value !== null
                    },
                    ifZero: (value) => {
                        return value !== 0
                    }
                }
            }}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <NumericFormat
                    customInput={TextField}
                    thousandSeparator={true}
                    prefix={"₽ "}
                    onValueChange={(v) => {
                        onChange(Number(v.value));
                    }}
                    error={!!error}
                    variant="outlined"
                    value={value}
                    label={label}
                    className={className}
                    id={id}
                    InputProps={{
                        readOnly: readOnly,
                    }}
                />
            )}

            name={name}
            control={control}

        />
    );
};


