import clsx from 'clsx';
import React, { useContext, useReducer, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginContext } from '../../helper/contexts';
import DefaultButton from '../Buttons/DefaultButton';
import CustomInput, { InputType } from '../Inputs/CustomInput';
import classNames from './registrationForm.module.css';

export type StateType = {
  email: string;
  password: string;
};

type ActionsType =
  | { type: ActionTypeEnum.SET_EMAIL; payload: string }
  | { type: ActionTypeEnum.SET_PASSWORD; payload: string };

enum ActionTypeEnum {
  SET_EMAIL = 'setEmail',
  SET_PASSWORD = 'setPassword',
}

const userDataForSignIn: StateType = {
  email: 'test@mail.ru',
  password: '1234',
};

const initialState: StateType = {
  email: '',
  password: '',
};

const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case ActionTypeEnum.SET_EMAIL:
      return { ...state, email: action.payload };
    case ActionTypeEnum.SET_PASSWORD:
      return { ...state, password: action.payload };
  }
};

const RegistrationForm = () => {
  const [wariningLogin, setWarningLogin] = useState<boolean>(false);
  const { toggleIsLogin, isLogin } = useContext(LoginContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { register, handleSubmit } = useForm();

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.type) {
      case 'email':
        dispatch({ type: ActionTypeEnum.SET_EMAIL, payload: e.target.value });
        break;
      case 'password':
        dispatch({ type: ActionTypeEnum.SET_PASSWORD, payload: e.target.value });
        break;
    }
  };

  const onSubmit: SubmitHandler<StateType> = (data) => {
    if(data.password !== userDataForSignIn.password || data.email !== userDataForSignIn.email) {
      setWarningLogin(true);
      return
    }
    toggleIsLogin()
  };

  return (
    <form className={clsx(classNames.form)} onSubmit={handleSubmit(onSubmit)}>
      <h2>Вход</h2>
      <CustomInput
        cn='loginInput'
        register={register}
        label="email"
        callback={setInputValue}
        type={InputType.EMAIL}
        placeholder="Введите email"
        required
      />
      <CustomInput
        cn="loginInput"
        register={register}
        label="password"
        callback={setInputValue}
        type={InputType.PASSWORD}
        placeholder="Введите пароль"
        required
      />
      {wariningLogin ? <span className={clsx(classNames.error)}>Логин или пароль не подходит</span> : null}
      <DefaultButton>{isLogin ? 'Выйти' : 'Войти'}</DefaultButton>
    </form>
  );
};

export default RegistrationForm;
