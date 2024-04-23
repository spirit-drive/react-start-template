import clsx from 'clsx';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { COMMAND_ID } from '../../api/constansts';
import signUp, { ISingUpUser } from '../../api/signUp';
import DefaultButton from '../Buttons/DefaultButton';
import classNames from './registrationForm.module.css';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const userPayload: ISingUpUser = {
    email: userName,
    password: userPass,
    commandId: COMMAND_ID,
  };

  const setInputValue = (e: any) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUserName(value);
    } else if (name === 'password') {
      setUserPass(value);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    const avs = await signUp(userPayload);
  };

  return (
    <form className={clsx(classNames.form)} onSubmit={(e) => handleSignIn(e)}>
      <h2>Зарегистрироваться</h2>
      <input
        name="username"
        className={clsx(classNames.registerInput)}
        type="text"
        value={userName}
        onChange={setInputValue}
        placeholder="введите email"
      />
      <input
        name="password"
        data-pass
        className={clsx(classNames.registerInput)}
        type="password"
        value={userPass}
        onChange={setInputValue}
        placeholder="придумайте пароль"
      />

      <DefaultButton>Зарегистрировать</DefaultButton>
    </form>
  );
};

export default SignUp;
