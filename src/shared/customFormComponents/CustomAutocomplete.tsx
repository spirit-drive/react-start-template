import { Controller } from "react-hook-form";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { FC } from 'react';
import { AutocompleteProps } from "@mui/material";

type Option = {
    id: string;
    name: string;
}

interface IFormAutoComplete<O extends Option | string> {
    className?: string,
    id: string,
    name: string,
    control: any,
    label: string,
    disabled?: boolean,
    val: (value:O) => O,
    rules?: Object,
    options: O[],
    requiredInput?: boolean,
    defaultValue: O,
    isOptionEqualToValue: (option: O, value: O) => boolean,
    readOnly: boolean,
    getOptionLabel: (option: O) => string,
    disableClearable?: boolean
}


export const CustomAutocomplete = <O extends Option | string> ({
    defaultValue,
    className,
    id,
    name,
    control,
    getOptionLabel,
    options,
    val,
    rules,
    isOptionEqualToValue,
    label,
    readOnly, disableClearable }: IFormAutoComplete<O>) => {


    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            rules={rules}
            control={control}
            render={({
                field: { onChange, value, ref },
                fieldState: { error },
                formState,
            }) => (
                <Autocomplete
                    disableClearable={disableClearable}
                    readOnly={readOnly}
                    value={val(value)}
                    options={options}
                    getOptionLabel={getOptionLabel}
                    isOptionEqualToValue={isOptionEqualToValue}
                    id={id}
                    onChange={(event, newvalue) => {
                        onChange(newvalue ? newvalue : null)
                    }}
                    className={className}
                    renderInput={(params) => <TextField error={!!error} inputRef={ref}  {...params} label={label} />}
                />
            )}
        />
    );
};

