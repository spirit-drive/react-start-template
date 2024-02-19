import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import classNames from './customInput.module.css';
import clsx from 'clsx';

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
}

type CustomInputType = {
  cn?: string,
  type: InputType;
  placeholder?: string;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  register?: UseFormRegister<any>;
  required: boolean;
};

const CustomInput: FC<CustomInputType> = ({ type, callback, placeholder, label, register, required , cn}) => {
  return (
    <>
      <label>{label}</label>
      <input className={clsx(classNames.loginInput)} {...register(label, { required })} type={type} onChange={callback} placeholder={placeholder} />
    </>
  );
};

export default CustomInput;
