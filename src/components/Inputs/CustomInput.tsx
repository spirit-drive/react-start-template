import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import './customInput.module.css';

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
}

type CustomInputType = {
  type: InputType;
  placeholder?: string;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  register?: UseFormRegister<any>;
  required: boolean;
};

const CustomInput: FC<CustomInputType> = ({ type, callback, placeholder, label, register, required }) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} type={type} onChange={callback} placeholder={placeholder} />
    </>
  );
};

export default CustomInput;
