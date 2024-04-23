import clsx from 'clsx';
import React, { useContext, useReducer, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LoginContext } from '../../helper/contexts';
import { setEmailLocalStorage } from '../../helper/localStorage';
import { setToken } from '../../store/tokenSlice';
import DefaultButton from '../Buttons/DefaultButton';
import CustomInput from '../Inputs/CustomInput';
import classNames from './registrationForm.module.css';
import signIn from '../../api/signIn';
import { login } from '../../store/loginSlice';

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
  const dispatch = useDispatch();
  const [wariningLogin, setWarningLogin] = useState<boolean>(false);
  const [state, dispatchStore] = useReducer(reducer, initialState);
  const { register, handleSubmit } = useForm();

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.type) {
      case 'email':
        dispatchStore({ type: ActionTypeEnum.SET_EMAIL, payload: e.target.value });
        break;
      case 'password':
        dispatchStore({ type: ActionTypeEnum.SET_PASSWORD, payload: e.target.value });
        break;
    }
  };

  const onSubmit: SubmitHandler<StateType> = async (data) => {

    setEmailLocalStorage(data.email);
    const a = await signIn(data);

    const token = a.token;
    const userEmail = a.profile.email; // for profile
    dispatch(login());
    localStorage.setItem('login', 'login');
    dispatch(setToken(token));
  };

  return (
    <form className={clsx(classNames.form)} onSubmit={handleSubmit(onSubmit)}>
      <h2>Вход</h2>
      <CustomInput
        cn="loginInput"
        register={register}
        label="email"
        callback={setInputValue}
        type="email"
        placeholder="Введите email"
        required
      />
      <CustomInput
        cn="loginInput"
        register={register}
        label="password"
        callback={setInputValue}
        type="password"
        placeholder="Введите пароль"
        required
      />
      {wariningLogin ? <span className={clsx(classNames.error)}>Логин или пароль не подходит</span> : null}
      <DefaultButton>Войти</DefaultButton>
    </form>
  );
};

export default RegistrationForm;
