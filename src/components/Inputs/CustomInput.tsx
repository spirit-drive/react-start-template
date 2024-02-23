import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import classNames from './customInput.module.css';
import clsx from 'clsx';


type CustomInputType = {
  cn?: string,
  type: string;
  placeholder?: string;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  register: UseFormRegister<any>;
  required: boolean;
  defaultValue?: string
};

const CustomInput: FC<CustomInputType> = ({ type, callback, placeholder, defaultValue, label, register, required , cn}) => {
  return (
    <>
      <input className={clsx(classNames.loginInput)} {...register(label, { required })} defaultValue={defaultValue} type={type} onChange={callback} placeholder={placeholder} />
    </>
  );
};

export default CustomInput;
