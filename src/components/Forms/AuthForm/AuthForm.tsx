import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import './styles.module.scss';
import { Input, Button } from 'antd';

//import ButtonOtus from 'src/components/ButtonOtus';
//import { useDispatch } from 'react-redux';
//import { useModal } from 'src/hooks/useModal';
//import { authRequest } from 'src/stores/sagaStore/slices/user';
type Inputs = {
  login: string;
  password: string;
};

export const AuthForm = () => {
  //const dispatch = useDispatch();
  //const modal = useModal();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const customHandleSubmit = (data: any) => {
    console.log('auth', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(customHandleSubmit)}>
      <div>
        <Controller
          name="login"
          control={control}
          render={({ field }) => <Input {...field} size="large" className="my-2" placeholder="login" />}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input.Password {...field} size="large" className="my-2" placeholder="password" />}
        />
      </div>
      <hr />
      <Button type="primary" htmlType="submit" className="w-100">
        Войти
      </Button>
    </form>
  );
};
