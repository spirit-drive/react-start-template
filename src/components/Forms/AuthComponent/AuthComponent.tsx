import React, { FC } from 'react';
import { Tabs } from 'antd';
import { AuthForm } from '../AuthForm/AuthForm';
//import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

const onChange = (key: string) => {
  console.log(key);
};

export const AuthComponent: FC = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          key: '1',
          label: 'Авторизация',
          children: <AuthForm />,
        },
        {
          key: '2',
          label: 'Регистрация',
          // children: <RegistrationForm />,
        },
      ]}
      onChange={onChange}
    />
  );
};
